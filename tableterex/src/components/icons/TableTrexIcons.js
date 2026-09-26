'use client';
import React from 'react';

/**
 * TableTrex Minimal Line Icon System
 * Standardized 48x48 geometric line icons for performance table tennis equipment.
 * Consistent 2px stroke width, rounded/technical corners, pure SVG vectors.
 */

const baseProps = (size = 48, color = 'currentColor', strokeWidth = 2, className = '') => ({
  width: size,
  height: size,
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: color,
  strokeWidth,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: `tt-icon ${className}`.trim(),
  'aria-hidden': 'true',
});

/* ==========================================================================
   03 ── FRESH THIS WEEK (Weekly Refresh / Fresh Batch)
   ========================================================================== */

/**
 * WeeklyRefreshIcon: Circular refresh arrows with subtle motion arcs and center momentum node.
 * Communicates: New batch → refreshed selection → weekly rotation.
 */
export function WeeklyRefreshIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Top refresh arc */}
      <path d="M 38 20 A 15 15 0 0 0 12 18" />
      <path d="M 9 12 L 12 18 L 19 16" />
      {/* Bottom refresh arc */}
      <path d="M 10 28 A 15 15 0 0 0 36 30" />
      <path d="M 39 36 L 36 30 L 29 32" />
      {/* Subtle orbital momentum ticks */}
      <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
      <path d="M 24 10 V 7" strokeWidth={strokeWidth} opacity="0.6" />
      <path d="M 24 38 V 41" strokeWidth={strokeWidth} opacity="0.6" />
      <path d="M 10 24 H 7" strokeWidth={strokeWidth} opacity="0.6" />
      <path d="M 38 24 H 41" strokeWidth={strokeWidth} opacity="0.6" />
    </svg>
  );
}

/* ==========================================================================
   05 ── FIND YOUR RACKET (Playing Styles)
   ========================================================================== */

/**
 * BeginnerGuideIcon: Target / guided learning calibration symbol with quadrant aim guides.
 */
export function BeginnerGuideIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Concentric guided calibration rings */}
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="8" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
      {/* Crosshair guide markers */}
      <path d="M 24 4 V 11" />
      <path d="M 24 37 V 44" />
      <path d="M 4 24 H 11" />
      <path d="M 37 24 H 44" />
      {/* Corner calibration brackets */}
      <path d="M 10 16 V 10 H 16" />
      <path d="M 32 10 H 38 V 16" />
      <path d="M 38 32 V 38 H 32" />
      <path d="M 16 38 H 10 V 32" />
    </svg>
  );
}

/**
 * ProgressUpIcon: Upward progression vector with stepped trajectory and velocity arrow.
 */
export function ProgressUpIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Ascending performance trajectory */}
      <path d="M 8 36 L 19 25 L 27 31 L 40 14" />
      <path d="M 30 14 H 40 V 24" />
      {/* Stepped progress bars */}
      <path d="M 9 40 H 15" strokeWidth={strokeWidth + 0.5} />
      <path d="M 19 40 H 25" strokeWidth={strokeWidth + 0.5} />
      <path d="M 29 40 H 35" strokeWidth={strokeWidth + 0.5} />
      {/* Baseline anchor */}
      <path d="M 6 44 H 42" opacity="0.35" />
    </svg>
  );
}

/**
 * PerformanceStarIcon: Precision 4-point technical diamond star with central core.
 */
export function PerformanceStarIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Geometric performance diamond star */}
      <path d="M 24 4 L 28.5 19.5 L 44 24 L 28.5 28.5 L 24 44 L 19.5 28.5 L 4 24 L 19.5 19.5 Z" />
      {/* Precision reticle core */}
      <circle cx="24" cy="24" r="3.5" />
      <path d="M 24 16 V 19" />
      <path d="M 24 29 V 32" />
      <path d="M 16 24 H 19" />
      <path d="M 29 24 H 32" />
    </svg>
  );
}

