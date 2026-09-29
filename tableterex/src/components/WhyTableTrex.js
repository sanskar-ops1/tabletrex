'use client';

export default function WhyTableTrex() {
  return (
    <section className="why-editorial-section" id="why-tableterex">
      {/* ── Section Title Header ── */}
      <div className="why-header">
        <span className="text-label">WHY TABLETREX</span>
        <h2 className="why-title text-display">
          WHY CHOOSE<br /><span className="why-accent">TABLETREX</span>
        </h2>
        <p className="why-header-sub text-label">
          FIVE CORE PILLARS OF OUR ATHLETIC PERFORMANCE SYSTEM
        </p>
      </div>

      {/* ── 1. TOP HERO FEATURE BLOCK (Pillar 01) ── */}
      <div className="why-hero-block">
        <div className="why-hero-text">
          <div className="why-hero-tag text-label">WHOLESALE AT RETAIL</div>
          <h3 className="why-hero-heading">
            Wholesale prices.<br />
            Retail quantities.
          </h3>
          <p className="why-hero-desc">
            Wholesale-level pricing without requiring traditional bulk orders. Sourced direct from certified manufacturers for genuine player savings.
          </p>
          <div className="why-hero-cta">
            <a href="#categories" className="why-pill-btn" id="why-hero-cta">
              Explore Wholesale <span>→</span>
            </a>
          </div>

          <div className="why-hero-meta">
            <div className="why-meta-dash" />
            <span className="why-meta-label text-label">PRICING PILLAR</span>
            <span className="why-meta-sub text-label">DIRECT FACTORY ACCESS</span>
          </div>
        </div>

        {/* Floating Studio Badge on Lower Right */}
        <div className="why-hero-badge">
          <span className="why-badge-line">AUTHENTIC</span>
          <span className="why-badge-line">DIRECT</span>
          <span className="why-badge-line">GENUINE</span>
        </div>
      </div>

      {/* ── 2. MIDDLE SPLIT FEATURE CARDS (Pillars 02 & 03) ── */}
      <div className="why-split-grid">
        {/* Card 02: Fresh Batches Every Week */}
        <div className="why-split-card" id="why-card-fresh">
          <div className="why-split-content">
            <div className="why-card-num-row">
              <span className="why-card-num">02</span>
              <span className="why-card-line" />
            </div>
            <h4 className="why-card-heading">
              Fresh batches<br />every week.
            </h4>
            <p className="why-card-desc">
              Fresh product batches arrive every single Monday. Never buy stale, dried rubber sheets sitting on warehouse shelves for months.
            </p>
            <div className="why-card-meta">
              <span className="why-tag text-label">FRESHNESS</span>
              <span className="why-tag text-label">SPEED</span>
              <span className="why-tag text-label">SPIN RETENTION</span>
            </div>
          </div>
          <div className="why-split-media">
            <img
              src="/images/why-rubber-macro-seamless.png"
              alt="Close-up macro of competition table tennis rubber and sponge"
              className="why-split-img"
            />
          </div>
        </div>

        {/* Card 03: Something New to Discover */}
        <div className="why-split-card" id="why-card-detail">
          <div className="why-split-content">
            <div className="why-card-num-row">
              <span className="why-card-num">03</span>
              <span className="why-card-line" />
            </div>
            <h4 className="why-card-heading">
              Something new<br />to discover.
            </h4>
            <p className="why-card-desc">
              The available product mix regularly reshuffles with limited runs, new sponge densities, and upgraded carbon blade plies.
            </p>
            <div className="why-card-meta">
              <span className="why-tag text-label">MATERIALS</span>
              <span className="why-tag text-label">CRAFTSMANSHIP</span>
              <span className="why-tag text-label">MATCH-READY SPECS</span>
            </div>
          </div>
          <div className="why-split-media">
            <img
              src="/images/why-blade-macro-seamless.png"
              alt="Handcrafted wood grain handle with metallic emblem lens on limestone pedestal"
              className="why-split-img"
            />
          </div>
        </div>
      </div>

      {/* ── 3. BOTTOM SHOWCASE LINEUP & FINAL CTA (Pillars 04 & 05) ── */}
      <div className="why-lineup-block">
        <div className="why-lineup-items">
          {/* Item 1: Complete Racket */}
          <div className="why-lineup-card">
            <div className="why-lineup-img-box">
              <img
                src="/images/why-lineup-racket-feathered.jpg"
                alt="TableTrex Pro One Complete Racket"
                className="why-lineup-img"
              />
            </div>
            <div className="why-lineup-info">
              <span className="why-lineup-title">TABLETREX PRO ONE</span>
              <span className="why-lineup-sub text-label">Carbon Attack Racket</span>
              <span className="why-lineup-dash">—</span>
            </div>
          </div>

          {/* Item 2: Rubber Sheet */}
          <div className="why-lineup-card">
            <div className="why-lineup-img-box">
              <img
                src="/images/why-lineup-rubber-studio.jpg"
                alt="Tenergy 05 Pro Sheet"
                className="why-lineup-img"
              />
            </div>
            <div className="why-lineup-info">
              <span className="why-lineup-title">TENERGY 05 PRO</span>
              <span className="why-lineup-sub text-label">High-Tension Spring Rubber</span>
              <span className="why-lineup-dash">—</span>
            </div>
          </div>

          {/* Item 3: Touring Water Bottle / Gear */}
          <div className="why-lineup-card">
            <div className="why-lineup-img-box">
              <img
                src="/images/why-lineup-bottle-feathered.jpg"
                alt="TableTrex Insulated Hydro Bottle"
                className="why-lineup-img"
              />
            </div>
            <div className="why-lineup-info">
              <span className="why-lineup-title">TREX HYDRO 750</span>
              <span className="why-lineup-sub text-label">Stainless Match Bottle</span>
              <span className="why-lineup-dash">—</span>
            </div>
          </div>
        </div>

        {/* Closing CTA Box (Pillar 05: Built Around Your Game) */}
        <div className="why-lineup-cta-box">
          <div className="why-cta-tag text-label">YOUR SETUP</div>
          <h3 className="why-lineup-cta-title">
            Built around<br />your game.
          </h3>
          <p className="why-lineup-cta-desc">
            Customize your blade, forehand, backhand, and grip dimensions. Zero generic filler—only gear tested to elevate match play.
          </p>
          <a href="#find-your-play" className="why-pill-btn why-pill-btn--accent" id="why-lineup-cta-btn">
            Build Your Setup <span>→</span>
          </a>
        </div>
      </div>

      {/* ── 4. EDITORIAL BOTTOM STRIP ── */}
      <div className="why-footer-strip">
        <div className="why-strip-left text-label">
          <span className="why-strip-dash">—</span>
          <span>EQUIPMENT FOR A HIGHER LEVEL OF PLAY</span>
        </div>
        <div className="why-strip-right text-label">
          <span>PRECISION</span>
          <span>SPEED</span>
          <span>CONTROL</span>
        </div>
      </div>
    </section>
  );
}
