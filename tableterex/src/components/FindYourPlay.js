'use client';
import { useState } from 'react';
import {
  BeginnerGuideIcon,
  ProgressUpIcon,
  PerformanceStarIcon,
  OffensiveStrikeIcon,
  DefensiveShieldIcon,
  AllRoundBalanceIcon,
  SpinSpiralIcon,
  SpeedLightningIcon,
  ControlPrecisionIcon,
  OffensiveImpactIcon,
  RubberDefensiveShieldIcon,
  RubberEquilibriumIcon,
} from '@/components/icons';

const RACKET_CARDS = [
  {
    id: 'BEGINNER',
    name: 'Beginner',
    icon: BeginnerGuideIcon,
    desc: 'Targeted control & forgiving flex for learning fundamental stroke mechanics.',
  },
  {
    id: 'INTERMEDIATE',
    name: 'Intermediate',
    icon: ProgressUpIcon,
    desc: 'Progressive speed with expanded sweet spot to transition from rallies to attack.',
  },
  {
    id: 'ADVANCED',
    name: 'Advanced',
    icon: PerformanceStarIcon,
    desc: 'Elite carbon stiffness and acute tactile feedback for tournament match play.',
  },
  {
    id: 'OFFENSIVE',
    name: 'Offensive',
    icon: OffensiveStrikeIcon,
    desc: 'Aggressive forward strike dynamics engineered for high-velocity looping & kills.',
  },
  {
    id: 'DEFENSIVE',
    name: 'Defensive',
    icon: DefensiveShieldIcon,
    desc: 'Max dampening shield profile to absorb incoming loops and reset long chops.',
  },
  {
    id: 'ALL-ROUND',
    name: 'All-Round',
    icon: AllRoundBalanceIcon,
    desc: 'Harmonic equilibrium of spin, speed, and placement across every table zone.',
  },
];

const RUBBER_CARDS = [
  {
    id: 'SPIN',
    name: 'Spin',
    icon: SpinSpiralIcon,
    desc: 'High-friction tacky topsheet for aggressive curve and looping arc trajectory.',
  },
  {
    id: 'SPEED',
    name: 'Speed',
    icon: SpeedLightningIcon,
    desc: 'Explosive tensor spring sponge for blistering flat drives and quick counters.',
  },
  {
    id: 'CONTROL',
    name: 'Control',
    icon: ControlPrecisionIcon,
    desc: 'Precision target dwell time for sharp short-game placement and serve returns.',
  },
  {
    id: 'OFFENSIVE',
    name: 'Offensive',
    icon: OffensiveImpactIcon,
    desc: 'Direct forward kinetic energy transfer on high-impact attacking loops.',
  },
  {
    id: 'DEFENSIVE',
    name: 'Defensive',
    icon: RubberDefensiveShieldIcon,
    desc: 'Energy-absorbing sponge matrix to neutralize heavy incoming topspin.',
  },
  {
    id: 'ALL-ROUND',
    name: 'All-Round',
    icon: RubberEquilibriumIcon,
    desc: 'Harmonic balance of tension and softness for versatile transition play.',
  },
];

const RACKET_PICKS = {
  BEGINNER:     { name:'Stiga Clipper Wood', brand:'STIGA', price:'₹3,499', desc:'PERFECT FIRST BLADE. FULL WOOD, GREAT FEEL.' },
  INTERMEDIATE: { name:'Donic Waldner Senso', brand:'DONIC', price:'₹5,999', desc:'UPGRADE READY. CARBON ASSIST FOR MORE PACE.' },
  ADVANCED:     { name:'Butterfly TB-ALC', brand:'BUTTERFLY', price:'₹12,499', desc:'ARYLATE-CARBON. WORLD-CLASS PERFORMANCE.' },
  OFFENSIVE:    { name:'DHS Hurricane Long 5', brand:'DHS', price:'₹4,299', desc:'POWER AND SPEED. MADE FOR ATTACKERS.' },
  DEFENSIVE:    { name:'Tibhar Stratus Power', brand:'TIBHAR', price:'₹4,899', desc:'CONTROL-FOCUSED. EXCELLENT FOR CHOPPERS.' },
  'ALL-ROUND':  { name:'Cornilleau Vari 400', brand:'CORNILLEAU', price:'₹3,200', desc:'BALANCED FOR EVERY STYLE OF PLAY.' },
};

