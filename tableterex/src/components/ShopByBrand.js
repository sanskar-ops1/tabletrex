'use client';
import { useState } from 'react';

const BRANDS = [
  {
    id: 'butterfly',
    name: 'BUTTERFLY',
    country: 'JAPAN',
    tagline: 'Premium / Professional',
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

  const selected = BRANDS.find((b) => b.id === activeBrand) || BRANDS[0];

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

          {/* Quick Brand Buttons Filter */}
          <div className="brand-pill-bar">
            {BRANDS.map((b) => (
              <button
                key={b.id}
                type="button"
                className={`brand-pill-btn ${activeBrand === b.id ? 'active' : ''}`}
                onClick={() => setActiveBrand(b.id)}
                id={`brand-tab-${b.id}`}
              >
                [ {b.name} ]
              </button>
            ))}
          </div>
        </div>

        {/* Selected Brand Spotlight Showcase */}
        <div className="brand-spotlight-card" style={{ '--brand-accent': selected.accent }}>
          <div className="brand-spotlight-left">
            <div className="brand-tag-row">
              <span className="brand-country-tag">{selected.country}</span>
              <span className="brand-role-tag">{selected.tagline}</span>
            </div>
            <h3 className="brand-name-display text-display">{selected.name}</h3>
            <p className="brand-spotlight-desc">{selected.desc}</p>
            <a href={selected.link} className="brand-explore-btn" id={`brand-explore-${selected.id}`}>
              EXPLORE {selected.name} INVENTORY →
            </a>
          </div>

          <div className="brand-spotlight-right">
            <span className="brand-flagship-label text-label">FEATURED PRODUCTS</span>
            <div className="brand-flagship-list">
              {selected.flagship.map((item, idx) => (
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

        {/* Grid of All 4 Brands */}
        <div className="brands-grid">
          {BRANDS.map((b) => (
            <div
              key={b.id}
              className={`brand-card ${activeBrand === b.id ? 'is-selected' : ''}`}
              onClick={() => setActiveBrand(b.id)}
              role="button"
              tabIndex={0}
              id={`brand-card-${b.id}`}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
