'use client';
import { useEffect } from 'react';
import { WeeklyRefreshIcon } from '@/components/icons';

const WEEK_DROPS = [
  { id:'w1', name:'Donic Waldner Black Devil', brand:'DONIC', type:'BLADE', price:'₹5,499', badge:'NEW', img:'/images/donic-blade.jpg' },
  { id:'w2', name:'Nittaku Fastarc G-1', brand:'NITTAKU', type:'RUBBER', price:'₹2,799', badge:'NEW', img:'/images/red-rubber.jpg' },
  { id:'w3', name:'Tibhar Evolution MX-P', brand:'TIBHAR', type:'RUBBER', price:'₹3,100', badge:'RESTOCK', img:'/images/tibhar-rubber.jpg' },
  { id:'w4', name:'Stiga Infinity VPS V', brand:'STIGA', type:'BLADE', price:'₹7,299', badge:'NEW', img:'/images/stiga-blade.jpg' },
];

const WEEK_NUM = 'WEEK 39';
const WEEK_DATE = 'SEP 2026';

export default function FreshThisWeek() {
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.fresh-headline',
          { opacity:0, x:-80 },
          { opacity:1, x:0, duration:1, ease:'power3.out',
            scrollTrigger:{ trigger:'.fresh-section', start:'top 75%' } }
        );
        gsap.fromTo('.fresh-card',
          { opacity:0, y:50 },
          { opacity:1, y:0, duration:0.8, stagger:0.1, ease:'power3.out',
            scrollTrigger:{ trigger:'.fresh-grid', start:'top 80%' } }
        );
      });
    });
  }, []);

  return (
    <section className="fresh-section" id="fresh-this-week">
      <div className="fresh-watermark" aria-hidden="true">DROP</div>

      <div className="fresh-top">
        <div className="fresh-header-bar">
          <div className="fresh-title-group">
            <div className="fresh-icon-title">
              <div className="fresh-icon-wrap" title="Weekly Batch Rotation">
                <WeeklyRefreshIcon size={48} className="fresh-refresh-icon" color="var(--orange)" />
              </div>
              <div>
                <div className="fresh-header-badges">
                  <span className="text-label">[03] — ROTATING INVENTORY</span>
                  <span className="fresh-new-batch-badge">NEW BATCH</span>
                </div>
                <h2 className="fresh-section-title text-display">
                  FRESH THIS WEEK
                </h2>
              </div>
            </div>
          </div>

          <div className="fresh-week-badge">
            <span className="fresh-week-num">{WEEK_NUM}</span>
            <span className="fresh-week-date">{WEEK_DATE}</span>
          </div>
        </div>

        <p className="fresh-supporting-copy">
          New product batches arrive every week, bringing a constantly changing selection of rackets and rubber.
        </p>
      </div>

      <div className="fresh-grid">
        {WEEK_DROPS.map((p) => (
          <div key={p.id} className="fresh-card" id={`fresh-${p.id}`}>
            <div className="fresh-card-img-wrap">
              <span className={`fresh-badge fresh-badge--${p.badge.toLowerCase()}`}>{p.badge}</span>
              <img src={p.img} alt={p.name} className="fresh-card-img" />
            </div>
            <div className="fresh-card-info">
              <div>
                <span className="fresh-card-brand text-label">{p.brand} — {p.type}</span>
                <span className="fresh-card-name">{p.name}</span>
              </div>
              <div className="fresh-card-bottom">
                <span className="fresh-card-price">{p.price}</span>
                <button className="fresh-card-btn" id={`fresh-btn-${p.id}`}>ADD →</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fresh-cta-row">
        <a href="/store" className="btn-primary" id="fresh-shop-drop-btn">SHOP THIS WEEK&apos;S DROP</a>
        <span className="fresh-cta-note text-label">NEW PRODUCTS ADDED EVERY MONDAY</span>
      </div>
    </section>
  );
}
