'use client';
import { useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ── 3D ARCHITECTURAL ISOMETRIC CAD TABLE TENNIS BAT ──────────────────────────
// Clean, straight isometric orientation (level plane, handle pointing down-right):
//   • Fixed Group Tilt: Pitch X: -0.92, Yaw Y: 0.00, Roll Z: π/4 (Straight, Level, Non-interactive)
//   • Layer 0 (Down Side): Forehand Rubber Topsheet (Oriented matching all layers, head top-left)
//   • Layer 1 (Anchor): 5-Ply Composite Blade Core + Dual Flared Ergonomic Handle Scales + Lens
//   • Layer 2 (Upwards): Backhand Dampening Sponge (2.0mm cellular control)
//   • Layer 3 (Top Layer): Backhand Grippy Topsheet (Pure White CAD wireframe & frosted ceramic)
//
// Physics Engine:
//   • Damped harmonic spring physics for Combine & Explode transitions on card selection
//   • Micro-levitation harmonic breathing in exploded rest state
//   • Pure White Architectural aesthetic: #FFFFFF wireframe edges & frosted ceramic surfaces
// ─────────────────────────────────────────────────────────────────────────────

// Authentic ITTF head contour curve
function createHeadShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0.15, -0.35);
  shape.bezierCurveTo(0.24, -0.15, 0.74, 0.05, 0.74, 0.40);
  shape.bezierCurveTo(0.74, 0.85, 0.42, 1.25, 0.0, 1.25);
  shape.bezierCurveTo(-0.42, 1.25, -0.74, 0.85, -0.74, 0.40);
  shape.bezierCurveTo(-0.74, 0.05, -0.24, -0.15, -0.15, -0.35);
  return shape;
}

// Rubber topsheet shape with straight bottom neck throat cut
function createRubberShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0.21, -0.27);
  shape.bezierCurveTo(0.27, -0.12, 0.73, 0.06, 0.73, 0.40);
  shape.bezierCurveTo(0.73, 0.84, 0.41, 1.24, 0.0, 1.24);
  shape.bezierCurveTo(-0.41, 1.24, -0.73, 0.84, -0.73, 0.40);
  shape.bezierCurveTo(-0.73, 0.06, -0.27, -0.12, -0.21, -0.27);
  shape.closePath();
  return shape;
}

// Flared (FL) ergonomic handle scale shape
function createHandleShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, -0.34);
  shape.quadraticCurveTo(0.08, -0.34, 0.14, -0.37);
  shape.quadraticCurveTo(0.12, -0.75, 0.165, -1.25);
  shape.quadraticCurveTo(0, -1.28, -0.165, -1.25);
  shape.quadraticCurveTo(-0.12, -0.75, -0.14, -0.37);
  shape.quadraticCurveTo(-0.08, -0.34, 0, -0.34);
  shape.closePath();
  return shape;
}

