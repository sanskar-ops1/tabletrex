'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import {
  BeginnerSetupIsometricIcon,
  IntermediateSetupIsometricIcon,
  AdvanceSetupIsometricIcon,
  AllRoundSetupIsometricIcon,
  SpinSetupIsometricIcon,
  SpeedSetupIsometricIcon,
  ControlSetupIsometricIcon,
  OffensiveSetupIsometricIcon,
  DefensiveSetupIsometricIcon,
} from '@/components/icons';

import CircularRacketCarousel, { CATEGORY_RACKETS } from './CircularRacketCarousel';
import CircularRubberCarousel, { CATEGORY_RUBBERS } from './CircularRubberCarousel';

// Lazy-load the heavy 3D viewers (Three.js) only on client
const RacketViewer = dynamic(
  () => import('@/components/RacketViewer'),
  { ssr: false, loading: () => <div className="rv-placeholder" /> }
);
const RubberViewer = dynamic(
  () => import('@/components/RubberViewer'),
  { ssr: false, loading: () => <div className="rv-placeholder" /> }
);

const RACKET_CARDS = [
  {
    id: 'BEGINNER',
    name: 'Beginner',
    icon: BeginnerSetupIsometricIcon,
    desc: 'Easy-to-control options for players starting out.',
  },
  {
    id: 'INTERMEDIATE',
    name: 'Intermediate',
    icon: IntermediateSetupIsometricIcon,
    desc: 'Balanced equipment for developing technique and consistency.',
  },
  {
    id: 'ADVANCED',
    name: 'Advanced',
    icon: AdvanceSetupIsometricIcon,
    desc: 'Performance-focused equipment for experienced players.',
  },
  {
    id: 'OFFENSIVE',
    name: 'Offensive',
    icon: OffensiveSetupIsometricIcon,
    desc: 'Built for aggressive attacking and topspin play.',
  },
  {
    id: 'DEFENSIVE',
    name: 'Defensive',
    icon: DefensiveSetupIsometricIcon,
    desc: 'Focused on control, variation and defensive technique.',
  },
  {
    id: 'ALL-ROUND',
    name: 'All-Round',
    icon: AllRoundSetupIsometricIcon,
    desc: 'A balanced mix of speed, control and versatility.',
  },
];

const RUBBER_CARDS = [
  {
    id: 'SPIN',
    name: 'Spin',
    icon: SpinSetupIsometricIcon,
    desc: 'High-grip options for generating more rotation.',
  },
  {
    id: 'SPEED',
    name: 'Speed',
    icon: SpeedSetupIsometricIcon,
    desc: 'Rubbers designed for faster attacking play.',
  },
  {
    id: 'CONTROL',
    name: 'Control',
    icon: ControlSetupIsometricIcon,
    desc: 'More manageable response for precision and consistency.',
  },
  {
    id: 'OFFENSIVE',
    name: 'Offensive',
    icon: OffensiveSetupIsometricIcon,
    desc: 'For aggressive topspin and attacking strokes.',
  },
  {
    id: 'DEFENSIVE',
    name: 'Defensive',
    icon: DefensiveSetupIsometricIcon,
    desc: 'For controlled defensive play and variation.',
  },
  {
    id: 'ALL-ROUND',
    name: 'All-Round',
    icon: AllRoundSetupIsometricIcon,
    desc: 'Balanced performance across different strokes.',
  },
];