/**
 * OffensiveStrikeIcon: Forward kinetic strike dart and rapid offensive trajectory.
 */
export function OffensiveStrikeIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Main forward strike arrow */}
      <path d="M 8 40 L 38 10" />
      <path d="M 24 10 H 38 V 24" />
      {/* Velocity strike trails */}
      <path d="M 6 30 L 18 18" opacity="0.75" />
      <path d="M 18 42 L 30 30" opacity="0.75" />
      <path d="M 12 24 L 20 16" opacity="0.4" />
    </svg>
  );
}

/**
 * DefensiveShieldIcon: Technical defensive shield with reinforced spine and deflection angles.
 */
export function DefensiveShieldIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Shield silhouette */}
      <path d="M 24 6 L 39 12 V 25 C 39 34 24 42 24 42 C 24 42 9 34 9 25 V 12 Z" />
      {/* Center structural spine */}
      <path d="M 24 11 V 37" />
      {/* Deflection angles */}
      <path d="M 16 20 L 24 25 L 32 20" />
      <path d="M 18 29 L 24 33 L 30 29" opacity="0.6" />
    </svg>
  );
}

/**
 * AllRoundBalanceIcon: Harmonic circular balance symbol with dual equilibrium nodes.
 */
export function AllRoundBalanceIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Outer balance ring */}
      <circle cx="24" cy="24" r="18" />
      {/* Harmonic S-curve dividing equator */}
      <path d="M 24 6 C 14 6 14 24 24 24 C 34 24 34 42 24 42" />
      {/* Dynamic balance nodes */}
      <circle cx="24" cy="15" r="3" fill="currentColor" stroke="none" />
      <circle cx="24" cy="33" r="3" />
    </svg>
  );
}

/* ==========================================================================
   06 ── FIND YOUR RUBBER (Performance Characteristics)
   ========================================================================== */

/**
 * SpinSpiralIcon: Dynamic rotational spiral representing topspin vortex and surface grip.
 */
export function SpinSpiralIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Rotational Archimedean spiral */}
      <path d="M 24 24 A 4 4 0 0 1 28 20 A 8 8 0 0 1 36 28 A 12 12 0 0 1 24 40 A 16 16 0 0 1 8 24 A 20 20 0 0 1 28 4" />
      {/* Rotational vector arrowhead */}
      <path d="M 23 4 H 29 V 10" />
      {/* Velocity tangential ticks */}
      <path d="M 40 24 A 16 16 0 0 1 37 32" strokeWidth={strokeWidth} opacity="0.5" />
    </svg>
  );
}

/**
 * SpeedLightningIcon: Technical angular lightning bolt flanked by aerodynamic velocity streaks.
 */
export function SpeedLightningIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* High-voltage speed bolt */}
      <path d="M 27 6 L 15 24 H 26 L 21 42 L 35 22 H 24 Z" />
      {/* Speed lines */}
      <path d="M 6 12 H 16" opacity="0.75" />
      <path d="M 4 22 H 11" opacity="0.5" />
      <path d="M 33 28 H 44" opacity="0.75" />
      <path d="M 36 18 H 42" opacity="0.5" />
    </svg>
  );
}

/**
 * ControlPrecisionIcon: Target reticle with fine crosshairs and central focus bullseye.
 */
export function ControlPrecisionIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Precision reticle circles */}
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="8" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
      {/* Precision crosshairs */}
      <path d="M 24 4 V 12" />
      <path d="M 24 36 V 44" />
      <path d="M 4 24 H 12" />
      <path d="M 36 24 H 44" />
    </svg>
  );
}

/**
 * OffensiveImpactIcon: Directional forward thrust arrow with expanding shockwave impact arc.
 */
