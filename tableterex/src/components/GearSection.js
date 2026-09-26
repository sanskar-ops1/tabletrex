'use client';
import { useState } from 'react';

const GEAR = [
  {
    id: 'g1',
    name: 'TT PRO T-SHIRT',
    price: '₹899',
    tag: 'ADD',
    image: '/images/gear-tshirt.jpg',
  },
  {
    id: 'g2',
    name: 'SPORT WRISTBAND',
    price: '₹299',
    tag: 'ADD',
    image: '/images/gear-wristband.jpg',
  },
  {
    id: 'g3',
    name: 'PRO VISOR CAP',
    price: '₹649',
    tag: 'ADD',
    image: '/images/gear-cap.jpg',
  },
  {
    id: 'g4',
    name: 'WATER BOTTLE 750ML',
    price: '₹549',
    tag: 'ADD',
    image: '/images/gear-bottle.jpg',
  },
  {
    id: 'g5',
    name: 'PERFORMANCE TANK',
    price: '₹749',
    tag: 'ADD',
    image: '/images/gear-tank.jpg',
  },
  {
    id: 'g6',
    name: 'PRO MATCH BAT & CASE',
    price: '₹3,499',
    tag: 'ADD',
    image: '/images/custom-racket.jpg',
  },
];

export default function GearSection({ onProductClick }) {
  const [addedIds, setAddedIds] = useState([]);

  const handleAdd = (e, item) => {
    e.stopPropagation();
    setAddedIds(prev => [...prev, item.id]);
    setTimeout(() => setAddedIds(prev => prev.filter(id => id !== item.id)), 1500);
  };

  return (
    <section className="gear-section" id="gear">
      {/* Section label bar */}
      <div className="gear-label-bar">
        <div>
          <h2 className="gear-title text-display">ALL</h2>
          <span className="text-label">BRANDED GEAR FOR PLAY, TRAINING &amp; EVERYDAY MOTION</span>
        </div>
        <span className="gear-desktop-tag">DESKTOP 1920</span>
      </div>

      {/* Main gear panel */}
      <div className="gear-panel">
        <div className="gear-panel-header">
          <span className="gear-panel-brand">TABLETEREX</span>
          <a href="/store" className="gear-panel-close">[VIEW ALL]</a>
        </div>

        {/* Watermark text behind grid */}
        <div className="gear-watermark" aria-hidden="true">TEREX&nbsp;GEAR</div>

        <div className="gear-grid">
          {GEAR.map((item) => (
            <div
              key={item.id}
              className="gear-item"
              onClick={() => onProductClick && onProductClick({ ...item, brand: 'TABLETEREX', category: 'GEAR', desc: 'PREMIUM BRANDED GEAR.\nMADE FOR THE TABLE.\nWORN EVERYWHERE.' })}
              id={`gear-item-${item.id}`}
              role="button"
              tabIndex={0}
            >
              <div className="gear-img-wrap">
                <img src={item.image} alt={item.name} className="gear-img" />
              </div>
              <div className="gear-item-footer">
                <div className="gear-item-info">
                  <span className="gear-item-name">{item.name}</span>
                  <span className="gear-item-price">{item.price}</span>
                </div>
                <button
                  className={`gear-add-btn${addedIds.includes(item.id) ? ' added' : ''}`}
                  id={`gear-add-${item.id}`}
                  onClick={(e) => handleAdd(e, item)}
                >
                  {addedIds.includes(item.id) ? '✓' : item.tag}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
