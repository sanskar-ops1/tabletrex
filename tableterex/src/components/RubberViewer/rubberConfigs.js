// ─── Rubber Viewer Config ───────────────────────────────────────────────────
// Per-style data: authentic rubber materials, colors, sponge layers, and precise callouts.
//
// Callout xNorm/yNorm coordinates are mathematically projected from the stationary
// tilted 3D rubber sheet (pitch: 0.15, yaw: -0.32, roll: 0.22) through camera (0, 0, 3.8, FOV 42).
// Every dot lands directly on the actual physical component:
//   - SPONGE: on the left curved perimeter where the thick colored sponge rim is exposed (0.295, 0.340)
//   - TOPSHEET: on the center sweet spot of the striking rubber surface (0.520, 0.360)
//   - PIPS ARRAY: on the exposed inverted pimple matrix along the neck cut (0.535, 0.640)
//   - ITTF: on the bottom tournament registration stamp tab (0.420, 0.775)

export const RUBBER_CONFIGS = {
  SPIN: {
    label: 'SPIN',
    tag: 'DHS HURRICANE 3',
    accent: '#C9561E',
    topsheetColor: '#0D0E11',
    topsheetRoughness: 0.16,
    topsheetMetalness: 0.06,
    spongeColor: '#0055B3', // Iconic DHS Provincial Blue Sponge
    spongeRoughness: 0.88,
    spongeThickness: 0.038,
    pipsColor: '#0D0E11',
    backAdhesiveColor: '#E8E0D0',
    ittfCode: 'DHS 24-108',
    callouts: [
      { id: 'sponge',   label: 'SPONGE',        sub: '2.15mm DENSE BLUE',          side: 'left',  xNorm: 0.295, yNorm: 0.340 },
      { id: 'topsheet', label: 'TOPSHEET',      sub: 'TACKY CHINESE GRIP',         side: 'right', xNorm: 0.520, yNorm: 0.360 },
      { id: 'pips',     label: 'PIPS ARRAY',    sub: 'CONICAL HIGH-DWELL PIPS',    side: 'right', xNorm: 0.535, yNorm: 0.640 },
      { id: 'ittf',     label: 'ITTF APPROVED', sub: 'REG 24-108 TOURNAMENT',      side: 'left',  xNorm: 0.420, yNorm: 0.775 },
    ],
  },

  SPEED: {
    label: 'SPEED',
    tag: 'TENERGY 64',
    accent: '#FF3333',
    topsheetColor: '#C91D1D', // Butterfly Crimson Red
    topsheetRoughness: 0.25,
    topsheetMetalness: 0.04,
    spongeColor: '#FF6600', // Signature Spring Sponge Orange
    spongeRoughness: 0.85,
    spongeThickness: 0.036,
    pipsColor: '#C91D1D',
    backAdhesiveColor: '#F5F0E8',
    ittfCode: 'BTY 05-001',
    callouts: [
      { id: 'sponge',   label: 'SPONGE',        sub: '2.1mm SPRING FOAM',          side: 'left',  xNorm: 0.295, yNorm: 0.340 },
      { id: 'topsheet', label: 'TOPSHEET',      sub: 'TENSOR SPEED SHEET',         side: 'right', xNorm: 0.520, yNorm: 0.360 },
      { id: 'pips',     label: 'PIPS ARRAY',    sub: 'EXPANDED PIPS MATRIX',       side: 'right', xNorm: 0.535, yNorm: 0.640 },
      { id: 'ittf',     label: 'ITTF APPROVED', sub: 'REG 05-001 PRO TENSOR',      side: 'left',  xNorm: 0.420, yNorm: 0.775 },
    ],
  },

  CONTROL: {
    label: 'CONTROL',
    tag: 'RAKZA 7 SOFT',
    accent: '#E5A823',
    topsheetColor: '#121316', // Natural Gum Pitch Black
    topsheetRoughness: 0.34,
    topsheetMetalness: 0.02,
    spongeColor: '#F3E8C8', // Soft Forgiving Cream Sponge
    spongeRoughness: 0.92,
    spongeThickness: 0.032,
    pipsColor: '#121316',
    backAdhesiveColor: '#E8E0D0',
    ittfCode: 'YAS 12-003',
    callouts: [
      { id: 'sponge',   label: 'SPONGE',        sub: '1.8mm SOFT ABSORB FOAM',     side: 'left',  xNorm: 0.295, yNorm: 0.340 },
      { id: 'topsheet', label: 'TOPSHEET',      sub: 'HIGH-ELASTIC GUM SHEET',     side: 'right', xNorm: 0.520, yNorm: 0.360 },
      { id: 'pips',     label: 'PIPS ARRAY',    sub: 'HIGH DWELL TIME PIPS',       side: 'right', xNorm: 0.535, yNorm: 0.640 },
      { id: 'ittf',     label: 'ITTF APPROVED', sub: 'REG 12-003 PRECISION SPEC',   side: 'left',  xNorm: 0.420, yNorm: 0.775 },
    ],
  },

  OFFENSIVE: {
    label: 'OFFENSIVE',
    tag: 'TENERGY 05',
    accent: '#FF5500',
    topsheetColor: '#B71C1C', // Power Attacking Red
    topsheetRoughness: 0.22,
    topsheetMetalness: 0.05,
    spongeColor: '#FF5500', // Dense High-Energy Orange Sponge
    spongeRoughness: 0.85,
    spongeThickness: 0.040,
    pipsColor: '#B71C1C',
    backAdhesiveColor: '#F5F0E8',
    ittfCode: 'BTY 05-002',
    callouts: [
      { id: 'sponge',   label: 'SPONGE',        sub: '2.1mm ATTACK MATRIX',        side: 'left',  xNorm: 0.295, yNorm: 0.340 },
      { id: 'topsheet', label: 'TOPSHEET',      sub: 'MAX-ENERGY SPIN SHEET',      side: 'right', xNorm: 0.520, yNorm: 0.360 },
      { id: 'pips',     label: 'PIPS ARRAY',    sub: 'DIRECT-IMPACT PIPS MATRIX',  side: 'right', xNorm: 0.535, yNorm: 0.640 },
      { id: 'ittf',     label: 'ITTF APPROVED', sub: 'REG 05-002 WORLD CLASS',      side: 'left',  xNorm: 0.420, yNorm: 0.775 },
    ],
  },

  DEFENSIVE: {
    label: 'DEFENSIVE',
    tag: 'SLICE 40',
    accent: '#4ECDC4',
    topsheetColor: '#16181B', // Graphite Matte Black
    topsheetRoughness: 0.42,
    topsheetMetalness: 0.02,
    spongeColor: '#5C7B72', // Dampening Blue-Green Sponge
    spongeRoughness: 0.95,
    spongeThickness: 0.026,
    pipsColor: '#16181B',
    backAdhesiveColor: '#E8E0D0',
    ittfCode: 'DON 33-014',
    callouts: [
      { id: 'sponge',   label: 'SPONGE',        sub: '1.5mm DAMPENING FOAM',       side: 'left',  xNorm: 0.295, yNorm: 0.340 },
      { id: 'topsheet', label: 'TOPSHEET',      sub: 'MICRO-TEXTURE CHOP SHEET',   side: 'right', xNorm: 0.520, yNorm: 0.360 },
      { id: 'pips',     label: 'PIPS ARRAY',    sub: 'DECELERATION PIPS MATRIX',   side: 'right', xNorm: 0.535, yNorm: 0.640 },
      { id: 'ittf',     label: 'ITTF APPROVED', sub: 'REG 33-014 CHOP CONTROL',    side: 'left',  xNorm: 0.420, yNorm: 0.775 },
    ],
  },

  'ALL-ROUND': {
    label: 'ALL-ROUND',
    tag: 'VEGA ASIA',
    accent: '#9B51E0',
    topsheetColor: '#A01B1B', // Deep Carbon Red
    topsheetRoughness: 0.28,
    topsheetMetalness: 0.04,
    spongeColor: '#1A1A1A', // Signature Xiom Carbo Black Sponge
    spongeRoughness: 0.90,
    spongeThickness: 0.035,
    pipsColor: '#A01B1B',
    backAdhesiveColor: '#F5F0E8',
    ittfCode: 'XIO 79-011',
    callouts: [
      { id: 'sponge',   label: 'SPONGE',        sub: '2.0mm CARBO BLACK FOAM',     side: 'left',  xNorm: 0.295, yNorm: 0.340 },
      { id: 'topsheet', label: 'TOPSHEET',      sub: 'HYPER-ELASTIC TENSOR SHEET', side: 'right', xNorm: 0.520, yNorm: 0.360 },
      { id: 'pips',     label: 'PIPS ARRAY',    sub: 'HARMONIC ALL-ROUND GRID',    side: 'right', xNorm: 0.535, yNorm: 0.640 },
      { id: 'ittf',     label: 'ITTF APPROVED', sub: 'REG 79-011 BALANCED PLAY',   side: 'left',  xNorm: 0.420, yNorm: 0.775 },
    ],
  },
};
