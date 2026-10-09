'use client';
import { useState, useRef, useEffect } from 'react';

/**
 * AnimatedCartButton
 *
 * Visual sequence:
 * - Resting state: Earlier white squircle CTA button with cart icon centered (NO text).
 * - Click interaction:
 *   1. The cart icon goes from center to the right edge and exits.
 *   2. It immediately comes back from the left side edge and travels into the center.
 *   3. Upon arriving in the center, it settles with a bounce and a success checkmark appears.
 *   4. After a brief pause, it smoothly resets back to its resting state.
 */
export default function AnimatedCartButton({
  onAddToCart,
  inCart = false,
  ariaLabel = 'Add to cart',
  id,
  className = '',
}) {
  // 'idle' | 'running' | 'success'
  const [animState, setAnimState] = useState('idle');
  const timerRef = useRef([]);

  const clearAllTimers = () => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
  };

  useEffect(() => {
    return () => clearAllTimers();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (animState !== 'idle') return;

    if (onAddToCart) {
      onAddToCart(e);
    }

    clearAllTimers();

    // ── Phase 1: Center -> Right Edge -> Left Edge -> Center ──
    setAnimState('running');

    // ── Phase 2: Cart arrives in center from left edge (~720ms) ──
    // Show checkmark inside the cart basket
    const t1 = setTimeout(() => {
      setAnimState('success');
    }, 720);

    // ── Phase 3: Reset back to resting state ──
    const t2 = setTimeout(() => {
      setAnimState('idle');
    }, 1500);

    timerRef.current = [t1, t2];
  };

  const isRunning = animState === 'running';
  const isSuccess = animState === 'success';

  return (
    <button
      type="button"
      className={`nl-card-cart-btn ${animState !== 'idle' ? 'is-animating' : ''} ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      id={id}
      disabled={animState !== 'idle'}
    >
      <div className={`nl-cart-lap-wrap ${isRunning ? 'is-running' : isSuccess ? 'is-landed' : ''}`}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="nl-cart-icon-svg"
        >
          {/* Cart Basket Body */}
          <path
            d="M3 4h2.5l2 10.5h9.5l2.2-7H6.8"
            stroke="#000000"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Cart Wheels */}
          <circle cx="9" cy="18.5" r="1.35" fill="#000000" />
          <circle cx="16" cy="18.5" r="1.35" fill="#000000" />

          {/* Earlier arrow pointing down into the basket in resting state */}
          <g className={`nl-cart-arrow ${animState !== 'idle' ? 'is-hidden' : ''}`}>
            <path
              d="M14 14.5l5-5"
              stroke="#000000"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 9.5h4v4"
              stroke="#000000"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Success Checkmark inside cart basket when it returns to center */}
          <path
            d="M9.8 10.2 L12.2 12.6 L16.4 8"
            fill="none"
            stroke="#000000"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`nl-cart-checkmark ${isSuccess ? 'is-visible' : ''}`}
          />
        </svg>
      </div>
    </button>
  );
}
