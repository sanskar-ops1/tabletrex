'use client';
import { useEffect } from 'react';
import TornDivider from './TornDivider';

export default function BrandStory() {
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.brand-story-title',
          { opacity: 0, x: -60 },
          { opacity: 1, x: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: '.brand-story', start: 'top 75%' } }
        );
        gsap.fromTo('.brand-story-body',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: '.brand-story', start: 'top 70%' } }
        );
        gsap.fromTo('.brand-story-img-wrap',
          { opacity: 0, scale: 0.94 },
          { opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out',
            scrollTrigger: { trigger: '.brand-story', start: 'top 72%' } }
        );
      });
    });
  }, []);

  return (
    <section className="brand-story" id="about" style={{ position: 'relative', paddingTop: 140 }}>
      {/* Torn paper from top (cream above → dark here) */}
      <div style={{ position: 'absolute', top: '-2px', left: 0, right: 0 }}>
        <TornDivider variant="top" fill="#1A1A18" height={110} />
      </div>

      <div className="brand-story-inner">
        <div className="brand-story-text">
          <span className="brand-story-label">— WHO WE ARE</span>
          <h2 className="brand-story-title text-display">
            PRECISION.<br />
            <span className="stroke">SPEED.</span><br />
            CONTROL.
          </h2>
          <p className="brand-story-body">
            TABLETEREX WAS BORN FROM A SIMPLE BELIEF —<br />
            EVERY PLAYER DESERVES WORLD-CLASS EQUIPMENT.<br /><br />
            WE STOCK ONLY THE FINEST BLADES, RUBBERS &amp; ACCESSORIES<br />
            FROM BUTTERFLY, DHS, XIOM, TIBHAR &amp; MORE.<br /><br />
            SHIPPED SAME-DAY. DELIVERED IN 2–3 DAYS. NATIONWIDE.
          </p>
        </div>

        <div className="brand-story-right">
          <div className="brand-story-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=700&q=85"
              alt="Table tennis player in action"
            />
          </div>
          <div className="brand-story-badge">
            <span className="brand-story-badge-num">500+</span>
            <span className="brand-story-badge-text">PRODUCTS<br />IN STOCK</span>
          </div>
        </div>
      </div>

      {/* Torn paper at bottom (dark → cream) */}
      <div style={{ position: 'absolute', bottom: '-2px', left: 0, right: 0 }}>
        <TornDivider variant="bottom" fill="#E8E0D0" height={110} />
      </div>
    </section>
  );
}
