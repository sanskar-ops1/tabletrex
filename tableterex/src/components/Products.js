'use client';
import { useState, useEffect } from 'react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Hurricane Long 5',
    brand: 'DHS',
    category: 'BLADE',
    price: '₹4,299',
    priceNum: 4299,
    image: 'https://images.unsplash.com/photo-1603204077167-2fa0397f591f?w=800&q=80',
    desc: 'CARBON-REINFORCED BLADE.\nOFFENSIVE POWERHOUSE.\nAPPROVED FOR COMPETITION.',
    featured: true,
  },
  {
    id: 2,
    name: 'Tenergy 05',
    brand: 'BUTTERFLY',
    category: 'RUBBER',
    price: '₹3,850',
    priceNum: 3850,
    image: 'https://images.unsplash.com/photo-1617839625591-e5a789593135?w=600&q=80',
    desc: 'SPRING SPONGE TECHNOLOGY.\nMAXIMUM SPEED & SPIN.\nTHE WORLD\'S NO.1 RUBBER.',
    featured: false,
  },
  {
    id: 3,
    name: 'Vega Asia',
    brand: 'XIOM',
    category: 'RUBBER',
    price: '₹2,100',
    priceNum: 2100,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80',
    desc: 'TENSOR TECHNOLOGY.\nEXCELLENT CONTROL.\nPERFECT FOR ALL-ROUND PLAY.',
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
