'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ALL_PRODUCTS } from '@/data/allProducts';
import './products.css';

/* ─── 4 Value Props for the Continuous Right-to-Left Marquee ─── */
const VALUE_PROPS = [
  {
    icon: (
      <svg className="nl-vp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: '100% Genuine Gear',
    desc: 'Authorized Indian Distributors',
  },
  {
    icon: (
      <svg className="nl-vp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Pan-India Dispatch',
    desc: 'Fast insured express shipping',
  },
  {
    icon: (
      <svg className="nl-vp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'Custom Assembly',
    desc: 'Pro rubber cutting & VOC-free gluing',
  },
  {
    icon: (
      <svg className="nl-vp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Secure Payments',
    desc: 'UPI, Cards & Netbanking Verified',
  },
];

/* ─── 8 Circular Category Tiles (Authentic Table Tennis Equipment) ─── */
const CATEGORIES = [
  { name: 'Rubbers',       img: '/images/red-rubber.jpg' },
  { name: 'Blades',        img: '/images/pro-blade.jpg' },
  { name: 'Ready Bats',    img: '/images/custom-racket.jpg' },
  { name: 'Plastic Balls', img: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=400&q=80' },
  { name: 'Tables',        img: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=400&q=80' },
  { name: 'Care & Glue',   img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80' },
  { name: 'Footwear',      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80' },
  { name: 'Cases & Robots',img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80' },
];

/* ─── Dynamic Promo Collections Map (Adapts according to activeCategory) ─── */
const PROMO_DATA = {
  All: {
    card1: {
      tag: 'FEATURED BLADE COLLECTION',
      title: 'Pro Carbon & ALC Series',
      desc: 'Butterfly Viscaria, Nittaku Acoustic & Tibhar Lebrun — engineered for explosive offensive counter-looping.',
      cta: 'EXPLORE BLADES →',
      bg: '/images/pro-blade.jpg',
      target: 'Blades',
    },
    card2: {
      tag: 'COMPETITION RUBBERS',
      title: 'High-Tension Spin Series',
      desc: 'Dignics 09C, Tenergy 05, Fastarc G-1 & Hybrid K3 with state-of-the-art sponge dynamics.',
      cta: 'EXPLORE RUBBERS →',
      bg: '/images/tibhar-rubber.jpg',
      target: 'Rubbers',
    },
  },
  Rubbers: {
    card1: {
      tag: 'HYBRID MICRO-ADHESIVE',
      title: 'Explosive Arc & Tacky Grip',
      desc: 'Featuring Butterfly Dignics 09C, Nittaku Hurricane Pro 3 Turbo & Tibhar Hybrid K3 for maximum spin.',
      cta: 'SHOP HIGH-TENSION →',
      bg: '/images/black-rubber.jpg',
      target: 'Rubbers',
    },
    card2: {
      tag: 'TACTICAL PIPS & ANTI',
      title: 'Maximum Reversal & Control',
      desc: 'Featuring Nittaku Moristo SP short pips, Feint Long III & Donic Spike P1 for disruptive tactical defense.',
      cta: 'SHOP TACTICAL PIPS →',
      bg: '/images/red-rubber.jpg',
      target: 'Rubbers',
    },
  },
  Blades: {
    card1: {
      tag: 'ARYLATE CARBON & SUPER ZLC',
      title: 'Elite Tournament Blades',
      desc: 'Featuring Butterfly Viscaria Super ALC, Timo Boll ALC & Felix Lebrun Hyper Carbon for surgical precision.',
      cta: 'SHOP CARBON BLADES →',
      bg: '/images/donic-blade.jpg',
      target: 'Blades',
    },
    card2: {
      tag: 'CLASSIC ALL-WOOD & BALSA',
      title: 'Natural Touch & Resonance',
      desc: 'Featuring Nittaku Acoustic FL, Violin FL, Donic Waldner Allplay & Balsa Carbon for acoustic feedback.',
      cta: 'SHOP ALL-WOOD →',
      bg: '/images/stiga-blade.jpg',
      target: 'Blades',
    },
  },
  'Ready Bats': {
    card1: {
      tag: 'CARBOTEC CARBON SERIES',
      title: '100% Graphite Attack Rackets',
      desc: 'Donic Carbotec 7000 and 3000 — lightweight carbon frame with zero warping and championship power.',
      cta: 'SHOP CARBOTECH →',
      bg: '/images/custom-racket.jpg',
      target: 'Ready Bats',
    },
    card2: {
      tag: 'CLUB & COACHING SERIES',
      title: 'Player Sets & Tournament Bats',
      desc: 'Butterfly Timo Boll CF 2000, Wakaba 3000 & Tibhar Samsonov Powergrip for club training.',
      cta: 'SHOP READY BATS →',
      bg: '/images/hero-athlete.jpg',
      target: 'Ready Bats',
    },
  },
  Tables: {
    card1: {
      tag: '25MM ARENA TOURNAMENT TABLES',
      title: 'Donic Waldner 909 Arena',
      desc: '25mm tournament top, 100mm industrial heavy-duty wheels, reinforced 20x50mm steel apron.',
      cta: 'VIEW 25MM ARENA →',
      bg: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=1000&q=80',
      target: 'Tables',
    },
    card2: {
      tag: 'CLUB & RECREATION TABLES',
      title: 'Donic Team 707 & Champ Series',
      desc: '19mm and 18mm competition tables with compact safety-lock rollaway chassis.',
      cta: 'VIEW CLUB TABLES →',
      bg: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=1000&q=80',
      target: 'Tables',
    },
  },
  'Plastic Balls': {
    card1: {
      tag: 'ITTF APPROVED 3-STAR BALLS',
      title: 'Nittaku Premium 40+ Match',
      desc: 'Made in Japan seamless precision for official international championship play.',
      cta: 'VIEW MATCH BALLS →',
      bg: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=1000&q=80',
      target: 'Plastic Balls',
    },
    card2: {
      tag: 'CLUB TRAINING MULTI-PACKS',
      title: '72 & 144 Ball Bulk Packs',
      desc: 'Tibhar 40+ SL and Looop 3-Star H40+ bulk packs for daily coaching multi-ball drills.',
      cta: 'VIEW TRAINING BALLS →',
      bg: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1000&q=80',
      target: 'Plastic Balls',
    },
  },
  'Care & Glue': {
    card1: {
      tag: 'WATER-BASED VOC-FREE GLUES',
      title: 'Free Chack II & Clean Fix',
      desc: 'ITTF-compliant water-based adhesive formulas for clean, bubble-free rubber mounting.',
      cta: 'VIEW GLUES →',
      bg: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1000&q=80',
      target: 'Care & Glue',
    },
    card2: {
      tag: 'RUBBER CLEANERS & TAPES',
      title: 'Vario Clean & Edge Protection',
      desc: 'Preserve topsheet tackiness and protect blade perimeter edges from table strikes.',
      cta: 'VIEW ACCESSORIES →',
      bg: '/images/black-rubber.jpg',
      target: 'Care & Glue',
    },
  },
  Footwear: {
    card1: {
      tag: 'BUTTERFLY LEZOLINE RIFONES',
      title: 'Flagship Tournament Footwear',
      desc: 'Engineered for lightning-fast lateral footwork with torsion-resistant B-Armor technology.',
      cta: 'VIEW LEZOLINE →',
      bg: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&q=80',
      target: 'Footwear',
    },
    card2: {
      tag: 'LIGHTWEIGHT COURT TRACTION',
      title: 'Lezoline Vilight & Unizes',
      desc: 'Featherlight breathable mesh construction with non-marking high-friction rubber soles.',
      cta: 'VIEW ALL FOOTWEAR →',
      bg: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1000&q=80',
      target: 'Footwear',
    },
  },
  'Cases & Robots': {
    card1: {
      tag: 'ROBOTIC TRAINING SYSTEMS',
      title: 'Butterfly Amicus Prime Robot',
      desc: 'Made in Germany. Programmable frequency, spin, and trajectory via wireless tablet app.',
      cta: 'VIEW AMICUS ROBOT →',
      bg: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1000&q=80',
      target: 'Cases & Robots',
    },
    card2: {
      tag: 'TOURNAMENT BAT CASES & BAGS',
      title: 'Donic Full Aluminum Bat Cases',
      desc: 'Reinforced metal corners, shock-absorbing high-density foam, and moisture seal.',
      cta: 'VIEW BAT CASES →',
      bg: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=1000&q=80',
      target: 'Cases & Robots',
    },
  },
};

/* ─── Customer Testimonials ─── */
const REVIEWS = [
  {
    name: 'Coach Rajesh M.',
    badge: 'National Level Coach',
    rating: 5,
    quote: '“Every rubber and blade arrived factory-sealed in mint condition. The Butterfly Dignics 09C and Timo Boll ALC pairing gave my state academy players extraordinary arc and counter-drive control.”',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
  },
  {
    name: 'Vikram S.',
    badge: 'Verified Tournament Player',
    rating: 5,
    quote: '“Authentic products directly from authorized importers. Nittaku Fastarc G-1 and Donic Waldner 909 are the real deal. Super fast dispatch and impeccable customer service.”',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    name: 'Ananya P.',
    badge: 'State Cadet Champion',
    rating: 5,
    quote: '“The custom assembly was flawless — zero air bubbles, perfect edge-tape alignment, and genuine Free Chack II used. TableTerex is our team\'s go-to equipment store.”',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
];

/* ─── Instagram Lifestyle Images ─── */
const INSTA_POSTS = [
  '/images/hero-action.jpg',
  '/images/pro-blade.jpg',
  '/images/donic-blade.jpg',
  '/images/tibhar-rubber.jpg',
  '/images/custom-racket.jpg',
  '/images/hero-athlete.jpg',
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeBrand, setActiveBrand] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(24);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addToCart = (product, e) => {
    if (e) e.stopPropagation();
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateCartQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.numericPrice * item.qty,
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Dynamic filter across complete catalog of all 343 products
  const filteredProducts = ALL_PRODUCTS.filter((p) => {
    const matchCat = activeCategory ? p.category === activeCategory : true;
    const matchBrand = activeBrand ? p.brand === activeBrand : true;
    const matchSearch = searchQuery
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchCat && matchBrand && matchSearch;
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const currentPromo = PROMO_DATA[activeCategory] || PROMO_DATA['All'];

  return (
    <div className="nl-page-container">
      {/* ── 2. STORE HEADER & NAVIGATION ── */}
      <header className="nl-navbar">
        <div className="nl-navbar-inner">
          <Link href="/products" className="nl-logo">
            <span className="nl-logo-main">TABLETEREX</span>
            <span className="nl-logo-sub">OFFICIAL STORE · PRO GEAR</span>
          </Link>

          <nav className="nl-nav-desktop">
            <ul className="nl-nav-links">
              <li>
                <Link href="/" className="nl-nav-link">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#categories"
                  className="nl-nav-link active"
                  onClick={() => setActiveCategory(null)}
                >
                  Categories ▾
                </a>
              </li>
              <li>
                <a href="#bestsellers" className="nl-nav-link">
                  All Products
                </a>
              </li>
              <li>
                <a href="#story" className="nl-nav-link">
                  Brand Heritage
                </a>
              </li>
              <li>
                <a href="#reviews" className="nl-nav-link">
                  Reviews
                </a>
              </li>
            </ul>
          </nav>

          <div className="nl-nav-actions">
            {/* Search Button */}
            <button
              className="nl-action-icon"
              aria-label="Search Catalog"
              onClick={() => {
                const el = document.getElementById('bestsellers');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Wishlist Button with Badge */}
            <button
              className="nl-action-icon"
              aria-label="Wishlist"
              onClick={() => {
                const el = document.getElementById('bestsellers');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlist.length > 0 && (
                <span className="nl-badge">{wishlist.length}</span>
              )}
            </button>

            {/* Cart Trigger with Count */}
            <button
              className="nl-action-icon"
              onClick={() => setCartOpen(true)}
              aria-label="Shopping Cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && <span className="nl-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* ── 3. HERO SHOWCASE SECTION (Exact same code, spacing, length & breadth as Home Page Banner) ── */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <img
            src="/images/hero-action.jpg"
            alt="Table tennis pro player in action"
          />
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-content">
          <span className="hero-eyebrow text-label">
            OFFICIAL STORE &nbsp;•&nbsp; INDIA&apos;S PREMIUM TABLE TENNIS CATALOG
          </span>

          <div className="hero-headline-wrap">
            <span className="hero-line-1 text-display">PLAY BEYOND</span>
            <span className="hero-line-2 text-display hero-accent">LIMITS</span>
          </div>

          <div className="hero-text-badge">
            WHOLESALE PRICES · RETAIL QUANTITIES
          </div>

          <p className="hero-tagline">
            Fresh batches arrive every week. Custom-assembled rackets and pro rubber engineered for your game.
          </p>

          <div className="hero-cta-group">
            <a href="#categories" className="btn-primary" id="hero-btn-rackets">SHOP BY CATEGORY</a>
            <a href="#bestsellers" className="btn-outline" id="hero-btn-rubber">VIEW ALL PRODUCTS</a>
          </div>
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <div className="hero-scroll-line" />
          <span>SCROLL</span>
        </div>
      </section>

      {/* ── 4. VALUE PROPS / TRUST BAR (Moving Right to Left) ── */}
      <section className="nl-value-props" aria-label="Store Guarantees">
        <div className="nl-vp-marquee">
          <div className="nl-vp-track">
            {[0, 1, 2, 3].map((copyIndex) => (
              <div key={copyIndex} className="nl-vp-group" aria-hidden={copyIndex > 0 ? 'true' : undefined}>
                {VALUE_PROPS.map((vp, i) => (
                  <div key={i} className="nl-vp-item">
                    {vp.icon}
                    <div>
                      <div className="nl-vp-title">{vp.title}</div>
                      <div className="nl-vp-desc">{vp.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SHOP BY CATEGORY (8 CIRCULAR TILES DERIVED FROM PRODUCTS) ── */}
      <section className="nl-categories-section" id="categories">
        <div className="nl-section-header">
          <div>
            <span className="nl-mono-label">EQUIPMENT CATEGORIES</span>
            <h2 className="nl-section-title nl-serif">Find Equipment for Every Style</h2>
          </div>
          <button
            className="nl-view-all-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => {
              setActiveCategory(null);
              setActiveBrand(null);
            }}
          >
            {activeCategory ? `Clear Filter (${activeCategory}) ✕` : 'View all →'}
          </button>
        </div>

        <div className="nl-categories-grid">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                className="nl-cat-card"
                onClick={() => {
                  const nextCat = isSelected ? null : cat.name;
                  setActiveCategory(nextCat);
                  // Smoothly scroll to the synced sections below
                  const el = document.getElementById('collections');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <div
                  className="nl-cat-circle"
                  style={
                    isSelected
                      ? { borderColor: 'var(--orange)', transform: 'scale(1.08)', boxShadow: '0 8px 24px rgba(201, 86, 30, 0.3)' }
                      : {}
                  }
                >
                  <img src={cat.img} alt={cat.name} className="nl-cat-img" />
                </div>
                <span
                  className="nl-cat-name"
                  style={isSelected ? { color: 'var(--orange)', fontWeight: 700 } : {}}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── 6. DUAL FEATURED PROMO BANNERS (Moves & Updates dynamically with Categories) ── */}
      <section className="nl-promo-section" id="collections">
        <div className="nl-promo-grid">
          {/* Card 1 */}
          <div className="nl-promo-card">
            <img
              src={currentPromo.card1.bg}
              alt={currentPromo.card1.title}
              className="nl-promo-bg"
            />
            <div className="nl-promo-overlay" />
            <div className="nl-promo-content">
              <span className="nl-mono-label" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {currentPromo.card1.tag}
              </span>
              <h3 className="nl-promo-title nl-serif">
                {currentPromo.card1.title}
              </h3>
              <p className="nl-promo-desc">
                {currentPromo.card1.desc}
              </p>
              <button
                className="nl-btn-secondary"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', background: 'transparent' }}
                onClick={() => {
                  setActiveCategory(currentPromo.card1.target);
                  const el = document.getElementById('bestsellers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {currentPromo.card1.cta}
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="nl-promo-card">
            <img
              src={currentPromo.card2.bg}
              alt={currentPromo.card2.title}
              className="nl-promo-bg"
            />
            <div className="nl-promo-overlay" />
            <div className="nl-promo-content">
              <span className="nl-mono-label" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {currentPromo.card2.tag}
              </span>
              <h3 className="nl-promo-title nl-serif">
                {currentPromo.card2.title}
              </h3>
              <p className="nl-promo-desc">
                {currentPromo.card2.desc}
              </p>
              <button
                className="nl-btn-secondary"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', background: 'transparent' }}
                onClick={() => {
                  setActiveCategory(currentPromo.card2.target);
                  const el = document.getElementById('bestsellers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {currentPromo.card2.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. BESTSELLERS / PRODUCT CATALOG GRID (Moves & Filters dynamically with Categories) ── */}
      <section className="nl-bestsellers-section" id="bestsellers">
        <div className="nl-section-header" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="nl-mono-label">
                {activeCategory ? `CATEGORY: ${activeCategory.toUpperCase()}` : 'OFFICIAL MANUFACTURER CATALOG'}
              </span>
              <h2 className="nl-section-title nl-serif">
                {activeCategory ? `${activeCategory} Collection` : 'All 343 Competition Equipment Items'}
              </h2>
              <p style={{ margin: '6px 0 0', fontSize: '0.82rem', color: 'rgba(17, 17, 16, 0.65)', fontFamily: 'var(--font-mono)' }}>
                Showing {displayedProducts.length} of {filteredProducts.length} products from Butterfly, Nittaku, Donic, Tibhar & Looop
              </p>
            </div>

            {/* Quick Search Bar */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
              <input
                type="text"
                placeholder="Search by name, spec or brand..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(24);
                }}
                style={{
                  width: '100%',
                  padding: '10px 36px 10px 36px',
                  borderRadius: '24px',
                  border: '1px solid rgba(17, 17, 16, 0.2)',
                  background: 'var(--white)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  outline: 'none',
                  color: 'var(--black)',
                }}
              />
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '13px',
                    color: '#888',
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Brand Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'rgba(17,17,16,0.5)', fontWeight: 600, marginRight: '4px' }}>
              BRAND:
            </span>
            {['Butterfly', 'Nittaku', 'Donic', 'Tibhar', 'Looop'].map((b) => {
              const isSelected = activeBrand === b;
              const count = ALL_PRODUCTS.filter((p) => p.brand === b && (!activeCategory || p.category === activeCategory)).length;
              return (
                <button
                  key={b}
                  onClick={() => {
                    setActiveBrand(isSelected ? null : b);
                    setVisibleCount(24);
                  }}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: isSelected ? '1px solid var(--black)' : '1px solid rgba(17, 17, 16, 0.15)',
                    background: isSelected ? 'var(--black)' : 'transparent',
                    color: isSelected ? 'var(--white)' : 'var(--black)',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>{b}</span>
                  <span style={{ opacity: 0.65, fontSize: '0.65rem' }}>({count})</span>
                </button>
              );
            })}

            {(activeCategory || activeBrand || searchQuery) && (
              <button
                className="nl-view-all-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '8px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--orange)', fontWeight: 600 }}
                onClick={() => {
                  setActiveCategory(null);
                  setActiveBrand(null);
                  setSearchQuery('');
                  setVisibleCount(24);
                }}
              >
                Reset All Filters ✕
              </button>
            )}
          </div>
        </div>

        {displayedProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'rgba(17, 17, 16, 0.03)', borderRadius: '12px', margin: '30px 0' }}>
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>No products match your criteria</h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(17, 17, 16, 0.6)', marginBottom: '16px' }}>Try adjusting your search terms or clearing selected brand/category filters.</p>
            <button
              className="nl-btn-secondary"
              onClick={() => {
                setActiveCategory(null);
                setActiveBrand(null);
                setSearchQuery('');
                setVisibleCount(24);
              }}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>
            <div className="nl-products-grid">
              {displayedProducts.map((prod) => {
                const isFav = wishlist.includes(prod.id);
                const inCart = cart.find((item) => item.id === prod.id);

                return (
                  <div
                    key={prod.id}
                    className="nl-product-card"
                    onClick={() => setSelectedProduct(prod)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="nl-product-img-wrap">
                      <img src={prod.image} alt={prod.name} className="nl-product-img" loading="lazy" />
                      
                      {/* Brand Badge */}
                      <span
                        style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          background: 'rgba(17, 17, 16, 0.85)',
                          color: 'var(--white)',
                          padding: '4px 10px',
                          borderRadius: '3px',
                          fontSize: '0.62rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          zIndex: 2,
                        }}
                      >
                        {prod.brand}
                      </span>

                      <button
                        className={`nl-wishlist-btn${isFav ? ' active' : ''}`}
                        onClick={(e) => toggleWishlist(prod.id, e)}
                        aria-label="Save to Wishlist"
                      >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill={isFav ? 'var(--orange)' : 'none'} stroke="currentColor" strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </button>
                    </div>

                    <div className="nl-product-info">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                        <h3 className="nl-product-title">{prod.name}</h3>
                      </div>

                      <div style={{ fontSize: '0.7rem', color: 'var(--orange)', fontFamily: 'var(--font-mono)', fontWeight: 600, margin: '2px 0 6px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {prod.specs}
                      </div>

                      <div className="nl-product-price">{prod.price}</div>
                      
                      <div className="nl-product-rating">
                        <span className="nl-stars">★★★★★</span>
                        <span className="nl-reviews-count">({prod.reviews})</span>
                      </div>

                      <button
                        className={`nl-add-to-cart-btn${inCart ? ' added' : ''}`}
                        onClick={(e) => addToCart(prod, e)}
                      >
                        {inCart ? `✓ ADDED (${inCart.qty})` : 'ADD TO CART'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More Products Button */}
            {visibleCount < filteredProducts.length && (
              <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <button
                  className="nl-btn-secondary"
                  onClick={() => setVisibleCount((prev) => prev + 24)}
                  style={{
                    padding: '16px 40px',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                  }}
                >
                  LOAD MORE PRODUCTS ({filteredProducts.length - visibleCount} REMAINING) ↓
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* ── 8. BRAND HERITAGE & QUALITY GUARANTEE ── */}
      <section className="nl-story-section" id="story">
        <div className="nl-story-grid">
          {/* Left Lifestyle Photo */}
          <div className="nl-story-img-card">
            <img
              src="/images/hero-athlete.jpg"
              alt="Professional Table Tennis Athlete"
              className="nl-story-img"
            />
          </div>

          {/* Center Brand Philosophy */}
          <div className="nl-story-center-card">
            <span className="nl-mono-label">AUTHENTIC TOURNAMENT EQUIPMENT</span>
            <h2 className="nl-story-title nl-serif">
              Engineered for
              <br />
              Championship Play
            </h2>
            <p className="nl-story-desc">
              Every rubber sheet, blade ply, and competition table in our inventory is sourced directly from authorized Indian distribution channels of Butterfly, Nittaku, Donic, and Tibhar.
            </p>
            <div>
              <a href="#bestsellers" className="nl-btn-primary">
                VIEW CATALOG →
              </a>
            </div>
          </div>

          {/* Right Dark Card */}
          <div className="nl-story-dark-card">
            <div className="nl-story-dark-overlay" />
            <div className="nl-story-dark-content">
              <h3 className="nl-story-dark-title">
                TableTerex
                <br />
                Pro Quality Guarantee
              </h3>

              <ul className="nl-pillars-list">
                <li className="nl-pillar-item">
                  <svg className="nl-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span>100% Factory Sealed Batches</span>
                </li>
                <li className="nl-pillar-item">
                  <svg className="nl-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span>Official ITTF Approved Stamps</span>
                </li>
                <li className="nl-pillar-item">
                  <svg className="nl-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span>Laser-Checked Blade Weight</span>
                </li>
                <li className="nl-pillar-item">
                  <svg className="nl-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span>Free Professional Assembly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. SECONDARY TRUST BADGES ── */}
      <section className="nl-secondary-trust">
        <div className="nl-secondary-trust-grid">
          <div className="nl-trust-box">
            <svg className="nl-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div className="nl-trust-title">Genuine Import</div>
            <div className="nl-trust-sub">Authorized Indian Stock</div>
          </div>

          <div className="nl-trust-box">
            <svg className="nl-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <div className="nl-trust-title">Competition Grade</div>
            <div className="nl-trust-sub">ITTF Tournament Approved</div>
          </div>

          <div className="nl-trust-box">
            <svg className="nl-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <div className="nl-trust-title">Pro Craftsmanship</div>
            <div className="nl-trust-sub">Free Racket Assembly</div>
          </div>

          <div className="nl-trust-box">
            <svg className="nl-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <div className="nl-trust-title">Trusted by Pros</div>
            <div className="nl-trust-sub">10,000+ players nationwide</div>
          </div>
        </div>
      </section>

      {/* ── 10. CUSTOMER TESTIMONIALS ── */}
      <section className="nl-reviews-section" id="reviews">
        <div className="nl-section-header">
          <div>
            <span className="nl-mono-label">VERIFIED REVIEWS</span>
            <h2 className="nl-section-title nl-serif">Trusted by Players & Academies</h2>
          </div>
          <div className="nl-reviews-ctrls">
            <button
              className="nl-review-arrow"
              onClick={() =>
                setReviewIdx((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1))
              }
              aria-label="Previous Review"
            >
              ←
            </button>
            <button
              className="nl-review-arrow"
              onClick={() =>
                setReviewIdx((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1))
              }
              aria-label="Next Review"
            >
              →
            </button>
          </div>
        </div>

        <div className="nl-reviews-grid">
          {REVIEWS.map((rev, idx) => (
            <div
              key={rev.name}
              className={`nl-review-card${idx === reviewIdx ? ' active-card' : ''}`}
            >
              <div className="nl-review-header">
                <img src={rev.avatar} alt={rev.name} className="nl-review-avatar" />
                <div>
                  <h4 className="nl-reviewer-name">{rev.name}</h4>
                  <span className="nl-reviewer-badge">{rev.badge}</span>
                </div>
              </div>
              <div className="nl-review-stars">★★★★★</div>
              <p className="nl-review-quote">{rev.quote}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 11. INSTAGRAM COMMUNITY GRID ── */}
      <section className="nl-social-section">
        <div className="nl-section-header">
          <div>
            <span className="nl-mono-label">FOLLOW US @TABLETEREX</span>
            <h2 className="nl-section-title nl-serif">Real Gear. Championship Action.</h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nl-view-all-link"
          >
            View on Instagram →
          </a>
        </div>

        <div className="nl-social-grid">
          {INSTA_POSTS.map((src, i) => (
            <div key={i} className="nl-social-item">
              <img src={src} alt={`Table tennis gear ${i + 1}`} className="nl-social-img" />
              <div className="nl-social-hover-overlay">
                <span>View Equipment</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 12. NEWSLETTER COMMUNITY BANNER ── */}
      <section className="nl-newsletter-section">
        <div className="nl-newsletter-card">
          <div className="nl-newsletter-left">
            <span className="nl-mono-label" style={{ color: 'var(--orange)' }}>
              TOURNAMENT VIP ACCESS
            </span>
            <h2 className="nl-newsletter-title nl-serif">
              Join the TableTerex Community
            </h2>
            <p className="nl-newsletter-desc">
              Receive fresh stock alerts for Butterfly Dignics, imported Japanese Nittaku blades, and wholesale discount announcements directly to your inbox.
            </p>

            {subscribed ? (
              <div
                style={{
                  background: 'rgba(201, 86, 30, 0.12)',
                  border: '1px solid var(--orange)',
                  padding: '16px 20px',
                  borderRadius: '4px',
                  color: 'var(--orange)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                }}
              >
                ✓ You are on the VIP stock notification list!
              </div>
            ) : (
              <form
                className="nl-newsletter-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubscribed(true);
                }}
              >
                <input
                  type="email"
                  className="nl-email-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="nl-btn-primary">
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>

          <div className="nl-newsletter-right">
            <img
              src="/images/custom-racket.jpg"
              alt="Custom table tennis racket"
              className="nl-newsletter-img"
            />
            <div className="nl-newsletter-script nl-script">
              Play Beyond,
              <br />
              Never Settle ♡
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. 4-COLUMN FOOTER ── */}
      <footer className="nl-footer">
        <div className="nl-footer-grid">
          <div className="nl-footer-col">
            <span className="nl-logo-main">TABLETEREX</span>
            <span className="nl-logo-sub" style={{ display: 'block', marginBottom: '14px' }}>
              OFFICIAL EQUIPMENT STORE
            </span>
            <p className="nl-footer-desc">
              India's premier authorized distributor of tournament table tennis equipment. Genuine Butterfly, Nittaku, Donic, and Tibhar.
            </p>
          </div>

          <div className="nl-footer-col">
            <h4 className="nl-footer-title">Equipment Categories</h4>
            <ul className="nl-footer-links">
              <li><button onClick={() => setActiveCategory('Rubbers')} className="nl-footer-btn">T.T. Rubbers</button></li>
              <li><button onClick={() => setActiveCategory('Blades')} className="nl-footer-btn">Competition Blades</button></li>
              <li><button onClick={() => setActiveCategory('Ready Bats')} className="nl-footer-btn">Ready-Made Bats</button></li>
              <li><button onClick={() => setActiveCategory('Plastic Balls')} className="nl-footer-btn">ITTF 3-Star Balls</button></li>
              <li><button onClick={() => setActiveCategory('Tables')} className="nl-footer-btn">Tournament Tables</button></li>
              <li><button onClick={() => setActiveCategory('Care & Glue')} className="nl-footer-btn">Glues & Cleaners</button></li>
            </ul>
          </div>

          <div className="nl-footer-col">
            <h4 className="nl-footer-title">Company Brands</h4>
            <ul className="nl-footer-links">
              <li><button onClick={() => setActiveBrand('Butterfly')} className="nl-footer-btn">Butterfly (Baljit & Co.)</button></li>
              <li><button onClick={() => setActiveBrand('Nittaku')} className="nl-footer-btn">Nittaku (Delux Sports)</button></li>
              <li><button onClick={() => setActiveBrand('Donic')} className="nl-footer-btn">Donic (Delux Sports)</button></li>
              <li><button onClick={() => setActiveBrand('Tibhar')} className="nl-footer-btn">Tibhar (DNM Sports)</button></li>
              <li><Link href="/about">About TableTerex</Link></li>
              <li><Link href="/contact">Wholesale Inquiries</Link></li>
            </ul>
          </div>

          <div className="nl-footer-col">
            <h4 className="nl-footer-title">Customer Care</h4>
            <ul className="nl-footer-links">
              <li><a href="#hero">Track Order</a></li>
              <li><a href="#hero">Returns & Exchanges</a></li>
              <li><a href="#hero">Shipping Rates</a></li>
              <li><a href="#hero">Rubber Assembly Service</a></li>
              <li><a href="#hero">Terms of Service</a></li>
              <li><a href="#hero">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="nl-footer-bottom">
          <span>© 2026 TableTerex. Authorized Indian Distributor. All rights reserved.</span>
          <span className="nl-footer-tagline">Play Beyond Limits.</span>
        </div>
      </footer>

      {/* ── 14. QUICK VIEW MODAL ── */}
      {selectedProduct && (
        <div className="nl-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="nl-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="nl-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="nl-modal-grid">
              <div className="nl-modal-img-wrap">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="nl-modal-img"
                />
              </div>

              <div className="nl-modal-body">
                <span className="nl-mono-label" style={{ color: 'var(--orange)' }}>
                  {selectedProduct.brand} · {selectedProduct.category}
                </span>
                <h2 className="nl-modal-title nl-serif">{selectedProduct.name}</h2>
                <div className="nl-modal-price">{selectedProduct.price}</div>

                <div className="nl-product-rating" style={{ marginBottom: '14px' }}>
                  <span className="nl-stars">★★★★★</span>
                  <span className="nl-reviews-count">
                    ({selectedProduct.reviews} verified reviews)
                  </span>
                </div>

                <p className="nl-modal-desc">{selectedProduct.desc}</p>

                <div className="nl-modal-specs">
                  <div className="nl-spec-row">
                    <span className="nl-spec-k">Specifications:</span>
                    <span className="nl-spec-v">{selectedProduct.specs}</span>
                  </div>
                  <div className="nl-spec-row">
                    <span className="nl-spec-k">Material / Build:</span>
                    <span className="nl-spec-v">{selectedProduct.material}</span>
                  </div>
                  <div className="nl-spec-row">
                    <span className="nl-spec-k">Origin:</span>
                    <span className="nl-spec-v">{selectedProduct.origin}</span>
                  </div>
                </div>

                <button
                  className="nl-btn-primary"
                  style={{ width: '100%', marginTop: '16px' }}
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                >
                  ADD TO CART ({selectedProduct.price})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 15. SLIDE-OUT MINI CART DRAWER ── */}
      {cartOpen && (
        <div className="nl-drawer-backdrop" onClick={() => setCartOpen(false)}>
          <div className="nl-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="nl-drawer-header">
              <h3 className="nl-drawer-title nl-serif">
                Your Bag ({cartCount})
              </h3>
              <button
                className="nl-drawer-close"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            <div className="nl-drawer-items">
              {cart.length === 0 ? (
                <div className="nl-drawer-empty">
                  <p>Your shopping bag is empty.</p>
                  <button
                    className="nl-btn-primary"
                    onClick={() => setCartOpen(false)}
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="nl-drawer-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="nl-drawer-item-img"
                    />
                    <div className="nl-drawer-item-info">
                      <h4 className="nl-drawer-item-name">{item.name}</h4>
                      <div className="nl-drawer-item-price">{item.price}</div>
                      <div className="nl-qty-ctrl">
                        <button
                          className="nl-qty-btn"
                          onClick={() => updateCartQty(item.id, -1)}
                        >
                          −
                        </button>
                        <span className="nl-qty-num">{item.qty}</span>
                        <button
                          className="nl-qty-btn"
                          onClick={() => updateCartQty(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="nl-drawer-footer">
                <div className="nl-drawer-total">
                  <span>Subtotal:</span>
                  <span className="nl-total-num">
                    ₹{cartTotal.toLocaleString('en-IN')}.00
                  </span>
                </div>
                <button
                  className="nl-btn-primary"
                  style={{ width: '100%', marginBottom: '10px' }}
                  onClick={() => alert('Proceeding to Secure Checkout with Indian Distributor Stock!')}
                >
                  PROCEED TO CHECKOUT →
                </button>
                <div style={{ textAlign: 'center', fontSize: '0.65rem', color: 'var(--gray)' }}>
                  100% Guaranteed Genuine Equipment with Free Assembly
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
