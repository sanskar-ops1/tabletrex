'use client';
import { VerifiedBadgeIcon } from '@/components/icons';

const REVIEWS = [
  {
    id: 'r1',
    name: 'RAHUL SHARMA',
    role: 'STATE LEVEL PLAYER — MUMBAI',
    rating: 5,
    verified: true,
    text: 'ORDERED THE TIMO BOLL ALC AND TENERGY 05 COMBO. ARRIVED PERFECTLY ASSEMBLED IN 2 DAYS. PRICES ARE GENUINELY BETTER THAN ANYWHERE ELSE IN INDIA.',
    setup: 'TB-ALC + TENERGY 05',
  },
  {
    id: 'r2',
    name: 'PRIYA NAIR',
    role: 'DISTRICT CHAMPION — KERALA',
    rating: 5,
    verified: true,
    text: 'THE CUSTOMIZE SETUP FEATURE IS BRILLIANT. TOLD THEM MY STYLE, THEY RECOMMENDED THE PERFECT RUBBER. NO OTHER STORE DOES THIS.',
    setup: 'DONIC WALDNER ALLPLAY + DONIC LIGA',
  },
  {
    id: 'r3',
    name: 'ARJUN MEHTA',
    role: 'CLUB COACH — DELHI',
    rating: 5,
    verified: true,
    text: 'I ORDER FOR MY ENTIRE CLUB. FRESH BATCH EVERY WEEK MEANS STUDENTS ALWAYS GET NEW STOCK. WHOLESALE PRICING WITHOUT WHOLESALE QUANTITY — EXACTLY WHAT WE NEEDED.',
    setup: 'BULK ORDER — MIXED SETUPS',
  },
];

function Stars({ n }) {
  return (
    <span className="rev-stars" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="rev-watermark" aria-hidden="true">REVIEWS</div>

      <div className="rev-header">
        <span className="text-label">REVIEWS &amp; SOCIAL PROOF</span>
        <div className="rev-aggregate">
          <span className="rev-big-stars">★★★★★</span>
          <span className="rev-score">4.9</span>
          <div className="rev-verified-banner">
            <VerifiedBadgeIcon size={24} color="var(--orange)" />
            <span className="rev-total text-label">FROM 500+ VERIFIED PURCHASES</span>
          </div>
        </div>
        <h2 className="rev-title text-display">WHAT PLAYERS<br />ARE SAYING</h2>
      </div>

      <div className="rev-grid">
        {REVIEWS.map((r) => (
          <div key={r.id} className="rev-card" id={`review-${r.id}`}>
            <div className="rev-card-header">
              <Stars n={r.rating} />
              {r.verified && (
                <div className="rev-verified-tag text-label">
                  <VerifiedBadgeIcon size={14} color="var(--orange)" />
                  <span>VERIFIED PURCHASE</span>
                </div>
              )}
            </div>

            <blockquote className="rev-text">&ldquo;{r.text}&rdquo;</blockquote>

            <div className="rev-author">
              <div>
                <span className="rev-name">{r.name}</span>
                <span className="rev-role">{r.role}</span>
              </div>
              <span className="rev-setup-tag">{r.setup}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
