'use client';
import { useEffect } from 'react';

const CAT_PILLS = [
  { label: 'BLADES', href: '/products?category=Blades' },
  { label: 'RUBBERS', href: '/products?category=Rubber' },
  { label: 'READY-MADE BATS', href: '/products?category=ready-made' },
  { label: 'BALLS', href: '/products?category=Balls' },
  { label: 'ACCESSORIES', href: '/products?category=Accessories' },
  { label: 'APPAREL', href: '/products?category=Apparel' },
  { label: 'SHOES', href: '/products?category=Shoes' },
];

const CATS = [
  {
    id: 'blades',
    num: '01',
    title: 'TABLE TENNIS\nBLADES',
    count: '250+ MODELS',
    desc: 'Performance blades across offensive, defensive and all-round play.',
    href: '/products?category=Blades',
    cta: 'EXPLORE BLADES',
    img: '/images/pro-blade.jpg',
    accent: false,
  },
  {
    id: 'rubber',
    num: '02',
    title: 'TABLE TENNIS\nRUBBERS',
    count: '180+ OPTIONS',
    desc: 'Spin, speed, control, pips and offensive setups from leading brands.',
    href: '/products?category=Rubber',
    cta: 'EXPLORE RUBBERS',
    img: '/images/red-rubber.jpg',
    accent: true,
  },
  {
    id: 'ready-made',
    num: '03',
    title: 'READY-MADE\nBATS',
    count: '9 MODELS',
    desc: 'Ready-to-play rackets from leading table tennis brands.',
    href: '#ready-made-bats',
    cta: 'VIEW BATS',
    img: '/images/donic-blade.jpg',
    accent: false,
  },
  {
    id: 'balls',
    num: '04',
    title: 'TABLE TENNIS\nBALLS',
    count: 'ITTF POLY 40+',
    desc: 'Training and match balls in multiple grades and pack sizes.',
    href: '/products?category=Balls',
    cta: 'VIEW BALLS',
    img: '/images/why-lineup-bottle-feathered.jpg',
    accent: false,
  },
  {
    id: 'accessories',
    num: '05',
    title: 'TABLE TENNIS\nACCESSORIES',
    count: '50+ ITEMS',
    desc: 'Grips, edge tape, rubber care, cases, bags and essential table tennis gear.',
    href: '/products?category=Accessories',
    cta: 'VIEW ACCESSORIES',
    img: '/images/why-hero-racket.jpg',
    accent: false,
  },
];

export default function ShopByCategory() {
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
          '.cat-card',
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: '.shop-category-section', start: 'top 85%' },
          }
        );
      });
    });
  }, []);

  return (
    <section className="shop-category-section" id="categories">
      <div className="shop-cat-header">
        <div>
          <span className="text-label" style={{ color: 'var(--orange)', letterSpacing: '0.2em' }}>
            SHOP BY CATEGORY
          </span>
          <h2 className="cat-section-heading text-display">
            SELECT YOUR GEAR
          </h2>
        </div>

        {/* Quick Category Nav Pills */}
        <div className="cat-pill-bar">
          {CAT_PILLS.map((p, idx) => (
            <a key={idx} href={p.href} className="cat-pill-link blob-btn" id={`cat-pill-${idx}`}>
              <span className="blob-btn__text">{p.label}</span>
              <span className="blob-btn__inner" aria-hidden="true">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob" />
                  <span className="blob-btn__blob" />
                  <span className="blob-btn__blob" />
                  <span className="blob-btn__blob" />
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* SVG Gooey Filter for Blob Animation */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}
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
      </div>

      {/* Top 2 Primary Cards: Blades & Rubbers */}
      <div className="cat-grid cat-grid-primary">
        {CATS.slice(0, 2).map((c) => (
          <a
            key={c.id}
            href={c.href}
            className={`cat-card${c.accent ? ' cat-card--accent' : ''}`}
            id={`cat-${c.id}`}
          >
            <div className="cat-img-wrap">
              <img src={c.img} alt={c.title} className="cat-img" />
              <div className="cat-img-overlay" />
            </div>
            <div className="cat-content">
              <span className="cat-num text-mono">{c.num}</span>
              <h3 className="cat-title text-display">{c.title}</h3>
              <p className="cat-desc">{c.desc}</p>
              <div className="cat-footer">
                <span className="cat-count">{c.count}</span>
                <span className="cat-cta">{c.cta} →</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom 3 Secondary Cards: Ready-Made Bats, Balls, Accessories */}
      <div className="cat-grid cat-grid-secondary">
        {CATS.slice(2).map((c) => (
          <a
            key={c.id}
            href={c.href}
            className="cat-card cat-card--secondary"
            id={`cat-${c.id}`}
          >
            <div className="cat-img-wrap">
              <img src={c.img} alt={c.title} className="cat-img" />
              <div className="cat-img-overlay" />
            </div>
            <div className="cat-content cat-content--compact">
              <span className="cat-num text-mono">{c.num}</span>
              <h3 className="cat-title-sm text-display">{c.title}</h3>
              <p className="cat-desc-sm">{c.desc}</p>
              <div className="cat-footer">
                <span className="cat-count">{c.count}</span>
                <span className="cat-cta">{c.cta} →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