export function OffensiveImpactIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Thrust shaft & impact head */}
      <path d="M 6 24 H 34" />
      <path d="M 24 14 L 34 24 L 24 34" />
      {/* Shockwave impact wavefronts */}
      <path d="M 38 12 C 43 18 43 30 38 36" />
      <path d="M 43 7 C 49 16 49 32 43 41" opacity="0.5" />
      {/* Speed wake */}
      <path d="M 12 18 H 18" opacity="0.5" />
      <path d="M 12 30 H 18" opacity="0.5" />
    </svg>
  );
}

/**
 * RubberDefensiveShieldIcon: Defensive absorption barrier shield with dampening grid lines.
 */
export function RubberDefensiveShieldIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      <path d="M 24 6 L 39 12 V 25 C 39 34 24 42 24 42 C 24 42 9 34 9 25 V 12 Z" />
      {/* Dampening cushion lattice */}
      <path d="M 16 17 H 32" opacity="0.7" />
      <path d="M 14 24 H 34" opacity="0.7" />
      <path d="M 17 31 H 31" opacity="0.7" />
      <path d="M 24 12 V 37" />
    </svg>
  );
}

/**
 * RubberEquilibriumIcon: Harmonic balanced circular equilibrium with counterweight nodes.
 */
export function RubberEquilibriumIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Dual concentric equilibrium rings */}
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="11" strokeDasharray="3 3" opacity="0.7" />
      {/* Gyroscopic axis */}
      <path d="M 6 24 H 42" />
      <path d="M 24 6 V 42" />
      <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ==========================================================================
   07 ── CUSTOMIZE YOUR SETUP (4-Step Connected Process)
   ========================================================================== */

/**
 * 01 — Choose Your Racket: Minimal table tennis racket/blade outline.
 */
export function RacketBladeIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Blade oval head */}
      <path d="M 12 18 C 12 9 17 4 24 4 C 31 4 36 9 36 18 C 36 24 33 28 29 30 L 30 42 C 30 43 29 44 28 44 H 20 C 19 44 18 43 18 42 L 19 30 C 15 28 12 24 12 18 Z" />
      {/* Blade neck curve */}
      <path d="M 19 30 C 22 32 26 32 29 30" />
      {/* Flared handle centerline & grip bevel */}
      <path d="M 24 31 V 44" opacity="0.75" />
      <path d="M 21 44 H 27" opacity="0.5" />
    </svg>
  );
}

/**
 * 02 — Choose Your Rubber: Minimal rubber surface / layered material symbol.
 */
export function RubberSurfaceIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Top rubber topsheet in isometric perspective */}
      <path d="M 24 6 L 41 15 L 24 24 L 7 15 Z" />
      {/* Sponge mid-layer */}
      <path d="M 7 21 L 24 30 L 41 21" />
      {/* Base adhesion layer */}
      <path d="M 7 27 L 24 36 L 41 27" />
      {/* Corner thickness connectors */}
      <path d="M 7 15 V 27" />
      <path d="M 24 24 V 36" />
      <path d="M 41 15 V 27" />
      {/* Pips / grip texture indication */}
      <path d="M 18 13 L 24 16 L 30 13" opacity="0.6" />
    </svg>
  );
}

/**
 * 03 — Customize Your Setup: Precision adjustment sliders / configuration symbol.
 */
export function SlidersConfigIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* 3 Slider vertical tracks */}
      <path d="M 13 8 V 40" />
      <path d="M 24 8 V 40" />
      <path d="M 35 8 V 40" />
      {/* Slider adjustment thumbs */}
      <rect x="9" y="14" width="8" height="6" rx="2" fill="var(--black, #111)" />
      <rect x="20" y="27" width="8" height="6" rx="2" fill="var(--black, #111)" />
      <rect x="31" y="19" width="8" height="6" rx="2" fill="var(--black, #111)" />
      {/* Precision calibration indicators */}
      <path d="M 6 8 H 42" opacity="0.25" />
      <path d="M 6 40 H 42" opacity="0.25" />
    </svg>
  );
}

/**
 * 04 — Your Setup: Completed custom racket setup with precision assembly badge.
 */
