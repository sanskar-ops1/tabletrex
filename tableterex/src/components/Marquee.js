'use client';

const ITEMS = [
  'RACKETS', '•', 'RUBBERS', '•', 'BLADES', '•',
  'ACCESSORIES', '•', 'TABLE TENNIS', '•', 'PRO GEAR', '•',
  'RACKETS', '•', 'RUBBERS', '•', 'BLADES', '•',
  'ACCESSORIES', '•', 'TABLE TENNIS', '•', 'PRO GEAR', '•',
];

export default function Marquee() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className={`marquee-item${item === '•' ? ' accent' : ''}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
