'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BlogHero({ featuredPostId = 'definitive-guide-tension-rubbers' }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax scroll effect on the background image (same as home hero)
    gsap.to('.blog-hero-img', {
      yPercent: 22,
      ease: 'none',
      scrollTrigger: {
        trigger: '.blog-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Staggered entrance animations matching the cinematic presentation
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo(
        '.blog-hero-eyebrow',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.2
      )
      .fromTo(
        '.blog-hero-title-line.line-1',
        { opacity: 0, y: 90, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.0 },
        0.35
      )
      .fromTo(
        '.blog-hero-title-line.line-2',
        { opacity: 0, y: 90, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.0 },
        0.5
      )
      .fromTo(
        '.blog-hero-title-line.line-3',
        { opacity: 0, y: 90, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.0 },
        0.65
      )
      .fromTo(
        '.blog-hero-statement',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.8
      )
      .fromTo(
        '.blog-hero-actions',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.95
      )
      .fromTo(
        '.blog-hero-tags',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.1
      )
      .fromTo(
        '.blog-hero-scroll-hint',
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        1.25
      );
  }, []);

  return (
    <section className="blog-hero" id="blog-hero">
      {/* ── Immersive Background Image with Parallax & Gradient Overlays ── */}
      <div className="blog-hero-bg">
        <img
          src="/images/hero-athlete.jpg"
          alt="Table tennis athlete and laboratory testing"
          className="blog-hero-img"
        />
        <div className="blog-hero-overlay" />
      </div>

      {/* ── Hero Foreground Content Layout ── */}
      <div className="blog-hero-content">
        {/* Top Eyebrow: ■ Next-Gen Tag */}
        <div className="blog-hero-eyebrow">
          <span className="blog-hero-dot" aria-hidden="true">■</span>
          <span>Next-Gen Equipment Lab</span>
        </div>

        {/* Main Grid: Multi-line Display Title on Left, Floating Context & CTAs on Right */}
        <div className="blog-hero-main">
          <h1 className="blog-hero-title">
            <span className="blog-hero-title-line line-1">Next-Gen</span>
            <span className="blog-hero-title-line line-2">Science & Stories for</span>
            <span className="blog-hero-title-line line-3">Modern Players.</span>
          </h1>

          <div className="blog-hero-right">
            <div className="blog-hero-statement">
              <span className="blog-hero-stmt-line">Technical Intelligence</span>
              <span className="blog-hero-stmt-line">Blade Acoustics & Rubber Chemistry</span>
              <span className="blog-hero-stmt-line">for Modern Competitors</span>
            </div>

            <div className="blog-hero-actions">
              <a
                href="#articles-grid"
                className="blog-hero-btn-primary"
                id="blog-hero-explore-btn"
              >
                Explore Articles ↗
              </a>
              <a
                href={`/blog/${featuredPostId}`}
                className="blog-hero-btn-secondary"
                id="blog-hero-featured-btn"
              >
                Featured Story ↗
              </a>
            </div>
          </div>
        </div>

        {/* Footer Meta Row: + Categories Left | Animated Scroll Indicator Right */}
        <div className="blog-hero-footer">
          <div className="blog-hero-tags">
            <span className="blog-hero-tag">+ Rubber Science</span>
            <span className="blog-hero-tag">+ Blade Engineering</span>
            <span className="blog-hero-tag">+ Match Intelligence</span>
          </div>

          <div className="blog-hero-scroll-hint" aria-hidden="true">
            <div className="blog-hero-scroll-line" />
            <span>SCROLL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
