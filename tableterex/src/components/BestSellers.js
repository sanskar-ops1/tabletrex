'use client';
import { useState } from 'react';

const STYLE_TABS = ['SPIN', 'SPEED', 'CONTROL', 'OFFENSIVE', 'ALL-ROUND', 'DEFENSIVE'];

const BEST_SELLERS = [
  {
    id: 'bs1',
    num: '01',
    name: 'Butterfly Tenergy 05',
    brand: 'BUTTERFLY',
    type: 'PRO TENSOR RUBBER',
    season: 'PRO TOUR',
    year: '2026',
    badge: 'COMMUNITY #1',
    price: '₹10,600 MRP',
    style: 'OFFENSIVE',
    rating: 5,
    reviews: 248,
    specs: { spin: 98, speed: 85, control: 72 },
    tags: ['SPRING SPONGE', 'HIGH TENSION', 'TOURNAMENT CHOICE'],
    accent: '#ff3b30',
    img: '/images/red-rubber.jpg',
    desc: 'The global benchmark for high-tension spin attack. Spring Sponge technology delivers explosive catapult effect and tremendous rotation on heavy loop drives.',
  },
  {
    id: 'bs2',
    num: '02',
    name: 'Nittaku Fastarc G-1',
    brand: 'NITTAKU',
    type: 'MADE IN JAPAN RUBBER',
    season: 'PRO SERIES',
    year: '2026',
    badge: 'JAPAN #1',
    price: '₹5,849 MRP',
    style: 'SPIN',
    rating: 5,
    reviews: 312,
    specs: { spin: 99, speed: 86, control: 78 },
    tags: ['POWER SPONGE', 'GRIP SHEET', 'TOKYO CRAFT'],
    accent: '#ff9500',
    img: '/images/red-rubber.jpg',
    desc: 'The #1 best-selling tensor rubber in Japan. Combines an ultra-grippy top sheet with elastic power sponge for high-arc looping consistency.',
  },
  {
    id: 'bs3',
    num: '03',
    name: 'Tibhar Evolution MX-P',
    brand: 'TIBHAR',
    type: 'HIGH-PERFORMANCE TENSOR',
    season: 'EURO TOUR',
    year: '2026',
    badge: 'CATAPULT KING',
    price: '₹7,215 MRP',
    style: 'SPEED',
    rating: 5,
    reviews: 194,
    specs: { spin: 96, speed: 94, control: 70 },
    tags: ['RED POWER SPONGE', 'MAX CATAPULT', 'GERMAN TENSOR'],
    accent: '#e06830',
    img: '/images/tibhar-rubber.jpg',
    desc: 'Dynamic offensive rubber engineered for maximum catapult and explosive velocity on heavy forward top-spin drives.',
  },
  {
    id: 'bs4',
    num: '04',
    name: 'Donic Bluestorm Z1',
    brand: 'DONIC',
    type: 'ATTACKING TENSOR',
    season: 'BLUESTORM LINE',
    year: '2026',
    badge: 'EXPLOSIVE',
    price: '₹6,169 MRP',
    style: 'SPEED',
    rating: 5,
    reviews: 165,
    specs: { spin: 95, speed: 96, control: 68 },
    tags: ['THIN TOPSHEET', 'MAX SPONGE', 'DYNAMIC ATTACK'],
    accent: '#0090ff',
    img: '/images/tibhar-rubber.jpg',
    desc: 'Noticeably thinner top sheet under high tension creates room for thicker sponge and unprecedented explosive power on contact.',
  },
  {
    id: 'bs5',
    num: '05',
    name: 'Donic Bluegrip S2',
    brand: 'DONIC',
    type: 'STICKY-ELASTIC HYBRID',
    season: 'BLUEGRIP LINE',
    year: '2026',
    badge: 'TOUCH & GRIP',
    price: '₹5,729 MRP',
    style: 'CONTROL',
    rating: 5,
    reviews: 142,
    specs: { spin: 97, speed: 82, control: 88 },
    tags: ['CHINESE TACKY SURFACE', 'DYNAMIC SPONGE', 'PINPOINT CONTROL'],
    accent: '#2ed573',
    img: '/images/black-rubber.jpg',
    desc: 'The best of both worlds: Chinese-style grippy top sheet paired with a medium-soft European tensor sponge for surgical ball control and heavy spin.',
  },
  {
    id: 'bs6',
    num: '06',
    name: 'Nittaku Hurricane 8-80 Power',
    brand: 'NITTAKU',
    type: 'STICKY HIGH-ELASTIC TENSOR',
    season: 'COLLAB EDITION',
    year: '2026',
    badge: 'SPIN SPECIALIST',
    price: '₹6,129 MRP',
    style: 'SPIN',
    rating: 5,
    reviews: 210,
    specs: { spin: 100, speed: 84, control: 84 },
    tags: ['HIGH-TACK TOPSHEET', '#80 HIGH-ELASTIC SPONGE', 'MADE FOR 40+ BALL'],
    accent: '#a55eea',
    img: '/images/black-rubber.jpg',
    desc: 'Engineered specifically for the 40+ poly ball. The high-elastic #80 sponge gives fast speed recovery while the sticky topsheet generates lethal arc rotation.',
  },
];

