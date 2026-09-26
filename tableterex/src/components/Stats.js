'use client';

const STATS = [
  { num: '500',  unit: '+', label: 'Products in Stock'  },
  { num: '15',   unit: '+', label: 'Premium Brands'     },
  { num: '24',   unit: 'HR',label: 'Same-Day Dispatch'  },
  { num: '999',  unit: '↑', label: 'Free Shipping Above ₹' },
];

export default function Stats() {
  return (
    <div className="stats-bar" id="stats">
      {STATS.map((s, i) => (
        <div className="stat-item" key={i}>
          <span className="stat-num">
            {s.num}<span>{s.unit}</span>
          </span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
