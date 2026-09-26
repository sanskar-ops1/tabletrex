'use client';
import {
  BladeConstructionIcon,
  WeightBalanceIcon,
  TechSpeedIcon,
  TechControlIcon,
  BladeCompositionIcon,
  SpinSpiralIcon,
  SpeedLightningIcon,
  SpongeThicknessIcon,
  SpongeHardnessIcon,
  SurfaceGripIcon,
} from '@/components/icons';

const RACKET_TECH = [
  {
    id: 'blade-construction',
    label: 'BLADE CONSTRUCTION',
    icon: BladeConstructionIcon,
    desc: 'Outer veneer plies, carbon damping layers, and selected core wood.',
    values: ['ALL-WOOD', 'CARBON', 'ARYLATE-CARBON', 'ZYLON-CARBON'],
  },
  {
    id: 'weight',
    label: 'WEIGHT & BALANCE',
    icon: WeightBalanceIcon,
    desc: 'Center-of-gravity tuning for swing weight and recovery velocity.',
    values: ['72G (LIGHT)', '85G (BALANCED)', '95G (POWER)'],
  },
  {
    id: 'speed',
    label: 'SPEED RATING',
    icon: TechSpeedIcon,
    desc: 'Catapult rebound velocity off the wood/carbon matrix.',
    bar: 86,
  },
  {
    id: 'control',
    label: 'CONTROL INDEX',
    icon: TechControlIcon,
    desc: 'Vibration damping and linear dwell feedback on ball contact.',
    bar: 80,
  },
  {
    id: 'blade-composition',
    label: 'BLADE COMPOSITION',
    icon: BladeCompositionIcon,
    desc: 'Laminated ply count and microscopic carbon weave orientation.',
    values: ['5-PLY WOOD', '7-PLY OFF', '3+2 ARYLATE', '5+2 ZLC'],
  },
];

const RUBBER_TECH = [
  {
    id: 'spin',
    label: 'SPIN COEFFICIENT',
    icon: SpinSpiralIcon,
    desc: 'Frictional mechanical grip and topspin arc generation.',
    bar: 94,
  },
  {
    id: 'rubber-speed',
    label: 'SPEED DYNAMICS',
    icon: SpeedLightningIcon,
    desc: 'Tensor pore tension rebound on flat strokes and counter-drives.',
    bar: 88,
  },
  {
    id: 'rubber-control',
    label: 'PRECISION CONTROL',
    icon: TechControlIcon,
    desc: 'Linear response in short push play, drops, and service reception.',
    bar: 78,
  },
  {
    id: 'sponge-thickness',
    label: 'SPONGE THICKNESS',
    icon: SpongeThicknessIcon,
    desc: 'Spring depth gauge controlling dwell time and trajectory height.',
    values: ['1.8 MM (TOUCH)', '2.0 MM (ALL-ROUND)', '2.15 MM (MAX POWER)'],
  },
  {
    id: 'hardness',
    label: 'SPONGE HARDNESS',
    icon: SpongeHardnessIcon,
    desc: 'Shore durometer density rating for explosive vs soft feel.',
    values: ['37° (SOFT/CONTROL)', '42° (MEDIUM TENSOR)', '50° (HARD/TACKY)'],
  },
  {
    id: 'grip',
    label: 'SURFACE GRIP',
    icon: SurfaceGripIcon,
    desc: 'High-tack contact surface tension preventing ball slip in humid conditions.',
    values: ['EURO-JAPANESE TENSION', 'CHINESE TACKY GRIP', 'MICRO-TEXTURE'],
  },
];

function TechRow({ item }) {
  const IconComponent = item.icon;
  return (
    <div className="tech-spec-row" id={`tech-${item.id}`}>
      <div className="tech-spec-icon-col">
        <div className="tech-spec-icon-wrap" title={item.label}>
          <IconComponent size={48} className="tech-48-icon" color="var(--orange)" />
        </div>
      </div>

      <div className="tech-spec-content">
        <div className="tech-spec-head">
          <span className="tech-spec-label text-label">{item.label}</span>
          <p className="tech-spec-desc">{item.desc}</p>
        </div>

        {item.bar !== undefined ? (
          <div className="tech-bar-row">
            <div className="tech-bar-track">
              <div className="tech-bar-fill" style={{ width: `${item.bar}%` }} />
            </div>
            <span className="tech-bar-val">{item.bar}/100</span>
          </div>
        ) : (
          <div className="tech-spec-tags">
            {item.values.map((v) => (
              <span key={v} className="tech-spec-tag">
                {v}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function TechPerformance() {
  return (
    <section className="tech-section" id="technology">
      <div className="tech-watermark" aria-hidden="true">TECH</div>

      <div className="tech-header">
        <span className="text-label">[10] — TECHNOLOGY &amp; PERFORMANCE</span>
        <h2 className="tech-title text-display">
          WHAT MAKES<br />
          <span className="tech-accent">THE DIFFERENCE</span>
        </h2>
        <p className="tech-sub-banner text-label">
          STANDARDIZED TECHNICAL SPECIFICATIONS ACROSS RACKET BLADES AND RUBBER SHEETS
        </p>
      </div>

      <div className="tech-grid">
        {/* Racket Column */}
        <div className="tech-col">
          <div className="tech-col-header">
            <span className="tech-col-num">01</span>
            <h3 className="tech-col-title text-display">RACKET /<br />BLADE TECH</h3>
            <p className="tech-col-sub">
              THE BLADE IS THE SKELETON OF YOUR SHOT. COMPOSITION, PLY COUNT, AND WEIGHT DISTRIBUTION DICTATE POWER, REACTION, AND DWELL FEEL.
            </p>
          </div>
          <div className="tech-specs">
            {RACKET_TECH.map((item) => (
              <TechRow key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="tech-divider" aria-hidden="true" />

        {/* Rubber Column */}
        <div className="tech-col">
          <div className="tech-col-header">
            <span className="tech-col-num">02</span>
            <h3 className="tech-col-title text-display">RUBBER /<br />SHEET TECH</h3>
            <p className="tech-col-sub">
              THE RUBBER DETERMINES SPIN, TRAJECTORY, AND BALL RETENTION. SPONGE THICKNESS, SHORE DENSITY, AND SURFACE TENSION SHAPE YOUR GAME.
            </p>
          </div>
          <div className="tech-specs">
            {RUBBER_TECH.map((item) => (
              <TechRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="tech-cta-row">
        <a href="/guide" className="btn-outline-cream" id="tech-guide-btn">
          EXPLORE COMPLETE TECHNICAL GUIDE →
        </a>
      </div>
    </section>
  );
}
