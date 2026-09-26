'use client';

const BRANDS = ['BUTTERFLY', 'DHS', 'XIOM', 'TIBHAR', 'STIGA', 'DONIC', 'JOOLA'];

export default function Brands() {
  return (
    <section className="brands-section" id="brands">
      <span className="brands-label">— BRANDS WE CARRY</span>
      <div className="brands-row">
        {BRANDS.map((b) => (
          <span key={b} className="brand-pill" data-cursor="true">{b}</span>
        ))}
      </div>
    </section>
  );
}
