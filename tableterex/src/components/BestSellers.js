'use client';
import { useState } from 'react';

const BEST_SELLERS = [
  {
    id:'bs1', name:'Butterfly Tenergy 05', brand:'BUTTERFLY', type:'RUBBER',
    price:'₹3,850', rating:5, reviews:248,
    specs:{ spin:95, speed:80, control:65 },
    tags:['TENSOR','RED/BLACK','2.1MM'],
    img:'/images/red-rubber.jpg',
  },
  {
    id:'bs2', name:'DHS Hurricane Long 5', brand:'DHS', type:'BLADE',
    price:'₹4,299', rating:4, reviews:182,
    specs:{ spin:70, speed:88, control:72 },
    tags:['CARBON','OFFENSIVE','90G'],
    img:'/images/pro-blade.jpg',
  },
  {
    id:'bs3', name:'DHS Hurricane 3', brand:'DHS', type:'RUBBER',
    price:'₹1,299', rating:5, reviews:315,
    specs:{ spin:98, speed:68, control:82 },
    tags:['CHINESE TACKY','RED','2.15MM'],
    img:'/images/black-rubber.jpg',
  },
  {
    id:'bs4', name:'Stiga Clipper Wood', brand:'STIGA', type:'BLADE',
    price:'₹3,499', rating:4, reviews:201,
    specs:{ spin:65, speed:75, control:90 },
    tags:['ALL-WOOD','ALL-ROUND','88G'],
    img:'/images/stiga-blade.jpg',
  },
];

function Stars({ rating }) {
  return (
    <span className="bs-stars" aria-label={`${rating} stars`}>
      {[1,2,3,4,5].map(i => (
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>★</span>
      ))}
    </span>
  );
}

function SpecBar({ label, value }) {
  return (
    <div className="spec-bar-row">
      <span className="spec-bar-label">{label}</span>
      <div className="spec-bar-track">
        <div className="spec-bar-fill" style={{ width:`${value}%` }} />
      </div>
      <span className="spec-bar-val">{value}</span>
    </div>
  );
}

export default function BestSellers({ onProductClick }) {
  const [added, setAdded] = useState([]);

  const handleAdd = (id) => {
    setAdded(p => [...p, id]);
    setTimeout(() => setAdded(p => p.filter(x => x !== id)), 1800);
  };

  return (
    <section className="bestsellers-section" id="best-sellers">
      <div className="bs-header">
        <div>
          <span className="text-label">[04] — BEST SELLERS</span>
          <h2 className="bs-title text-display">PLAYERS&apos;<br />CHOICE</h2>
        </div>
        <div className="bs-header-right">
          <span className="text-label" style={{color:'var(--gray-light)'}}>
            TOP-RATED BY OUR COMMUNITY
          </span>
          <a href="/store" className="bs-view-all" id="bs-view-all-btn">
            VIEW ALL PRODUCTS →
          </a>
        </div>
      </div>

      <div className="bs-grid">
        {BEST_SELLERS.map((p) => (
          <div key={p.id} className="bs-card" id={`bs-${p.id}`}>
            {/* Image */}
            <div className="bs-img-wrap" onClick={() => onProductClick && onProductClick(p)}>
              <img src={p.img} alt={p.name} className="bs-img" />
              <div className="bs-img-overlay" />
              <span className="bs-quick-view">QUICK VIEW</span>
            </div>

            {/* Info */}
            <div className="bs-info">
              <div className="bs-info-top">
                <span className="bs-brand text-label">{p.brand} — {p.type}</span>
                <div className="bs-rating-row">
                  <Stars rating={p.rating} />
                  <span className="bs-reviews">({p.reviews})</span>
                </div>
              </div>

              <span className="bs-name">{p.name}</span>

              <div className="bs-tags">
                {p.tags.map(t => <span key={t} className="bs-tag">{t}</span>)}
              </div>

              <div className="bs-specs">
                <SpecBar label="SPIN"    value={p.specs.spin} />
                <SpecBar label="SPEED"   value={p.specs.speed} />
                <SpecBar label="CONTROL" value={p.specs.control} />
              </div>

              <div className="bs-footer">
                <span className="bs-price">{p.price}</span>
                <button
                  className={`bs-add-btn${added.includes(p.id) ? ' added' : ''}`}
                  id={`bs-add-${p.id}`}
                  onClick={() => handleAdd(p.id)}
                >
                  {added.includes(p.id) ? '✓ ADDED' : 'ADD TO CART'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
