'use client';
import { useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ── Realistic Stationary Table Tennis Racket ──────────────────────────────────
// Authentic ITTF proportions & anatomy:
//   - Oval head shape (150mm wide × 158mm tall) tapering into ergonomic neck wings
//   - Multi-ply wood core extending from tip down through the full handle tang
//   - 2.0mm high-elastic sponge layer on front & back
//   - Pimple-in rubber topsheets with authentic straight bottom cut across the neck
//   - Exposed wood wings where index finger and thumb rest
//   - Dual contoured flared (FL) handle grip scales with rounded ergonomic bevels
//   - Inset metallic handle lens emblem near butt
//   - Protective edge tape wrapping around head perimeter with center pinstripe
//
// Displayed at fixed, stationary tilt:
//   Pitch (X): 0.15 (slight backward angle catching studio key light)
//   Yaw   (Y): 0.32 (18° turn showing front face, sponge thickness, and edge tape)
//   Roll  (Z): -0.22 (-12.6° diagonal tilt for a stylish showcase posture)
// ─────────────────────────────────────────────────────────────────────────────

function createHeadCurve() {
  const curve = new THREE.CurvePath();
  const c1 = new THREE.CubicBezierCurve(
    new THREE.Vector2(0.15, -0.35),
    new THREE.Vector2(0.24, -0.15),
    new THREE.Vector2(0.74, 0.05),
    new THREE.Vector2(0.74, 0.40)
  );
  const c2 = new THREE.CubicBezierCurve(
    new THREE.Vector2(0.74, 0.40),
    new THREE.Vector2(0.74, 0.85),
    new THREE.Vector2(0.42, 1.25),
    new THREE.Vector2(0.0, 1.25)
  );
  const c3 = new THREE.CubicBezierCurve(
    new THREE.Vector2(0.0, 1.25),
    new THREE.Vector2(-0.42, 1.25),
    new THREE.Vector2(-0.74, 0.85),
    new THREE.Vector2(-0.74, 0.40)
  );
  const c4 = new THREE.CubicBezierCurve(
    new THREE.Vector2(-0.74, 0.40),
    new THREE.Vector2(-0.74, 0.05),
    new THREE.Vector2(-0.24, -0.15),
    new THREE.Vector2(-0.15, -0.35)
  );
  curve.add(c1);
  curve.add(c2);
  curve.add(c3);
  curve.add(c4);
  return curve;
}

function createEdgeTapeGeometry(tapeWidthZ, offset) {
  const curve = createHeadCurve();
  const pts = curve.getPoints(72);
  const vertices = [];
  const indices = [];
  const uvs = [];
  const halfZ = tapeWidthZ / 2;

  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    const dx = p.x;
    const dy = p.y - 0.42;
    const len = Math.hypot(dx, dy) || 1;
    const nx = dx / len;
    const ny = dy / len;
    const ox = p.x + nx * offset;
    const oy = p.y + ny * offset;

    vertices.push(ox, oy, halfZ);
    vertices.push(ox, oy, -halfZ);

    const u = i / (pts.length - 1);
    uvs.push(u, 1);
    uvs.push(u, 0);

    if (i < pts.length - 1) {
      const v0 = i * 2;
      const v1 = i * 2 + 1;
      const v2 = (i + 1) * 2;
      const v3 = (i + 1) * 2 + 1;
      indices.push(v0, v1, v2);
      indices.push(v2, v1, v3);
    }
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geom.setIndex(indices);
  geom.computeVertexNormals();
  return geom;
}

const DURATION = 750; // ms entrance animation

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function RacketMesh({ config }) {
  const groupRef = useRef();
  const startTime = useRef(performance.now());
  const prevConfigId = useRef(config.label);

  useEffect(() => {
    if (config.label !== prevConfigId.current) {
      prevConfigId.current = config.label;
      startTime.current = performance.now();
    }
  }, [config.label]);

  useFrame(() => {
    if (!groupRef.current) return;
    const elapsed = performance.now() - startTime.current;
    const p = Math.min(Math.max(elapsed / DURATION, 0), 1);
    const ease = easeOutExpo(p);

    const baseScale = 1.08;
    const targetX = 0, targetY = -0.05, targetZ = 0;
    const targetRotX = 0.15, targetRotY = 0.32, targetRotZ = -0.22;

    // Cinematic swoop from depth with dynamic rotation unroll
    const startX = -0.15, startY = 0.22, startZ = -0.90;
    const startRotX = 0.55, startRotY = 0.32 + 1.35, startRotZ = -0.55;
    const startScale = baseScale * 0.65;

    groupRef.current.position.x = startX + (targetX - startX) * ease;
    groupRef.current.position.y = startY + (targetY - startY) * ease;
    groupRef.current.position.z = startZ + (targetZ - startZ) * ease;

    groupRef.current.rotation.x = startRotX + (targetRotX - startRotX) * ease;
    groupRef.current.rotation.y = startRotY + (targetRotY - startRotY) * ease;
    groupRef.current.rotation.z = startRotZ + (targetRotZ - startRotZ) * ease;

    const s = startScale + (baseScale - startScale) * ease;
    groupRef.current.scale.set(s, s, s);
  });

  // ── Procedural Geometries (built once and memoised) ─────────────────────────
  const geoms = useMemo(() => {
    // 1. Blade Core Shape: Head + Handle Tang
    const bladeShape = new THREE.Shape();
    bladeShape.moveTo(0.14, -1.25);
    bladeShape.lineTo(0.15, -0.35);
    bladeShape.bezierCurveTo(0.24, -0.15, 0.74, 0.05, 0.74, 0.40);
    bladeShape.bezierCurveTo(0.74, 0.85, 0.42, 1.25, 0.0, 1.25);
    bladeShape.bezierCurveTo(-0.42, 1.25, -0.74, 0.85, -0.74, 0.40);
    bladeShape.bezierCurveTo(-0.74, 0.05, -0.24, -0.15, -0.15, -0.35);
    bladeShape.lineTo(-0.14, -1.25);
    bladeShape.closePath();

    const blade = new THREE.ExtrudeGeometry(bladeShape, {
      depth: 0.048,
      bevelEnabled: true,
      bevelThickness: 0.003,
      bevelSize: 0.003,
      bevelSegments: 2,
    });
    blade.translate(0, 0, -0.024);

    // 2. Rubber & Sponge Shape (straight cut across the neck)
    const rubberShape = new THREE.Shape();
    rubberShape.moveTo(0.21, -0.27);
    rubberShape.bezierCurveTo(0.27, -0.12, 0.73, 0.06, 0.73, 0.40);
    rubberShape.bezierCurveTo(0.73, 0.84, 0.41, 1.24, 0.0, 1.24);
    rubberShape.bezierCurveTo(-0.41, 1.24, -0.73, 0.84, -0.73, 0.40);
    rubberShape.bezierCurveTo(-0.73, 0.06, -0.27, -0.12, -0.21, -0.27);
    rubberShape.closePath();

    const spongeFront = new THREE.ExtrudeGeometry(rubberShape, {
      depth: 0.018,
      bevelEnabled: false,
    });
    spongeFront.translate(0, 0, 0.024);

    const spongeBack = new THREE.ExtrudeGeometry(rubberShape, {
      depth: 0.018,
      bevelEnabled: false,
    });
    spongeBack.translate(0, 0, -0.042);

    const rubberFront = new THREE.ExtrudeGeometry(rubberShape, {
      depth: 0.016,
      bevelEnabled: true,
      bevelThickness: 0.002,
      bevelSize: 0.002,
      bevelSegments: 2,
    });
    rubberFront.translate(0, 0, 0.042);

    const rubberBack = new THREE.ExtrudeGeometry(rubberShape, {
      depth: 0.016,
      bevelEnabled: true,
      bevelThickness: 0.002,
      bevelSize: 0.002,
      bevelSegments: 2,
    });
    rubberBack.translate(0, 0, -0.058);

    // 3. Flared Ergonomic Handle Scales (Front & Back)
    const handleShape = new THREE.Shape();
    handleShape.moveTo(0, -0.34);
    handleShape.quadraticCurveTo(0.08, -0.34, 0.14, -0.37);
    handleShape.quadraticCurveTo(0.12, -0.75, 0.165, -1.25);
    handleShape.quadraticCurveTo(0, -1.28, -0.165, -1.25);
    handleShape.quadraticCurveTo(-0.12, -0.75, -0.14, -0.37);
    handleShape.quadraticCurveTo(-0.08, -0.34, 0, -0.34);
    handleShape.closePath();

    const handleFront = new THREE.ExtrudeGeometry(handleShape, {
      depth: 0.052,
      bevelEnabled: true,
      bevelThickness: 0.016,
      bevelSize: 0.014,
      bevelSegments: 4,
    });
    handleFront.translate(0, 0, 0.024);

    const handleBack = new THREE.ExtrudeGeometry(handleShape, {
      depth: 0.052,
      bevelEnabled: true,
      bevelThickness: 0.016,
      bevelSize: 0.014,
      bevelSegments: 4,
    });
    handleBack.scale(1, 1, -1);
    handleBack.translate(0, 0, -0.024);

    // 4. Handle Details: Racing Stripe & Metallic Inset Emblem
    const handleStripe = new THREE.BoxGeometry(0.038, 0.86, 0.004);
    const handleLens = new THREE.BoxGeometry(0.14, 0.075, 0.008);

    // 5. ITTF Registration Stamp Bar
    const ittfStamp = new THREE.BoxGeometry(0.32, 0.032, 0.003);

    // 6. Perimeter Edge Tape Ribbon & Pinstripe
    const edgeTape = createEdgeTapeGeometry(0.092, 0.007);
    const edgeStripe = createEdgeTapeGeometry(0.024, 0.009);

    return {
      blade,
      spongeFront,
      spongeBack,
      rubberFront,
      rubberBack,
      handleFront,
      handleBack,
      handleStripe,
      handleLens,
      ittfStamp,
      edgeTape,
      edgeStripe,
    };
  }, []);

  // ── Materials (memoised, dynamically updated via config) ────────────────────
  const mats = useMemo(() => ({
    blade: new THREE.MeshStandardMaterial(),
    spongeFront: new THREE.MeshStandardMaterial({ roughness: 0.90, metalness: 0.0 }),
    spongeBack: new THREE.MeshStandardMaterial({ roughness: 0.90, metalness: 0.0 }),
    rubberFront: new THREE.MeshStandardMaterial({ roughness: 0.28, metalness: 0.04 }),
    rubberBack: new THREE.MeshStandardMaterial({ roughness: 0.28, metalness: 0.04 }),
    handle: new THREE.MeshStandardMaterial({ roughness: 0.52, metalness: 0.02 }),
    handleStripe: new THREE.MeshStandardMaterial({ roughness: 0.42, metalness: 0.12 }),
    lens: new THREE.MeshStandardMaterial({ roughness: 0.18, metalness: 0.88 }),
    ittf: new THREE.MeshStandardMaterial({ roughness: 0.50, metalness: 0.10, transparent: true, opacity: 0.50 }),
    edgeTape: new THREE.MeshStandardMaterial({ roughness: 0.45, metalness: 0.10, side: THREE.DoubleSide }),
    edgeStripe: new THREE.MeshStandardMaterial({ roughness: 0.25, metalness: 0.35, side: THREE.DoubleSide }),
  }), []);

  useEffect(() => {
    // Wood blade
    mats.blade.color.set(config.bladeMaterial.color);
    mats.blade.roughness = config.bladeMaterial.roughness;
    mats.blade.metalness = config.bladeMaterial.metalness;
    mats.blade.needsUpdate = true;

    // Sponges
    mats.spongeFront.color.set(config.spongeColor);
    mats.spongeBack.color.set(config.spongeColor);

    // Rubbers (front custom/black, back tournament red)
    mats.rubberFront.color.set(config.rubberColor);
    mats.rubberFront.opacity = config.rubberOpacity;
    mats.rubberBack.color.set(config.rubberBackColor || '#B81B1B');

    // Handle & Stripe
    mats.handle.color.set(config.handleColor);
    mats.handleStripe.color.set(config.handleStripeColor || config.accent);
    mats.lens.color.set(config.lensColor || config.accent);

    // ITTF stamp
    mats.ittf.color.set('#FFFFFF');

    // Edge tape
    mats.edgeTape.color.set(config.edgeColor);
    mats.edgeStripe.color.set(config.edgeStripeColor || config.accent);
  }, [config, mats]);

  return (
    /* Stationary, beautifully tilted table tennis racket (no animation/movement) */
    <group
      ref={groupRef}
      rotation={[0.15, 0.32, -0.22]}
      position={[0, -0.05, 0]}
      scale={[1.08, 1.08, 1.08]}
    >
      {/* ── 1. Wood Blade Core (Head + Tang) ── */}
      <mesh geometry={geoms.blade} material={mats.blade} castShadow receiveShadow />

      {/* ── 2. Sponge Layers ── */}
      <mesh geometry={geoms.spongeFront} material={mats.spongeFront} castShadow />
      <mesh geometry={geoms.spongeBack} material={mats.spongeBack} />

      {/* ── 3. Rubber Topsheets ── */}
      <mesh geometry={geoms.rubberFront} material={mats.rubberFront} castShadow receiveShadow />
      <mesh geometry={geoms.rubberBack} material={mats.rubberBack} />

      {/* ── 4. ITTF Tournament Stamp ── */}
      <mesh geometry={geoms.ittfStamp} material={mats.ittf} position={[0, -0.22, 0.059]} />

      {/* ── 5. Flared Handle Scales (Front & Back) ── */}
      <mesh geometry={geoms.handleFront} material={mats.handle} castShadow receiveShadow />
      <mesh geometry={geoms.handleBack} material={mats.handle} />

      {/* ── 6. Handle Racing Stripe ── */}
      <mesh geometry={geoms.handleStripe} material={mats.handleStripe} position={[0, -0.80, 0.093]} />

      {/* ── 7. Inset Metallic Handle Lens Emblem ── */}
      <mesh geometry={geoms.handleLens} material={mats.lens} position={[0, -1.05, 0.094]} />

      {/* ── 8. Perimeter Edge Tape ── */}
      <mesh geometry={geoms.edgeTape} material={mats.edgeTape} />
      <mesh geometry={geoms.edgeStripe} material={mats.edgeStripe} />
    </group>
  );
}
