'use client';

export default function FinalCTA() {
  const waMsg = encodeURIComponent('Hi! I want to build my custom table tennis setup. Can you help me?');
  return (
    <section className="final-cta-section" id="final-cta">
      <div className="final-cta-inner">
        <span className="text-label" style={{ color: 'rgba(245,240,232,0.7)' }}>
          [13] — GET STARTED
        </span>
        <h2 className="final-cta-headline text-display">
          BUILD YOUR SETUP.<br />
          <span className="final-cta-accent">PLAY YOUR GAME.</span>
        </h2>
        <p className="final-cta-sub">
          WHOLESALE PRICES. FRESH WEEKLY BATCHES. HAND-ASSEMBLED CUSTOM SETUPS.<br />
          EVERYTHING ENGINEERED FOR ATHLETIC PERFORMANCE.
        </p>
        <div className="final-cta-buttons">
          <a href="/rackets" className="final-btn final-btn--primary" id="final-btn-rackets">
            Shop Rackets
          </a>
          <a href="/rubber" className="final-btn final-btn--primary" id="final-btn-rubber">
            Shop Rubber
          </a>
          <a href="/customize" className="final-btn final-btn--outline" id="final-btn-customize">
            Customize Your Setup
          </a>
        </div>
        <a
          href={`https://wa.me/919999999999?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="final-wa-link"
          id="final-wa-btn"
        >
          ORDER ON WHATSAPP →
        </a>
      </div>

      {/* Oversized watermark */}
      <div className="final-cta-watermark" aria-hidden="true">TABLETEREX</div>
    </section>
  );
}
