'use client';
import { useState, useEffect } from 'react';

const BRANDS = [
  {
    id: 'butterfly',
    name: 'BUTTERFLY',
    country: 'JAPAN',
    tagline: 'Premium / Professional',
    theme: 'theme-cream',
    desc: 'Explore Butterfly blades, rubbers and table tennis equipment across premium and performance-focused ranges.',
    flagship: [
      { name: 'Timo Boll ALC', price: '₹24,200 MRP', type: 'Arylate-Carbon Blade' },
      { name: 'Tenergy 05', price: '₹10,600 MRP', type: 'Spring Sponge Rubber' },
      { name: 'Tenergy 64', price: '₹10,600 MRP', type: 'High Catapult Attack' },
    ],
    accent: '#ff3b30',
    link: '/products?brand=BUTTERFLY',
  },
  {
    id: 'donic',
    name: 'DONIC',
    country: 'GERMANY',
    tagline: 'Wide Price Range / All-Round',
    theme: 'theme-black',
    desc: 'Explore Donic blades, rubbers, ready-made bats and table tennis gear across wide price points for all styles of play.',
    flagship: [
      { name: 'Waldner Black Devil', price: '₹10,639 MRP', type: 'Carbon + Balsa Blade' },
      { name: 'Waldner Allplay', price: '₹5,089 MRP', type: 'All-Round Classic Wood' },
      { name: 'Bluestorm Z1', price: '₹6,169 MRP', type: 'Thin Topsheet Tensor' },
    ],
    accent: '#0090ff',
    link: '/products?brand=DONIC',
  },
  {
    id: 'nittaku',
    name: 'NITTAKU',
    country: 'JAPAN',
    tagline: 'Japanese Premium',
    theme: 'theme-white',
    desc: 'Explore Nittaku blades, rubbers and match balls crafted with Japanese precision and premium quality.',
    flagship: [
      { name: 'Nittaku Acoustic FL', price: '₹16,979 MRP', type: 'Acoustic Wood Blade' },
      { name: 'Fastarc G-1', price: '₹5,849 MRP', type: 'Japan #1 Tension Sheet' },
      { name: 'Hurricane 8-80 Power', price: '₹6,129 MRP', type: 'Tacky Elastic Hybrid' },
    ],
    accent: '#ff9500',
    link: '/products?brand=NITTAKU',
  },
  {
    id: 'tibhar',
    name: 'TIBHAR',
    country: 'GERMANY',
    tagline: 'Performance / Offensive',
    theme: 'theme-orange',
    desc: 'Explore Tibhar blades, rubbers and performance equipment designed for aggressive, offensive table tennis.',
    flagship: [
      { name: 'Gravity Dyneema Carbon', price: '₹9,750 MRP', type: 'Dyneema Composite Blade' },
      { name: 'Gravity Offensive', price: '₹5,135 MRP', type: 'Direct Attack Frame' },
      { name: 'Evolution MX-P', price: '₹7,215 MRP', type: 'Red Power Sponge Tensor' },
    ],
    accent: '#e06830',
    link: '/products?brand=TIBHAR',
  },
];

