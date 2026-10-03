'use client';

import React, { useRef, useEffect, useCallback } from 'react';

/**
 * Physically-Accurate Interactive Shallow Water Fluid Simulation
 * 
 * Physics & Logic:
 * - 1D heightfield spring-mass wave equation (Hooke's restitution + neighbor tension coupling)
 * - Boundary wave reflection off pill container walls
 * - Dynamic cursor displacement & impulse based on cursor velocity and position
 * - Expanding concentric surface caustics / ripple wave fronts from touch coordinate
 * - Fluid meniscus specular highlight with caustic refraction
 * - Parallax secondary depth wave for realistic liquid volume
 * - Auto-pausing requestAnimationFrame loop when fluid settles to equilibrium (0 CPU when idle)
 */
export default function WaterCanvas({
  isHovered = false,
  mousePos = { x: 0, y: 0, vx: 0, vy: 0 },
}) {
  const canvasRef = useRef(null);
  const simRef = useRef({
    columns: [],
    numColumns: 36,
    k: 0.042,          // Spring stiffness (restoration tension)
    damping: 0.048,    // Viscosity / fluid friction damping
    spread: 0.28,      // Wave propagation coupling to neighbors
    ripples: [],
    droplets: [],
    targetLevel: 1.15, // Idle baseline (below the button)
    currentLevel: 1.15,
    width: 0,
    height: 0,
    animId: null,
    isSimulating: false,
    lastTime: 0,
  });

  // Initialize wave columns
  const initSimulation = useCallback((w, h) => {
    const sim = simRef.current;
    sim.width = w;
    sim.height = h;
    const numCols = sim.numColumns;
    sim.columns = [];
    const initH = h * sim.currentLevel;

    for (let i = 0; i < numCols; i++) {
      sim.columns.push({
        x: (i / (numCols - 1)) * w,
        height: initH,
        targetHeight: initH,
        velocity: 0,
      });
    }
  }, []);

  // Physical impulse disturbance at coordinate x
  const splash = useCallback((x, force, radius = 26) => {
    const sim = simRef.current;
    if (!sim.columns.length) return;

    for (let i = 0; i < sim.columns.length; i++) {
      const col = sim.columns[i];
      const dist = Math.abs(col.x - x);
      if (dist < radius) {
        const factor = Math.cos((dist / radius) * (Math.PI / 2));
        col.velocity += force * factor;
      }
    }
  }, []);

  // Main physics + render loop
  const runLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const sim = simRef.current;
    const w = sim.width;
    const h = sim.height;
    if (w === 0 || h === 0) return;

    // 1. UPDATE PHYSICS
    // Dynamic liquid surge: rises up to 28% from top on hover, sinks to 115% (below) when idle
    const targetWaterLevel = isHovered ? 0.28 : 1.15;
    const levelLerpSpeed = isHovered ? 0.12 : 0.07;
    sim.currentLevel += (targetWaterLevel - sim.currentLevel) * levelLerpSpeed;
    const targetH = h * sim.currentLevel;

    let totalKineticEnergy = 0;

    // Step A: Spring forces on individual wave columns
    for (let i = 0; i < sim.columns.length; i++) {
      const col = sim.columns[i];
      col.targetHeight = targetH;
      const displacement = col.height - col.targetHeight;
      const accel = -sim.k * displacement - sim.damping * col.velocity;
      col.velocity += accel;
      col.height += col.velocity;
      totalKineticEnergy += Math.abs(col.velocity) + Math.abs(displacement);
    }

    // Step B: Wave propagation across adjacent columns (4 iterations for smooth wave transfer)
    const leftDeltas = new Array(sim.columns.length).fill(0);
    const rightDeltas = new Array(sim.columns.length).fill(0);

    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < sim.columns.length; i++) {
        if (i > 0) {
          leftDeltas[i] = sim.spread * (sim.columns[i].height - sim.columns[i - 1].height);
          sim.columns[i - 1].velocity += leftDeltas[i];
        }
        if (i < sim.columns.length - 1) {
          rightDeltas[i] = sim.spread * (sim.columns[i].height - sim.columns[i + 1].height);
          sim.columns[i + 1].velocity += rightDeltas[i];
        }
      }

      for (let i = 0; i < sim.columns.length; i++) {
        if (i > 0) sim.columns[i - 1].height += leftDeltas[i];
        if (i < sim.columns.length - 1) sim.columns[i + 1].height += rightDeltas[i];
      }
    }

    // Step C: Update concentric surface ripples
    for (let i = sim.ripples.length - 1; i >= 0; i--) {
      const r = sim.ripples[i];
      r.radius += r.speed;
      r.alpha -= 0.024;
      if (r.alpha <= 0 || r.radius > r.maxRadius) {
        sim.ripples.splice(i, 1);
      }
    }

    // Step D: Update fluid splash droplets
    for (let i = sim.droplets.length - 1; i >= 0; i--) {
      const d = sim.droplets[i];
      d.x += d.vx;
      d.y += d.vy;
      d.vy += d.gravity;
      d.alpha -= 0.028;
      if (d.alpha <= 0 || d.y > h) {
        sim.droplets.splice(i, 1);
      }
    }

    // 2. RENDER
    ctx.clearRect(0, 0, w, h);

    // If completely subsided and not hovered, pause render
    if (!isHovered && sim.currentLevel > 1.05 && totalKineticEnergy < 0.2) {
      sim.isSimulating = false;
      sim.animId = null;
      return;
    }

    ctx.save();
    ctx.beginPath();
    ctx.roundRect(0, 0, w, h, h / 2);
    ctx.clip();

    // ── Layer 1: Parallax Secondary Fluid Depth Wave ──
    const now = performance.now();
    const bgPhase = now * 0.0035;
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, sim.columns[0].height - 2);
    for (let i = 0; i < sim.columns.length - 1; i++) {
      const p0 = sim.columns[i];
      const p1 = sim.columns[i + 1];
      const offset0 = Math.sin(bgPhase + (i / sim.columns.length) * Math.PI * 2.2) * 2.5 - 3;
      const offset1 = Math.sin(bgPhase + ((i + 1) / sim.columns.length) * Math.PI * 2.2) * 2.5 - 3;
      const midX = (p0.x + p1.x) / 2;
      const midY = ((p0.height + offset0) + (p1.height + offset1)) / 2;
      ctx.quadraticCurveTo(p0.x, p0.height + offset0, midX, midY);
    }
    const lastCol = sim.columns[sim.columns.length - 1];
    ctx.lineTo(w, lastCol.height - 2);
    ctx.lineTo(w, h);
    ctx.closePath();

    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, 'rgba(255, 145, 80, 0.45)');
    bgGrad.addColorStop(0.5, 'rgba(215, 80, 25, 0.55)');
    bgGrad.addColorStop(1, 'rgba(140, 40, 8, 0.65)');
    ctx.fillStyle = bgGrad;
    ctx.fill();

    // ── Layer 2: Main Primary Liquid Surface Wave ──
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, sim.columns[0].height);
    for (let i = 0; i < sim.columns.length - 1; i++) {
      const p0 = sim.columns[i];
      const p1 = sim.columns[i + 1];
      const midX = (p0.x + p1.x) / 2;
      const midY = (p0.height + p1.height) / 2;
      ctx.quadraticCurveTo(p0.x, p0.height, midX, midY);
    }
    ctx.lineTo(w, lastCol.height);
    ctx.lineTo(w, h);
    ctx.closePath();

    const mainGrad = ctx.createLinearGradient(0, Math.max(0, targetH - 12), 0, h);
    mainGrad.addColorStop(0, '#E86628');
    mainGrad.addColorStop(0.35, '#C9561E');
    mainGrad.addColorStop(0.75, '#A33C0D');
    mainGrad.addColorStop(1, '#7A2A06');
    ctx.fillStyle = mainGrad;
    ctx.fill();

    // ── Layer 3: Surface Meniscus Specular Highlight (Crisp liquid crest line) ──
    ctx.beginPath();
    ctx.moveTo(0, sim.columns[0].height);
    for (let i = 0; i < sim.columns.length - 1; i++) {
      const p0 = sim.columns[i];
      const p1 = sim.columns[i + 1];
      const midX = (p0.x + p1.x) / 2;
      const midY = (p0.height + p1.height) / 2;
      ctx.quadraticCurveTo(p0.x, p0.height, midX, midY);
    }
    ctx.lineTo(w, lastCol.height);

    ctx.strokeStyle = 'rgba(255, 238, 222, 0.9)';
    ctx.lineWidth = 1.6;
    ctx.shadowColor = 'rgba(255, 175, 110, 0.95)';
    ctx.shadowBlur = 5;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // ── Layer 4: Concentric Interactive Surface Ripples ──
    for (const r of sim.ripples) {
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(r.x, r.y, r.radius, r.radius * 0.45, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 240, 225, ${Math.max(0, r.alpha * 0.85)})`;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = 'rgba(255, 190, 130, 0.7)';
      ctx.shadowBlur = 4;
      ctx.stroke();
      ctx.restore();
    }

    // ── Layer 5: Dynamic Splash Droplets ──
    for (const d of sim.droplets) {
      ctx.beginPath();
      ctx.arc(d.x, d.y, Math.max(0.5, d.size), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 235, 215, ${Math.max(0, d.alpha)})`;
      ctx.fill();
    }

    ctx.restore();

    // 3. SCHEDULE NEXT FRAME
    sim.animId = requestAnimationFrame(runLoop);
  }, [isHovered]);

  const ensureRunning = useCallback(() => {
    const sim = simRef.current;
    if (!sim.isSimulating) {
      sim.isSimulating = true;
      sim.animId = requestAnimationFrame(runLoop);
    }
  }, [runLoop]);

  // Handle Resize & Canvas Initialization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);

      if (w > 0 && h > 0) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        initSimulation(w, h);
      }
    };

    updateSize();

    const ro = new ResizeObserver(updateSize);
    ro.observe(canvas);

    return () => {
      ro.disconnect();
      if (simRef.current.animId) {
        cancelAnimationFrame(simRef.current.animId);
      }
    };
  }, [initSimulation]);

  // Handle Hover State Changes
  useEffect(() => {
    const sim = simRef.current;
    if (isHovered) {
      const entryX = mousePos.x || sim.width * 0.5;
      const entryY = mousePos.y || sim.height * 0.5;

      // Realistic downward displacement at cursor contact point
      splash(entryX, 6.0, 32);

      // Add concentric expanding ripple from entry point
      sim.ripples.push({
        x: entryX,
        y: entryY,
        radius: 3,
        maxRadius: Math.max(sim.width, sim.height) * 0.95,
        alpha: 0.85,
        speed: 2.5,
      });

      // Spawn buoyant micro splash droplets on entry
      for (let i = 0; i < 3; i++) {
        sim.droplets.push({
          x: entryX + (Math.random() - 0.5) * 14,
          y: entryY - 2,
          vx: (Math.random() - 0.5) * 2.4,
          vy: -Math.random() * 2.5 - 1.2,
          gravity: 0.16,
          size: Math.random() * 1.5 + 1.2,
          alpha: 0.95,
        });
      }

      ensureRunning();
    } else {
      // Gentle settling wave on exit
      if (sim.width > 0) {
        splash(sim.width * 0.5, -2.5, sim.width * 0.4);
      }
      ensureRunning();
    }
  }, [isHovered, mousePos, splash, ensureRunning]);

  // Handle Continuous Mouse Movement inside button
  useEffect(() => {
    if (!isHovered) return;
    const sim = simRef.current;
    const { x, y, vx, vy } = mousePos;

    if (x == null || y == null) return;

    const speed = Math.sqrt(vx * vx + vy * vy);
    if (speed > 1.0) {
      const force = Math.min(speed * 0.35, 4.8);
      splash(x, force * (vy >= 0 ? 1 : -0.75), 24);

      if (Math.random() < 0.35) {
        sim.ripples.push({
          x,
          y,
          radius: 2,
          maxRadius: Math.max(sim.width, sim.height) * 0.8,
          alpha: 0.72,
          speed: 2.2,
        });
      }

      ensureRunning();
    }
  }, [isHovered, mousePos, splash, ensureRunning]);

  return (
    <canvas
      ref={canvasRef}
      className="nl-water-canvas"
      aria-hidden="true"
    />
  );
}
