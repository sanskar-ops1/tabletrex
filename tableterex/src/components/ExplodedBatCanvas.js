'use client';
import { Canvas } from '@react-three/fiber';
import ExplodedBatMesh from './ExplodedBatMesh';

// ── ExplodedBatCanvas ────────────────────────────────────────────────────────
// Pure White Architectural CAD 3D Canvas
// High-spec studio lighting tuned for pure white ceramic & glass materials,
// highlighting 3D edges, layer separation, and dynamic spring physics.
// ─────────────────────────────────────────────────────────────────────────────

export default function ExplodedBatCanvas({
  isCombined,
  focusLayer,
  onSettle,
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.05, 4.6], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{
        background: 'transparent',
        width: '100%',
        height: '100%',
        minHeight: '460px',
        pointerEvents: 'none',
      }}
    >
      {/* ── Architectural Ambient Illumination ── */}
      <ambientLight intensity={0.55} color="#FFFFFF" />

      {/* ── Key Light: Upper-Right Crisp Directional Specular (Pure White) ── */}
      <directionalLight
        position={[4.0, 4.5, 3.5]}
        intensity={2.8}
        color="#FFFFFF"
      />

      {/* ── Fill Light: Upper-Left Soft Diffuse ── */}
      <directionalLight
        position={[-3.5, 2.0, 2.5]}
        intensity={1.4}
        color="#FFFFFF"
      />

      {/* ── Back Rim Light: Sharp Silhouette on floating layer boundaries ── */}
      <pointLight
        position={[0, 0, -3.8]}
        intensity={2.2}
        color="#FFFFFF"
        distance={9}
      />

      {/* ── Bottom Edge Uplight: Highlights blade tang and lower rubber ── */}
      <pointLight
        position={[0, -2.8, 1.8]}
        intensity={1.1}
        color="#FFFFFF"
        distance={7}
      />

      {/* ── Top Head Rim Light ── */}
      <pointLight
        position={[0, 3.2, 1.5]}
        intensity={0.9}
        color="#FFFFFF"
        distance={7}
      />

      {/* ── Real 3D Exploded Bat Mesh with Physics Engine ── */}
      <ExplodedBatMesh
        isCombined={isCombined}
        focusLayer={focusLayer}
        onSettle={onSettle}
      />
    </Canvas>
  );
}
