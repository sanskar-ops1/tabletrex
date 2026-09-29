'use client';
import { useState } from 'react';

// Exact photos and items matching reference (Significa Office Album)
const ALBUM_ITEMS = [
  {
    id: 'office-3',
    type: 'image',
    src: '/images/office/office3.png',
    alt: 'Office Studio Space with Plants',
    restX: '0%',
    restY: '55%',
    restRot: '4deg',
    zIndex: 1,
  },
  {
    id: 'office-5',
    type: 'image',
    src: '/images/office/office5.png',
    alt: 'Rooftop Antenna and Blue Sky',
    restX: '0%',
    restY: '75%',
    restRot: '-14deg',
    zIndex: 1,
  },
  {
    id: 'office-card',
    type: 'address',
    address: [
      'Rua da Torrinha 154',
      '4050–609 Porto, Portugal',
      '(+351) 225 000 781',
    ],
    restX: '-10%',
    restY: '50%',
    restRot: '4deg',
    zIndex: 2,
  },
  {
    id: 'office-4',
    type: 'image',
    src: '/images/office/office4.png',
    alt: 'Ideation Chalkboard Sketches',
    restX: '0%',
    restY: '65%',
    restRot: '-5deg',
    zIndex: 3,
  },
  {
    id: 'office-1',
    type: 'image',
    src: '/images/office/office1.png',
    alt: 'Studio Portrait with Dog',
    restX: '-5%',
    restY: '35%',
    restRot: '-5deg',
    zIndex: 2,
  },
  {
    id: 'office-2',
    type: 'image',
    src: '/images/office/office2.png',
    alt: 'Team Smiles at Office',
    restX: '0%',
    restY: '55%',
    restRot: '10deg',
    zIndex: 1,
  },
];

// Die-cut postal seagull/bird sticker holding letter envelope
function PostalBirdSticker() {
  return (
    <svg
      viewBox="0 0 160 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="album-bird-svg"
      aria-hidden="true"
    >
      <filter id="bird-sticker-shadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor="#000000" floodOpacity="0.4" />
      </filter>
      <g filter="url(#bird-sticker-shadow)">
        {/* White sticker silhouette border */}
        <path
          d="M78 18 C52 18 36 34 35 55 C35 62 30 75 22 84 C12 95 10 110 18 122 C24 130 32 135 42 137 C42 145 46 155 58 158 C70 160 85 158 98 150 C110 155 125 152 135 142 C146 130 148 112 140 98 C135 90 136 75 130 65 C120 48 110 32 95 22 C88 18 83 18 78 18 Z"
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinejoin="round"
        />

        {/* Bird Main Body */}
        <path
          d="M78 24 C55 24 43 40 43 62 C43 74 36 88 28 98 C20 108 20 120 26 128 C32 135 42 138 52 138 C58 148 70 152 84 152 C98 152 112 146 122 138 C132 128 134 112 128 100 C122 90 122 76 118 66 C110 48 98 30 86 24 Z"
          fill="#FFFFFF"
          stroke="#171717"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />

        {/* Head Crest Feathers */}
        <path
          d="M76 25 C72 10 83 6 86 11 C89 15 86 23 83 25"
          fill="#FFB800"
          stroke="#171717"
          strokeWidth="2.8"
        />
        <path
          d="M82 24 C83 15 92 13 94 17 C96 21 91 25 88 26"
          fill="#FFD24D"
          stroke="#171717"
          strokeWidth="2.4"
        />

        {/* Expressive Eye */}
        <circle cx="66" cy="50" r="7.5" fill="#FFFFFF" stroke="#171717" strokeWidth="3" />
        <circle cx="64.5" cy="49" r="3.8" fill="#171717" />
        <circle cx="63" cy="47.5" r="1.3" fill="#FFFFFF" />

        {/* Pointy Beak */}
        <path
          d="M48 54 L28 62 L48 70 Z"
          fill="#FFB800"
          stroke="#171717"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Cute Cheek Blush */}
        <ellipse cx="66" cy="63" rx="5" ry="3" fill="#FF8A7A" opacity="0.6" />

        {/* Letter Envelope */}
        <g transform="translate(16, 88) rotate(-7)">
          <rect
            x="0"
            y="0"
            width="64"
            height="44"
            rx="3"
            fill="#FFFFFF"
            stroke="#171717"
            strokeWidth="3"
          />
          {/* Flap lines */}
          <path
            d="M0 0 L32 23 L64 0"
            stroke="#171717"
            strokeWidth="3"
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M0 44 L22 21" stroke="#171717" strokeWidth="2.5" />
          <path d="M64 44 L42 21" stroke="#171717" strokeWidth="2.5" />
          {/* Heart seal */}
          <circle cx="32" cy="23" r="5" fill="#E63946" stroke="#171717" strokeWidth="1.5" />
        </g>

        {/* Wing Holding Envelope */}
        <path
          d="M70 80 C63 86 54 100 58 112 C62 122 76 124 88 118 C98 112 103 98 96 86 C92 78 80 74 70 80 Z"
          fill="#F5F0E8"
          stroke="#171717"
          strokeWidth="3"
        />
        <path d="M68 100 C72 106 80 108 86 104" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M64 110 C70 114 78 114 83 110" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />

        {/* Bird Feet */}
        <path d="M60 152 L58 162 M53 162 L63 162" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
        <path d="M86 152 L86 162 M81 162 L91 162" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default function FinalCTA() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="final-cta-section" id="final-cta">
      {/* ── Headline & Section Tag ── */}
      <div className="final-cta-inner">
        <span className="text-label" style={{ color: 'rgba(245,240,232,0.7)' }}>
          GET STARTED
        </span>
        <h2 className="final-cta-headline text-display">
          <span className="final-cta-line">BUILD YOUR</span>
          <span className="final-cta-line">SETUP.</span>
          <span className="final-cta-line final-cta-accent">PLAY YOUR</span>
          <span className="final-cta-line final-cta-accent">GAME.</span>
        </h2>
      </div>

      {/* ── Album Photos Row (Half-revealing at bottom, fully revealed on hover) ── */}
      <div className="final-album-wrap">
        <div className="final-album-grid">
          {ALBUM_ITEMS.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                className={`final-album-item${isHovered ? ' active' : ''}`}
                id={`album-card-${item.id}`}
                style={{
                  '--rest-x': item.restX,
                  '--rest-y': item.restY,
                  '--rest-rot': item.restRot,
                  '--rest-z': item.zIndex,
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setHoveredId(prev => (prev === item.id ? null : item.id))}
              >
                {item.type === 'image' ? (
                  <div className="final-album-frame">
                    <img src={item.src} alt={item.alt} className="final-album-img" />
                  </div>
                ) : (
                  <div className="final-album-card-address">
                    <div className="album-address-info">
                      <p className="album-address-line album-address-bold">{item.address[0]}</p>
                      <p className="album-address-line">{item.address[1]}</p>
                      <p className="album-address-line">{item.address[2]}</p>
                    </div>
                    <div className="album-bird-container">
                      <PostalBirdSticker />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Oversized background watermark */}
      <div className="final-cta-watermark" aria-hidden="true">TABLETEREX</div>
    </section>
  );
}
