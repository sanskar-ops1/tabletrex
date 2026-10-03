'use client';
import { useState, useEffect } from 'react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Timo Boll ALC',
    brand: 'BUTTERFLY',
    category: 'BLADE',
    price: '₹24,200',
    priceNum: 24200,
    image: '/images/pro-blade.jpg',
    desc: 'ARYLATE-CARBON REINFORCED BLADE.\nOFFENSIVE TOURNAMENT POWERHOUSE.\nAPPROVED FOR MATCH PLAY.',
    featured: true,
  },
  {
    id: 2,
    name: 'Tenergy 05',
    brand: 'BUTTERFLY',
    category: 'RUBBER',
    price: '₹10,600',
    priceNum: 10600,
    image: '/images/red-rubber.jpg',
    desc: 'SPRING SPONGE TECHNOLOGY.\nMAXIMUM SPEED & ROTATION.\nTHE GLOBAL BENCHMARK.',
    featured: false,
  },
  {
    id: 3,
    name: 'Fastarc G-1',
    brand: 'NITTAKU',
    category: 'RUBBER',
    price: '₹5,849',
    priceNum: 5849,
    image: '/images/black-rubber.jpg',
    desc: 'MADE IN JAPAN TENSOR.\nEXCELLENT ARC TRAJECTORY.\n#1 BEST SELLER IN TOKYO.',
    featured: false,
  },
  {
    id: 4,
    name: 'Waldner Allplay',
    brand: 'DONIC',
    category: 'BLADE',
    price: '₹5,089',
    priceNum: 5089,
    image: '/images/donic-blade.jpg',
    desc: 'ALL-ROUND CLASSIC WOOD.\nSUPREME TOUCH & DWELL.\nJAN-OVE WALDNER EDITION.',
    featured: true,
  },
  {
    id: 5,
    name: 'Evolution MX-P',
    brand: 'TIBHAR',
    category: 'RUBBER',
    price: '₹7,215',
    priceNum: 7215,
    image: '/images/tibhar-rubber.jpg',
    desc: 'RED POWER SPONGE (47.5°).\nMAXIMUM CATAPULT ACCELERATION.\nEUROPEAN PRO STANDARD.',
    featured: false,
  },
  {
    id: 6,
    name: 'Nittaku Acoustic FL',
    brand: 'NITTAKU',
    category: 'BLADE',
    price: '₹16,979',
    priceNum: 16979,
    image: '/images/donic-blade.jpg',
    desc: 'STRING-INSTRUMENT LUTHERIE.\nPURE TACTILE RESONANCE.\nJAPANESE MASTERWORK.',
    featured: false,
  },
];

export default function Products({ onProductClick }) {
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.product-card',
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: '#products', start: 'top 80%' },
          }
        );
      });
    });
  }, []);

  return (
    <section className="section" id="products">
      <div className="section-header">
        <h2 className="section-title text-display">FEATURED<br />GEAR</h2>
        <div className="section-meta">
          <span className="section-count">[ 01 — 03 ]</span><br />
          <a href="/store" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            letterSpacing: '0.2em', color: 'var(--orange)', textDecoration: 'none',
            textTransform: 'uppercase', marginTop: '8px', display: 'block' }}>
            VIEW ALL →
          </a>
        </div>
      </div>

      <div className="products-grid">
        {PRODUCTS.map((product, idx) => (
          <div
            key={product.id}
            className={`product-card${product.featured ? ' featured' : ''}`}
            data-index={`0${idx + 1}`}
            onClick={() => onProductClick(product)}
            id={`product-card-${product.id}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onProductClick(product)}
          >
            <img
              className="product-card-img"
              src={product.image}
              alt={product.name}
            />
            <div className="product-card-overlay" />

            <div className="product-card-info">
              <span className="product-card-brand">{product.brand} — {product.category}</span>
              <span className="product-card-name">{product.name}</span>
              <span className="product-card-price">{product.price}</span>
            </div>

            <button className="product-card-cta" id={`quick-view-${product.id}`}>
              QUICK VIEW →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
