'use client';
import { useEffect } from 'react';
import TornDivider from './TornDivider';

export default function Hero() {
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
        tl.fromTo('.hero-eyebrow',      { opacity:0, y:20 },           { opacity:1, y:0, duration:0.7 }, 0.3)
          .fromTo('.hero-line-1',       { opacity:0, y:120, skewY:3 }, { opacity:1, y:0, skewY:0, duration:1.1 }, 0.5)
          .fromTo('.hero-line-2',       { opacity:0, y:120, skewY:3 }, { opacity:1, y:0, skewY:0, duration:1.1 }, 0.68)
          .fromTo('.hero-tagline',      { opacity:0, y:30 },           { opacity:1, y:0, duration:0.8 }, 1.05)
          .fromTo('.hero-cta-group',    { opacity:0, y:30 },           { opacity:1, y:0, duration:0.8 }, 1.15)
          .fromTo('.hero-bottom-strip', { opacity:0 },                 { opacity:1, duration:0.7 }, 1.4)
          .fromTo('.hero-scroll-hint',  { opacity:0 },                 { opacity:1, duration:0.6 }, 1.55);
        gsap.to('.hero-bg img', {
          yPercent: 22, ease: 'none',
          scrollTrigger: { trigger:'.hero', start:'top top', end:'bottom top', scrub:true },
        });
      });
    });
  }, []);

  return (
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
          [01] — EST. 2024 &nbsp;•&nbsp; INDIA&apos;S PREMIUM TABLE TENNIS STORE
        </span>

        <div className="hero-headline-wrap">
          <span className="hero-line-1 text-display">PLAY BEYOND</span>
          <span className="hero-line-2 text-display hero-accent">LIMITS</span>
        </div>

        <div className="hero-text-badge text-mono">
          WHOLESALE PRICES · RETAIL QUANTITIES
        </div>

        <p className="hero-tagline">
          Fresh batches arrive every week. Custom-assembled rackets and pro rubber engineered for your game.
        </p>

        <div className="hero-cta-group">
          <a href="#categories"  className="btn-primary"  id="hero-btn-rackets">SHOP RACKETS</a>
          <a href="#categories"  className="btn-outline"  id="hero-btn-rubber">SHOP RUBBER</a>
        </div>

        <div className="hero-bottom-strip">
          <span>500+ PRODUCTS</span>
          <span className="hero-sep">{"///"}</span>
          <span>15+ BRANDS</span>
          <span className="hero-sep">{"///"}</span>
          <span>SAME-DAY DISPATCH</span>
          <span className="hero-sep">{"///"}</span>
          <span>FREE SHIPPING ₹999+</span>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
}
