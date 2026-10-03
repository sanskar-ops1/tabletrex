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
          <div className="why-card-num-row" style={{ marginBottom: '16px' }}>
            <span className="why-card-num">01</span>
            <span className="why-card-line" />
            <span className="why-hero-tag text-label" style={{ margin: 0 }}>
              WHOLESALE AT RETAIL
            </span>
          </div>
          <h3 className="why-hero-heading">
            Wholesale prices.<br />
            Retail quantities.
          </h3>
          <p className="why-hero-desc">
            Get manufacturer-level pricing without needing to place traditional bulk orders. Shop individual pieces or build a complete setup at prices designed to give players more value.
          </p>
          <div className="why-hero-cta">
            <a href="/products" className="why-pill-btn" id="why-hero-cta">
              Explore Wholesale <span>→</span>
            </a>
          </div>

          <div className="why-hero-meta">
            <div className="why-meta-dash" />
            <span className="why-meta-label text-label">PRICING PILLAR</span>
            <span className="why-meta-sub text-label">MORE VALUE FOR PLAYERS</span>
          </div>
        </div>

        {/* Floating Studio Badge on Lower Right */}
        <div className="why-hero-badge">
          <span className="why-badge-line">AUTHENTIC</span>
          <span className="why-badge-line">VALUE</span>
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
              <span className="why-tag text-label" style={{ color: 'var(--orange)' }}>
                FRESH BATCHES EVERY WEEK
              </span>
            </div>
            <h4 className="why-card-heading">
              New gear.<br />Every week.
            </h4>
            <p className="why-card-desc">
              Fresh product batches keep the selection moving. New rackets, blades, rubbers, balls, footwear, apparel, and accessories arrive regularly, so there is always something new to explore.
            </p>
            <div className="why-card-meta">
              <span className="why-tag text-label">FRESHNESS</span>
              <span className="why-tag text-label">NEW ARRIVALS</span>
              <span className="why-tag text-label">MORE CHOICE</span>
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
              <span className="why-tag text-label" style={{ color: 'var(--orange)' }}>
                SOMETHING NEW TO DISCOVER
              </span>
            </div>
            <h4 className="why-card-heading">
              A selection that<br />keeps changing.
            </h4>
            <p className="why-card-desc">
              From entry-level equipment to competition-grade gear, TableTrex brings together products across different playing levels, technologies, brands, and price points.
            </p>
            <div className="why-card-meta">
              <span className="why-tag text-label">NEW BRANDS</span>
              <span className="why-tag text-label">NEW TECHNOLOGIES</span>
              <span className="why-tag text-label">NEW SETUPS</span>
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
        <div className="why-lineup-left">
          <div className="why-lineup-header">
            <div className="why-card-num-row">
              <span className="why-card-num">04</span>
              <span className="why-card-line" />
              <span className="why-tag text-label" style={{ color: 'var(--orange)' }}>
                COMPLETE TABLE TENNIS EQUIPMENT
              </span>
            </div>
            <h4 className="why-lineup-heading">
              Everything around your game.
            </h4>
            <p className="why-lineup-desc">
              Build your setup from the ground up or find the equipment that fits where you play. Explore ready-made bats, blades, rubbers, balls, footwear, apparel, accessories, and more from established table-tennis brands.
            </p>
          </div>

          <div className="why-lineup-items">
            {/* Item 1: Pro Blade */}
            <div className="why-lineup-card">
              <div className="why-lineup-img-box">
                <img
                  src="/images/pro-blade.jpg"
                  alt="Butterfly Timo Boll ALC"
                  className="why-lineup-img"
                />
              </div>
              <div className="why-lineup-info">
                <span className="why-lineup-brand text-label" style={{ color: 'var(--orange)', fontSize: '0.65rem' }}>BUTTERFLY</span>
                <span className="why-lineup-title">TIMO BOLL ALC</span>
                <span className="why-lineup-sub text-label">₹24,200 MRP · Arylate-Carbon Attack</span>
                <span className="why-lineup-dash">—</span>
              </div>
            </div>

            {/* Item 2: Pro Rubber */}
            <div className="why-lineup-card">
              <div className="why-lineup-img-box">
                <img
                  src="/images/red-rubber.jpg"
                  alt="Butterfly Tenergy 05"
                  className="why-lineup-img"
                />
              </div>
              <div className="why-lineup-info">
                <span className="why-lineup-brand text-label" style={{ color: 'var(--orange)', fontSize: '0.65rem' }}>BUTTERFLY</span>
                <span className="why-lineup-title">TENERGY 05</span>
                <span className="why-lineup-sub text-label">₹10,600 MRP · Spring Sponge Spin</span>
                <span className="why-lineup-dash">—</span>
              </div>
            </div>

            {/* Item 3: Japanese Power Tensor Rubber */}
            <div className="why-lineup-card">
              <div className="why-lineup-img-box">
                <img
                  src="/images/black-rubber.jpg"
                  alt="Nittaku Fastarc G-1"
                  className="why-lineup-img"
                />
              </div>
              <div className="why-lineup-info">
                <span className="why-lineup-brand text-label" style={{ color: 'var(--orange)', fontSize: '0.65rem' }}>NITTAKU</span>
                <span className="why-lineup-title">FASTARC G-1</span>
                <span className="why-lineup-sub text-label">₹5,849 MRP · Japan #1 High Arc Loop</span>
                <span className="why-lineup-dash">—</span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing CTA Box (Pillar 05: Built Around Your Game) */}
        <div className="why-lineup-cta-box">
          <div className="why-card-num-row">
            <span className="why-card-num">05</span>
            <span className="why-card-line" />
            <span className="why-cta-tag text-label" style={{ color: 'var(--orange)', margin: 0 }}>
              BUILT AROUND YOUR GAME
            </span>
          </div>
          <h3 className="why-lineup-cta-title">
            Your game.<br />Your setup.
          </h3>
          <p className="why-lineup-cta-desc">
            Choose equipment based on your playing style, level, budget, and performance needs. Combine blades and rubbers, upgrade individual components, or build a complete setup that works for you.
          </p>
          <div className="why-card-meta" style={{ marginBottom: '24px' }}>
            <span className="why-tag text-label">SPEED</span>
            <span className="why-tag text-label">SPIN</span>
            <span className="why-tag text-label">CONTROL</span>
            <span className="why-tag text-label">FEEL</span>
          </div>
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
          <span>SPEED</span>
          <span>SPIN</span>
          <span>CONTROL</span>
          <span>FEEL</span>
        </div>
      </div>
    </section>
  );
}
