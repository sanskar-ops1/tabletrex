'use client';
import {
  BladeConstructionIsometricIcon,
  WeightBalanceIsometricIcon,
  SpeedRatingIsometricIcon,
  ControlIndexIsometricIcon,
  BladeCompositionIsometricIcon,
  SpinCoefficientIsometricIcon,
  SpeedDynamicsIsometricIcon,
  PrecisionControlIsometricIcon,
  SpongeThicknessIsometricIcon,
  SpongeHardnessIsometricIcon,
  SurfaceGripIsometricIcon,
} from '@/components/icons';

const RACKET_TECH = [
  {
    id: 'blade-construction',
    label: 'BLADE CONSTRUCTION',
    icon: BladeConstructionIsometricIcon,
    values: ['ALL-WOOD', 'CARBON', 'ARYLATE-CARBON', 'ZYLON-CARBON'],
  },
  {
    id: 'weight',
    label: 'WEIGHT & BALANCE',
    icon: WeightBalanceIsometricIcon,
    values: ['LIGHT', 'BALANCED', 'POWER'],
  },
  {
    id: 'speed',
    label: 'SPEED RATING',
    icon: SpeedRatingIsometricIcon,
    desc: 'Measured rebound response across different blade constructions.',
    bar: 86,
  },
  {
    id: 'control',
    label: 'CONTROL INDEX',
    icon: ControlIndexIsometricIcon,
    desc: 'Dwell, vibration feedback, and response at ball contact.',
    bar: 80,
  },
  {
    id: 'blade-composition',
    label: 'BLADE COMPOSITION',
    icon: BladeCompositionIsometricIcon,
    values: ['5-PLY WOOD', '7-PLY', 'ARYLATE COMPOSITES', 'ZLC'],
  },
];

const RUBBER_TECH = [
  {
    id: 'spin',
    label: 'SPIN COEFFICIENT',
    icon: SpinCoefficientIsometricIcon,
    desc: 'Surface grip and topsheet characteristics for generating spin.',
    bar: 94,
  },
  {
    id: 'rubber-speed',
    label: 'SPEED DYNAMICS',
    icon: SpeedDynamicsIsometricIcon,
    desc: 'Tensor response and rebound behaviour on attacking strokes.',
    bar: 88,
  },
  {
    id: 'rubber-control',
    label: 'PRECISION CONTROL',
    icon: PrecisionControlIsometricIcon,
    desc: 'Response during pushes, blocks, drops, and short play.',
    bar: 78,
  },
  {
    id: 'sponge-thickness',
    label: 'SPONGE THICKNESS',
    icon: SpongeThicknessIsometricIcon,
    values: ['1.8 MM', '2.0 MM', '2.15 MM'],
  },
  {
    id: 'hardness',
    label: 'SPONGE HARDNESS',
    icon: SpongeHardnessIsometricIcon,
    values: ['SOFT', 'MEDIUM', 'HARD'],
  },
  {
    id: 'grip',
    label: 'SURFACE GRIP',
    icon: SurfaceGripIsometricIcon,
    values: ['EURO-JAPANESE TENSION', 'CHINESE TACKY GRIP', 'MICRO-TEXTURE'],
  },
];

function TechRow({ item }) {
  const IconComponent = item.icon;
  return (
    <div className="tech-spec-row" id={`tech-${item.id}`}>
      <div className="tech-spec-icon-col">
        <div className="tech-spec-icon-wrap" title={item.label}>
          <IconComponent size={44} className="tech-48-icon" variant="orange" color="var(--orange)" />
        </div>
      </div>

      <div className="tech-spec-content">
        <div className="tech-spec-head">
          <span className="tech-spec-label text-label">{item.label}</span>
          {item.desc && <p className="tech-spec-desc">{item.desc}</p>}
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
        <span className="text-label" style={{ color: 'var(--orange)', letterSpacing: '0.2em' }}>
          TECHNOLOGY &amp; PERFORMANCE
        </span>
        <h2 className="tech-title text-display">
          WHAT MAKES<br />
          <span className="tech-accent">THE DIFFERENCE</span>
        </h2>
        <p className="tech-sub-banner">
          Technical specifications that help you understand the gear before you play it.
        </p>
      </div>

      <div className="tech-grid">
        {/* Racket Column */}
        <div className="tech-col">
          <div className="tech-col-header">
            <span className="tech-col-num">01</span>
            <h3 className="tech-col-title text-display">RACKET /<br />BLADE TECH</h3>
            <p className="tech-col-sub">
              The foundation of your setup. Blade construction, ply composition, materials, weight, and balance all influence speed, control, feel, and playing response.
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
              Where spin, speed, and touch come together. Sponge thickness, hardness, surface grip, and rubber construction influence how the ball reacts on contact.
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
        <a href="/products" className="btn-outline-cream" id="tech-guide-btn">
          EXPLORE THE COMPLETE TECHNICAL GUIDE →
        </a>
      </div>
    </section>
  );
}
