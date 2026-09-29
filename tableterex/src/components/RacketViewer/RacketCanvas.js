'use client';
import { Canvas } from '@react-three/fiber';
import RacketMesh from './RacketMesh';

// ── RacketCanvas ─────────────────────────────────────────────────────────────
// Stationary showcase scene with transparent background and studio lighting.
// OrbitControls removed so the racket remains locked in place for pixel-perfect
// callout dot accuracy.

export default function RacketCanvas({ config }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.8], fov: 42 }}
      shadows
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      {/* ── Base ambient light ── */}
      <ambientLight intensity={0.42} />

      {/* ── Key light: warm upper-right specular & face highlight ── */}
      <directionalLight
        position={[2.5, 3.0, 3.5]}
        intensity={2.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        color="#FFF8F0"
      />

      {/* ── Side fill: soft illumination for sponge & edge profile ── */}
      <pointLight
        position={[-3.0, 0.5, 2.0]}
        intensity={1.6}
        color="#FFFFFF"
        distance={9}
      />

      {/* ── Rear rim light: clean silhouette definition ── */}
      <pointLight
        position={[0, 0, -3.5]}
        intensity={1.1}
        color="#FFFFFF"
        distance={8}
      />

      {/* ── Head dome highlight ── */}
      <pointLight
        position={[0, 3.2, 1.2]}
        intensity={0.6}
        color="#FFFFFF"
        distance={7}
      />

      {/* ── Handle fill ── */}
      <pointLight
        position={[0.5, -2.5, 2.0]}
        intensity={0.5}
        color="#FFEBD6"
        distance={6}
      />

      {/* ── Stationary 3D Table Tennis Racket ── */}
      <RacketMesh config={config} />
    </Canvas>
  );
}