export function CompletedSetupIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Configured racket profile */}
      <path d="M 10 16 C 10 8 15 4 22 4 C 29 4 34 8 34 16 C 34 22 31 26 27 28 L 28 40 C 28 41 27 42 26 42 H 18 C 17 42 16 41 16 40 L 17 28 C 13 26 10 22 10 16 Z" />
      <path d="M 17 28 C 20 30 24 30 27 28" opacity="0.7" />
      {/* Completion checkmark badge at bottom-right */}
      <circle cx="34" cy="34" r="9" fill="var(--black, #111)" />
      <path d="M 30 34 L 33 37 L 39 30" strokeWidth={strokeWidth + 0.5} />
    </svg>
  );
}

/* ==========================================================================
   09 ── WHY TABLETREX (Main Value Proposition Cards)
   ========================================================================== */

/**
 * 01 — Wholesale at Retail: Price tag + retail box symbol.
 * Meaning: Wholesale-level pricing without traditional wholesale bulk requirements.
 */
export function WholesalePriceIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Retail equipment box contour */}
      <path d="M 8 18 L 24 10 L 40 18 L 24 26 Z" />
      <path d="M 8 18 V 34 L 24 42 V 26" />
      <path d="M 40 18 V 34 L 24 42" />
      {/* Price tag emblem floating on package */}
      <path d="M 28 8 L 38 8 L 44 14 L 33 25 L 23 19 Z" fill="var(--black, #111)" />
      <circle cx="32" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M 28 17 L 35 15" strokeWidth={strokeWidth} opacity="0.75" />
    </svg>
  );
}

/**
 * 02 — Fresh Every Week: Circular refresh arrows + subtle 7-day calendar indication.
 * Meaning: Fresh product batches arrive every week.
 */
export function FreshWeeklyCalendarIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Calendar body */}
      <rect x="11" y="13" width="26" height="25" rx="3" />
      <path d="M 11 21 H 37" />
      {/* Calendar binder pins */}
      <path d="M 18 9 V 15" />
      <path d="M 30 9 V 15" />
      {/* 7-day batch grid dots */}
      <circle cx="17" cy="27" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="24" cy="27" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="31" cy="27" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="17" cy="33" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="24" cy="33" r="1.5" fill="currentColor" stroke="none" />
      {/* Outer circular batch rotation arrow */}
      <path d="M 6 22 A 19 19 0 0 1 42 22" />
      <path d="M 39 16 L 42 22 L 45 16" />
    </svg>
  );
}

/**
 * 03 — New Product Mix: Stacked products with dynamic rotational movement.
 * Meaning: The available product mix regularly reshuffles.
 */
export function NewMixReshuffleIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Stacked rotating product slabs */}
      <rect x="8" y="10" width="24" height="15" rx="2" transform="rotate(-10 20 17)" opacity="0.6" />
      <rect x="16" y="16" width="24" height="15" rx="2" transform="rotate(8 28 23)" opacity="0.8" />
      <rect x="12" y="24" width="24" height="15" rx="2" />
      {/* Reshuffle dynamic motion arcs */}
      <path d="M 6 36 C 4 28 6 18 12 12" />
      <path d="M 10 8 L 12 12 L 6 12" />
      <path d="M 42 12 C 44 20 42 30 36 36" />
      <path d="M 38 40 L 36 36 L 42 36" />
    </svg>
  );
}

/**
 * 04 — Personal Customization: Precision calibration sliders + tuning controls.
 * Meaning: Customers can customize their racket + rubber combination.
 */
