'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo('.hero-line-1',       { opacity: 0, y: 120, skewY: 3 }, { opacity: 1, y: 0, skewY: 0, duration: 1.1 }, 0.4)
      .fromTo('.hero-line-2',       { opacity: 0, y: 120, skewY: 3 }, { opacity: 1, y: 0, skewY: 0, duration: 1.1 }, 0.58)
      .fromTo('.hero-text-badge',   { opacity: 0, scale: 0.9 },      { opacity: 1, scale: 1, duration: 0.6 }, 0.7)
      .fromTo('.hero-tagline',      { opacity: 0, y: 30 },           { opacity: 1, y: 0, duration: 0.8 }, 0.95)
      .fromTo('.hero-cta-group',    { opacity: 0, y: 30 },           { opacity: 1, y: 0, duration: 0.8 }, 1.05)
      .fromTo('.hero-scroll-hint',  { opacity: 0 },                 { opacity: 1, duration: 0.6 }, 1.3);
    gsap.to('.hero-bg img', {
      yPercent: 22, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
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

        <div className="hero-headline-wrap">
          <span className="hero-line-1 text-display">PLAY BEYOND</span>
          <span className="hero-line-2 text-display hero-accent">LIMITS</span>
        </div>

        <div className="hero-text-badge">
          WHOLESALE PRICES · RETAIL QUANTITIES
        </div>

        <p className="hero-tagline">
          Shop table tennis rackets and performance-focused rubber from fresh weekly batches. Build your setup around the way you play.
        </p>

        <div className="hero-cta-group">
          <a href="#categories" className="btn-primary" id="hero-btn-rackets">SHOP RACKETS</a>
          <a href="#categories" className="btn-outline" id="hero-btn-rubber">SHOP RUBBER</a>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
}
