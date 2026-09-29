// ─── Racket Viewer Config ───────────────────────────────────────────────────
// Per-level data: realistic paddle materials, colors, and precise callout positions.
//
// Callout xNorm/yNorm coordinates are mathematically projected from the stationary
// tilted 3D racket (pitch: 0.15, yaw: 0.32, roll: -0.22) through camera (0, 0, 3.8, FOV 42).
// Every dot lands directly on the actual physical component:
//   - SPONGE: on the left curved head perimeter where the sponge rim is visible (0.326, 0.320)
//   - RUBBER: on the center-right sweet spot of the rubber topsheet (0.545, 0.347)
//   - BLADE: on the exposed wood wing/shoulder at the base of the neck (0.531, 0.629)
//   - HANDLE: on the contoured wooden handle grip (0.465, 0.795)

export const LEVEL_CONFIGS = {
  BEGINNER: {
    label: 'BEGINNER',
    lvlTag: 'LVL 01',
    accent: '#C9561E',
    bladeMaterial: { color: '#B8864E', roughness: 0.55, metalness: 0.03 },
    rubberColor: '#121316',
    rubberBackColor: '#B81B1B',
    rubberOpacity: 0.98,
    spongeColor: '#E85A18',
    handleColor: '#7A4A26',
    handleStripeColor: '#C49864',
    lensColor: '#C49864',
    edgeColor: '#161719',
    edgeStripeColor: '#C9561E',
    callouts: [
      { id: 'sponge', label: 'SPONGE',     sub: '1.8mm SOFT ELASTIC', side: 'left',  xNorm: 0.326, yNorm: 0.320 },
      { id: 'rubber', label: 'RUBBER',     sub: 'ALL-WOOD CONTROL',   side: 'right', xNorm: 0.545, yNorm: 0.347 },
      { id: 'blade',  label: 'BLADE CORE', sub: '5-PLY AYOUS WOOD',   side: 'right', xNorm: 0.531, yNorm: 0.629 },
      { id: 'handle', label: 'HANDLE',     sub: 'FLARED WOOD GRIP',   side: 'left',  xNorm: 0.465, yNorm: 0.795 },
    ],
  },

  INTERMEDIATE: {
    label: 'INTERMEDIATE',
    lvlTag: 'LVL 02',
    accent: '#00D4FF',
    bladeMaterial: { color: '#523824', roughness: 0.45, metalness: 0.12 },
    rubberColor: '#0E1014',
    rubberBackColor: '#C41A1A',
    rubberOpacity: 0.98,
    spongeColor: '#1971C2',
    handleColor: '#3A281E',
    handleStripeColor: '#00D4FF',
    lensColor: '#00D4FF',
    edgeColor: '#141518',
    edgeStripeColor: '#00D4FF',
    callouts: [
      { id: 'sponge', label: 'SPONGE',     sub: '2.0mm HIGH-ELASTIC', side: 'left',  xNorm: 0.326, yNorm: 0.320 },
      { id: 'rubber', label: 'RUBBER',     sub: 'TENSOR TOPSHEET',    side: 'right', xNorm: 0.545, yNorm: 0.347 },
      { id: 'blade',  label: 'BLADE CORE', sub: '5+2 HYBRID WOOD',    side: 'right', xNorm: 0.531, yNorm: 0.629 },
      { id: 'handle', label: 'HANDLE',     sub: 'ERGONOMIC FL',       side: 'left',  xNorm: 0.465, yNorm: 0.795 },
    ],
  },

  ADVANCED: {
    label: 'ADVANCED',
    lvlTag: 'LVL 03',
    accent: '#FFD700',
    bladeMaterial: { color: '#202226', roughness: 0.28, metalness: 0.45 },
    rubberColor: '#0A0A0C',
    rubberBackColor: '#A81414',
    rubberOpacity: 0.99,
    spongeColor: '#FF5400',
    handleColor: '#18191D',
    handleStripeColor: '#FFD700',
    lensColor: '#FFD700',
    edgeColor: '#101114',
    edgeStripeColor: '#FFD700',
    callouts: [
      { id: 'sponge', label: 'SPONGE',     sub: '2.1mm SPRING MAX',   side: 'left',  xNorm: 0.326, yNorm: 0.320 },
      { id: 'rubber', label: 'RUBBER',     sub: 'HIGH-TENSION PRO',   side: 'right', xNorm: 0.545, yNorm: 0.347 },
      { id: 'blade',  label: 'BLADE CORE', sub: 'TOURNAMENT GRADE',   side: 'right', xNorm: 0.531, yNorm: 0.629 },
      { id: 'handle', label: 'HANDLE',     sub: 'CUSTOM PRO GRIP',    side: 'left',  xNorm: 0.465, yNorm: 0.795 },
    ],
  },

  OFFENSIVE: {
    label: 'OFFENSIVE',
    lvlTag: 'OFF',
    accent: '#FF3333',
    bladeMaterial: { color: '#441B12', roughness: 0.40, metalness: 0.18 },
    rubberColor: '#0E0909',
    rubberBackColor: '#DE1818',
    rubberOpacity: 0.98,
    spongeColor: '#C91A09',
    handleColor: '#28120C',
    handleStripeColor: '#FF3333',
    lensColor: '#FF3333',
    edgeColor: '#141010',
    edgeStripeColor: '#FF3333',
    callouts: [
      { id: 'sponge', label: 'POWER SPONGE', sub: '2.1mm HARD DENSITY', side: 'left',  xNorm: 0.326, yNorm: 0.320 },
      { id: 'rubber', label: 'ATTACK RUBBER', sub: 'MAX FRICTION SHEET', side: 'right', xNorm: 0.545, yNorm: 0.347 },
      { id: 'blade',  label: 'BLADE CORE',   sub: '7-PLY POWER WOOD',   side: 'right', xNorm: 0.531, yNorm: 0.629 },
      { id: 'handle', label: 'HANDLE',       sub: 'OFFENSIVE FLARED',   side: 'left',  xNorm: 0.465, yNorm: 0.795 },
    ],
  },

  DEFENSIVE: {
    label: 'DEFENSIVE',
    lvlTag: 'DEF',
    accent: '#4ECDC4',
    bladeMaterial: { color: '#A88963', roughness: 0.65, metalness: 0.02 },
    rubberColor: '#0D1313',
    rubberBackColor: '#B51B1B',
    rubberOpacity: 0.96,
    spongeColor: '#1A7D6B',
    handleColor: '#543F2F',
    handleStripeColor: '#4ECDC4',
    lensColor: '#4ECDC4',
    edgeColor: '#101615',
    edgeStripeColor: '#4ECDC4',
    callouts: [
      { id: 'sponge', label: 'DAMP SPONGE', sub: '1.5mm ABSORB',       side: 'left',  xNorm: 0.326, yNorm: 0.320 },
      { id: 'rubber', label: 'CHOP RUBBER', sub: 'HIGH-CONTROL SHEET', side: 'right', xNorm: 0.545, yNorm: 0.347 },
      { id: 'blade',  label: 'BLADE CORE',  sub: 'WILLOW FLEX ABSORB', side: 'right', xNorm: 0.531, yNorm: 0.629 },
      { id: 'handle', label: 'HANDLE',      sub: 'LONG REACH ST',      side: 'left',  xNorm: 0.465, yNorm: 0.795 },
    ],
  },

  'ALL-ROUND': {
    label: 'ALL-ROUND',
    lvlTag: 'ALL',
    accent: '#A8DADC',
    bladeMaterial: { color: '#967045', roughness: 0.58, metalness: 0.05 },
    rubberColor: '#101413',
    rubberBackColor: '#C01E1E',
    rubberOpacity: 0.97,
    spongeColor: '#F59F00',
    handleColor: '#4A3623',
    handleStripeColor: '#A8DADC',
    lensColor: '#A8DADC',
    edgeColor: '#121616',
    edgeStripeColor: '#A8DADC',
    callouts: [
      { id: 'sponge', label: 'SPONGE',     sub: '2.0mm MEDIUM FOAM',  side: 'left',  xNorm: 0.326, yNorm: 0.320 },
      { id: 'rubber', label: 'RUBBER',     sub: 'BALANCED TOPSHEET',  side: 'right', xNorm: 0.545, yNorm: 0.347 },
      { id: 'blade',  label: 'BLADE CORE', sub: '5-PLY BALANCED WOOD', side: 'right', xNorm: 0.531, yNorm: 0.629 },
      { id: 'handle', label: 'HANDLE',     sub: 'COMFORT GRIP',       side: 'left',  xNorm: 0.465, yNorm: 0.795 },
    ],
  },
};