export default function ShopByBrand() {
  const [activeBrand, setActiveBrand] = useState('butterfly');
  const [outgoingBrand, setOutgoingBrand] = useState(null);
  const [hoveredBrand, setHoveredBrand] = useState(null);

  const brandIds = BRANDS.map((b) => b.id);
  const activeIdx = brandIds.indexOf(activeBrand);
  const isHoveringOther = Boolean(hoveredBrand && hoveredBrand !== activeBrand);

  const selectBrand = (id) => {
    if (id === activeBrand) return;
    setOutgoingBrand(activeBrand);
    setActiveBrand(id);
  };

  useEffect(() => {
    if (outgoingBrand) {
      const timer = setTimeout(() => {
        setOutgoingBrand(null);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [outgoingBrand]);

  const getCardStackClass = (bId) => {
    if (bId === outgoingBrand) return 'is-outgoing';
    if (bId === activeBrand) return 'is-active';
    const idx = brandIds.indexOf(bId);
    const depth = (idx - activeIdx + 4) % 4;
    return `is-depth-${depth}`;
  };

  return (
    <section className="brands-section" id="shop-by-brand">
      <div className="brands-container">
        {/* Header */}
        <div className="brands-header">
          <span className="text-label" style={{ color: 'var(--orange)', letterSpacing: '0.2em' }}>
            SHOP BY BRAND
          </span>
          <h2 className="brands-title text-display">
            FIND YOUR BRAND
          </h2>
          <p className="brands-subtitle">
            Explore table tennis equipment from four established brands, with options across blades, rubbers, ready-made bats and more.
          </p>
        </div>

        {/* 4-Card Stacked Deck Showcase (Non-interactable visual deck driven by cards below) */}
        <div className="brand-stack-deck-wrap">
          <div className="brand-stack-deck">
            {/* Sizer Card: Keeps container height responsive across all screen sizes */}
            <div className="brand-stack-sizer" aria-hidden="true">
              <div className="brand-stack-card is-sizer-card">
                <div className="brand-spotlight-card">
                  <div className="brand-spotlight-left">
                    <div className="brand-tag-row">
                      <span className="brand-country-tag">GERMANY</span>
                      <span className="brand-role-tag">Performance / Offensive</span>
                    </div>
                    <h3 className="brand-name-display text-display">BUTTERFLY</h3>
                    <p className="brand-spotlight-desc">Explore Butterfly blades, rubbers and table tennis equipment across premium and performance-focused ranges.</p>
                    <span className="brand-explore-btn">EXPLORE INVENTORY →</span>
                  </div>
                  <div className="brand-spotlight-right">
                    <span className="brand-flagship-label text-label">FEATURED PRODUCTS</span>
                    <div className="brand-flagship-list">
                      <div className="brand-flagship-row"><div className="brand-flagship-info"><span>1</span><span>Type</span></div><span>Price</span></div>
                      <div className="brand-flagship-row"><div className="brand-flagship-info"><span>2</span><span>Type</span></div><span>Price</span></div>
                      <div className="brand-flagship-row"><div className="brand-flagship-info"><span>3</span><span>Type</span></div><span>Price</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The 4 Animated Stack Cards */}
            {BRANDS.map((b) => {
              const stackClass = getCardStackClass(b.id);
              return (
                <div
                  key={b.id}
                  className={`brand-stack-card ${b.theme} ${stackClass}`}
                  id={`brand-stack-card-${b.id}`}
                >
                  {/* Main Spotlight Card Content */}
                  <div className="brand-spotlight-card">
                    <div className="brand-spotlight-left">
                      <div className="brand-tag-row">
                        <span className="brand-country-tag">{b.country}</span>
                        <span className="brand-role-tag">{b.tagline}</span>
                      </div>
                      <h3 className="brand-name-display text-display">{b.name}</h3>
                      <p className="brand-spotlight-desc">{b.desc}</p>
                      <a href={b.link} className="brand-explore-btn" id={`brand-explore-${b.id}`}>
                        EXPLORE {b.name} INVENTORY →
                      </a>
                    </div>

                    <div className="brand-spotlight-right">
                      <span className="brand-flagship-label text-label">FEATURED PRODUCTS</span>
                      <div className="brand-flagship-list">
                        {b.flagship.map((item, idx) => (
                          <div key={idx} className="brand-flagship-row">
                            <div className="brand-flagship-info">
                              <span className="brand-flagship-name">{item.name}</span>
                              <span className="brand-flagship-type">{item.type}</span>
                            </div>
                            <span className="brand-flagship-price">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grid of All 4 Brands */}
        <div
          className={`brands-grid ${isHoveringOther ? 'is-hovering-unselected' : ''}`}
          onMouseLeave={() => setHoveredBrand(null)}
        >
          {BRANDS.map((b) => (
            <div
              key={b.id}
              className={`brand-card-wrap ${activeBrand === b.id ? 'is-selected' : ''}`}
              onClick={() => selectBrand(b.id)}
              onMouseEnter={() => setHoveredBrand(b.id)}
              onMouseLeave={() => setHoveredBrand(null)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  selectBrand(b.id);
                }
              }}
              role="button"
              tabIndex={0}
              id={`brand-card-${b.id}`}
            >
              <div className="brand-card">
                <div className="brand-card-inner">
                  <div className="brand-card-top">
                    <span className="brand-card-origin">{b.country}</span>
                    <span className="brand-card-badge">{b.tagline.split('/')[0].trim()}</span>
                  </div>
                  <h4 className="brand-card-name">{b.name}</h4>
                  <p className="brand-card-sub">{b.tagline}</p>
                  <div className="brand-card-action">
                    <span>VIEW LINEUP</span>
                    <span className="brand-card-arrow">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
