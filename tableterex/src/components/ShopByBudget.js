'use client';

const BUDGET_TIERS = [
  {
    id: 'b1',
    tier: 'UNDER ₹2,000',
    title: 'STARTER GEAR',
    badge: 'STARTER',
    desc: 'Great for getting into the game or picking up everyday essentials.',
    highlights: ['Ready-made bats', 'Training & match balls', 'Grip tapes & edge protection'],
    priceRange: '₹110 – ₹1,999',
    href: '/products?budget=under-2000',
  },
  {
    id: 'b2',
    tier: '₹2,000 – ₹5,000',
    title: 'BUILD YOUR GAME',
    badge: 'DEVELOPING',
    desc: 'A wider selection of bats, blades, rubbers and essential equipment for developing players.',
    highlights: ['Ready-made bats', 'Entry-level blades', 'Performance rubbers'],
    priceRange: '₹2,000 – ₹4,999',
    href: '/products?budget=2000-5000',
  },
  {
    id: 'b3',
    tier: '₹5,000 – ₹10,000',
    title: 'PERFORMANCE GEAR',
    badge: 'PERFORMANCE',
    desc: 'Performance-focused equipment for players looking to upgrade their setup.',
    highlights: ['Performance blades', 'Advanced rubbers', 'Premium ready-made bats'],
    priceRange: '₹5,000 – ₹9,999',
    href: '/products?budget=5000-10000',
  },
  {
    id: 'b4',
    tier: '₹10,000 – ₹20,000',
    title: 'ADVANCED EQUIPMENT',
    badge: 'ADVANCED',
    desc: 'Premium equipment built around higher-level play and specialized performance.',
    highlights: ['Carbon & premium blades', 'High-performance rubbers', 'Premium shoes & equipment'],
    priceRange: '₹10,000 – ₹19,999',
    href: '/products?budget=10000-20000',
  },
  {
    id: 'b5',
    tier: '₹20,000+',
    title: 'PREMIUM COLLECTION',
    badge: 'PREMIUM',
    desc: 'Top-end equipment and specialist gear from leading table tennis brands.',
    highlights: ['Premium blades & rubbers', 'Professional equipment', 'Tables & advanced training gear'],
    priceRange: '₹20,000+',
    href: '/products?budget=20000-plus',
  },
];

export default function ShopByBudget() {
  return (
    <section className="budget-section" id="shop-by-budget">
      <div className="budget-container">
        {/* Header */}
        <div className="budget-header">
          <div className="budget-header-left">
            <span className="text-label" style={{ color: 'var(--orange)', letterSpacing: '0.2em' }}>
              PRICE-TRANSPARENT SHOPPING
            </span>
            <h2 className="budget-title text-display">
              SHOP BY BUDGET
            </h2>
          </div>
          <p className="budget-header-desc">
            From everyday table tennis essentials to premium performance equipment, find the right gear for your budget.
          </p>
        </div>

        {/* 5 Budget Tier Cards */}
        <div className="budget-grid">
          {BUDGET_TIERS.map((tier, idx) => (
            <div key={tier.id} className="budget-card" id={`budget-card-${tier.id}`}>
              <div className="budget-card-top">
                <span className="budget-tier-num">0{idx + 1}</span>
                <span className="budget-badge">{tier.badge}</span>
              </div>

              <div className="budget-card-main">
                <span className="budget-tier-label">{tier.tier}</span>
                <h3 className="budget-card-title">{tier.title}</h3>
                <p className="budget-card-desc">{tier.desc}</p>

                <ul className="budget-card-list">
                  {tier.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="budget-list-bullet" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="budget-card-footer">
                <div className="budget-price-box">
                  <span className="budget-price-label">RANGE</span>
                  <span className="budget-price-val">{tier.priceRange}</span>
                </div>
                <a href="/products" className="budget-cta-btn" id={`budget-cta-${tier.id}`}>
                  EXPLORE GEAR →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