const RUBBER_PICKS = {
  SPIN:         { name:'DHS Hurricane 3', brand:'DHS', price:'₹1,299', desc:'KING OF SPIN. CHINESE TACKY SHEET.' },
  SPEED:        { name:'Butterfly Tenergy 64', brand:'BUTTERFLY', price:'₹3,850', desc:'FASTEST TENSOR ON THE MARKET.' },
  CONTROL:      { name:'Yasaka Rakza 7 Soft', brand:'YASAKA', price:'₹1,699', desc:'FORGIVING, CONSISTENT, RELIABLE.' },
  OFFENSIVE:    { name:'Butterfly Tenergy 05', brand:'BUTTERFLY', price:'₹3,850', desc:'SPIN + SPEED COMBO. #1 WORLDWIDE.' },
  DEFENSIVE:    { name:'Donic Slice 40', brand:'DONIC', price:'₹1,400', desc:'EXCELLENT CHOP CONTROL AND PLACEMENT.' },
  'ALL-ROUND':  { name:'Xiom Vega Asia', brand:'XIOM', price:'₹2,100', desc:'TENSOR TECH. SPIN, SPEED, CONTROL BALANCED.' },
};

export default function FindYourPlay() {
  const [racketStyle, setRacketStyle] = useState('BEGINNER');
  const [rubberStyle, setRubberStyle] = useState('SPIN');

  const rPick = RACKET_PICKS[racketStyle];
  const ruPick = RUBBER_PICKS[rubberStyle];

  return (
    <section className="finder-section" id="find-your-play">
      <div className="finder-watermark" aria-hidden="true">PLAY</div>

      <div className="finder-grid">
        {/* ── 05: FIND YOUR RACKET ── */}
        <div className="finder-col" id="find-racket">
          <div className="finder-col-header">
            <span className="text-label">[05] — FIND YOUR RACKET</span>
            <h2 className="finder-title text-display">FIND YOUR<br />RACKET</h2>
            <p className="finder-sub">SELECT YOUR PLAYING LEVEL OR STYLE</p>
          </div>

          {/* 6 Selection Cards with 48x48 Geometric Line Icons */}
          <div className="finder-cards-grid" role="group" aria-label="Racket style selection">
            {RACKET_CARDS.map((card) => {
              const IconComponent = card.icon;
              const isSelected = racketStyle === card.id;
              return (
                <button
                  key={card.id}
                  type="button"
                  className={`finder-style-card${isSelected ? ' active' : ''}`}
                  onClick={() => setRacketStyle(card.id)}
                  id={`racket-card-${card.id.toLowerCase()}`}
                  aria-pressed={isSelected}
                >
                  <div className="finder-card-icon-wrap">
                    <IconComponent
                      size={48}
                      className="finder-card-icon"
                      color={isSelected ? 'var(--orange)' : 'var(--cream)'}
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

          {/* Recommended Racket Result */}
          <div className="finder-result">
            <span className="finder-result-badge text-label">RECOMMENDED BLADE MATCH</span>
            <div className="finder-result-main">
              <div>
                <span className="finder-result-label">{rPick.brand}</span>
                <span className="finder-result-name">{rPick.name}</span>
              </div>
              <span className="finder-result-price">{rPick.price}</span>
            </div>
            <p className="finder-result-desc">{rPick.desc}</p>
            <a href="/rackets" className="finder-cta" id="finder-racket-cta">
              EXPLORE THIS RACKET →
            </a>
          </div>
        </div>

        <div className="finder-divider" aria-hidden="true">
          <span>VS</span>
        </div>

        {/* ── 06: FIND YOUR RUBBER ── */}
        <div className="finder-col" id="find-rubber">
          <div className="finder-col-header">
            <span className="text-label">[06] — FIND YOUR RUBBER</span>
            <h2 className="finder-title text-display">FIND YOUR<br />RUBBER</h2>
            <p className="finder-sub">SELECT YOUR PREFERRED PERFORMANCE CHARACTERISTIC</p>
          </div>

          {/* 6 Selection Cards with 48x48 Performance Line Icons */}
          <div className="finder-cards-grid" role="group" aria-label="Rubber performance selection">
            {RUBBER_CARDS.map((card) => {
              const IconComponent = card.icon;
              const isSelected = rubberStyle === card.id;
              return (
                <button
                  key={card.id}
                  type="button"
                  className={`finder-style-card${isSelected ? ' active' : ''}`}
                  onClick={() => setRubberStyle(card.id)}
                  id={`rubber-card-${card.id.toLowerCase()}`}
                  aria-pressed={isSelected}
                >
                  <div className="finder-card-icon-wrap">
                    <IconComponent
                      size={48}
                      className="finder-card-icon"
                      color={isSelected ? 'var(--orange)' : 'var(--cream)'}
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

          {/* Recommended Rubber Result */}
          <div className="finder-result">
            <span className="finder-result-badge text-label">RECOMMENDED RUBBER MATCH</span>
            <div className="finder-result-main">
              <div>
                <span className="finder-result-label">{ruPick.brand}</span>
                <span className="finder-result-name">{ruPick.name}</span>
              </div>
              <span className="finder-result-price">{ruPick.price}</span>
            </div>
            <p className="finder-result-desc">{ruPick.desc}</p>
            <a href="/rubber" className="finder-cta" id="finder-rubber-cta">
              EXPLORE THIS RUBBER →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
