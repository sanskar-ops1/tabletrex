'use client';
import { useState } from 'react';

const WALDNER_LADDER = [
  {
    id: 'w400',
    model: 'WALDNER 400',
    series: 'Recreation & Starter',
    price: '₹799 MRP',
    level: 'Starter',
    speed: 40,
    spin: 40,
    control: 90,
    rubber: '1.5mm Donic Rubber',
    desc: 'A starter table tennis bat built for recreational players and beginners focusing on ball control and consistency.',
  },
  {
    id: 'w500',
    model: 'WALDNER 500',
    series: 'All-Round Starter',
    level: 'Beginner',
    price: '₹999 MRP',
    levelDisplay: 'Beginner / All-Round',
    speed: 50,
    spin: 50,
    control: 85,
    rubber: '1.6mm Donic Rubber',
    desc: 'Balanced all-round bat designed for developing players learning forehand drives and backhand control.',
  },
  {
    id: 'w600',
    model: 'WALDNER 600',
    series: 'Power Light System',
    level: 'Progressive',
    price: '₹1,449 MRP',
    levelDisplay: 'All-Round / Progressive',
    speed: 60,
    spin: 60,
    control: 80,
    rubber: '1.8mm Donic Rubber',
    desc: 'Features the Power Light System hollow handle to reduce total weight and improve stroke speed.',
  },
  {
    id: 'w700',
    model: 'WALDNER 700',
    series: 'Spin Attack',
    level: 'Intermediate',
    price: '₹1,999 MRP',
    levelDisplay: 'Intermediate',
    speed: 70,
    spin: 70,
    control: 75,
    rubber: '2.0mm Donic Rubber',
    desc: 'A ready-to-play option for players looking for more spin and attacking response without building a custom setup.',
  },
  {
    id: 'w800',
    model: 'WALDNER 800',
    series: 'Carbon Tube',
    level: 'Advanced',
    price: '₹2,499 MRP',
    levelDisplay: 'Advanced / Club',
    speed: 80,
    spin: 80,
    control: 70,
    rubber: '2.1mm Donic Rubber',
    desc: 'Carbon tube insert inside the handle dampens unwanted vibrations for direct tactile shot feedback.',
  },
  {
    id: 'w900',
    model: 'WALDNER 900',
    series: 'High-Spin Attack',
    level: 'Offensive',
    price: '₹3,499 MRP',
    levelDisplay: 'Offensive Club',
    speed: 90,
    spin: 90,
    control: 65,
    rubber: '2.1mm Donic Rubber',
    desc: 'High-friction surface rubber engineered for players executing offensive topspin rallies and looping attacks.',
  },
  {
    id: 'w1000',
    model: 'WALDNER 1000',
    series: 'Competition Wood',
    level: 'Competition',
    price: '₹3,899 MRP',
    levelDisplay: 'Match Ready',
    speed: 95,
    spin: 92,
    control: 60,
    rubber: '2.1mm QRC Rubber',
    desc: 'Competition-level all-wood racket featuring the QRC system for fast, seamless rubber replacements.',
  },
  {
    id: 'w3000',
    model: 'WALDNER 3000',
    series: 'Carbon Composite',
    level: 'Pro',
    price: '₹5,399 MRP',
    levelDisplay: 'Advanced Offensive',
    speed: 100,
    spin: 96,
    control: 55,
    rubber: '2.2mm Competition Rubber',
    desc: 'Carbon-reinforced construction engineered for accelerated smash speed, stiff blocking and fast attacks.',
  },
  {
    id: 'w5000',
    model: 'WALDNER 5000',
    series: 'Flagship Competition',
    level: 'Elite',
    price: '₹5,999 MRP',
    levelDisplay: 'Flagship Performance',
    speed: 105,
    spin: 100,
    control: 50,
    rubber: '2.3mm Attack Rubber',
    desc: 'Flagship competition pre-assembled bat combining high-grade carbon plies with maximum thickness attack rubber.',
  },
];

export default function ReadyMadeBats() {
  const [activeBat, setActiveBat] = useState(WALDNER_LADDER[3]); // Waldner 700 default

  return (
    <section className="ready-bats-section" id="ready-made-bats">
      <div className="ready-bats-container">
        {/* Header */}
        <div className="ready-bats-header">
          <div className="ready-bats-header-left">
            <span className="text-label" style={{ color: 'var(--orange)', letterSpacing: '0.2em' }}>
              READY TO PLAY
            </span>
            <h2 className="ready-bats-title text-display">
              READY-MADE BATS
            </h2>
          </div>
          <p className="ready-bats-header-desc">
            Ready-to-play table tennis bats across different playing levels, from simple starter options to advanced performance models.
          </p>
        </div>

        {/* Highlight Banner of Selected Bat */}
        <div className="ready-highlight-card">
          <div className="ready-hl-info">
            <span className="ready-hl-brand text-label">DONIC · WALDNER SERIES</span>
            <h3 className="ready-hl-title">{activeBat.model}</h3>
            <span className="ready-hl-series text-label">
              {activeBat.series.toUpperCase()} · {(activeBat.levelDisplay || activeBat.level).toUpperCase()}
            </span>
            <p className="ready-hl-desc">{activeBat.desc}</p>
            <div className="ready-hl-specs">
              <div className="ready-spec-chip">
                <span>SPEED</span>
                <strong>{activeBat.speed}</strong>
              </div>
              <div className="ready-spec-chip">
                <span>SPIN</span>
                <strong>{activeBat.spin}</strong>
              </div>
              <div className="ready-spec-chip">
                <span>CONTROL</span>
                <strong>{activeBat.control}</strong>
              </div>
              <div className="ready-spec-chip">
                <span>RUBBER</span>
                <strong>{activeBat.rubber}</strong>
              </div>
            </div>
          </div>
          <div className="ready-hl-action">
            <span className="ready-hl-price">{activeBat.price}</span>
            <a href="/products?category=ready-made-bats" className="ready-hl-btn" id={`ready-buy-${activeBat.id}`}>
              SELECT THIS BAT →
            </a>
          </div>
        </div>

        {/* Interactive Ladder Grid */}
        <div className="ready-ladder-grid">
          {WALDNER_LADDER.map((b) => {
            const isSelected = activeBat.id === b.id;
            return (
              <div
                key={b.id}
                className={`ready-bat-card ${isSelected ? 'is-active' : ''}`}
                onClick={() => setActiveBat(b)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveBat(b);
                  }
                }}
                role="button"
                tabIndex={0}
                id={`ready-card-${b.id}`}
              >
                <div className="ready-card-head">
                  <span className="ready-card-name">{b.model}</span>
                  <span className="ready-card-price">{b.price}</span>
                </div>
                <span className="ready-card-series">{b.series}</span>
                <div className="ready-mini-bars">
                  <div className="ready-mini-bar" title={`Speed: ${b.speed}`}>
                    <div style={{ width: `${b.speed}%`, background: 'var(--orange)' }} />
                  </div>
                  <div className="ready-mini-bar" title={`Spin: ${b.spin}`}>
                    <div style={{ width: `${b.spin}%`, background: '#2ed573' }} />
                  </div>
                  <div className="ready-mini-bar" title={`Control: ${b.control}`}>
                    <div style={{ width: `${b.control}%`, background: '#0090ff' }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="ready-bats-footer">
          <a href="/products?category=ready-made-bats" className="ready-view-all-link" id="ready-view-all-btn">
            VIEW ALL READY-MADE BATS →
          </a>
        </div>
      </div>
    </section>
  );
}
