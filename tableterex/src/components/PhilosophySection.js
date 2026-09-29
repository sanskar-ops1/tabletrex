'use client';
import { useEffect } from 'react';
import TornDivider from './TornDivider';

export default function PhilosophySection() {
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        // Headline stagger
        gsap.fromTo('.phil-headline span',
          { opacity: 0, y: 80 },
          {
            opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power4.out',
            scrollTrigger: { trigger: '.philosophy-section', start: 'top 75%' },
          }
        );
        // Floating polaroid
        gsap.fromTo('.phil-polaroid',
          { opacity: 0, rotate: -18, scale: 0.85 },
          {
            opacity: 1, rotate: -8, scale: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: '.philosophy-section', start: 'top 70%' },
          }
        );
        // Polaroid 2
        gsap.fromTo('.phil-polaroid-2',
          { opacity: 0, rotate: 12, scale: 0.85 },
          {
            opacity: 1, rotate: 6, scale: 1, duration: 1.2, delay: 0.2, ease: 'power3.out',
            scrollTrigger: { trigger: '.philosophy-section', start: 'top 70%' },
          }
        );
        // Right text
        gsap.fromTo('.phil-right',
          { opacity: 0, x: 40 },
          {
            opacity: 1, x: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: '.philosophy-section', start: 'top 65%' },
          }
        );
        // Philosophy card
        gsap.fromTo('.phil-card',
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: '.phil-card', start: 'top 80%' },
          }
        );
        // Watermark scroll
        gsap.to('.phil-watermark', {
          x: -120,
          ease: 'none',
          scrollTrigger: { trigger: '.phil-cream-band', start: 'top bottom', end: 'bottom top', scrub: 1 },
        });
      });
    });
  }, []);

  return (
    <>
      {/* ── DARK SECTION ── */}
      <section className="philosophy-section" id="philosophy">
        {/* [1] label */}
        <span className="phil-tag">[1]</span>
        <span className="phil-tag-right">
          TABLE TENNIS IS A GAME OF PRECISION,<br />REACTION, AND SYNERGY
        </span>

        {/* Main headline */}
        <div className="phil-headline-wrap">
          <h2 className="phil-headline text-display">
            <span>NEW</span><br />
            <span className="phil-accent">GENERATION</span><br />
            <span>TABLE TENNIS</span>
          </h2>

          {/* Floating polaroid image 1 */}
          <div className="phil-polaroid" aria-hidden="true">
            <img
              src="/images/hero-action.jpg"
              alt="Table tennis tournament action"
            />
          </div>
        </div>

        {/* Right description */}
        <div className="phil-right">
          <p className="phil-right-text">
            WE BRING TOGETHER BEGINNERS AND PROFESSIONALS<br />
            WHO VALUE PERFORMANCE, STRUCTURE, AND DESIGN.<br />
            NO NOISE — JUST INTENTION.
          </p>

          {/* Floating polaroid image 2 */}
          <div className="phil-polaroid-2" aria-hidden="true">
            <img
              src="/images/custom-racket.jpg"
              alt="Custom assembled pro racket"
            />
          </div>
        </div>

      </section>

      {/* Torn paper transition: Dark -> Cream */}
      <div style={{ background: 'var(--cream)', marginTop: '-3px', marginBottom: '-1px', lineHeight: 0, position: 'relative', zIndex: 5, overflow: 'hidden' }}>
        <TornDivider variant="top" fill="#111110" height={80} variantIndex={1} />
      </div>

      {/* ── CREAM TRANSITION BAND ── */}
      <section className="phil-cream-band">
        {/* Watermark */}
        <div className="phil-watermark" aria-hidden="true">
          PRECISION&nbsp;&nbsp;SPEED&nbsp;&nbsp;CONTROL&nbsp;&nbsp;PRECISION&nbsp;&nbsp;SPEED
        </div>

        {/* TASK / GOAL / APPROACH card */}
        <div className="phil-card">
          <div className="phil-card-header">
            <span>TASK</span>
            <span>GOAL</span>
            <span>APPROACH</span>
          </div>
          <div className="phil-card-body">
            <p className="phil-card-col">
              TO SOURCE AND DELIVER THE WORLD&apos;S FINEST TABLE TENNIS EQUIPMENT —
              MODERN, GENUINE, FAST.
            </p>
            <div className="phil-card-col">
              <p>THE GOAL WAS TO COMBINE ELITE SELECTION,</p>
              <p>COMPETITIVE PRICING,</p>
              <p>AND A SEAMLESS EXPERIENCE</p>
              <p>IN A SINGLE PLATFORM.</p>
            </div>
            <div className="phil-card-col">
              <p>
                THE PROJECT TARGETS<br />
                PLAYERS OF ALL SKILL LEVELS —<br />
                FROM BEGINNERS<br />
                TO PROFESSIONALS.
              </p>
              <br />
              <p>
                MINIMALISM WITHOUT EMPTINESS.<br />
                PRECISION WITHOUT COMPLEXITY.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Torn paper transition: Cream -> Dark */}
      <div style={{ background: 'var(--black)', marginTop: '-3px', marginBottom: '-1px', lineHeight: 0, position: 'relative', zIndex: 5, overflow: 'hidden' }}>
        <TornDivider variant="top" fill="#E8E0D0" height={80} variantIndex={2} />
      </div>
    </>
  );
}
