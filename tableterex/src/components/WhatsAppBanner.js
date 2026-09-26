'use client';

export default function WhatsAppBanner() {
  const waMsg = encodeURIComponent(
    'Hi! I want to place an order. Please help me with product details and availability.'
  );
  const waLink = `https://wa.me/919999999999?text=${waMsg}`;

  return (
    <section className="wa-banner" id="whatsapp-cta">
      <div className="wa-banner-text">
        <span className="wa-banner-label">— INSTANT SUPPORT</span>
        <h2 className="wa-banner-title text-display">
          ORDER ON<br />WHATSAPP
        </h2>
      </div>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-banner-cta"
        id="wa-banner-btn"
      >
        CHAT NOW →
      </a>
    </section>
  );
}
