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
  const [racketStyle, setRacketStyle] = useState('BEGINNER');
  const [rubberStyle, setRubberStyle] = useState('CONTROL');
  const [selectedRacket, setSelectedRacket] = useState(RACKET_PICKS.BEGINNER);
  const [selectedRubber, setSelectedRubber] = useState(RUBBER_PICKS.CONTROL);

  const activeRacket = selectedRacket || RACKET_PICKS[racketStyle];
  const activeRubber = selectedRubber || RUBBER_PICKS[rubberStyle];

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
        <p style={{ color: 'rgba(232, 224, 208, 0.65)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.05em', margin: 0 }}>
          Explore table tennis setups by playing level, racket style and rubber performance. Find the components that fit the way you play.
        </p>
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
