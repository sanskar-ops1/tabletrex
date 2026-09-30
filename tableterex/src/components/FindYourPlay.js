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
    desc: 'Targeted control & forgiving flex for learning fundamental stroke mechanics.',
  },
  {
    id: 'INTERMEDIATE',
    name: 'Intermediate',
    icon: IntermediateSetupIsometricIcon,
    desc: 'Progressive speed with expanded sweet spot to transition from rallies to attack.',
  },
  {
    id: 'ADVANCED',
    name: 'Advanced',
    icon: AdvanceSetupIsometricIcon,
    desc: 'Elite carbon stiffness and acute tactile feedback for tournament match play.',
  },
  {
    id: 'OFFENSIVE',
    name: 'Offensive',
    icon: OffensiveSetupIsometricIcon,
    desc: 'Aggressive forward strike dynamics engineered for high-velocity looping & kills.',
  },
  {
    id: 'DEFENSIVE',
    name: 'Defensive',
    icon: DefensiveSetupIsometricIcon,
    desc: 'Max dampening shield profile to absorb incoming loops and reset long chops.',
  },
  {
    id: 'ALL-ROUND',
    name: 'All-Round',
    icon: AllRoundSetupIsometricIcon,
    desc: 'Harmonic equilibrium of spin, speed, and placement across every table zone.',
  },
];

const RUBBER_CARDS = [
  {
    id: 'SPIN',
    name: 'Spin',
    icon: SpinSetupIsometricIcon,
    desc: 'High-friction tacky topsheet for aggressive curve and looping arc trajectory.',
  },
  {
    id: 'SPEED',
    name: 'Speed',
    icon: SpeedSetupIsometricIcon,
    desc: 'Explosive tensor spring sponge for blistering flat drives and quick counters.',
  },
  {
    id: 'CONTROL',
    name: 'Control',
    icon: ControlSetupIsometricIcon,
    desc: 'Precision target dwell time for sharp short-game placement and serve returns.',
  },
  {
    id: 'OFFENSIVE',
    name: 'Offensive',
    icon: OffensiveSetupIsometricIcon,
    desc: 'Direct forward kinetic energy transfer on high-impact attacking loops.',
  },
  {
    id: 'DEFENSIVE',
    name: 'Defensive',
    icon: DefensiveSetupIsometricIcon,
    desc: 'Energy-absorbing sponge matrix to neutralize heavy incoming topspin.',
  },
  {
    id: 'ALL-ROUND',
    name: 'All-Round',
    icon: AllRoundSetupIsometricIcon,
    desc: 'Harmonic balance of tension and softness for versatile transition play.',
  },
];

const RACKET_PICKS = {
  BEGINNER: { name: 'Stiga Clipper Wood', brand: 'STIGA', price: '₹3,499', desc: 'PERFECT FIRST BLADE. FULL WOOD, GREAT FEEL.' },
  INTERMEDIATE: { name: 'Donic Waldner Senso', brand: 'DONIC', price: '₹5,999', desc: 'UPGRADE READY. CARBON ASSIST FOR MORE PACE.' },
  ADVANCED: { name: 'Butterfly TB-ALC', brand: 'BUTTERFLY', price: '₹12,499', desc: 'ARYLATE-CARBON. WORLD-CLASS PERFORMANCE.' },
  OFFENSIVE: { name: 'DHS Hurricane Long 5', brand: 'DHS', price: '₹4,299', desc: 'POWER AND SPEED. MADE FOR ATTACKERS.' },
  DEFENSIVE: { name: 'Tibhar Stratus Power', brand: 'TIBHAR', price: '₹4,899', desc: 'CONTROL-FOCUSED. EXCELLENT FOR CHOPPERS.' },
  'ALL-ROUND': { name: 'Cornilleau Vari 400', brand: 'CORNILLEAU', price: '₹3,200', desc: 'BALANCED FOR EVERY STYLE OF PLAY.' },
};

