'use client';
import { useState } from 'react';

const BEST_SELLERS = [
  {
    id: 'bs1',
    num: '01',
    name: 'Butterfly Tenergy 05',
    brand: 'BUTTERFLY',
    type: 'RUBBER',
    season: 'PRO TOUR',
    year: '2024',
    badge: 'TOP SELLER',
    price: '₹3,850',
    rating: 5,
    reviews: 248,
    specs: { spin: 95, speed: 80, control: 65 },
    tags: ['TENSOR', 'SPRING SPONGE', '2.1MM', 'RED'],
    accent: '#ff3b30',
    img: '/images/red-rubber.jpg',
    desc: 'The global benchmark for high-tension spin attacking play. Spring Sponge technology delivers explosive catapult effect and tremendous rotation on heavy loop drives.',
  },
  {
    id: 'bs2',
    num: '02',
    name: 'DHS Hurricane Long 5',
    brand: 'DHS',
    type: 'BLADE',
    season: 'CHAMPION SERIES',
    year: '2024',
    badge: 'OFFENSIVE+',
    price: '₹4,299',
    rating: 5,
    reviews: 182,
    specs: { spin: 70, speed: 88, control: 72 },
    tags: ['ARYLATE-CARBON', 'INNERFORCE', '90G', 'FL HANDLE'],
    accent: '#ff9500',
    img: '/images/pro-blade.jpg',
    desc: 'Crafted for double-sided loopers and inspired by Ma Long. Inner Arylate-Carbon layers provide soft ball touch on defense and devastating power on all offensive attacks.',
  },
  {
    id: 'bs3',
    num: '03',
    name: 'DHS Hurricane 3 Neo',
    brand: 'DHS',
    type: 'RUBBER',
    season: 'NATIONAL TEAM',
    year: '2024',
    badge: 'STICKY TACKY',
    price: '₹1,299',
    rating: 5,
    reviews: 315,
    specs: { spin: 98, speed: 68, control: 82 },
    tags: ['CHINESE TACKY', 'BLUE SPONGE', '2.15MM', 'BLACK'],
    accent: '#00d2ff',
    img: '/images/black-rubber.jpg',
    desc: 'The iconic tacky rubber of the Chinese National Team. Pre-treated Neo sponge produces a dipping topspin arc that drops sharply onto the opponent table with wicked spin decay.',
  },
  {
    id: 'bs4',
    num: '04',
    name: 'Stiga Clipper Wood',
    brand: 'STIGA',
    type: 'BLADE',
    season: 'ALL-TIME CLASSIC',
    year: '2024',
    badge: '7-PLY ALL-WOOD',
    price: '₹3,499',
    rating: 4,
    reviews: 201,
    specs: { spin: 65, speed: 75, control: 90 },
    tags: ['7-PLY NATURAL WOOD', 'ALLROUND+', '88G', 'LEGEND'],
    accent: '#e5a93c',
    img: '/images/stiga-blade.jpg',
    desc: 'The legendary 7-ply all-wood classic used by champions worldwide for unmatched ball feel, crisp impact sound, and unwavering consistency in close-table looping.',
  },
  {
    id: 'bs5',
    num: '05',
    name: 'Donic Waldner Carbon',
    brand: 'DONIC',
    type: 'BLADE',
    season: 'MAESTRO EDITION',
    year: '2024',
    badge: 'CARBON FLEECE',
    price: '₹3,890',
    rating: 5,
    reviews: 167,
    specs: { spin: 72, speed: 86, control: 78 },
    tags: ['CARBON FLEECE', 'SENSO V1', '85G', 'SWEDISH'],
    accent: '#4f8cff',
    img: '/images/donic-blade.jpg',
    desc: 'Designed with table tennis legend Jan-Ove Waldner. The hollow Senso handle maximizes sensory feedback while premium carbon fleece plies unlock pinpoint precision on counter-attacks.',
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
          <span className="text-label" style={{ color: 'var(--gray-light)' }}>
            TOP-RATED BY OUR COMMUNITY
          </span>
          <a href="/store" className="bs-view-all" id="bs-view-all-btn">
            VIEW ALL PRODUCTS →
          </a>
        </div>
      </div>

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
