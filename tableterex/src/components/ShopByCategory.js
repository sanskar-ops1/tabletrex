'use client';
import { useEffect } from 'react';

const CATS = [
  {
    id: 'rackets',
    num: '01',
    title: 'TABLE TENNIS\nRACKETS',
    count: '250+ MODELS',
    desc: 'FROM BEGINNER BLADES TO PRO-GRADE CARBON\nSHELLS. EVERY PLAYING STYLE COVERED.',
    href: '#best-sellers',
    cta: 'EXPLORE RACKETS',
    img: '/images/pro-blade.jpg',
    accent: false,
  },
  {
    id: 'rubber',
    num: '02',
    title: 'TABLE TENNIS\nRUBBER',
    count: '180+ SHEETS',
    desc: 'TENSOR, CHINESE TACKY, ANTI-SPIN & MORE.\nPERFORMANCE RUBBER FOR EVERY GAME.',
    href: '#best-sellers',
    cta: 'EXPLORE RUBBER',
    img: '/images/red-rubber.jpg',
    accent: true,
  },
];

export default function ShopByCategory() {
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.cat-card',
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: '.shop-category-section', start: 'top 80%' }
          }
        );
      });
    });
  }, []);

  return (
    <section className="shop-category-section" id="categories">
      <div className="shop-cat-header">
        <span className="text-label">SHOP BY CATEGORY</span>
        <span className="text-label" style={{ color: 'var(--gray)' }}>SELECT YOUR WEAPON</span>
      </div>

      <div className="cat-grid">
        {CATS.map((c) => (
          <a key={c.id} href={c.href} className={`cat-card${c.accent ? ' cat-card--accent' : ''}`} id={`cat-${c.id}`}>
            {/* Background image */}
            <div className="cat-img-wrap">
              <img src={c.img} alt={c.title} className="cat-img" />
              <div className="cat-img-overlay" />
            </div>

            {/* Content */}
            <div className="cat-content">
              <h2 className="cat-title text-display">{c.title}</h2>
              <p className="cat-desc">{c.desc}</p>
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
