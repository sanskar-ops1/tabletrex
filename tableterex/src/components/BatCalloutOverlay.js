'use client';
import { useEffect, useRef, useState } from 'react';

// ── BatCalloutOverlay ─────────────────────────────────────────────────────────
// Precision vector callouts anchored directly onto the 3D exploded racket parts,
// matching the architectural CAD aesthetic from the Find Your Setup 3D viewer.
// Displays the exact equipment specs table (Blade, FH Rubber, BH Rubber, Weight)
// with equipment names, MRP prices, animated drawing lines, pinging radar dots,
// and smooth dynamic stat telemetry bars.
// ─────────────────────────────────────────────────────────────────────────────

const ANIM = {
  introDelay: 220,
  dotDelay: 140,
  dotIn: 320,
  lineDelay: 160,
  lineDraw: 440,
  labelDelay: 60,
  barDelay: 100,
};

function smoothstep(t) {
  const c = Math.max(0, Math.min(1, t));
  return c * c * (3 - 2 * c);
}

// Typewriter hook for smooth typographic entry
function useTypewriter(text, active, speed = 24) {
  const [out, setOut] = useState('');
  const timer = useRef(null);

  useEffect(() => {
    clearInterval(timer.current);
    if (!active) {
      setOut('');
      return;
    }
    let i = 0;
    setOut('');
    timer.current = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(timer.current);
    }, speed);

    return () => clearInterval(timer.current);
  }, [text, active, speed]);

  return out;
}

// Animated bar fill hook with cubic smoothstep
function useBarFill(targetPct, active) {
  const [width, setWidth] = useState(0);
  const rafRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    setWidth(0);
    cancelAnimationFrame(rafRef.current);
    clearTimeout(timerRef.current);
    if (!active) return;

    timerRef.current = setTimeout(() => {
      const t0 = performance.now();
      const dur = 600;
      function step(now) {
        const p = Math.min((now - t0) / dur, 1);
        setWidth(smoothstep(p) * targetPct);
        if (p < 1) rafRef.current = requestAnimationFrame(step);
      }
      rafRef.current = requestAnimationFrame(step);
    }, ANIM.barDelay);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timerRef.current);
    };
  }, [targetPct, active]);

  return width;
}

function CalloutRow({ c, idx, visible, isDimmed }) {
  const [dotOn, setDotOn] = useState(false);
  const [lineProg, setLineProg] = useState(0);
  const [labelOn, setLabelOn] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    setDotOn(false);
    setLineProg(0);
    setLabelOn(false);
    cancelAnimationFrame(rafRef.current);
    if (!visible) return;

    let t1, t2, t3;
    const delay = ANIM.introDelay + idx * ANIM.dotDelay;

    t1 = setTimeout(() => {
      setDotOn(true);
      t2 = setTimeout(() => {
        const t0 = performance.now();
        function step(now) {
          const p = Math.min((now - t0) / ANIM.lineDraw, 1);
          setLineProg(p);
          if (p < 1) {
            rafRef.current = requestAnimationFrame(step);
          } else {
            t3 = setTimeout(() => setLabelOn(true), ANIM.labelDelay);
          }
        }
        rafRef.current = requestAnimationFrame(step);
      }, ANIM.lineDelay);
    }, delay);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      cancelAnimationFrame(rafRef.current);
    };
  }, [visible, idx]);

  const nameTxt = useTypewriter(c.name || '', labelOn, 24);
  const barPct = useBarFill(c.val || 0, labelOn);

  const { dotX, dotY, midX, midY, endX, side, tag, price, statLabel } = c;
  const isRight = side === 'right';
  const ta = isRight ? 'start' : 'end';
  const lx = isRight ? endX + 8 : endX - 8;

  // Path length for SVG line drawing animation
  const pathLen = Math.hypot(midX - dotX, midY - dotY) + Math.abs(endX - midX) + 4;
  const dashOff = pathLen * (1 - smoothstep(lineProg));

  const BAR_W = 76;
  const BAR_H = 3.5;
  const barX = isRight ? lx : lx - BAR_W;
  const barY = midY + 14;
  const fillW = (barPct / 100) * BAR_W;

  const opacityStyle = isDimmed ? { opacity: 0.28, transition: 'opacity 0.3s ease' } : { transition: 'opacity 0.3s ease' };

  return (
    <g style={opacityStyle}>
      {/* ── 1. 3D ANCHOR DOT & PING RING ── */}
      <circle
        cx={dotX}
        cy={dotY}
        r={3.2}
        fill="#FFFFFF"
        style={{
          transform: `scale(${dotOn ? 1 : 0})`,
          transformOrigin: `${dotX}px ${dotY}px`,
          transition: `transform ${ANIM.dotIn}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${ANIM.dotIn}ms ease`,
          opacity: dotOn ? 1 : 0,
        }}
      />
      <circle
        cx={dotX}
        cy={dotY}
        r={3.2}
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={0.85}
        style={{
          opacity: dotOn ? 0.45 : 0,
          transform: dotOn ? 'scale(2.4)' : 'scale(1)',
          transformOrigin: `${dotX}px ${dotY}px`,
          animation: dotOn ? 'rv-ping 2.6s ease-out infinite' : 'none',
        }}
      />

      {/* ── 2. SHARP VECTOR LEADER LINE ── */}
      <path
        d={`M ${dotX} ${dotY} L ${midX} ${midY} L ${endX} ${midY}`}
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={pathLen}
        strokeDashoffset={dashOff}
      />

      {/* Terminal end pin on leader line */}
      <circle
        cx={endX}
        cy={midY}
        r={2.2}
        fill="#FFFFFF"
        style={{
          opacity: lineProg > 0.95 ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* ── 3. SPEC TEXT CALLOUT (Tag, Equipment Name, Price) ── */}
      {labelOn && (
        <g
          className="rv-word-group"
          style={{
            animation: 'rv-word-blink 0.36s ease-out forwards',
            pointerEvents: 'none',
          }}
        >
          {/* Row 1: CATEGORY TAG + PRICE / SPEC BADGE */}
          <text
            x={lx}
            y={midY - 11}
            textAnchor={ta}
            fill="#FF5A27"
            style={{
              fontSize: '8.5px',
              fontFamily: 'var(--font-mono), monospace',
              letterSpacing: '0.14em',
              fontWeight: 800,
            }}
          >
            {tag}
            <tspan
              dx={isRight ? '8' : '-8'}
              fill="#FFFFFF"
              style={{
                fontSize: '8px',
                fontFamily: 'var(--font-mono), monospace',
                letterSpacing: '0.06em',
                fontWeight: 600,
                opacity: 0.9,
              }}
            >
              {price}
            </tspan>
          </text>

          {/* Row 2: EXACT EQUIPMENT NAME */}
          <text
            x={lx}
            y={midY + 4}
            textAnchor={ta}
            fill="#FFFFFF"
            style={{
              fontSize: '11px',
              fontFamily: "var(--font-sans), 'Inter', sans-serif",
              letterSpacing: '0.04em',
              fontWeight: 800,
            }}
          >
            {nameTxt}
          </text>

          {/* Row 3: ANIMATED TELEMETRY STAT BAR */}
          <rect
            x={barX}
            y={barY}
            width={BAR_W}
            height={BAR_H}
            rx={BAR_H / 2}
            fill="rgba(255,255,255,0.18)"
          />
          <rect
            x={barX}
            y={barY}
            width={Math.max(0, fillW)}
            height={BAR_H}
            rx={BAR_H / 2}
            fill="#FFFFFF"
            style={{ opacity: 0.95 }}
          />

          {/* Stat Label & Numeric Value */}
          <text
            x={isRight ? barX + BAR_W + 6 : barX - 6}
            y={barY + BAR_H - 0.2}
            textAnchor={isRight ? 'start' : 'end'}
            fill="rgba(255,255,255,0.75)"
            style={{
              fontSize: '7px',
              fontFamily: 'var(--font-mono), monospace',
              letterSpacing: '0.06em',
              fontWeight: 700,
            }}
          >
            {statLabel} {Math.round(barPct)}%
          </text>
        </g>
      )}
    </g>
  );
}

