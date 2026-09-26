'use client';
import {
  BeginnerGuideIcon,
  SpinSpiralIcon,
  SpeedLightningIcon,
  ControlPrecisionIcon,
  OffensiveStrikeIcon,
  DefensiveShieldIcon,
} from '@/components/icons';

const SETUPS = [
  {
    id: 's1',
    style: 'BEGINNER',
    name: 'Beginner Setup',
    icon: BeginnerGuideIcon,
    blade: 'Stiga Clipper Wood',
    rubber: 'DHS Hurricane 3',
    price: '₹4,799',
    bladePrice: '₹3,499',
    rubberPrice: '₹1,299',
    desc: 'Easy to control and forgiving on timing errors. The ideal foundation setup for mastering strokes.',
    color: 'cream',
  },
  {
    id: 's2',
    style: 'SPIN',
    name: 'Spin Setup',
    icon: SpinSpiralIcon,
    blade: 'Donic Waldner Carbon',
    rubber: 'DHS Hurricane 3 Blue',
    price: '₹7,699',
    bladePrice: '₹5,999',
    rubberPrice: '₹1,699',
    desc: 'Maximum topspin dip and looping power. Designed to dominate rallies from mid and deep table.',
    color: 'orange',
  },
  {
    id: 's3',
    style: 'SPEED',
    name: 'Speed Setup',
    icon: SpeedLightningIcon,
    blade: 'DHS Hurricane Long 5',
    rubber: 'Butterfly Tenergy 64',
    price: '₹8,149',
    bladePrice: '₹4,299',
    rubberPrice: '₹3,850',
    desc: 'Blistering acceleration with a flat, direct trajectory for aggressive close-to-table attacks.',
    color: 'cream',
  },
  {
    id: 's4',
    style: 'CONTROL',
    name: 'Control Setup',
    icon: ControlPrecisionIcon,
    blade: 'Stiga Clipper Wood',
    rubber: 'Yasaka Rakza 7 Soft',
    price: '₹5,199',
    bladePrice: '₹3,499',
    rubberPrice: '₹1,699',
    desc: 'Extended ball dwell time, pin-point placement, and dependable touch in pressure rallies.',
    color: 'cream',
  },
  {
    id: 's5',
    style: 'OFFENSIVE',
    name: 'Offensive Setup',
    icon: OffensiveStrikeIcon,
    blade: 'Butterfly Timo Boll ALC',
    rubber: 'Butterfly Tenergy 05',
    price: '₹16,349',
    bladePrice: '₹12,499',
    rubberPrice: '₹3,850',
    desc: 'Tour-proven offensive combination balancing explosive energy transfer with sharp spin feedback.',
    color: 'orange',
  },
  {
    id: 's6',
    style: 'DEFENSIVE',
    name: 'Defensive Setup',
    icon: DefensiveShieldIcon,
    blade: 'Tibhar Stratus Power',
    rubber: 'Donic Slice 40 CD',
    price: '₹6,299',
    bladePrice: '₹4,899',
    rubberPrice: '₹1,400',
    desc: 'High vibration absorption and maximum backspin reversal for modern defensive chopping.',
    color: 'cream',
  },
];

export default function BuildYourSetup() {
  return (
    <section className="build-section" id="build-setup">
      <div className="build-watermark" aria-hidden="true">SETUP</div>

      <div className="build-header">
        <span className="text-label">[08] — BUILD YOUR SETUP</span>
        <h2 className="build-title text-display">RECOMMENDED<br />COMBINATIONS</h2>
        <p className="build-sub">
          CURATED RACKET + RUBBER COMBINATIONS BUILT AROUND SPECIFIC PLAYING STYLES.<br />
          WHOLESALE PRICING AT RETAIL QUANTITIES — READY TO PLAY OUT OF THE BOX.
        </p>
      </div>

      <div className="setup-grid">
        {SETUPS.map((s) => {
          const IconComponent = s.icon;
          return (
            <div key={s.id} className={`setup-card setup-card--${s.color}`} id={`setup-${s.id}`}>
              {/* Card Header with 48x48 setup icon */}
              <div className="setup-card-top">
                <div className="setup-card-icon-title">
                  <div className="setup-icon-wrap" title={s.name}>
                    <IconComponent
                      size={48}
                      className="setup-card-48-icon"
                      color={s.color === 'orange' ? 'var(--orange)' : 'var(--cream)'}
                    />
                  </div>
                  <div>
                    <span className="setup-style text-label">[{s.style}]</span>
                    <h3 className="setup-name-heading">{s.name}</h3>
                  </div>
                </div>
              </div>

              {/* Recommended Racket + Rubber */}
              <div className="setup-combo">
                <div className="setup-combo-item">
                  <span className="setup-combo-tag">RACKET</span>
                  <span className="setup-combo-name">{s.blade}</span>
                  <span className="setup-combo-price">{s.bladePrice}</span>
                </div>
                <span className="setup-plus">+</span>
                <div className="setup-combo-item">
                  <span className="setup-combo-tag">RUBBER</span>
                  <span className="setup-combo-name">{s.rubber}</span>
                  <span className="setup-combo-price">{s.rubberPrice}</span>
                </div>
              </div>

              <p className="setup-desc">{s.desc}</p>

              <div className="setup-card-footer">
                <span className="setup-total">{s.price}</span>
                <a href={`/customize?setup=${s.id}`} className="setup-cta-btn" id={`setup-btn-${s.id}`}>
                  Explore Setup →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="build-footer-cta">
        <a href="/customize" className="btn-primary" id="build-customize-btn">
          CUSTOMIZE YOUR OWN SETUP →
        </a>
      </div>
    </section>
  );
}