const RUBBER_PICKS = {
  SPIN: { name: 'DHS Hurricane 3', brand: 'DHS', price: '₹1,299', desc: 'KING OF SPIN. CHINESE TACKY SHEET.' },
  SPEED: { name: 'Butterfly Tenergy 64', brand: 'BUTTERFLY', price: '₹3,850', desc: 'FASTEST TENSOR ON THE MARKET.' },
  CONTROL: { name: 'Yasaka Rakza 7 Soft', brand: 'YASAKA', price: '₹1,699', desc: 'FORGIVING, CONSISTENT, RELIABLE.' },
  OFFENSIVE: { name: 'Butterfly Tenergy 05', brand: 'BUTTERFLY', price: '₹3,850', desc: 'SPIN + SPEED COMBO. #1 WORLDWIDE.' },
  DEFENSIVE: { name: 'Donic Slice 40', brand: 'DONIC', price: '₹1,400', desc: 'EXCELLENT CHOP CONTROL AND PLACEMENT.' },
  'ALL-ROUND': { name: 'Xiom Vega Asia', brand: 'XIOM', price: '₹2,100', desc: 'TENSOR TECH. SPIN, SPEED, CONTROL BALANCED.' },
};

export default function FindYourPlay() {
  const [racketStyle, setRacketStyle] = useState('BEGINNER');
  const [rubberStyle, setRubberStyle] = useState('SPIN');
  const [selectedRacket, setSelectedRacket] = useState(CATEGORY_RACKETS.BEGINNER[0]);
  const [selectedRubber, setSelectedRubber] = useState(CATEGORY_RUBBERS.SPIN[0]);

  const activeRacket = selectedRacket || CATEGORY_RACKETS[racketStyle]?.[0] || RACKET_PICKS[racketStyle];
  const activeRubber = selectedRubber || CATEGORY_RUBBERS[rubberStyle]?.[0] || RUBBER_PICKS[rubberStyle];

  const handleCategoryChange = (newCategory) => {
    setRacketStyle(newCategory);
    if (CATEGORY_RACKETS[newCategory]) {
      setSelectedRacket(CATEGORY_RACKETS[newCategory][0]);
    }
  };

  const handleRubberCategoryChange = (newStyle) => {
    setRubberStyle(newStyle);
    if (CATEGORY_RUBBERS[newStyle]) {
      setSelectedRubber(CATEGORY_RUBBERS[newStyle][0]);
    }
  };

  return (
    <section className="finder-section" id="find-your-play">
      <div className="finder-watermark" aria-hidden="true">PLAY</div>

      <div className="finder-grid">
        {/* ── 05: FIND YOUR RACKET ── */}
        <div className="finder-col" id="find-racket">


          {/* ── 3D Racket Viewer ── */}
          <RacketViewer selectedLevel={racketStyle} selectedRacket={activeRacket} />

          {/* ── Selected Racket Details (Dynamically updates with card & category) ── */}
          <div className="finder-result">
            <div className="finder-result-main">
              <div>
                <span className="finder-result-label">{activeRacket.brand}</span>
                <span className="finder-result-name">{activeRacket.name}</span>
              </div>
              <span className="finder-result-price">{activeRacket.price}</span>
            </div>
            <p className="finder-result-desc">{activeRacket.desc}</p>
            <a href="/rackets" className="finder-cta" id="finder-racket-cta">
              EXPLORE THIS RACKET →
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
                >
                  <div className="finder-card-icon-wrap">
                    <IconComponent
                      size={46}
                      variant={isSelected ? 'orange' : 'cream'}
                      className="finder-card-icon"
                    />
                  </div>
                  <span className="finder-card-title">{card.name}</span>
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
                >
                  <div className="finder-card-icon-wrap">
                    <IconComponent
                      size={46}
                      variant={isSelected ? 'orange' : 'cream'}
                      className="finder-card-icon"
                    />
                  </div>
                  <span className="finder-card-title">{card.name}</span>
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