export default function BatCalloutOverlay({
  activeSetup,
  stats,
  isCombined,
  focusLayer,
  animKey,
  canvasW = 620,
  canvasH = 450,
}) {
  // Construct the callouts matching the active specs (BH Rubber layer removed per request)
  const callouts = [
    {
      id: 'rubber-fh',
      tag: 'FH RUBBER',
      name: (activeSetup?.fhRubber || 'RUBBER').toUpperCase(),
      price: activeSetup?.rubberPrice || '',
      statLabel: 'SPIN',
      val: stats?.spin || 80,
      side: 'left',
      dotX: 210,
      dotY: 216,
      midX: 140,
      midY: 216,
      endX: 80,
    },
    {
      id: 'blade',
      tag: 'BLADE',
      name: (activeSetup?.blade || 'BLADE CORE').toUpperCase(),
      price: activeSetup?.bladePrice || '',
      statLabel: 'CONTROL',
      val: stats?.control || 85,
      side: 'right',
      dotX: 300,
      dotY: 214,
      midX: 385,
      midY: 228,
      endX: 450,
    },
    {
      id: 'weight',
      tag: 'WEIGHT',
      name: (activeSetup?.weight || '~170G') + ' FLARED CORE',
      price: 'PRO BALANCE',
      statLabel: 'DWELL',
      val: stats?.dwell || 88,
      side: 'right',
      dotX: 321,
      dotY: 335,
      midX: 395,
      midY: 367,
      endX: 455,
    },
  ];

  return (
    <>
      <style>{`
        @keyframes rv-word-blink {
          0%   { opacity: 0; }
          22%  { opacity: 1; }
          48%  { opacity: 0; }
          72%  { opacity: 1; }
          100% { opacity: 1; }
        }
        @keyframes rv-ping {
          0%   { transform: scale(1);   opacity: 0.55; }
          65%  { transform: scale(2.6); opacity: 0;    }
          100% { transform: scale(1);   opacity: 0;    }
        }
      `}</style>
      <svg
        className="diag-overlay-lines"
        viewBox={`0 0 ${canvasW} ${canvasH}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        key={`overlay-${animKey}`}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          overflow: 'visible',
          zIndex: 6,
        }}
      >
        {callouts.map((c, i) => {
          const isFocused =
            focusLayer === 'all' ||
            (focusLayer === 'rubber-fh' && c.id === 'rubber-fh') ||
            (focusLayer === 'blade' && (c.id === 'blade' || c.id === 'weight')) ||
            (focusLayer === 'rubber-bh' && c.id === 'rubber-bh');

          return (
            <CalloutRow
              key={`${activeSetup?.id || 's'}-${c.id}-${i}`}
              c={c}
              idx={i}
              visible={!isCombined}
              isDimmed={!isFocused}
            />
          );
        })}
      </svg>
    </>
  );
}
