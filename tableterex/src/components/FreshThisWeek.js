'use client';
import { useState, useEffect } from 'react';

const WEEK_DROPS = [
  {
    id: 'w1',
    name: 'Waldner Black Devil',
    brand: 'DONIC',
    type: 'Carbon + Balsa',
    price: '₹5,850*',
    originalPrice: '₹10,639 MRP',
    badge: 'FRESH STOCK',
    img: '/images/donic-blade.jpg',
    origin: 'Germany',
    speed: 9.8,
    spin: 9.4,
    control: 8.8,
    weight: '82g',
    features: ['7-Ply Balsa Carbon', 'Soft Touch Core', 'ITTF Tournament Approved'],
    desc: 'High-speed carbon offensive blade with balsa core for lightning-fast counters, sharp flick returns, and explosive smashes.',
  },
  {
    id: 'w2',
    name: 'Fastarc G-1',
    brand: 'NITTAKU',
    type: 'Made in Japan · Offensive',
    price: '₹3,100*',
    originalPrice: '₹5,849 MRP',
    badge: 'NEW BATCH',
    img: '/images/red-rubber.jpg',
    origin: 'Japan',
    speed: 9.6,
    spin: 9.9,
    control: 8.9,
    weight: '68g',
    features: ['Grip Top Sheet', 'Strong Sponge Elasticity', 'Top Japanese Pro Choice'],
    desc: 'The #1 best-selling tensor rubber. Unmatched spin on looping drives with exceptional high-arc trajectory and gripping power.',
  },
  {
    id: 'w3',
    name: 'Evolution MX-P',
    brand: 'TIBHAR',
    type: 'High-performance tensor',
    price: '₹7,215 MRP',
    originalPrice: '',
    badge: 'RESTOCK',
    img: '/images/tibhar-rubber.jpg',
    origin: 'Germany',
    speed: 9.9,
    spin: 9.8,
    control: 8.4,
    weight: '72g',
    features: ['Red Power Sponge (47.5°)', 'Maximum Catapult', 'European Pro Standard'],
    desc: 'Dynamic offensive rubber engineered for players demanding maximum power, explosive catapult, and heavy top-spin attack.',
  },
  {
    id: 'w4',
    name: 'Timo Boll ALC',
    brand: 'BUTTERFLY',
    type: 'Arylates / carbon',
    price: '₹24,200 MRP',
    originalPrice: '',
    badge: 'PRO SERIES',
    img: '/images/pro-blade.jpg',
    origin: 'Japan',
    speed: 9.7,
    spin: 9.7,
    control: 8.9,
    weight: '86g',
    features: ['Arylate-Carbon Weave', 'High Reaction Property', 'Legendary World Pro Choice'],
    desc: 'The gold standard in tournament blades. Arylate-carbon dampens excessive vibration while unlocking extreme explosive looping drive power.',
  },
];

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
              <div>
                <div className="fresh-header-badges">
                  <span className="fresh-new-batch-badge">NEW BATCH</span>
                </div>
                <h2 className="fresh-section-title text-display">
                  FRESH STOCK
                </h2>
              </div>
            </div>
          </div>
        </div>

        <p className="fresh-supporting-copy">
          New product batches arrive every week, bringing a constantly changing selection of table tennis gear across blades, rubbers, ready-made bats, balls, accessories and more.
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
        <a href="/products" className="btn-primary" id="fresh-shop-drop-btn">VIEW NEW ARRIVALS →</a>
      </div>
    </section>
  );
}
