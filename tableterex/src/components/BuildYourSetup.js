'use client';
import {
  BeginnerSetupIsometricIcon,
  SpinSetupIsometricIcon,
  SpeedSetupIsometricIcon,
  ControlSetupIsometricIcon,
  OffensiveSetupIsometricIcon,
  DefensiveSetupIsometricIcon,
} from '@/components/icons';

const SETUPS = [
  {
    id: 's1',
    intent: "I'M NEW",
    range: 'UNDER ₹7K',
    style: 'BEGINNER · ALL-ROUND',
    name: 'All-Round Entry',
    icon: BeginnerSetupIsometricIcon,
    blade: 'Donic Waldner Allplay',
    fhRubber: 'Donic Liga',
    bhRubber: 'Donic Liga',
    weight: '~170G',
    bladePrice: '₹5,089 MRP',
    rubberPrice: '₹2,275 MRP',
    totalPrice: '₹9,639',
    desc: 'A balanced combination built around control, feel and easy-to-manage speed for players developing their fundamentals.',
    color: 'cream',
  },
  {
    id: 's2',
    intent: 'I WANT CONTROL',
    range: 'ALL-ROUND · SOFTER SETUP',
    style: 'CONTROL',
    name: 'Pure Control',
    icon: ControlSetupIsometricIcon,
    blade: 'Donic Waldner Allplay',
    fhRubber: 'Donic Twingo Plus',
    bhRubber: 'Donic Twingo Plus',
    weight: '~168G',
    bladePrice: '₹5,089 MRP',
    rubberPrice: '₹2,239 MRP',
    totalPrice: '₹9,567',
    desc: 'A softer all-round combination focused on control, touch and consistency in the short game.',
    color: 'cream',
  },
  {
    id: 's3',
    intent: 'I WANT MORE SPIN',
    range: '₹7K–₹12K',
    style: 'SPIN',
    name: 'Heavy Spin Looper',
    icon: SpinSetupIsometricIcon,
    blade: 'Tibhar Gravity Offensive',
    fhRubber: 'Nittaku Hurricane 8-80 Power',
    bhRubber: 'Nittaku Hurricane 8-80 Power',
    weight: '~180G',
    bladePrice: '₹5,135 MRP',
    rubberPrice: '₹6,129 MRP',
    totalPrice: '₹17,393',
    desc: 'A spin-focused combination pairing an offensive blade with a grippy hybrid rubber for aggressive topspin play.',
    color: 'orange',
  },
  {
    id: 's4',
    intent: 'I WANT MORE SPEED',
    range: '₹10K–₹20K',
    style: 'SPEED',
    name: 'Carbospeed Attacker',
    icon: SpeedSetupIsometricIcon,
    blade: 'Donic Original Carbospeed',
    fhRubber: 'Butterfly Tenergy 64',
    bhRubber: 'Butterfly Tenergy 64',
    weight: '~182G',
    bladePrice: '₹8,639 MRP',
    rubberPrice: '₹10,600 MRP',
    totalPrice: '₹29,839',
    desc: 'A fast carbon combination designed for players who want more pace and direct attacking response.',
    color: 'cream',
  },
  {
    id: 's5',
    intent: 'I PLAY OFFENSIVE',
    range: '₹15K+',
    style: 'OFFENSIVE',
    name: 'Timo Boll ALC Pro',
    icon: OffensiveSetupIsometricIcon,
    blade: 'Butterfly Timo Boll ALC',
    fhRubber: 'Butterfly Tenergy 05',
    bhRubber: 'Butterfly Tenergy 05',
    weight: '~184G',
    bladePrice: '₹24,200 MRP',
    rubberPrice: '₹10,600 MRP',
    totalPrice: '₹45,400',
    desc: 'A premium offensive combination built around the Timo Boll ALC blade and Tenergy 05 on both sides.',
    color: 'orange',
  },
  {
    id: 's6',
    intent: 'I PLAY DEFENSIVE',
    range: 'LONG-PIPS / DEFENSIVE',
    style: 'DEFENSIVE',
    name: 'Modern Chopper',
    icon: DefensiveSetupIsometricIcon,
    blade: 'Nittaku Flyatt Carbon',
    fhRubber: 'Donic Spike P2',
    bhRubber: 'Donic Spike P2',
    weight: '~165G',
    bladePrice: '₹6,129 MRP',
    rubberPrice: '₹3,874 MRP',
    totalPrice: '₹13,877',
    desc: 'A defensive combination using a specialized blade and long-pimple rubber for controlled defensive play and spin variation.',
    color: 'cream',
  },
];

export default function BuildYourSetup() {
  return (
    <section className="build-section" id="build-setup">
      <div className="build-watermark" aria-hidden="true">SETUP</div>

      <div className="build-header">
        <span className="text-label">RECOMMENDED COMBINATIONS</span>
        <h2 className="build-title text-display">BUILD YOUR<br />GAME</h2>
        <p className="build-sub">
          Curated racket and rubber combinations built around specific playing styles, from controlled all-round setups to high-speed offensive builds.
        </p>
      </div>

      <div className="setup-grid">
        {SETUPS.map((s) => {
          const IconComponent = s.icon;
          return (
            <div key={s.id} className={`setup-card setup-card--${s.color}`} id={`setup-${s.id}`}>
              {/* Card Header with intent badge & icon */}
              <div className="setup-card-top">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="setup-intent-badge">{s.intent}</span>
                  <span className="setup-range-tag">{s.range}</span>
                </div>
                <div className="setup-card-icon-title">
                  <div className="setup-icon-wrap" title={s.name}>
                    <IconComponent
                      size={52}
                      className="setup-card-48-icon"
                      variant="orange"
                    />
                  </div>
                  <div>
                    <span className="setup-style text-label">[{s.style}]</span>
                    <h3 className="setup-name-heading">{s.name}</h3>
                  </div>
                </div>
              </div>

              {/* Exact Specs Breakdown */}
              <div className="setup-combo">
                <div className="setup-combo-item">
                  <span className="setup-combo-tag">BLADE</span>
                  <span className="setup-combo-name">{s.blade}</span>
                  <span className="setup-combo-price">{s.bladePrice}</span>
                </div>
                <div className="setup-combo-item">
                  <span className="setup-combo-tag">FH RUBBER</span>
                  <span className="setup-combo-name">{s.fhRubber}</span>
                  <span className="setup-combo-price">{s.rubberPrice}</span>
                </div>
                <div className="setup-combo-item">
                  <span className="setup-combo-tag">BH RUBBER</span>
                  <span className="setup-combo-name">{s.bhRubber}</span>
                  <span className="setup-combo-price">{s.rubberPrice}</span>
                </div>
                <div className="setup-combo-item">
                  <span className="setup-combo-tag">WEIGHT</span>
                  <span className="setup-combo-name" style={{ color: 'var(--orange)' }}>{s.weight}</span>
                  <span className="setup-combo-price">PRO BALANCE</span>
                </div>
              </div>

              <p className="setup-desc">{s.desc}</p>

              <div className="setup-card-footer">
                <div>
                  <span style={{ display: 'block', fontSize: '0.52rem', color: 'var(--gray-light)', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)' }}>APPROX. TOTAL</span>
                  <span className="setup-total">{s.totalPrice}</span>
                </div>
                <a href="/products" className="setup-cta-btn" id={`setup-btn-${s.id}`}>
                  BUILD THIS SETUP →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="build-footer-cta">
        <a href="/products" className="btn-primary" id="build-customize-btn">
          CUSTOMIZE YOUR OWN SETUP →
        </a>
      </div>
    </section>
  );
}
