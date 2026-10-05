'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ALL_PRODUCTS } from '@/data/allProducts';
import Footer from '@/components/Footer';
import { getWhatsAppProductUrl, getWhatsAppCartUrl } from '@/utils/whatsapp';
import './product-detail.css';

export default function ProductDetailClient({ productId }) {
  // Retrieve current product
  const product = useMemo(() => {
    return ALL_PRODUCTS.find((p) => p.id === productId);
  }, [productId]);

  // Gallery perspectives
  const galleryImages = useMemo(() => {
    if (!product) return [];
    return [
      { id: 'front', label: 'Primary View', src: product.image },
      { id: 'profile', label: 'Edge Profile', src: '/images/pro-blade.jpg' },
      { id: 'texture', label: 'Build Texture', src: '/images/tibhar-rubber.jpg' },
      { id: 'action', label: 'Tournament Action', src: '/images/hero-athlete.jpg' },
    ];
  }, [product]);

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Configuration options
  const isRubber = product?.category?.toLowerCase().includes('rubber');
  const isBladeOrBat =
    product?.category?.toLowerCase().includes('blade') ||
    product?.category?.toLowerCase().includes('bat');

  const [selectedThickness, setSelectedThickness] = useState(isRubber ? '2.1mm (Max)' : '');
  const [selectedColor, setSelectedColor] = useState(isRubber ? 'Black' : '');
  const [selectedGrip, setSelectedGrip] = useState(isBladeOrBat ? 'Flared (FL)' : '');

  // Quantity & Cart State
  const [qty, setQty] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [addedNotice, setAddedNotice] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Tab State
  const [activeTab, setActiveTab] = useState('overview');

  // Related products (from same category or brand)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return ALL_PRODUCTS
      .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
      .slice(0, 4);
  }, [product]);

  // Calculate pricing numbers
  const numericPrice = product?.numericPrice || 1500;
  const mrpPrice = Math.round(numericPrice * 1.18);
  const savings = mrpPrice - numericPrice;

  // Cart total calculations
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);
  const cartTotal = cart.reduce((total, item) => {
    const p = item.numericPrice || 0;
    return total + p * item.qty;
  }, 0);

  // Add to Cart handler
  const handleAddToCart = () => {
    if (!product) return;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...product, qty }];
    });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
    setCartOpen(true);
  };

  const updateCartQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  // Build WhatsApp URL with live selected options
  const currentWhatsAppUrl = useMemo(() => {
    if (!product) return '#';
    const opts = {};
    if (selectedThickness) opts['Sponge Thickness'] = selectedThickness;
    if (selectedColor) opts['Rubber Color'] = selectedColor;
    if (selectedGrip) opts['Handle Grip'] = selectedGrip;
    opts['Quantity'] = `${qty} unit(s)`;
    return getWhatsAppProductUrl(product, opts);
  }, [product, selectedThickness, selectedColor, selectedGrip, qty]);

  // 404 / Product Not Found fallback
  if (!product) {
    return (
      <div className="pd-page" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', marginBottom: '16px' }}>
          Equipment Not Found
        </h1>
        <p style={{ color: 'var(--gray)', marginBottom: '32px' }}>
          The requested product ID &quot;{productId}&quot; is not in our active catalog.
        </p>
        <Link href="/products" className="nl-btn-primary" style={{ display: 'inline-block' }}>
          ← Back to Official Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="pd-page">
      {/* ── 1. TOP ANNOUNCEMENT BAR ── */}
      <div className="pd-topbar">
        <div className="pd-topbar-inner">
          <div>
            ⚡ <strong>OFFICIAL INDIAN DISTRIBUTOR</strong> · 100% Genuine ITTF Approved Gear
          </div>
          <div className="pd-topbar-right">
            <span style={{ color: 'var(--orange)', fontWeight: 700 }}>
              FREE Assembly & VOC-free Gluing Service Included
            </span>
            <Link href="/products" className="pd-topbar-link">
              View All Equipment →
            </Link>
          </div>
        </div>
      </div>

      {/* ── 2. STICKY HEADER ── */}
      <header className="pd-header">
        <div className="pd-header-inner">
          <Link href="/products" className="pd-logo-wrap">
            <img
              src="/images/tableterex-logo.png"
              alt="TableTerex Logo"
              className="pd-logo-img"
            />
            <div className="pd-logo-text">
              <span className="pd-logo-main">TABLETEREX</span>
              <span className="pd-logo-sub">OFFICIAL TOURNAMENT STORE</span>
            </div>
          </Link>

          <nav>
            <ul className="pd-nav-links">
              <li>
                <Link href="/" className="pd-nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="pd-nav-link">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/products#categories" className="pd-nav-link">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="pd-nav-link">
                  Heritage
                </Link>
              </li>
              <li>
                <a href="#details" className="pd-nav-link">
                  Specifications
                </a>
              </li>
            </ul>
          </nav>

          <div className="pd-header-actions">
            <button
              className="pd-cart-btn"
              onClick={() => setCartOpen(true)}
              aria-label="View shopping bag"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>BAG</span>
              {cartCount > 0 && <span className="pd-cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* ── 3. BREADCRUMBS ── */}
      <nav className="pd-breadcrumbs-wrap" aria-label="Breadcrumbs">
        <Link href="/" className="pd-crumb-link">Home</Link>
        <span>/</span>
        <Link href="/products" className="pd-crumb-link">Products</Link>
        <span>/</span>
        <span className="pd-crumb-link">{product.category}</span>
        <span>/</span>
        <span className="pd-crumb-active">{product.name}</span>
      </nav>

      {/* ── 4. MAIN PRODUCT SHOWCASE ── */}
      <main className="pd-main-section">
        <div className="pd-showcase-grid">
          {/* ── Left Column: Media Gallery ── */}
          <div className="pd-gallery-column">
            <div className="pd-featured-image-box">
              {/* Badges */}
              <div className="pd-badge-floating">
                <span className="pd-badge-pill orange">
                  ✓ {product.brand} Official
                </span>
                <span className="pd-badge-pill">
                  ITTF Approved
                </span>
              </div>

              {/* Wishlist toggle */}
              <button
                type="button"
                className="pd-wishlist-toggle"
                onClick={() => setIsWishlisted((prev) => !prev)}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill={isWishlisted ? '#ff3b30' : 'none'}
                  stroke={isWishlisted ? '#ff3b30' : '#111110'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>

              <img
                src={galleryImages[activeImgIndex]?.src || product.image}
                alt={`${product.name} - ${galleryImages[activeImgIndex]?.label}`}
                className="pd-featured-img"
              />
            </div>

            {/* Thumbnail Selector Strip */}
            <div className="pd-thumbnails-strip">
              {galleryImages.map((img, idx) => (
                <button
                  key={img.id}
                  type="button"
                  className={`pd-thumbnail-item${idx === activeImgIndex ? ' active' : ''}`}
                  onClick={() => setActiveImgIndex(idx)}
                >
                  <img src={img.src} alt={img.label} className="pd-thumb-img" />
                  <span className="pd-thumb-label">{img.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Right Column: Product Purchase Panel ── */}
          <div className="pd-info-column">
            <div className="pd-brand-row">
              <span className="pd-brand-tag">
                {product.brand} · {product.category}
              </span>
              <span className="pd-origin-tag">
                🗾 {product.origin || 'Imported Genuine Stock'}
              </span>
            </div>

            <h1 className="pd-title">{product.name}</h1>

            <div className="pd-rating-strip">
              <div className="pd-stars">★★★★★</div>
              <span className="pd-rating-text">
                4.9 / 5.0 Rating
              </span>
              <span className="pd-reviews-link" onClick={() => setActiveTab('reviews')}>
                ({product.reviews || 42} verified tournament reviews)
              </span>
            </div>

            {/* Price Box */}
            <div className="pd-price-box">
              <div className="pd-price-row">
                <span className="pd-current-price">{product.price}</span>
                <span className="pd-mrp-price">₹{mrpPrice.toLocaleString('en-IN')}.00</span>
                <span className="pd-save-pill">Save ₹{savings.toLocaleString('en-IN')} (15% OFF)</span>
              </div>
              <span className="pd-tax-note">
                Inclusive of GST · Free Express Insured Pan-India Shipping
              </span>

              <div className="pd-stock-status">
                <span className="pd-pulse-dot" />
                <span>IN STOCK — Ready for 24h Express Dispatch</span>
              </div>
            </div>

            {/* Short Description */}
            <p className="pd-short-desc">
              {product.desc ||
                `Original ${product.brand} tournament-grade equipment. Sourced directly from official Indian importers to guarantee fresh weekly batch quality, zero oxidation, and full ITTF compliance.`}
            </p>

            {/* ── Option Selectors ── */}

            {/* Sponge Thickness for Rubbers */}
            {isRubber && (
              <div className="pd-option-block">
                <div className="pd-option-label">
                  <span>Sponge Thickness</span>
                  <span className="pd-option-chosen">{selectedThickness}</span>
                </div>
                <div className="pd-pills-row">
                  {['2.1mm (Max)', '1.9mm', '2.0mm'].map((th) => (
                    <button
                      key={th}
                      type="button"
                      className={`pd-pill-btn${selectedThickness === th ? ' active' : ''}`}
                      onClick={() => setSelectedThickness(th)}
                    >
                      {th}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color for Rubbers */}
            {isRubber && (
              <div className="pd-option-block">
                <div className="pd-option-label">
                  <span>Rubber Sheet Color</span>
                  <span className="pd-option-chosen">{selectedColor}</span>
                </div>
                <div className="pd-pills-row">
                  {[
                    { name: 'Black', class: 'black' },
                    { name: 'Red', class: 'red' },
                  ].map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      className={`pd-color-pill${selectedColor === c.name ? ' active' : ''}`}
                      onClick={() => setSelectedColor(c.name)}
                    >
                      <span className={`pd-color-dot ${c.class}`} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Handle Grip for Blades / Bats */}
            {isBladeOrBat && (
              <div className="pd-option-block">
                <div className="pd-option-label">
                  <span>Handle / Grip Type</span>
                  <span className="pd-option-chosen">{selectedGrip}</span>
                </div>
                <div className="pd-pills-row">
                  {['Flared (FL)', 'Straight (ST)', 'Anatomic (AN)', 'Penhold (CS)'].map((grip) => (
                    <button
                      key={grip}
                      type="button"
                      className={`pd-pill-btn${selectedGrip === grip ? ' active' : ''}`}
                      onClick={() => setSelectedGrip(grip)}
                    >
                      {grip}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & CTA Buttons */}
            <div className="pd-cta-wrapper">
              <div className="pd-qty-actions-row">
                {/* Quantity counter */}
                <div className="pd-qty-picker">
                  <button
                    type="button"
                    className="pd-qty-btn"
                    onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="pd-qty-display">{qty}</span>
                  <button
                    type="button"
                    className="pd-qty-btn"
                    onClick={() => setQty((prev) => prev + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag button */}
                <button
                  type="button"
                  className={`pd-add-bag-btn${addedNotice ? ' added' : ''}`}
                  onClick={handleAddToCart}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  {addedNotice ? '✓ ADDED TO BAG' : 'ADD TO BAG'}
                </button>
              </div>

              {/* High Visibility Direct WhatsApp Buy / Inquiry Button */}
              <a
                href={currentWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-whatsapp-buy-btn"
                id="btn-whatsapp-product-order"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.12c-.24.68-1.39 1.31-1.92 1.39-.5.08-1.14.12-3.69-.93-3.26-1.35-5.36-4.66-5.52-4.88-.16-.22-1.32-1.76-1.32-3.36s.84-2.39 1.14-2.72c.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.2.01.47-.08.74.56.27.66.93 2.27 1.01 2.44.08.16.14.36.03.58-.11.22-.16.36-.33.56-.16.2-.35.45-.5.6-.16.16-.33.34-.14.67.19.33.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.96 1.04-1.29.22-.33.44-.27.74-.16.3.11 1.92.9 2.25 1.06.33.16.55.25.63.39.08.14.08.82-.16 1.5z" />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.2 }}>
                  <span>ORDER / INQUIRE ON WHATSAPP</span>
                  <span className="pd-whatsapp-btn-sub">Instant chat with Table Tennis Equipment Specialist</span>
                </div>
              </a>
            </div>

            {/* Perks Strip */}
            <div className="pd-perks-grid">
              <div className="pd-perk-item">
                <div className="pd-perk-icon">🛡️</div>
                <div>
                  <div className="pd-perk-title">100% Genuine Importers</div>
                  <div className="pd-perk-desc">Authentic serials & fresh batches</div>
                </div>
              </div>

              <div className="pd-perk-item">
                <div className="pd-perk-icon">⚡</div>
                <div>
                  <div className="pd-perk-title">Express Pan-India Dispatch</div>
                  <div className="pd-perk-desc">Insured courier in 2-4 business days</div>
                </div>
              </div>

              <div className="pd-perk-item">
                <div className="pd-perk-icon">🔧</div>
                <div>
                  <div className="pd-perk-title">Free Racket Assembly</div>
                  <div className="pd-perk-desc">VOC-free gluing & precision edge tape</div>
                </div>
              </div>

              <div className="pd-perk-item">
                <div className="pd-perk-icon">💬</div>
                <div>
                  <div className="pd-perk-title">Pro Equipment Advice</div>
                  <div className="pd-perk-desc">Coaches ready to help on WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── 5. DETAILED SPECIFICATIONS & TECH TABS ── */}
      <section className="pd-details-section" id="details">
        <div className="pd-tabs-card">
          <div className="pd-tabs-nav">
            <button
              className={`pd-tab-btn${activeTab === 'overview' ? ' active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview & Player Style
            </button>
            <button
              className={`pd-tab-btn${activeTab === 'specs' ? ' active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Technical Specifications
            </button>
            <button
              className={`pd-tab-btn${activeTab === 'assembly' ? ' active' : ''}`}
              onClick={() => setActiveTab('assembly')}
            >
              Assembly & Care
            </button>
            <button
              className={`pd-tab-btn${activeTab === 'reviews' ? ' active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Verified Reviews ({product.reviews || 42})
            </button>
          </div>

          <div className="pd-tab-content">
            {/* 1. Overview */}
            {activeTab === 'overview' && (
              <div className="pd-overview-layout">
                <div className="pd-overview-text">
                  <h3>Engineered for Precision & Tournament Dominance</h3>
                  <p>
                    The <strong>{product.name}</strong> from <strong>{product.brand}</strong> is built for serious competitive players seeking explosive speed, high-trajectory spin, and pinpoint placement under championship pressure.
                  </p>
                  <p>
                    Every unit distributed by TableTerex is sourced directly through official manufacturer channels in fresh weekly batches. Unlike stale warehouse inventory, our products are stored in temperature-controlled environments to preserve sponge elasticity and topsheet tackiness.
                  </p>

                  <h4 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px' }}>
                    Key Performance Highlights:
                  </h4>
                  <ul className="pd-features-list">
                    <li className="pd-feature-item">
                      <span className="pd-feature-check">✓</span>
                      <span>Approved by the International Table Tennis Federation (ITTF) for all sanctioned tournaments.</span>
                    </li>
                    <li className="pd-feature-item">
                      <span className="pd-feature-check">✓</span>
                      <span>Advanced composite build ensures consistent bounce across the entire active sweet spot.</span>
                    </li>
                    <li className="pd-feature-item">
                      <span className="pd-feature-check">✓</span>
                      <span>Optimized dwell time enables aggressive heavy-spin loops and sharp counter-drives.</span>
                    </li>
                  </ul>
                </div>

                <div className="pd-performance-box">
                  <div className="pd-performance-title">Performance Metrics</div>
                  
                  <div className="pd-meter-row">
                    <div className="pd-meter-header">
                      <span>Speed</span>
                      <span>9.6 / 10</span>
                    </div>
                    <div className="pd-meter-bar">
                      <div className="pd-meter-fill" style={{ width: '96%' }} />
                    </div>
                  </div>

                  <div className="pd-meter-row">
                    <div className="pd-meter-header">
                      <span>Spin</span>
                      <span>9.4 / 10</span>
                    </div>
                    <div className="pd-meter-bar">
                      <div className="pd-meter-fill" style={{ width: '94%' }} />
                    </div>
                  </div>

                  <div className="pd-meter-row">
                    <div className="pd-meter-header">
                      <span>Control</span>
                      <span>8.8 / 10</span>
                    </div>
                    <div className="pd-meter-bar">
                      <div className="pd-meter-fill" style={{ width: '88%' }} />
                    </div>
                  </div>

                  <div className="pd-meter-row">
                    <div className="pd-meter-header">
                      <span>Durability</span>
                      <span>9.5 / 10</span>
                    </div>
                    <div className="pd-meter-bar">
                      <div className="pd-meter-fill" style={{ width: '95%' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Specs */}
            {activeTab === 'specs' && (
              <div>
                <table className="pd-specs-table">
                  <tbody>
                    <tr>
                      <td className="pd-specs-k">Product Name</td>
                      <td className="pd-specs-v">{product.name}</td>
                    </tr>
                    <tr>
                      <td className="pd-specs-k">Manufacturer / Brand</td>
                      <td className="pd-specs-v">{product.brand}</td>
                    </tr>
                    <tr>
                      <td className="pd-specs-k">Category</td>
                      <td className="pd-specs-v">{product.category}</td>
                    </tr>
                    <tr>
                      <td className="pd-specs-k">Catalog Specifications</td>
                      <td className="pd-specs-v">{product.specs}</td>
                    </tr>
                    <tr>
                      <td className="pd-specs-k">Materials / Build</td>
                      <td className="pd-specs-v">{product.material || 'Tournament Grade Composites'}</td>
                    </tr>
                    <tr>
                      <td className="pd-specs-k">Country of Origin</td>
                      <td className="pd-specs-v">{product.origin || 'Imported (Japan / Germany)'}</td>
                    </tr>
                    <tr>
                      <td className="pd-specs-k">ITTF Approval Status</td>
                      <td className="pd-specs-v">Official ITTF Tournament Certified Stamp</td>
                    </tr>
                    <tr>
                      <td className="pd-specs-k">Distributor Authorization</td>
                      <td className="pd-specs-v">Official Indian Authorized Stockist (TableTerex)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* 3. Assembly */}
            {activeTab === 'assembly' && (
              <div style={{ maxWidth: '820px', lineHeight: 1.7 }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '14px' }}>
                  Professional Racket Assembly Standards
                </h3>
                <p style={{ color: 'rgba(17, 17, 16, 0.85)', marginBottom: '18px' }}>
                  When you select our free assembly service, your blade and rubbers are hand-prepared by experienced table tennis academy technicians.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '24px 0' }}>
                  <div style={{ background: 'var(--cream)', padding: '20px', borderRadius: '14px' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '8px', color: 'var(--black)' }}>
                      1. VOC-Free Water-Based Gluing
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>
                      We use genuine Butterfly Free Chack II / Donic Formula First glue for uniform adhesion without bubbles or chemical damage.
                    </p>
                  </div>
                  <div style={{ background: 'var(--cream)', padding: '20px', borderRadius: '14px' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '8px', color: 'var(--black)' }}>
                      2. Laser Precision Edge Cut
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>
                      Rubbers are precision-trimmed to match your blade perimeter perfectly, capped with protective branded side edge tape.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Reviews */}
            {activeTab === 'reviews' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                    4.9
                  </div>
                  <div>
                    <div className="pd-stars" style={{ fontSize: '1.3rem' }}>★★★★★</div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>
                      Based on {product.reviews || 42} verified customer purchases
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ background: '#fcfaf6', padding: '20px', borderRadius: '14px', border: '1px solid rgba(17, 17, 16, 0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <strong>Coach Amit Saxena · Pune TT Club</strong>
                      <span style={{ color: 'var(--orange)' }}>★★★★★</span>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'rgba(17, 17, 16, 0.85)', lineHeight: 1.6 }}>
                      “The {product.name} delivered exactly as promised. Arrived in sealed packaging with official hologram. Exceptional touch on close-to-table attacks.”
                    </p>
                  </div>

                  <div style={{ background: '#fcfaf6', padding: '20px', borderRadius: '14px', border: '1px solid rgba(17, 17, 16, 0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <strong>Rohan P. · State Cadet Competitor</strong>
                      <span style={{ color: 'var(--orange)' }}>★★★★★</span>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'rgba(17, 17, 16, 0.85)', lineHeight: 1.6 }}>
                      “Ordered through WhatsApp, got instant confirmation, and it arrived in Mumbai within 48 hours. Genuine {product.brand} gear at the best price in India.”
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 6. RELATED PRODUCTS SECTION ── */}
      {relatedProducts.length > 0 && (
        <section className="pd-related-section">
          <div className="pd-related-header">
            <span className="nl-mono-label" style={{ color: 'var(--orange)' }}>
              COMPLEMENTARY GEAR
            </span>
            <h2 className="nl-section-title nl-serif">
              Frequently Paired Equipment
            </h2>
          </div>

          <div className="pd-related-grid">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/products/${rel.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '16px',
                    border: '1px solid rgba(17, 17, 16, 0.08)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      aspectRatio: '1',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      marginBottom: '14px',
                      background: '#F9F7F4',
                    }}
                  >
                    <img
                      src={rel.image}
                      alt={rel.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--orange)', textTransform: 'uppercase' }}>
                    {rel.brand} · {rel.category}
                  </span>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '4px 0 8px', color: 'var(--black)' }}>
                    {rel.name}
                  </h4>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--black)' }}>
                    {rel.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── 7. MINI CART DRAWER ── */}
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

                {/* WhatsApp Checkout Button */}
                <a
                  href={getWhatsAppCartUrl(cart, cartTotal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pd-whatsapp-buy-btn"
                  style={{ width: '100%', marginBottom: '10px', textDecoration: 'none' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.12c-.24.68-1.39 1.31-1.92 1.39-.5.08-1.14.12-3.69-.93-3.26-1.35-5.36-4.66-5.52-4.88-.16-.22-1.32-1.76-1.32-3.36s.84-2.39 1.14-2.72c.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.2.01.47-.08.74.56.27.66.93 2.27 1.01 2.44.08.16.14.36.03.58-.11.22-.16.36-.33.56-.16.2-.35.45-.5.6-.16.16-.33.34-.14.67.19.33.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.55.25.63.39.08.14.08.82-.16 1.5z" />
                  </svg>
                  <span>ORDER BAG ON WHATSAPP →</span>
                </a>

                <div style={{ textAlign: 'center', fontSize: '0.65rem', color: 'var(--gray)' }}>
                  100% Guaranteed Genuine Equipment with Free Assembly
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── 8. FLOATING WHATSAPP BUTTON ── */}
      <a
        href={currentWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pd-floating-wa"
        title="Chat on WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.12c-.24.68-1.39 1.31-1.92 1.39-.5.08-1.14.12-3.69-.93-3.26-1.35-5.36-4.66-5.52-4.88-.16-.22-1.32-1.76-1.32-3.36s.84-2.39 1.14-2.72c.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.2.01.47-.08.74.56.27.66.93 2.27 1.01 2.44.08.16.14.36.03.58-.11.22-.16.36-.33.56-.16.2-.35.45-.5.6-.16.16-.33.34-.14.67.19.33.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.55.25.63.39.08.14.08.82-.16 1.5z" />
        </svg>
        <span>Ask Specialist</span>
      </a>

      {/* ── 9. GLOBAL DARK FOOTER ── */}
      <Footer />
    </div>
  );
}
