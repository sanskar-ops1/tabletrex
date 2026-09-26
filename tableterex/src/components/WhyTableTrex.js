'use client';
import {
  WholesalePriceIcon,
  FreshWeeklyCalendarIcon,
  NewMixReshuffleIcon,
  PersonalCustomIcon,
  PerformanceFocusIcon,
} from '@/components/icons';

const REASONS = [
  {
    num: '01',
    headline: 'Wholesale Prices. Retail Quantities.',
    sub: 'Wholesale at Retail',
    desc: 'Wholesale-level pricing without requiring traditional bulk orders. Sourced direct from certified manufacturers for genuine player savings.',
    icon: WholesalePriceIcon,
  },
  {
    num: '02',
    headline: 'Fresh Batches Every Week',
    sub: 'Fresh Every Week',
    desc: 'Fresh product batches arrive every single Monday. Never buy stale, dried rubber sheets sitting on warehouse shelves for months.',
    icon: FreshWeeklyCalendarIcon,
  },
  {
    num: '03',
    headline: 'Something New to Discover',
    sub: 'New Product Mix',
    desc: 'The available product mix regularly reshuffles with limited runs, new sponge densities, and upgraded carbon blade plies.',
    icon: NewMixReshuffleIcon,
  },
  {
    num: '04',
    headline: 'Build Your Own Setup',
    sub: 'Personal Customization',
    desc: 'Customize your blade, forehand, backhand, and grip dimensions. Each racket is hand-assembled to your exact competition specifications.',
    icon: PersonalCustomIcon,
  },
  {
    num: '05',
    headline: 'Built Around Your Game',
    sub: 'Performance Focused',
    desc: 'Every item is curated for specific playing styles and technical performance. Zero generic filler—only gear tested to elevate match play.',
    icon: PerformanceFocusIcon,
  },
];

export default function WhyTableTrex() {
  return (
    <section className="why-section" id="why-tableterex">
      <div className="why-header">
        <span className="text-label">[09] — WHY TABLETREX</span>
        <h2 className="why-title text-display">
          WHY CHOOSE<br /><span className="why-accent">TABLETREX</span>
        </h2>
        <p className="why-header-sub text-label">
          FIVE CORE PILLARS OF OUR ATHLETIC PERFORMANCE SYSTEM
        </p>
      </div>

      {/* 5 Visual Cards with 48x48 Bespoke Line Icons */}
      <div className="why-grid">
        {REASONS.map((r) => {
          const IconComponent = r.icon;
          return (
            <div key={r.num} className="why-item" id={`why-${r.num}`}>
              <div className="why-card-top">
                <span className="why-num text-label">[{r.num}]</span>
                <span className="why-sub-tag text-label">{r.sub}</span>
              </div>

              <div className="why-icon-box">
                <IconComponent
                  size={48}
                  className="why-48-icon"
                  color="var(--orange)"
                />
              </div>

              <h3 className="why-item-title">{r.headline}</h3>
              <p className="why-item-desc">{r.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Bottom tagline */}
      <div className="why-tagline-row">
        <span className="why-tagline text-display">
          WHOLESALE PRICES.&nbsp; RETAIL QUANTITIES.
        </span>
      </div>
    </section>
  );
}
