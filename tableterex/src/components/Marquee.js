'use client';

const ITEMS = [
  'RACKETS',
  'RUBBERS',
  'BLADES',
  'ACCESSORIES',
  'TABLE TENNIS',
  'PRO GEAR',
];

const REPEATED = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {REPEATED.map((item, i) => (
          <span key={`t1-${i}`} className="marquee-token">
            <span className="marquee-item">{item}</span>
            <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
      <div className="marquee-track" aria-hidden="true">
        {REPEATED.map((item, i) => (
          <span key={`t2-${i}`} className="marquee-token">
            <span className="marquee-item">{item}</span>
            <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