function Stars({ rating }) {
  return (
    <span className="bs-stars" aria-label={`${rating} stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
    </span>
  );
}

function SpecBar({ label, value }) {
  return (
    <div className="bs-spec-row">
      <div className="bs-spec-top">
        <span className="bs-spec-label">{label}</span>
        <span className="bs-spec-val">{value}</span>
      </div>
      <div className="bs-spec-track">
        <div className="bs-spec-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default function BestSellers({ onProductClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [added, setAdded] = useState([]);

  const activeProduct = BEST_SELLERS[activeIndex];

  const handleAdd = (id) => {
    setAdded((p) => [...p, id]);
    setTimeout(() => setAdded((p) => p.filter((x) => x !== id)), 1800);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? BEST_SELLERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === BEST_SELLERS.length - 1 ? 0 : prev + 1));
  };

  const handleSelectStyle = (style) => {
    setSelectedStyle(style);
    // Find matching product
    const matchIdx = BEST_SELLERS.findIndex((p) => p.style === style);
    if (matchIdx !== -1) {
      setActiveIndex(matchIdx);
    }
  };

  return (
    <section className="bestsellers-section" id="best-sellers">
      <div className="bs-header">
        <div>
          <h2 className="bs-title text-display">
            PLAYERS&apos;
            <br />
            CHOICE
          </h2>
        </div>
        <div className="bs-header-right">
          <div className="bs-style-selector">
            {STYLE_TABS.map((tab) => {
              const isActive = selectedStyle === tab || (!selectedStyle && activeProduct.style === tab);
              return (
                <button
                  key={tab}
                  type="button"
                  className={`bs-style-tab blob-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleSelectStyle(tab)}
                  id={`bs-tab-${tab.toLowerCase()}`}
                >
                  <span className="blob-btn__text">{tab}</span>
                  <span className="blob-btn__inner" aria-hidden="true">
                    <span className="blob-btn__blobs">
                      <span className="blob-btn__blob" />
                      <span className="blob-btn__blob" />
                      <span className="blob-btn__blob" />
                      <span className="blob-btn__blob" />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <a href="/products" className="bs-view-all" id="bs-view-all-btn">
            VIEW ALL PRODUCTS →
          </a>
        </div>
      </div>

      {/* SVG Gooey Filter for Blob Animation */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="blob-goo-filter"
        aria-hidden="true"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="8" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>

      {/* Cinematic Showcase Frame (Netflix / Stranger Things inspired) */}

      <div className="bs-showcase-container">
        {/* Prev / Next Navigation Arrows (Half inside, half outside container border) */}
        <button
          className="bs-nav-arrow bs-nav-prev"
          onClick={handlePrev}
          aria-label="Previous product"
          id="bs-nav-prev-btn"
        >
          ‹
        </button>
        <button
          className="bs-nav-arrow bs-nav-next"
          onClick={handleNext}
          aria-label="Next product"
          id="bs-nav-next-btn"
        >
          ›
        </button>

        <div className="bs-showcase-frame">
          {/* Luminous dynamic ambient orb glow */}
          <div
            key={`orb-${activeProduct.id}`}
            className="bs-ambient-orb"
            style={{
              background: `radial-gradient(circle, ${activeProduct.accent}44 0%, ${activeProduct.accent}15 45%, transparent 70%)`,
            }}
          />

          {/* Animated Background Product Imagery (Flies in smoothly from screen perspective) */}
          <div key={`bg-${activeProduct.id}`} className="bs-bg-media-wrap">
            <img
              src={activeProduct.img}
              alt={activeProduct.name}
              className="bs-bg-media-img"
            />
          </div>

          {/* Cinematic lighting gradient overlays for contrast & legibility */}
          <div className="bs-vignette-overlay" />

          {/* Main Showcase Information Block */}
          <div key={`content-${activeProduct.id}`} className="bs-content-wrap">
            {/* Giant Bold Product Title */}
            <h3 className="bs-showcase-title">{activeProduct.name}</h3>

            {/* Metadata Line (Rating | Price) */}
            <div className="bs-meta-line">
              <div className="bs-meta-rating">
                <Stars rating={activeProduct.rating} />
                <span className="bs-reviews-count">({activeProduct.reviews})</span>
              </div>
              <span className="bs-meta-sep">•</span>
              <span className="bs-meta-price">{activeProduct.price}</span>
            </div>

            {/* Tags Pills */}
            <div className="bs-tags-row">
              {activeProduct.tags.map((t) => (
                <span key={t} className="bs-tag-chip">
                  {t}
                </span>
              ))}
            </div>

            {/* Actions: Add To Cart & Quick View */}
            <div className="bs-actions-row">
              <button
                className={`bs-cta-btn${added.includes(activeProduct.id) ? ' added' : ''}`}
                id={`bs-add-${activeProduct.id}`}
                onClick={() => handleAdd(activeProduct.id)}
              >
                {added.includes(activeProduct.id) ? '✓ ADDED TO CART' : 'ADD TO CART'}
              </button>
              <button
                className="bs-quick-btn"
                id={`bs-quick-${activeProduct.id}`}
                onClick={() => onProductClick && onProductClick(activeProduct)}
              >
                QUICK VIEW
              </button>
            </div>
          </div>

          {/* Performance Specs Bars (Moved to Bottom Right Side of Card) */}
          <div key={`specs-${activeProduct.id}`} className="bs-specs-bottom-right">
            <SpecBar label="SPIN" value={activeProduct.specs.spin} />
            <SpecBar label="SPEED" value={activeProduct.specs.speed} />
            <SpecBar label="CONTROL" value={activeProduct.specs.control} />
          </div>
        </div>

        {/* Bottom Thumbnail Gallery (Half on showcase card, half hanging outside) */}
        <div className="bs-thumbs-bar">
          {BEST_SELLERS.map((p, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={p.id}
                className={`bs-thumb-card ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                id={`bs-thumb-${p.id}`}
                aria-label={`Select ${p.name}`}
              >
                <div className="bs-thumb-img-box">
                  <img src={p.img} alt={p.name} className="bs-thumb-img" />
                  <div className="bs-thumb-overlay" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
