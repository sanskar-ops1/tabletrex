'use client';
import { useState, useEffect } from 'react';
import { WeeklyRefreshIcon } from '@/components/icons';

const WEEK_DROPS = [
  {
    id: 'w1',
    name: 'Donic Waldner Black Devil',
    brand: 'DONIC',
    type: 'CARBON OFF+ BLADE',
    price: '₹5,499',
    originalPrice: '₹6,499',
    badge: 'NEW BATCH',
    img: '/images/donic-blade.jpg',
    origin: 'Germany',
    speed: 9.8,
    spin: 9.4,
    control: 8.8,
    weight: '82g',
    features: ['7-Ply Balsa Carbon', 'Soft Touch Core', 'ITTF Tournament Approved'],
    desc: 'High-speed carbon offensive blade with balsa core for lightning-fast counters, sharp flick returns, and explosive smashes.',
    wholesaleNote: 'Batch #DE-26-W39 · Wholesale rate ₹4,890 for 5+ units',
  },
  {
    id: 'w2',
    name: 'Nittaku Fastarc G-1',
    brand: 'NITTAKU',
    type: 'PRO TENSOR RUBBER',
    price: '₹2,799',
    originalPrice: '₹3,400',
    badge: 'NEW BATCH',
    img: '/images/red-rubber.jpg',
    origin: 'Japan',
    speed: 9.6,
    spin: 9.9,
    control: 8.9,
    weight: '68g',
    features: ['Grip Top Sheet', 'Strong Sponge Elasticity', 'Top Japanese Pro Choice'],
    desc: 'The #1 best-selling tensor rubber. Unmatched spin on looping drives with exceptional high-arc trajectory and gripping power.',
    wholesaleNote: 'Batch #JP-26-W39 · Wholesale rate ₹2,450 for 5+ units',
  },
  {
    id: 'w3',
    name: 'Tibhar Evolution MX-P',
    brand: 'TIBHAR',
    type: 'HIGH-SPIN RUBBER',
    price: '₹3,100',
    originalPrice: '₹3,750',
    badge: 'RESTOCK',
    img: '/images/tibhar-rubber.jpg',
    origin: 'Germany',
    speed: 9.9,
    spin: 9.8,
    control: 8.4,
    weight: '72g',
    features: ['Red Power Sponge (47.5°)', 'Maximum Catapult', 'European Pro Standard'],
    desc: 'Dynamic offensive rubber engineered for players demanding maximum power, explosive catapult, and heavy top-spin attack.',
    wholesaleNote: 'Batch #DE-26-W39 · Wholesale rate ₹2,750 for 5+ units',
  },
  {
    id: 'w4',
    name: 'Stiga Infinity VPS V',
    brand: 'STIGA',
    type: 'OFFENSIVE WOOD BLADE',
    price: '₹7,299',
    originalPrice: '₹8,500',
    badge: 'NEW BATCH',
    img: '/images/stiga-blade.jpg',
    origin: 'Sweden',
    speed: 9.2,
    spin: 9.6,
    control: 9.1,
    weight: '85g',
    features: ['VPS Diamond Touch Finish', '5-Ply Selected Hardwood', 'Fan Zhendong Classic'],
    desc: 'Precision Swedish wood craft with VPS heat-treatment technology for solid feel, deep resonance, and pinpoint ball placement.',
    wholesaleNote: 'Batch #SE-26-W39 · Wholesale rate ₹6,500 for 5+ units',
  },
  {
    id: 'w5',
    name: 'Butterfly Timo Boll ALC',
    brand: 'BUTTERFLY',
    type: 'ARYLATE-CARBON BLADE',
    price: '₹14,999',
    originalPrice: '₹16,500',
    badge: 'PRO SERIES',
    img: '/images/pro-blade.jpg',
    origin: 'Japan',
    speed: 9.7,
    spin: 9.7,
    control: 8.9,
    weight: '86g',
    features: ['Arylate-Carbon Weave', 'High Reaction Property', 'Legendary World Pro Choice'],
    desc: 'The gold standard in tournament blades. Arylate-carbon dampens excessive vibration while unlocking extreme explosive looping drive power.',
    wholesaleNote: 'Batch #JP-26-W39 · Wholesale rate ₹13,400 for 5+ units',
  },
  {
    id: 'w6',
    name: 'DHS Hurricane 3 Neo Pro',
    brand: 'DHS',
    type: 'STICKY CHINESE RUBBER',
    price: '₹2,499',
    originalPrice: '₹3,000',
    badge: 'POPULAR',
    img: '/images/black-rubber.jpg',
    origin: 'China',
    speed: 9.3,
    spin: 10.0,
    control: 9.0,
    weight: '70g',
    features: ['Factory Pre-Tuned Neo Sponge', 'Ultra-Tacky Surface', 'Chinese National Standard'],
    desc: 'The benchmark of deadly spin. Generates lethal low-arc trajectory and devastating topspin loops that dive aggressively upon bounce.',
    wholesaleNote: 'Batch #CN-26-W39 · Wholesale rate ₹2,180 for 5+ units',
  },
  {
    id: 'w7',
    name: 'Custom Master Pro Setup',
    brand: 'TABLETEREX LAB',
    type: 'ASSEMBLED PRO RACKET',
    price: '₹11,899',
    originalPrice: '₹13,500',
    badge: 'LAB BUILD',
    img: '/images/custom-racket.jpg',
    origin: 'India Lab',
    speed: 9.7,
    spin: 9.8,
    control: 9.0,
    weight: '184g',
    features: ['Sealed Blade Edges', 'VOC-Free Organic Glue', 'Protective Edge Guard Fitted'],
    desc: 'Hand-tuned competition racket assembled at TableTerex Lab. Edge-weighted and balanced for immediate match dominance out of the box.',
    wholesaleNote: 'Batch #IN-26-W39 · Wholesale rate ₹10,400 for 5+ units',
  },
];

