'use client';
import { Canvas } from '@react-three/fiber';
import RubberMesh from './RubberMesh';

// ── RubberCanvas ─────────────────────────────────────────────────────────────
// Stationary showcase scene with transparent background and studio lighting.
// Locked camera for pixel-perfect callout dot accuracy on rubber sheet components.

export default function RubberCanvas({ config }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.8], fov: 42 }}
      shadows
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      {/* ── Base ambient light ── */}
      <ambientLight intensity={0.45} />

      {/* ── Key light: upper-left specular shine across the topsheet ── */}
      <directionalLight
        position={[-2.5, 3.2, 3.5]}
        intensity={2.3}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        color="#FFF8F0"
      />

      {/* ── Sponge rim illumination (left profile) ── */}
      <pointLight
        position={[-3.2, 0.4, 2.0]}
        intensity={1.8}
        color="#FFFFFF"
        distance={9}
      />

      {/* ── Fill light: softer illumination for right perimeter ── */}
      <pointLight
        position={[3.0, 1.0, 2.2]}
        intensity={1.2}
        color="#FFFFFF"
        distance={8}
      />

      {/* ── Rear rim light: clean edge silhouette ── */}
      <pointLight
        position={[0, 0, -3.5]}
        intensity={1.1}
        color="#FFFFFF"
        distance={8}
      />

      {/* ── Top crown highlight ── */}
      <pointLight
        position={[0, 3.5, 1.5]}
        intensity={0.7}
        color="#FFFFFF"
        distance={7}
      />

      {/* ── Stationary 3D Table Tennis Rubber Sheet ── */}
      <RubberMesh config={config} />
    </Canvas>
  );
}