const PRICE_TIERS = [
  {
    id: 'under-5k',
    label: 'UNDER ₹5,000',
    sub: 'For newer players',
    pairingTotal: 'DONIC WALDNER ALLPLAY + DONIC LIGA',
    bladeInfo: 'Donic Waldner Allplay',
    rubberInfo: 'Donic Liga',
    totalMrp: '₹9,639',
    totalNote: 'A balanced entry-level setup offering supreme ball control and touch for mastering table tennis fundamentals.',
    racket: {
      name: 'Donic Waldner Allplay',
      brand: 'DONIC',
      price: '₹5,089 MRP',
      desc: 'All-round classic wood blade with supreme touch and forgiving flex for mastering fundamentals.',
      img: '/images/donic-blade.jpg',
    },
    rubber: {
      name: 'Donic Liga',
      brand: 'DONIC',
      price: '₹2,275 MRP',
      desc: 'High-grip elastic surface engineered for spin development and consistent rally control.',
      img: '/images/red-rubber.jpg',
    },
  },
  {
    id: '5k-10k',
    label: '₹5,000–₹10,000',
    sub: 'For developing players',
    pairingTotal: 'TIBHAR GRAVITY ALL + NITTAKU FASTARC S1',
    bladeInfo: 'Tibhar Gravity All',
    rubberInfo: 'Nittaku Fastarc S1',
    totalMrp: '₹13,108',
    totalNote: 'Balanced European all-round frame paired with soft Japanese tension rubber for progressive attacking consistency.',
    racket: {
      name: 'Tibhar Gravity All',
      brand: 'TIBHAR',
      price: '₹3,850 MRP',
      desc: 'Balanced European all-round offensive frame with generous sweet spot for transition play.',
      img: '/images/why-hero-racket.jpg',
    },
    rubber: {
      name: 'Nittaku Fastarc S1',
      brand: 'NITTAKU',
      price: '₹4,629 MRP',
      desc: 'Soft tension sponge producing explosive speed and high ball arc with crisp sound.',
      img: '/images/black-rubber.jpg',
    },
  },
  {
    id: '10k-20k',
    label: '₹10,000–₹20,000',
    sub: 'Advanced setups',
    pairingTotal: 'NITTAKU ACOUSTIC FL + FASTARC G-1',
    bladeInfo: 'Nittaku Acoustic FL',
    rubberInfo: 'Nittaku Fastarc G-1',
    totalMrp: '₹28,677',
    totalNote: 'Acoustic instrument lutherie technology paired with Japan’s #1 power tensor rubber for high-rotation loops.',
    racket: {
      name: 'Nittaku Acoustic FL',
      brand: 'NITTAKU',
      price: '₹16,979 MRP',
      desc: 'Legendary string-instrument lutherie technology delivering pure feedback and deep resonance.',
      img: '/images/donic-blade.jpg',
    },
    rubber: {
      name: 'Nittaku Fastarc G-1',
      brand: 'NITTAKU',
      price: '₹5,849 MRP',
      desc: 'Japan #1 power tensor rubber delivering ferocious topspin rotation on looping attack.',
      img: '/images/red-rubber.jpg',
    },
  },
  {
    id: '20k-plus',
    label: '₹20,000+',
    sub: 'Premium setups',
    pairingTotal: 'BUTTERFLY TIMO BOLL ALC + TENERGY 05',
    bladeInfo: 'Butterfly Timo Boll ALC',
    rubberInfo: 'Butterfly Tenergy 05',
    totalMrp: '₹45,400',
    totalNote: 'A premium offensive combination for players looking for high speed, spin and attacking performance.',
    racket: {
      name: 'Butterfly Timo Boll ALC',
      brand: 'BUTTERFLY',
      price: '₹24,200 MRP',
      desc: 'Tour-standard Arylate-Carbon tournament blade balancing power, dampening, and lethal loops.',
      img: '/images/pro-blade.jpg',
    },
    rubber: {
      name: 'Butterfly Tenergy 05',
      brand: 'BUTTERFLY',
      price: '₹10,600 MRP',
      desc: 'The gold standard Spring Sponge rubber worldwide. Benchmark for high-tension spin attack.',
      img: '/images/red-rubber.jpg',
    },
  },
];

const RACKET_PICKS = {
  BEGINNER: { name: 'Donic Waldner Allplay', brand: 'DONIC', price: '₹5,089 MRP', desc: 'PERFECT FIRST BLADE. ALL-ROUND SWEDISH TOUCH.' },
  INTERMEDIATE: { name: 'Tibhar Gravity All', brand: 'TIBHAR', price: '₹3,850 MRP', desc: 'UPGRADE READY. PROGRESSIVE SWEET SPOT FOR PACE.' },
  ADVANCED: { name: 'Nittaku Acoustic FL', brand: 'NITTAKU', price: '₹16,979 MRP', desc: 'ACOUSTIC LUTHERIE. PURE TACTILE RESONANCE.' },
  OFFENSIVE: { name: 'Butterfly Timo Boll ALC', brand: 'BUTTERFLY', price: '₹24,200 MRP', desc: 'ARYLATE-CARBON. WORLD-CLASS TOURNAMENT STANDARD.' },
  DEFENSIVE: { name: 'Nittaku Flyatt Carbon', brand: 'NITTAKU', price: '₹6,129 MRP', desc: 'DEFENSIVE CARBON. SUPREME DAMPENING FOR CHOPPERS.' },
  'ALL-ROUND': { name: 'Donic Waldner Off 2016', brand: 'DONIC', price: '₹6,819 MRP', desc: 'JAN-OVE WALDNER EDITION. BALANCED FOR EVERY ZONE.' },
};

