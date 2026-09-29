'use client';
import { useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ── Authentic 3D Table Tennis Rubber Sheet ────────────────────────────────────
// Realistic ITTF competition rubber anatomy:
//   - Championship topsheet (inverted pimple sheet with micro-tension curvature)
//   - High-density colored sponge layer (1.5mm - 2.15mm realistic profile)
//   - Inverted cylindrical pips matrix visible along the cross-sectional cut
//   - Molded ITTF tournament registration tab with embossed serial & logo
//   - Backing adhesive protective layer
//
// Displayed at fixed, stationary tilt matching the racket's symmetrical counterpart:
//   Pitch (X):  0.15 (backward incline catching key light sheen)
//   Yaw   (Y): -0.32 (-18° turn showing front face, sponge rim, and cross-section)
//   Roll  (Z):  0.22 (12.6° diagonal tilt facing inwards toward VS divider)
// ─────────────────────────────────────────────────────────────────────────────

const DURATION = 750; // ms entrance animation

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function RubberMesh({ config }) {
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

    const baseScale = 1.0;
    const targetX = 0, targetY = -0.42, targetZ = 0;
    const targetRotX = 0.15, targetRotY = -0.32, targetRotZ = 0.22;

    // Symmetrically mirrored entrance swoop from depth
    const startX = 0.15, startY = -0.15, startZ = -0.90;
    const startRotX = 0.55, startRotY = -0.32 - 1.35, startRotZ = 0.55;
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

  // ── Procedural Geometries ──────────────────────────────────────────────────
  const geoms = useMemo(() => {
    // 1. Rubber Head Profile (authentic ITTF paddle contour with bottom straight neck)
    const rubberShape = new THREE.Shape();
    rubberShape.moveTo(0.24, -0.42);
    rubberShape.bezierCurveTo(0.32, -0.18, 0.84, 0.06, 0.84, 0.46);
    rubberShape.bezierCurveTo(0.84, 0.98, 0.47, 1.44, 0.0, 1.44);
    rubberShape.bezierCurveTo(-0.47, 1.44, -0.84, 0.98, -0.84, 0.46);
    rubberShape.bezierCurveTo(-0.84, 0.06, -0.32, -0.18, -0.24, -0.42);
    rubberShape.closePath();

    // 2. Thick Colored Sponge Layer
    const sponge = new THREE.ExtrudeGeometry(rubberShape, {
      depth: 0.042,
      bevelEnabled: true,
      bevelThickness: 0.003,
      bevelSize: 0.003,
      bevelSegments: 2,
    });
    sponge.translate(0, 0, -0.021);

    // 3. Premium Topsheet Face (tacky or tensor surface with subtle bevel edge)
    const topsheet = new THREE.ExtrudeGeometry(rubberShape, {
      depth: 0.020,
      bevelEnabled: true,
      bevelThickness: 0.004,
      bevelSize: 0.004,
      bevelSegments: 3,
    });
    topsheet.translate(0, 0, 0.021);

    // 4. Back Adhesive Protective Film
    const backFoil = new THREE.ExtrudeGeometry(rubberShape, {
      depth: 0.003,
      bevelEnabled: false,
    });
    backFoil.translate(0, 0, -0.024);

    // 5. ITTF Tournament Registration Tab
    const ittfTab = new THREE.BoxGeometry(0.38, 0.070, 0.014);

    // 6. ITTF Text Plate (crisp raised relief)
    const ittfEmboss = new THREE.BoxGeometry(0.34, 0.042, 0.016);

    // 7. Cylindrical Inverted Pips Array along bottom neck cross-section
    const pipGeom = new THREE.CylinderGeometry(0.011, 0.011, 0.022, 10);
    pipGeom.rotateX(Math.PI / 2);

    // 8. Perimeter Tension Edge Accent (subtle high-precision trim)
    const trimGeom = new THREE.BoxGeometry(0.008, 0.008, 0.008);

    return {
      sponge,
      topsheet,
      backFoil,
      ittfTab,
      ittfEmboss,
      pipGeom,
      trimGeom,
    };
  }, []);

  // ── Materials ──────────────────────────────────────────────────────────────
  const mats = useMemo(() => ({
    topsheet: new THREE.MeshStandardMaterial({
      roughness: 0.22,
      metalness: 0.04,
    }),
    sponge: new THREE.MeshStandardMaterial({
      roughness: 0.88,
      metalness: 0.0,
    }),
    backFoil: new THREE.MeshStandardMaterial({
      color: '#E0D8C8',
      roughness: 0.45,
      metalness: 0.10,
    }),
    ittfTab: new THREE.MeshStandardMaterial({
      roughness: 0.35,
      metalness: 0.08,
    }),
    ittfEmboss: new THREE.MeshStandardMaterial({
      color: '#FFFFFF',
      roughness: 0.20,
      metalness: 0.30,
      transparent: true,
      opacity: 0.70,
    }),
    pips: new THREE.MeshStandardMaterial({
      roughness: 0.40,
      metalness: 0.05,
    }),
  }), []);

  useEffect(() => {
    // Topsheet material
    mats.topsheet.color.set(config.topsheetColor);
    mats.topsheet.roughness = config.topsheetRoughness;
    mats.topsheet.metalness = config.topsheetMetalness;
    mats.topsheet.needsUpdate = true;

    // Sponge material
    mats.sponge.color.set(config.spongeColor);
    mats.sponge.roughness = config.spongeRoughness;
    mats.sponge.needsUpdate = true;

    // Pips material matches topsheet compound
    mats.pips.color.set(config.pipsColor);
    mats.pips.needsUpdate = true;

    // ITTF tab matches topsheet body
    mats.ittfTab.color.set(config.topsheetColor);
    mats.ittfTab.needsUpdate = true;
  }, [config, mats]);

  // Generate 14 microscopic cylindrical pips along the exposed neck cut
  const pips = useMemo(() => {
    const arr = [];
    const count = 14;
    const startX = -0.21;
    const endX = 0.21;
    const step = (endX - startX) / (count - 1);
    for (let i = 0; i < count; i++) {
      const x = startX + i * step;
      arr.push({ x, y: -0.42, z: 0.010 });
    }
    return arr;
  }, []);

  return (
    <group
      ref={groupRef}
      position={[0, -0.42, 0]}
      rotation={[0.15, -0.32, 0.22]}
    >
      {/* ── 1. Thick High-Elastic Colored Sponge ── */}
      <mesh geometry={geoms.sponge} material={mats.sponge} castShadow receiveShadow />

      {/* ── 2. Championship Grip Topsheet ── */}
      <mesh geometry={geoms.topsheet} material={mats.topsheet} castShadow receiveShadow />

      {/* ── 3. Back Protective Foil / Film ── */}
      <mesh geometry={geoms.backFoil} material={mats.backFoil} />

      {/* ── 4. ITTF Tournament Registration Tab (bottom) ── */}
      <mesh
        geometry={geoms.ittfTab}
        material={mats.ittfTab}
        position={[0, -0.395, 0.026]}
        castShadow
      />
      <mesh
        geometry={geoms.ittfEmboss}
        material={mats.ittfEmboss}
        position={[0, -0.395, 0.033]}
      />

      {/* ── 5. Inverted Pimple Matrix (visible at neck cut) ── */}
      {pips.map((p, idx) => (
        <mesh
          key={idx}
          geometry={geoms.pipGeom}
          material={mats.pips}
          position={[p.x, p.y, p.z]}
        />
      ))}
    </group>
  );
}