export function PersonalCustomIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Horizontal precision calibration tracks */}
      <path d="M 8 14 H 40" />
      <path d="M 8 24 H 40" />
      <path d="M 8 34 H 40" />
      {/* Customization control nodes */}
      <rect x="14" y="10" width="8" height="8" rx="2" fill="var(--black, #111)" />
      <rect x="28" y="20" width="8" height="8" rx="2" fill="var(--black, #111)" />
      <rect x="20" y="30" width="8" height="8" rx="2" fill="var(--black, #111)" />
      {/* Tuning tick marks */}
      <path d="M 14 6 V 9" opacity="0.5" />
      <path d="M 24 6 V 9" opacity="0.5" />
      <path d="M 34 6 V 9" opacity="0.5" />
      <path d="M 14 39 V 42" opacity="0.5" />
      <path d="M 24 39 V 42" opacity="0.5" />
      <path d="M 34 39 V 42" opacity="0.5" />
    </svg>
  );
}

/**
 * 05 — Performance Focused: Multi-metric performance graph + precision target.
 * Meaning: Products are focused on different playing styles and performance requirements.
 */
export function PerformanceFocusIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Axis crosshairs */}
      <path d="M 24 6 V 42" opacity="0.4" />
      <path d="M 6 24 H 42" opacity="0.4" />
      {/* Concentric scale rings */}
      <circle cx="24" cy="24" r="16" opacity="0.3" strokeDasharray="2 2" />
      {/* Spider / Radar performance metric polygon */}
      <polygon points="24,9 37,21 31,37 13,33 11,18" />
      {/* Metric vertex points */}
      <circle cx="24" cy="9" r="2" fill="currentColor" stroke="none" />
      <circle cx="37" cy="21" r="2" fill="currentColor" stroke="none" />
      <circle cx="31" cy="37" r="2" fill="currentColor" stroke="none" />
      <circle cx="13" cy="33" r="2" fill="currentColor" stroke="none" />
      <circle cx="11" cy="18" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ==========================================================================
   10 ── TECHNOLOGY & PERFORMANCE (Technical Product Specs)
   ========================================================================== */

/**
 * Blade Construction: Multi-ply laminated blade cross-section.
 */
export function BladeConstructionIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* 5-Ply laminated structure with outer wood, carbon layers and core */}
      <rect x="8" y="10" width="32" height="4" rx="1.5" />
      <rect x="8" y="16" width="32" height="3" rx="1" strokeDasharray="3 2" />
      <rect x="8" y="21" width="32" height="8" rx="1.5" />
      <rect x="8" y="31" width="32" height="3" rx="1" strokeDasharray="3 2" />
      <rect x="8" y="36" width="32" height="4" rx="1.5" />
      {/* Dimension bracket */}
      <path d="M 43 10 H 45 V 40 H 43" opacity="0.6" />
    </svg>
  );
}

/**
 * Weight: Technical balance beam scale / calibrated gram weight symbol.
 */
export function WeightBalanceIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Balance beam & pivot */}
      <path d="M 24 10 V 38" />
      <path d="M 12 40 H 36" />
      <path d="M 24 8 L 27 12 H 21 Z" />
      <path d="M 8 16 H 40" />
      {/* Left pan */}
      <path d="M 8 16 L 14 26 H 2 Z" />
      {/* Right pan */}
      <path d="M 40 16 L 46 26 H 34 Z" />
      {/* Precision indicator */}
      <path d="M 24 16 V 21" strokeWidth={strokeWidth} />
    </svg>
  );
}

/**
 * Speed (Racket & Rubber): Aerodynamic speed streak lines.
 */
export function TechSpeedIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      <path d="M 6 14 H 36" />
      <path d="M 14 22 H 42" />
      <path d="M 8 30 H 34" />
      <path d="M 18 38 H 38" opacity="0.6" />
      {/* Velocity arrowtips */}
      <path d="M 32 10 L 36 14 L 32 18" />
      <path d="M 38 18 L 42 22 L 38 26" />
      <path d="M 30 26 L 34 30 L 30 34" />
    </svg>
  );
}

/**
 * Control (Racket & Rubber): Precision targeting bullseye.
 */
export function TechControlIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="9" />
      <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
      <path d="M 24 4 V 11" />
      <path d="M 24 37 V 44" />
      <path d="M 4 24 H 11" />
      <path d="M 37 24 H 44" />
    </svg>
  );
}