const RUBBER_PICKS = {
  SPIN: { name: 'Nittaku Hurricane 8-80 Power', brand: 'NITTAKU', price: '₹6,129 MRP', desc: 'STICKY-ELASTIC TACKY TENSOR. DEADLY TOPSPIN ARC.' },
  SPEED: { name: 'Tibhar Evolution MX-P', brand: 'TIBHAR', price: '₹7,215 MRP', desc: 'RED POWER SPONGE. MAXIMUM CATAPULT ACCELERATION.' },
  CONTROL: { name: 'Donic Liga', brand: 'DONIC', price: '₹2,275 MRP', desc: 'HIGH-GRIP ELASTIC SHEET FOR PINPOINT TOUCH.' },
  OFFENSIVE: { name: 'Butterfly Tenergy 05', brand: 'BUTTERFLY', price: '₹10,600 MRP', desc: 'SPRING SPONGE TENSOR. #1 ON THE WORLD PRO TOUR.' },
  DEFENSIVE: { name: 'Donic Spike P2', brand: 'DONIC', price: '₹4,109 MRP', desc: 'LONG-PIPS WITH SOFT SPONGE FOR HEAVY BACKSPIN.' },
  'ALL-ROUND': { name: 'Nittaku Fastarc S1', brand: 'NITTAKU', price: '₹4,629 MRP', desc: 'SOFT-FEEL JAPANESE TENSOR FOR CONSISTENT RALLIES.' },
};

