'use client';

import React from 'react';

/**
 * SetupCardsDeckSVG
 * Recreates the 3D isometric cascading card deck from editorial reference (Image 2)
 * Rendered purely in SVG for maximum visual fidelity and smooth hardware-accelerated transitions.
 *
 * Cards rendered in stable, fixed isometric depth order:
 * 1. Control Setup (index 3)
 * 2. Speed Setup (index 2)
 * 3. Atmospheric Olive Accent Sheet (Static depth layer)
 * 4. Spin Setup (index 1)
 * 5. Defensive Setup (index 5)
 * 6. Offensive Setup (index 4)
 * 7. Beginner Setup (index 0)
 *
 * When any card is selected:
 * - It smoothly lifts and glides out of the deck toward the center product card.
 * - Once departed, it is completely absent from the right deck.
 * - When a different option is selected, the departed card glides back into the deck,
 *   while the newly selected card departs to the center.
 */

export default function SetupCardsDeckSVG({
  activeIndex = 0,
  onSelectCard,
  className = '',
}) {
  return (
    <svg
      className={`setup-cards-deck-svg ${className}`}
      viewBox="0 0 720 620"
      preserveAspectRatio="xMaxYMid meet"
      aria-label="Interactive 3D Setup Slabs Deck"
    >
      <defs>
        {/* ── Drop Shadows for Layered Depth ── */}
        <filter id="deck-card-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="-10" dy="14" stdDeviation="12" floodColor="#000000" floodOpacity="0.88" />
        </filter>

        {/* ── Radial Texture for Beginner Rubber Disc ── */}
        <radialGradient id="rubber-disc-grad" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#222730" />
          <stop offset="65%" stopColor="#14181F" />
          <stop offset="100%" stopColor="#0B0D11" />
        </radialGradient>

        <radialGradient id="offensive-disc-grad" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#5E3825" />
          <stop offset="60%" stopColor="#3A2115" />
          <stop offset="100%" stopColor="#1D0F08" />
        </radialGradient>

        {/* ── Surface Gradients ── */}
        {/* Beginner: Slate Navy */}
        <linearGradient id="face-beginner" x1="0%" y1="0%" x2="40%" y2="100%">
          <stop offset="0%" stopColor="#25374C" />
          <stop offset="45%" stopColor="#1C2939" />
          <stop offset="100%" stopColor="#0F1722" />
        </linearGradient>
        <linearGradient id="bevel-beginner" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6C93BC" />
          <stop offset="15%" stopColor="#4A6A8C" />
          <stop offset="100%" stopColor="#202F40" />
        </linearGradient>

        {/* Offensive: Brushed Rose Copper / Dark Bronze */}
        <linearGradient id="face-offensive" x1="0%" y1="0%" x2="35%" y2="100%">
          <stop offset="0%" stopColor="#4A2A1C" />
          <stop offset="50%" stopColor="#381E13" />
          <stop offset="100%" stopColor="#1F0F08" />
        </linearGradient>
        <linearGradient id="bevel-offensive" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D27E5A" />
          <stop offset="18%" stopColor="#A45837" />
          <stop offset="100%" stopColor="#462213" />
        </linearGradient>

        {/* Defensive: Tactical Dark Olive Slate */}
        <linearGradient id="face-defensive" x1="0%" y1="0%" x2="35%" y2="100%">
          <stop offset="0%" stopColor="#242E28" />
          <stop offset="50%" stopColor="#19201C" />
          <stop offset="100%" stopColor="#0E1310" />
        </linearGradient>
        <linearGradient id="bevel-defensive" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#647A6B" />
          <stop offset="20%" stopColor="#435348" />
          <stop offset="100%" stopColor="#1E2721" />
        </linearGradient>

        {/* Spin: Dark Amber Cacao */}
        <linearGradient id="face-spin" x1="0%" y1="0%" x2="35%" y2="100%">
          <stop offset="0%" stopColor="#422618" />
          <stop offset="50%" stopColor="#2C180E" />
          <stop offset="100%" stopColor="#180C06" />
        </linearGradient>
        <linearGradient id="bevel-spin" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B2653D" />
          <stop offset="20%" stopColor="#824322" />
          <stop offset="100%" stopColor="#3C1D0E" />
        </linearGradient>

        {/* Speed: Smoked Acrylic / Glossy Charcoal */}
        <linearGradient id="face-speed" x1="0%" y1="0%" x2="35%" y2="100%">
          <stop offset="0%" stopColor="#28303C" />
          <stop offset="45%" stopColor="#1B212A" />
          <stop offset="100%" stopColor="#0E1217" />
        </linearGradient>
        <linearGradient id="bevel-speed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7E93AE" />
          <stop offset="20%" stopColor="#4E5D72" />
          <stop offset="100%" stopColor="#222B37" />
        </linearGradient>

        {/* Control: Matte Obsidian Graphite */}
        <linearGradient id="face-control" x1="0%" y1="0%" x2="35%" y2="100%">
          <stop offset="0%" stopColor="#22262D" />
          <stop offset="50%" stopColor="#16191E" />
          <stop offset="100%" stopColor="#0B0D10" />
        </linearGradient>
        <linearGradient id="bevel-control" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5B6472" />
          <stop offset="20%" stopColor="#3C434F" />
          <stop offset="100%" stopColor="#1B2027" />
        </linearGradient>

        {/* Olive Accent Sheet */}
        <linearGradient id="face-olive" x1="0%" y1="0%" x2="30%" y2="100%">
          <stop offset="0%" stopColor="#2E3B29" />
          <stop offset="50%" stopColor="#1F281B" />
          <stop offset="100%" stopColor="#11160E" />
        </linearGradient>
      </defs>

      {/* ── 1. Card 3: Control Setup (Backmost slab) ── */}
      <g
        id="deck-card-control"
        className={`setup-svg-card ${activeIndex === 3 ? 'setup-svg-card--active' : ''}`}
        filter={activeIndex === 3 ? undefined : 'url(#deck-card-shadow)'}
        onClick={() => onSelectCard?.(3)}
        role="button"
        tabIndex={activeIndex === 3 ? -1 : 0}
        aria-hidden={activeIndex === 3 ? 'true' : 'false'}
        aria-label="Select Control Setup"
      >
        <path
          d="M 20 620 L 20 361 Q 20 345 35 339 L 175 282 Q 190 276 190 292 L 190 620 Z"
          fill="url(#bevel-control)"
        />
        <path
          d="M 24 620 L 24 364 Q 24 350 37 344 L 186 284 Q 190 282 190 295 L 190 620 Z"
          fill="url(#face-control)"
        />
        <path
          d="M 35 339 L 175 282"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <text
          x="66"
          y="358"
          transform="rotate(-22 66 358)"
          fill="#FFFFFF"
          fontSize="13"
          fontFamily="var(--font-display), 'Montserrat', sans-serif"
          fontWeight="700"
          letterSpacing="0.14em"
          opacity="0.9"
        >
          CONTROL
        </text>
      </g>

      {/* ── 2. Card 2: Speed Setup ── */}
      <g
        id="deck-card-speed"
        className={`setup-svg-card ${activeIndex === 2 ? 'setup-svg-card--active' : ''}`}
        filter={activeIndex === 2 ? undefined : 'url(#deck-card-shadow)'}
        onClick={() => onSelectCard?.(2)}
        role="button"
        tabIndex={activeIndex === 2 ? -1 : 0}
        aria-hidden={activeIndex === 2 ? 'true' : 'false'}
        aria-label="Select Speed Setup"
      >
        <path
          d="M 115 620 L 115 261 Q 115 245 130 239 L 285 176 Q 300 170 300 186 L 300 620 Z"
          fill="url(#bevel-speed)"
        />
        <path
          d="M 119 620 L 119 264 Q 119 250 132 244 L 296 178 Q 300 176 300 189 L 300 620 Z"
          fill="url(#face-speed)"
        />
        <path
          d="M 125 255 L 210 220 L 170 620 L 125 620 Z"
          fill="rgba(255, 255, 255, 0.04)"
        />
        <path
          d="M 130 239 L 285 176"
          stroke="rgba(255, 255, 255, 0.65)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <text
          x="158"
          y="262"
          transform="rotate(-22 158 262)"
          fill="#FFFFFF"
          fontSize="14"
          fontFamily="var(--font-display), 'Montserrat', sans-serif"
          fontWeight="800"
          letterSpacing="0.14em"
        >
          SPEED
        </text>
      </g>

      {/* ── 3. Atmospheric Olive Accent Sheet (Static Background Depth) ── */}
      <g id="deck-accent-olive" aria-hidden="true" opacity="0.9">
        <path
          d="M 230 620 L 230 206 Q 230 190 245 184 L 395 123 Q 410 117 410 133 L 410 620 Z"
          fill="url(#face-olive)"
        />
        <path
          d="M 245 184 L 395 123"
          stroke="rgba(180, 210, 165, 0.35)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>

      {/* ── 4. Card 1: Spin Setup ── */}
      <g
        id="deck-card-spin"
        className={`setup-svg-card ${activeIndex === 1 ? 'setup-svg-card--active' : ''}`}
        filter={activeIndex === 1 ? undefined : 'url(#deck-card-shadow)'}
        onClick={() => onSelectCard?.(1)}
        role="button"
        tabIndex={activeIndex === 1 ? -1 : 0}
        aria-hidden={activeIndex === 1 ? 'true' : 'false'}
        aria-label="Select Spin Setup"
      >
        <path
          d="M 225 620 L 225 131 Q 225 115 240 109 L 430 32 Q 445 26 445 42 L 445 620 Z"
          fill="url(#bevel-spin)"
        />
        <path
          d="M 229 620 L 229 134 Q 229 120 242 114 L 441 34 Q 445 32 445 45 L 445 620 Z"
          fill="url(#face-spin)"
        />
        <path
          d="M 240 109 L 430 32"
          stroke="#E88E62"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <text
          x="272"
          y="136"
          transform="rotate(-22 272 136)"
          fill="#FF6E40"
          fontSize="15"
          fontFamily="var(--font-display), 'Montserrat', sans-serif"
          fontWeight="800"
          letterSpacing="0.14em"
        >
          SPIN
        </text>
      </g>

      {/* ── 5. Card 5: Defensive Setup ── */}
      <g
        id="deck-card-defensive"
        className={`setup-svg-card ${activeIndex === 5 ? 'setup-svg-card--active' : ''}`}
        filter={activeIndex === 5 ? undefined : 'url(#deck-card-shadow)'}
        onClick={() => onSelectCard?.(5)}
        role="button"
        tabIndex={activeIndex === 5 ? -1 : 0}
        aria-hidden={activeIndex === 5 ? 'true' : 'false'}
        aria-label="Select Defensive Setup"
      >
        <path
          d="M 295 620 L 295 316 Q 295 300 310 294 L 495 219 Q 510 213 510 229 L 510 620 Z"
          fill="url(#bevel-defensive)"
        />
        <path
          d="M 299 620 L 299 319 Q 299 305 312 299 L 506 221 Q 510 219 510 232 L 510 620 Z"
          fill="url(#face-defensive)"
        />
        <path
          d="M 310 294 L 495 219"
          stroke="rgba(255, 255, 255, 0.65)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <text
          x="328"
          y="322"
          transform="rotate(-22 328 322)"
          fill="#FFFFFF"
          fontSize="15"
          fontFamily="var(--font-display), 'Montserrat', sans-serif"
          fontWeight="800"
          letterSpacing="0.14em"
        >
          DEFENSIVE
        </text>
      </g>

      {/* ── 6. Card 4: Offensive Setup ── */}
      <g
        id="deck-card-offensive"
        className={`setup-svg-card ${activeIndex === 4 ? 'setup-svg-card--active' : ''}`}
        filter={activeIndex === 4 ? undefined : 'url(#deck-card-shadow)'}
        onClick={() => onSelectCard?.(4)}
        role="button"
        tabIndex={activeIndex === 4 ? -1 : 0}
        aria-hidden={activeIndex === 4 ? 'true' : 'false'}
        aria-label="Select Offensive Setup"
      >
        <path
          d="M 380 620 L 380 81 Q 380 65 395 59 L 705 -66 Q 720 -72 720 -56 L 720 620 Z"
          fill="url(#bevel-offensive)"
        />
        <path
          d="M 384 620 L 384 84 Q 384 70 397 64 L 716 -64 Q 720 -62 720 -48 L 720 620 Z"
          fill="url(#face-offensive)"
        />

        {/* Circular Racket Blade Disk (emerging on right edge as in editorial reference) */}
        <g opacity="0.85">
          <ellipse
            cx="635"
            cy="245"
            rx="115"
            ry="110"
            fill="url(#offensive-disc-grad)"
            stroke="#8C5237"
            strokeWidth="2"
          />
          <ellipse
            cx="635"
            cy="245"
            rx="88"
            ry="84"
            fill="none"
            stroke="#5C331F"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />
          <ellipse
            cx="635"
            cy="245"
            rx="60"
            ry="58"
            fill="none"
            stroke="#452313"
            strokeWidth="1"
          />
        </g>

        <path
          d="M 395 59 L 705 -66"
          stroke="#FFA67E"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <text
          x="465"
          y="82"
          transform="rotate(-22 465 82)"
          fill="#FF5722"
          fontSize="19"
          fontFamily="var(--font-display), 'Montserrat', sans-serif"
          fontWeight="900"
          letterSpacing="0.16em"
        >
          OFFENSIVE
        </text>
      </g>

      {/* ── 7. Card 0: Beginner Setup (Forefront slab with rubber disk) ── */}
      <g
        id="deck-card-beginner"
        className={`setup-svg-card ${activeIndex === 0 ? 'setup-svg-card--active' : ''}`}
        filter={activeIndex === 0 ? undefined : 'url(#deck-card-shadow)'}
        onClick={() => onSelectCard?.(0)}
        role="button"
        tabIndex={activeIndex === 0 ? -1 : 0}
        aria-hidden={activeIndex === 0 ? 'true' : 'false'}
        aria-label="Select Beginner Setup"
      >
        <path
          d="M 385 620 L 385 381 Q 385 365 400 359 L 705 236 Q 720 230 720 246 L 720 620 Z"
          fill="url(#bevel-beginner)"
        />
        <path
          d="M 389 620 L 389 384 Q 389 370 402 364 L 716 238 Q 720 236 720 250 L 720 620 Z"
          fill="url(#face-beginner)"
        />

        {/* Textured Rubber Disk Inset */}
        <g>
          <ellipse
            cx="595"
            cy="495"
            rx="145"
            ry="140"
            fill="url(#rubber-disc-grad)"
            stroke="#34485D"
            strokeWidth="2.5"
          />
          <ellipse
            cx="595"
            cy="495"
            rx="118"
            ry="114"
            fill="none"
            stroke="#1D232C"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <ellipse
            cx="595"
            cy="495"
            rx="90"
            ry="87"
            fill="none"
            stroke="#161B23"
            strokeWidth="1"
          />
          <ellipse
            cx="595"
            cy="495"
            rx="62"
            ry="60"
            fill="none"
            stroke="#10141B"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
        </g>

        <path
          d="M 400 359 L 705 236"
          stroke="#B4D4F8"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <text
          x="440"
          y="378"
          transform="rotate(-22 440 378)"
          fill="#FFFFFF"
          fontSize="19"
          fontFamily="var(--font-display), 'Montserrat', sans-serif"
          fontWeight="900"
          letterSpacing="0.16em"
        >
          BEGINNER
        </text>
      </g>
    </svg>
  );
}