export default function ExplodedBatMesh({
  isCombined,
  focusLayer = 'all',
  onSettle,
}) {
  const wholeGroupRef = useRef();

  // Layer Group Refs:
  // [0: FH Rubber (Down side), 1: Blade Core, 2: BH Sponge]
  const l0Ref = useRef();
  const l1Ref = useRef();
  const l2Ref = useRef();

  const layerRefs = [l0Ref, l1Ref, l2Ref];

  // ── Physical Simulation State (3D Vector Spring Physics) ───────────────────
  const physicsState = useRef([
    // Layer 0: Forehand Rubber (Down-side layer on the left)
    {
      x: 0, y: 0, z: -0.65,
      vx: 0, vy: 0, vz: 0,
      targetX: 0, targetY: 0, targetZ: -0.65,
      mass: 1.10,
    },
    // Layer 1: Blade Core + Handle Scales (Center Anchor Engine)
    {
      x: 0, y: 0, z: 0,
      vx: 0, vy: 0, vz: 0,
      targetX: 0, targetY: 0, targetZ: 0,
      mass: 2.30,
    },
    // Layer 2: Backhand Sponge (Right / Angled Up)
    {
      x: 0, y: 0, z: 0.50,
      vx: 0, vy: 0, vz: 0,
      targetX: 0, targetY: 0, targetZ: 0.50,
      mass: 0.85,
    },
  ]);

  // Update target physics positions when isCombined changes
  useEffect(() => {
    const p = physicsState.current;
    if (isCombined) {
      // Clamped together into a unified solid racket
      p[0].targetX = 0; p[0].targetY = 0; p[0].targetZ = -0.046;
      p[1].targetX = 0; p[1].targetY = 0; p[1].targetZ = 0.000;
      p[2].targetX = 0; p[2].targetY = 0; p[2].targetZ = 0.024;
    } else {
      // Standard separated exploded view with distinct, open gaps
      p[0].targetX = 0; p[0].targetY = 0; p[0].targetZ = -0.65;
      p[1].targetX = 0; p[1].targetY = 0; p[1].targetZ = 0.00;
      p[2].targetX = 0; p[2].targetY = 0; p[2].targetZ = 0.50;
    }
  }, [isCombined]);

  // ── Memoised Geometries with Edges ─────────────────────────────────────────
  const geometries = useMemo(() => {
    // 1. Blade Core: Head + Full Handle Tang
    const bladeShape = new THREE.Shape();
    bladeShape.moveTo(0.14, -1.25);
    bladeShape.lineTo(0.15, -0.35);
    bladeShape.bezierCurveTo(0.24, -0.15, 0.74, 0.05, 0.74, 0.40);
    bladeShape.bezierCurveTo(0.74, 0.85, 0.42, 1.25, 0.0, 1.25);
    bladeShape.bezierCurveTo(-0.42, 1.25, -0.74, 0.85, -0.74, 0.40);
    bladeShape.bezierCurveTo(-0.74, 0.05, -0.24, -0.15, -0.15, -0.35);
    bladeShape.lineTo(-0.14, -1.25);
    bladeShape.closePath();

    const bladeCore = new THREE.ExtrudeGeometry(bladeShape, {
      depth: 0.046,
      bevelEnabled: true,
      bevelThickness: 0.004,
      bevelSize: 0.004,
      bevelSegments: 3,
    });
    bladeCore.translate(0, 0, -0.023);
    const bladeEdges = new THREE.EdgesGeometry(bladeCore, 20);

    // 2. Rubber Topsheet Geometry
    const rubberShape = createRubberShape();
    const rubberFront = new THREE.ExtrudeGeometry(rubberShape, {
      depth: 0.018,
      bevelEnabled: true,
      bevelThickness: 0.003,
      bevelSize: 0.003,
      bevelSegments: 2,
    });
    rubberFront.translate(0, 0, -0.009);
    const rubberEdges = new THREE.EdgesGeometry(rubberFront, 20);

    // 3. Sponge Geometry
    const sponge = new THREE.ExtrudeGeometry(rubberShape, {
      depth: 0.024,
      bevelEnabled: false,
    });
    sponge.translate(0, 0, -0.012);
    const spongeEdges = new THREE.EdgesGeometry(sponge, 24);

    // 4. Ergonomic Handle Scales (Front & Back)
    const handleShape = createHandleShape();
    const handleFront = new THREE.ExtrudeGeometry(handleShape, {
      depth: 0.050,
      bevelEnabled: true,
      bevelThickness: 0.015,
      bevelSize: 0.014,
      bevelSegments: 4,
    });
    handleFront.translate(0, 0, 0.023);
    const handleFrontEdges = new THREE.EdgesGeometry(handleFront, 22);

    const handleBack = new THREE.ExtrudeGeometry(handleShape, {
      depth: 0.050,
      bevelEnabled: true,
      bevelThickness: 0.015,
      bevelSize: 0.014,
      bevelSegments: 4,
    });
    handleBack.scale(1, 1, -1);
    handleBack.translate(0, 0, -0.023);
    const handleBackEdges = new THREE.EdgesGeometry(handleBack, 22);

    // 5. ITTF Registration Badge
    const ittfBar = new THREE.BoxGeometry(0.30, 0.038, 0.004);
    const ittfEdges = new THREE.EdgesGeometry(ittfBar);

    // 6. Handle Lens Emblem
    const lens = new THREE.BoxGeometry(0.13, 0.070, 0.008);
    const lensEdges = new THREE.EdgesGeometry(lens);

    return {
      bladeCore,
      bladeEdges,
      rubberFront,
      rubberEdges,
      sponge,
      spongeEdges,
      handleFront,
      handleFrontEdges,
      handleBack,
      handleBackEdges,
      ittfBar,
      ittfEdges,
      lens,
      lensEdges,
    };
  }, []);

  // ── Pure White Architectural Materials ─────────────────────────────────────
  const materials = useMemo(() => {
    // Pure White Glowing Wireframe CAD Edges
    const cadEdge = new THREE.LineBasicMaterial({
      color: '#FFFFFF',
      transparent: true,
      opacity: 0.95,
      linewidth: 1.5,
    });

    const cadEdgeSoft = new THREE.LineBasicMaterial({
      color: '#FFFFFF',
      transparent: true,
      opacity: 0.65,
      linewidth: 1,
    });

    // Frosted Translucent White Surface (CAD Architectural Quartz/Glass)
    const rubberMat = new THREE.MeshStandardMaterial({
      color: '#FFFFFF',
      roughness: 0.18,
      metalness: 0.08,
      transparent: true,
      opacity: 0.72,
      side: THREE.DoubleSide,
    });

    // Cellular White Sponge Surface
    const spongeMat = new THREE.MeshStandardMaterial({
      color: '#FFFFFF',
      roughness: 0.85,
      metalness: 0.02,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
    });

    // Wood / Carbon Composite Core Surface
    const bladeMat = new THREE.MeshStandardMaterial({
      color: '#FFFFFF',
      roughness: 0.28,
      metalness: 0.12,
      transparent: true,
      opacity: 0.82,
      side: THREE.DoubleSide,
    });

    // Pure White Handle Scale
    const handleMat = new THREE.MeshStandardMaterial({
      color: '#FFFFFF',
      roughness: 0.35,
      metalness: 0.06,
      transparent: true,
      opacity: 0.88,
      side: THREE.DoubleSide,
    });

    // High Specular White Inset Lens
    const lensMat = new THREE.MeshStandardMaterial({
      color: '#FFFFFF',
      roughness: 0.08,
      metalness: 0.90,
      transparent: true,
      opacity: 0.95,
    });

    // Anchor Pin Material (Glowing Pure White)
    const anchorPinMat = new THREE.MeshBasicMaterial({
      color: '#FFFFFF',
    });

    return {
      cadEdge,
      cadEdgeSoft,
      rubberMat,
      spongeMat,
      bladeMat,
      handleMat,
      lensMat,
      anchorPinMat,
    };
  }, []);

  // ── 3D Physics Simulation Frame Loop (Stationary, Non-Interactive) ─────────
  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.033);

    const springK = isCombined ? 150 : 90;
    const springDamp = isCombined ? 18 : 13;

    physicsState.current.forEach((lp, idx) => {
      // Position Spring Dynamics (X, Y, Z)
      const dx = lp.x - lp.targetX;
      const dy = lp.y - lp.targetY;
      const dz = lp.z - lp.targetZ;

      const fx = -springK * dx - springDamp * lp.vx;
      const fy = -springK * dy - springDamp * lp.vy;
      const fz = -springK * dz - springDamp * lp.vz;

      lp.vx += (fx / lp.mass) * dt;
      lp.vy += (fy / lp.mass) * dt;
      lp.vz += (fz / lp.mass) * dt;

      lp.x += lp.vx * dt;
      lp.y += lp.vy * dt;
      lp.z += lp.vz * dt;

      // Micro-levitation harmonic breathing in exploded rest state
      let levitation = 0;
      if (!isCombined && Math.hypot(dx, dy, dz) < 0.04) {
        levitation = Math.sin(state.clock.elapsedTime * 2.0 + idx * 0.9) * 0.012;
      }

      if (layerRefs[idx].current) {
        layerRefs[idx].current.position.set(lp.x, lp.y, lp.z + levitation);
      }
    });
  });

  return (
    <group
      ref={wholeGroupRef}
      position={[-0.11, -0.04, 0]}
      rotation={[-0.35, 1.15, 0.50]}
      scale={[1.00, 1.00, 1.00]}
    >

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 0: FOREHAND TOP RUBBER (Down-Side Layer - Head Top-Left, Neck Towards Handle)
          ══════════════════════════════════════════════════════════════════ */}
      <group ref={l0Ref}>
        <mesh geometry={geometries.rubberFront} material={materials.rubberMat} />
        <lineSegments geometry={geometries.rubberEdges} material={materials.cadEdge} />

        {/* Pure White ITTF Stamp Bar */}
        <mesh position={[0, -0.22, 0.011]} geometry={geometries.ittfBar} material={materials.handleMat} />
        <lineSegments position={[0, -0.22, 0.011]} geometry={geometries.ittfEdges} material={materials.cadEdge} />

        {/* 3D Physical Anchor Dot */}
        <mesh position={[0, 0.25, 0.015]} material={materials.anchorPinMat}>
          <sphereGeometry args={[0.024, 16, 16]} />
        </mesh>
        <mesh position={[0, 0.25, 0.015]}>
          <ringGeometry args={[0.038, 0.046, 24]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.65} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 1: 5-PLY COMPOSITE BLADE CORE + HANDLE (Center Engine Anchor)
          ══════════════════════════════════════════════════════════════════ */}
      <group ref={l1Ref}>
        <mesh geometry={geometries.bladeCore} material={materials.bladeMat} />
        <lineSegments geometry={geometries.bladeEdges} material={materials.cadEdge} />

        {/* Front Flared Handle Scale */}
        <mesh geometry={geometries.handleFront} material={materials.handleMat} />
        <lineSegments geometry={geometries.handleFrontEdges} material={materials.cadEdge} />

        {/* Back Flared Handle Scale */}
        <mesh geometry={geometries.handleBack} material={materials.handleMat} />
        <lineSegments geometry={geometries.handleBackEdges} material={materials.cadEdge} />

        {/* Inset Metallic Lens Badge on Handle */}
        <mesh position={[0, -0.85, 0.052]} geometry={geometries.lens} material={materials.lensMat} />
        <lineSegments position={[0, -0.85, 0.052]} geometry={geometries.lensEdges} material={materials.cadEdge} />

        {/* 3D Physical Anchor Dot on Blade Core */}
        <mesh position={[0.12, 0.15, 0.025]} material={materials.anchorPinMat}>
          <sphereGeometry args={[0.024, 16, 16]} />
        </mesh>
        <mesh position={[0.12, 0.15, 0.025]}>
          <ringGeometry args={[0.038, 0.046, 24]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.65} side={THREE.DoubleSide} />
        </mesh>

        {/* 3D Physical Anchor Dot on Flared Handle */}
        <mesh position={[0, -0.72, 0.055]} material={materials.anchorPinMat}>
          <sphereGeometry args={[0.024, 16, 16]} />
        </mesh>
        <mesh position={[0, -0.72, 0.055]}>
          <ringGeometry args={[0.038, 0.046, 24]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.65} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 2: BACKHAND DAMPENING SPONGE (Angled Upwards Layer)
          ══════════════════════════════════════════════════════════════════ */}
      <group ref={l2Ref}>
        <mesh geometry={geometries.sponge} material={materials.spongeMat} />
        <lineSegments geometry={geometries.spongeEdges} material={materials.cadEdgeSoft} />
      </group>
    </group>
  );
}