const WEEK_NUM = 'WEEK 39';
const WEEK_DATE = 'SEP 2026';

export default function FreshThisWeek() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const len = WEEK_DROPS.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + len) % len);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % len);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  return (
    <section className="fresh-section" id="fresh-this-week">
      <div className="fresh-watermark" aria-hidden="true">DROP</div>

      {/* ── Top Header Bar ── */}
      <div className="fresh-top">
        <div className="fresh-header-bar">
          <div className="fresh-title-group">
            <div className="fresh-icon-title">
              <div className="fresh-icon-wrap" title="Weekly Batch Rotation">
                <WeeklyRefreshIcon size={48} className="fresh-refresh-icon" color="var(--orange)" />
              </div>
              <div>
                <div className="fresh-header-badges">
                  <span className="text-label">[03] — ROTATING INVENTORY</span>
                  <span className="fresh-new-batch-badge">NEW BATCH</span>
                </div>
                <h2 className="fresh-section-title text-display">
                  FRESH THIS WEEK
                </h2>
              </div>
            </div>
          </div>

          <div className="fresh-week-badge">
            <span className="fresh-week-num">{WEEK_NUM}</span>
            <span className="fresh-week-date">{WEEK_DATE}</span>
          </div>
        </div>

        <p className="fresh-supporting-copy">
          New product batches arrive every week, bringing a constantly changing selection of rackets and rubber.
        </p>
      </div>

      {/* ── 3D Arc Curved Carousel Container ── */}
      <div 
        className="fresh-arc-viewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* Left Navigation Arrow */}
        <button 
          className="fresh-arc-arrow fresh-arc-prev" 
          onClick={handlePrev}
          aria-label="Previous product"
          id="fresh-arc-prev-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Right Navigation Arrow */}
        <button 
          className="fresh-arc-arrow fresh-arc-next" 
          onClick={handleNext}
          aria-label="Next product"
          id="fresh-arc-next-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* The 3D Arc Cards Track */}
        <div className="fresh-arc-stage">
          {WEEK_DROPS.map((p, i) => {
            // Calculate shortest circular difference
            let diff = i - activeIndex;
            while (diff > len / 2) diff -= len;
            while (diff < -len / 2) diff += len;

            const isCenter = diff === 0;
            const isVisible = Math.abs(diff) <= 3;

            return (
              <div
                key={p.id}
                className={`fresh-arc-card${isCenter ? ' is-active' : ''}`}
                data-diff={diff}
                onClick={() => setActiveIndex(i)}
                style={{
                  '--diff': diff,
                  visibility: isVisible ? 'visible' : 'hidden',
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
                id={`fresh-arc-card-${p.id}`}
                role="button"
                tabIndex={0}
                aria-label={`View ${p.name}`}
              >
                <div className="fresh-arc-card-inner">
                  <span className={`fresh-badge fresh-badge--${p.badge.toLowerCase().replace(/\s+/g, '-')}`}>
                    {p.badge}
                  </span>
                  <img src={p.img} alt={p.name} className="fresh-arc-card-img" />
                  <div className="fresh-arc-card-overlay" />
                  <div className="fresh-arc-card-caption">
                    <span className="fresh-arc-card-brand">{p.brand}</span>
                    <span className="fresh-arc-card-title">{p.name}</span>
                    <span className="fresh-arc-card-price">{p.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slide Dots / Counter Indicator */}
        <div className="fresh-arc-dots">
          {WEEK_DROPS.map((_, idx) => (
            <button
              key={idx}
              className={`fresh-arc-dot${idx === activeIndex ? ' is-active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to item ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom Section CTA ── */}
      <div className="fresh-cta-row">
        <a href="/store" className="btn-primary" id="fresh-shop-drop-btn">SHOP ALL WEEK 39 DROPS</a>
        <span className="fresh-cta-note text-label">NEW RELEASES ROTATE EVERY MONDAY</span>
      </div>
    </section>
  );
}