/**
 * Blade Composition: Layered carbon lattice weave matrix.
 */
export function BladeCompositionIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Outer frame */}
      <rect x="8" y="8" width="32" height="32" rx="4" />
      {/* Carbon fiber diagonal weave */}
      <path d="M 8 20 L 20 8" />
      <path d="M 8 32 L 32 8" />
      <path d="M 16 40 L 40 16" />
      <path d="M 28 40 L 40 28" />
      {/* Cross weave */}
      <path d="M 28 8 L 40 20" />
      <path d="M 16 8 L 40 32" />
      <path d="M 8 16 L 32 40" />
      <path d="M 8 28 L 20 40" />
    </svg>
  );
}

/**
 * Sponge Thickness: Layered cross-section gauge showing topsheet and sponge thickness gauge.
 */
export function SpongeThicknessIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Topsheet */}
      <rect x="8" y="9" width="30" height="5" rx="1.5" />
      {/* Pips-in layer */}
      <path d="M 12 14 V 18" />
      <path d="M 18 14 V 18" />
      <path d="M 24 14 V 18" />
      <path d="M 30 14 V 18" />
      <path d="M 36 14 V 18" />
      {/* Sponge layer */}
      <rect x="8" y="18" width="30" height="18" rx="2" />
      {/* Caliper gauge measurement */}
      <path d="M 42 18 H 44 V 36 H 42" strokeWidth={strokeWidth} />
      <path d="M 40 27 H 45" />
      <path d="M 8 40 H 38" opacity="0.4" />
    </svg>
  );
}

/**
 * Hardness: Shore durometer indent test on high-density material.
 */
export function SpongeHardnessIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Durometer indenter tip pressing down */}
      <path d="M 24 6 L 29 15 H 19 Z" />
      <path d="M 24 15 V 22" />
      {/* Indented rubber surface */}
      <path d="M 6 27 C 16 27 20 22 24 22 C 28 22 32 27 42 27 V 40 H 6 Z" />
      {/* Density nodes */}
      <circle cx="15" cy="33" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="24" cy="33" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="33" cy="33" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Grip: Surface traction and ball contact point friction waves.
 */
export function SurfaceGripIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      {/* Table tennis ball contact zone */}
      <path d="M 14 16 A 12 12 0 0 1 34 16" />
      {/* Contact point grip spark */}
      <circle cx="24" cy="22" r="2" fill="currentColor" stroke="none" />
      {/* Micro-traction grip waves */}
      <path d="M 6 28 C 12 24 18 32 24 28 C 30 24 36 32 42 28" />
      <path d="M 6 34 C 12 30 18 38 24 34 C 30 30 36 38 42 34" />
      <path d="M 6 40 C 12 36 18 44 24 40 C 30 36 36 44 42 40" opacity="0.6" />
    </svg>
  );
}

/* ==========================================================================
   12 ── REVIEWS & SOCIAL PROOF (Trust Indicators)
   ========================================================================== */

/**
 * VerifiedBadgeIcon: Minimal athletic shield with clean checkmark for verified purchases.
 */
export function VerifiedBadgeIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      <path d="M 24 6 L 39 12 V 24 C 39 33 24 41 24 41 C 24 41 9 33 9 24 V 12 Z" />
      <path d="M 17 23 L 22 28 L 31 18" strokeWidth={strokeWidth + 0.5} />
    </svg>
  );
}

/**
 * PlayerProfileIcon: Minimal clean athlete profile silhouette.
 */
export function PlayerProfileIcon({ size = 48, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg {...baseProps(size, color, strokeWidth, className)} {...props}>
      <circle cx="24" cy="14" r="7" />
      <path d="M 10 38 C 10 30 16 26 24 26 C 32 26 38 30 38 38" />
      <path d="M 20 28 L 24 32 L 28 28" opacity="0.6" />
    </svg>
  );
}