export default function FindYourPlay() {
  const [activeTier, setActiveTier] = useState('under-5k');
  const [racketStyle, setRacketStyle] = useState('BEGINNER');
  const [rubberStyle, setRubberStyle] = useState('CONTROL');
  const [selectedRacket, setSelectedRacket] = useState(PRICE_TIERS[0].racket);
  const [selectedRubber, setSelectedRubber] = useState(PRICE_TIERS[0].rubber);

  const activeRacket = selectedRacket || PRICE_TIERS.find(t => t.id === activeTier)?.racket || RACKET_PICKS[racketStyle];
  const activeRubber = selectedRubber || PRICE_TIERS.find(t => t.id === activeTier)?.rubber || RUBBER_PICKS[rubberStyle];

  const handleTierChange = (tierId) => {
    setActiveTier(tierId);
    const tier = PRICE_TIERS.find(t => t.id === tierId);
    if (tier) {
      setSelectedRacket(tier.racket);
      setSelectedRubber(tier.rubber);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setRacketStyle(newCategory);
    if (RACKET_PICKS[newCategory]) {
      setSelectedRacket(RACKET_PICKS[newCategory]);
    }
  };

  const handleRubberCategoryChange = (newStyle) => {
    setRubberStyle(newStyle);
    if (RUBBER_PICKS[newStyle]) {
      setSelectedRubber(RUBBER_PICKS[newStyle]);
    }
  };

  return (
    <section className="finder-section" id="find-your-play">
            {/* ── Section Header Box with Price Tiers ── */}
      <div className="finder-header-box" style={{ maxWidth: '1400px', margin: '0 auto 36px', padding: '0 20px' }}>
        <span className="text-label" style={{ color: 'var(--orange)', letterSpacing: '0.2em' }}>SETUP DISCOVERY</span>
        <h2 className="text-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--cream)', lineHeight: 1, margin: '8px 0 16px' }}>
          FIND YOUR SETUP
        </h2>
        <p style={{ color: 'rgba(232, 224, 208, 0.65)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.05em', marginBottom: '20px' }}>
          Explore table tennis setups by budget, playing level, racket style and rubber performance. Find the components that fit the way you play.
        </p>
        <div className="finder-tiers-selector" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {PRICE_TIERS.map((tier) => (
            <button
              key={tier.id}
              type="button"
              className={`finder-tier-tab ${activeTier === tier.id ? 'active' : ''}`}
              onClick={() => handleTierChange(tier.id)}
            >
              <span className="finder-tier-name">{tier.label}</span>
              <span className="finder-tier-sub">{tier.sub}</span>
            </button>
          ))}
        </div>

        {/* Active Tier Featured Setup Banner */}
        {(() => {
          const tier = PRICE_TIERS.find((t) => t.id === activeTier);
          if (!tier) return null;
          return (
            <div className="finder-tier-active-banner" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 74, 0, 0.3)',
              borderRadius: '4px',
              padding: '18px 24px',
              marginTop: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <span style={{ color: 'var(--orange)', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', display: 'block', marginBottom: '6px' }}>
                  FEATURED SETUP · {tier.label}
                </span>
                <span style={{ color: 'var(--cream)', fontFamily: 'var(--font-display)', fontSize: '1.25rem', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>
                  {tier.pairingTotal}
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(232, 224, 208, 0.85)', marginBottom: '8px' }}>
                  <span>Blade: <strong style={{ color: 'var(--cream)' }}>{tier.bladeInfo}</strong></span>
                  <span>•</span>
                  <span>Rubber: <strong style={{ color: 'var(--cream)' }}>{tier.rubberInfo}</strong></span>
                  <span>•</span>
                  <span>Total MRP: <strong style={{ color: 'var(--orange)' }}>{tier.totalMrp}</strong></span>
                </div>
                <p style={{ color: 'rgba(232, 224, 208, 0.7)', fontSize: '0.78rem', margin: 0, lineHeight: 1.5 }}>
                  {tier.totalNote}
                </p>
              </div>

              <div>
                <a
                  href="/products"
                  className="btn-primary"
                  style={{
                    padding: '10px 20px',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                  id={`finder-explore-${tier.id}`}
                >
                  EXPLORE SETUP →
                </a>
              </div>
            </div>
          );
        })()}
      </div>

      <div className="finder-grid">
        {/* ── 05: FIND YOUR RACKET ── */}
        <div className="finder-col" id="find-racket">

          {/* ── 3D Racket Viewer ── */}
          <RacketViewer selectedLevel={racketStyle} selectedRacket={activeRacket} />

          {/* ── Selected Racket Details ── */}
          <div className="finder-result">
            <div className="finder-result-main">
              <div>
                <span className="finder-result-label">{activeRacket.brand}</span>
                <span className="finder-result-name">{activeRacket.name}</span>
              </div>
              <span className="finder-result-price">{activeRacket.price}</span>
            </div>
            <p className="finder-result-desc">{activeRacket.desc}</p>
            <a href="/products" className="finder-cta" id="finder-racket-cta">
              EXPLORE THIS BLADE →
            </a>
          </div>

          {/* ── 3D Circular Racket Cards Carousel (Rackets within current category) ── */}
          <CircularRacketCarousel
            category={racketStyle}
            onSelectRacket={setSelectedRacket}
          />

          {/* ── 6 Performance Cards (Racket Categories) ── */}
          <div className="finder-cards-grid" role="group" aria-label="Racket style selection" style={{ marginTop: '14px' }}>
            {RACKET_CARDS.map((card) => {
              const IconComponent = card.icon;
              const isSelected = racketStyle === card.id;
              return (
                <button
                  key={card.id}
                  type="button"
                  className={`finder-style-card${isSelected ? ' active' : ''}`}
                  onClick={() => handleCategoryChange(card.id)}
                  id={`racket-card-${card.id.toLowerCase()}`}
                  aria-pressed={isSelected}
                  title={card.desc}
                >
                  <div className="finder-card-icon-wrap">
                    <IconComponent
                      size={46}
                      variant={isSelected ? 'orange' : 'cream'}
                      className="finder-card-icon"
                    />
                  </div>
                  <span className="finder-card-title">{card.name}</span>
                  <p className="finder-card-desc">{card.desc}</p>
                  <div className="finder-card-indicator" aria-hidden="true">
                    <span className="finder-card-dot" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="finder-divider" aria-hidden="true">
          <span>VS</span>
        </div>

        {/* ── 06: FIND YOUR RUBBER ── */}
        <div className="finder-col" id="find-rubber">

          {/* ── 3D Rubber Viewer ── */}
          <RubberViewer selectedStyle={rubberStyle} selectedRubber={activeRubber} />

          {/* ── Selected Rubber Result (dynamically updates with carousel + category) ── */}
          <div className="finder-result">
            <div className="finder-result-main">
              <div>
                <span className="finder-result-label">{activeRubber.brand}</span>
                <span className="finder-result-name">{activeRubber.name}</span>
              </div>
              <span className="finder-result-price">{activeRubber.price}</span>
            </div>
            <p className="finder-result-desc">{activeRubber.desc}</p>
            <a href="/rubber" className="finder-cta" id="finder-rubber-cta">
              EXPLORE THIS RUBBER →
            </a>
          </div>

          {/* ── 3D Circular Rubber Cards Carousel ── */}
          <CircularRubberCarousel
            category={rubberStyle}
            onSelectRubber={setSelectedRubber}
          />

          {/* ── 6 Performance Cards ── */}
          <div className="finder-cards-grid" role="group" aria-label="Rubber performance selection">
            {RUBBER_CARDS.map((card) => {
              const IconComponent = card.icon;
              const isSelected = rubberStyle === card.id;
              return (
                <button
                  key={card.id}
                  type="button"
                  className={`finder-style-card${isSelected ? ' active' : ''}`}
                  onClick={() => handleRubberCategoryChange(card.id)}
                  id={`rubber-card-${card.id.toLowerCase()}`}
                  aria-pressed={isSelected}
                  title={card.desc}
                >
                  <div className="finder-card-icon-wrap">
                    <IconComponent
                      size={46}
                      variant={isSelected ? 'orange' : 'cream'}
                      className="finder-card-icon"
                    />
                  </div>
                  <span className="finder-card-title">{card.name}</span>
                  <p className="finder-card-desc">{card.desc}</p>
                  <div className="finder-card-indicator" aria-hidden="true">
                    <span className="finder-card-dot" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
