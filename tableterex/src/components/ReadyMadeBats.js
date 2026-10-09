'use client';
import { useState, useEffect } from 'react';

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

function SegmentedMetricBar({ label, value, animKey }) {
  const totalSegments = 20;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const startValue = 0;
    const targetValue = Math.min(100, Math.max(0, value));
    const duration = 1200; // ms (relaxed, paced counter effect)
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth ease-out curve
      const ease = 1 - Math.pow(1 - progress, 2.5);
      const current = Math.round(startValue + (targetValue - startValue) * ease);

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [value, animKey]);

  const rawSegments = (displayValue / 100) * totalSegments;
  const filledCount = Math.round(rawSegments);

  return (
    <div className="ready-seg-col">
      {/* 0 25 50 75 100 Numbers on Top of Every Bar */}
      <div className="ready-seg-scale" aria-hidden="true">
        <span className="scale-mark-0">0</span>
        <span className="scale-mark-25">25</span>
        <span className="scale-mark-50">50</span>
        <span className="scale-mark-75">75</span>
        <span className="scale-mark-100">100</span>
      </div>

      {/* Segmented Bar (20 Slender Ticks with Orange Fade Matching Reference Image) */}
      <div
        className="ready-seg-bar"
        role="progressbar"
        aria-valuenow={displayValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label}: ${displayValue}%`}
      >
        {Array.from({ length: totalSegments }).map((_, i) => {
          const isFilled = i < filledCount;
          let opacity = undefined;

          if (isFilled && filledCount > 0) {
            const distanceToEnd = filledCount - 1 - i;
            if (distanceToEnd === 0) opacity = 0.35;
            else if (distanceToEnd === 1) opacity = 0.60;
            else if (distanceToEnd === 2) opacity = 0.82;
            else opacity = 1;
          }

          return (
            <span
              key={i}
              className={`ready-seg-tick ${isFilled ? 'is-filled' : ''}`}
              style={opacity !== undefined ? { opacity } : undefined}
            />
          );
        })}
      </div>

      {/* Value & Label at Bottom (Generous Spacing Matching Reference Image) */}
      <div className="ready-seg-bottom">
        <span className="ready-seg-value">{displayValue}%</span>
        <span className="ready-seg-label">{label}</span>
      </div>
    </div>
  );
}

export default function ReadyMadeBats() {
  const [activeIndex, setActiveIndex] = useState(8); // Waldner 5000 default
  const activeBat = WALDNER_LADDER[activeIndex] || WALDNER_LADDER[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? WALDNER_LADDER.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === WALDNER_LADDER.length - 1 ? 0 : prev + 1));
  };

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

        {/* Upper Highlight Container with Navigation Arrows */}
        <div className="ready-showcase-container">
          {/* Navigation Arrows */}
          <button
            className="ready-nav-arrow ready-nav-prev"
            onClick={handlePrev}
            aria-label="Previous ready-made bat"
            id="ready-nav-prev-btn"
          >
            ‹
          </button>
          <button
            className="ready-nav-arrow ready-nav-next"
            onClick={handleNext}
            aria-label="Next ready-made bat"
            id="ready-nav-next-btn"
          >
            ›
          </button>

          {/* Upper Highlight Card (Containing Bat Info + Segmented Bars) */}
          <div className="ready-highlight-card">
            <div className="ready-hl-top-row">
              <div key={`info-${activeBat.id}`} className="ready-hl-info">
                <div className="ready-hl-meta-row">
                  <span className="ready-hl-brand text-label">DONIC · WALDNER SERIES</span>
                  <span className="ready-hl-counter text-label">[ 0{activeIndex + 1} — 0{WALDNER_LADDER.length} MODELS ]</span>
                </div>
                <h3 className="ready-hl-title">{activeBat.model}</h3>
                <div className="ready-hl-series-badge-row">
                  <span className="ready-hl-series text-label">
                    {activeBat.series.toUpperCase()} · {(activeBat.levelDisplay || activeBat.level).toUpperCase()}
                  </span>
                  <span className="ready-hl-rubber-pill text-label">
                    {activeBat.rubber.toUpperCase()}
                  </span>
                </div>
                <p className="ready-hl-desc">{activeBat.desc}</p>
              </div>

              <div key={`act-${activeBat.id}`} className="ready-hl-action">
                <span className="ready-hl-price">{activeBat.price}</span>
                <a href="/products?category=ready-made-bats" className="ready-hl-btn" id={`ready-buy-${activeBat.id}`}>
                  SELECT THIS BAT →
                </a>
              </div>
            </div>

            {/* Segmented Orange Bars with Animated Counter Effect */}
            <div className="ready-segmented-grid">
              <SegmentedMetricBar label="SPEED" value={activeBat.speed} animKey={activeBat.id} />
              <SegmentedMetricBar label="SPIN" value={activeBat.spin} animKey={activeBat.id} />
              <SegmentedMetricBar label="CONTROL" value={activeBat.control} animKey={activeBat.id} />
            </div>
          </div>
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
