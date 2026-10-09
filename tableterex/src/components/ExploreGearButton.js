'use client';
import { useState } from 'react';
import Link from 'next/link';

/**
 * ExploreGearButton
 *
 * Microinteraction sequence:
 * - Hover:
 *   1. Background transitions from dark grey/black to light orange.
 *   2. Text rolls from "explore gear" to "Improve your game".
 *   3. Right arrow circle activates with dark background and micro-shift.
 * - Reset:
 *   Smoothly reverses back to resting state on mouse leave.
 */
export default function ExploreGearButton({
  href = '/products',
  id,
  className = '',
  defaultText = 'explore gear',
  hoverText = 'Improve game',
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`eg-btn-wrapper ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <Link
        href={href}
        className={`eg-btn ${isHovered ? 'is-hovered' : ''}`}
        id={id}
        aria-label={isHovered ? hoverText : defaultText}
      >
        {/* Animated Text Container (Sliding roll transition) */}
        <div className="eg-text-viewport" aria-hidden="true">
          <span className="eg-text eg-text-default">{defaultText}</span>
          <span className="eg-text eg-text-hover">{hoverText}</span>
        </div>

        {/* Right Arrow Indicator (Clean arrow circle, no green dot) */}
        <div className="eg-indicator-slot">
          <div className="eg-indicator-circle">
            <svg
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="eg-arrow-svg"
              aria-hidden="true"
            >
              <line x1="3" y1="8" x2="13" y2="8" />
              <polyline points="9 4 13 8 9 12" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
