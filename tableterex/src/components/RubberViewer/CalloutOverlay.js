'use client';
import { useEffect, useRef, useState } from 'react';

// ── Rubber Callout Overlay ────────────────────────────────────────────────────
// Minimalist, crisp vector callouts anchored to table tennis rubber parts.
// Pure white aesthetic: all dots, lines, and typography in #FFFFFF.
// Each callout now includes an animated stat bar that fills to c.val (0–100).
// Sequence per callout:
//   1. Dot spawns on rubber part (380ms)
//   2. Line smoothly draws outward (550ms)
//   3. Words + bar blink once as they appear (380ms)
//   4. Bar animates from 0 → val width (680ms ease-out)
// ─────────────────────────────────────────────────────────────────────────────

const ANIM = {
  introDelay: 580,
  dotDelay:   260,
  dotIn:      380,
  lineDelay:  240,
  lineDraw:   550,
  labelDelay: 80,
  barDelay:   120,
};

function smoothstep(t) {
  const c = Math.max(0, Math.min(1, t));
  return c * c * (3 - 2 * c);
}

function useTypewriter(text, active, speed = 30) {
  const [out, setOut] = useState('');
  const timer = useRef(null);
  useEffect(() => {
    clearInterval(timer.current);
    if (!active) { setOut(''); return; }
    let i = 0; setOut('');
    timer.current = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(timer.current);
    }, speed);
    return () => clearInterval(timer.current);
  }, [text, active, speed]);
  return out;
}

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
      const dur = 680;
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

function CalloutItem({ c, canvasW, canvasH, idx, visible }) {
  const [dotOn,    setDotOn]    = useState(false);
  const [lineProg, setLineProg] = useState(0);
  const [labelOn,  setLabelOn]  = useState(false);
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

  const mainTxt = useTypewriter(c.label, labelOn, 28);
  const subTxt  = useTypewriter(c.sub,   labelOn, 22);

  const targetPct = typeof c.val === 'number' ? c.val : 0;
  const barPct = useBarFill(targetPct, labelOn);

  const dotX = c.xNorm * canvasW;
  const dotY = c.yNorm * canvasH;
  const isRight = c.side === 'right';

  const diagLen  = isRight ? 40 : 26;
  const horizLen = isRight ? 28 : 16;
  const dX       = isRight ? diagLen * 0.70 : -diagLen * 0.70;
  const dY       = -diagLen * 0.52;

  const midX = dotX + dX;
  const midY = dotY + dY;
  let endX = isRight ? midX + horizLen : midX - horizLen;

  const BAR_W = 72;
  const BAR_H = 4;

  const estWidth = Math.max((c.label || '').length * 7.5, (c.sub || '').length * 5.8, BAR_W);

  let lx = isRight ? endX + 6 : endX - 6;
  const ta = isRight ? 'start' : 'end';

  if (!isRight) {
    const minSafeMargin = 12;
    if (lx - estWidth < minSafeMargin) {
      lx = estWidth + minSafeMargin;
      endX = Math.max(endX, lx + 4);
    }
  } else {
    const maxSafeRight = canvasW - 12;
    if (lx + estWidth > maxSafeRight) {
      lx = maxSafeRight - estWidth;
      endX = Math.min(endX, lx - 4);
    }
  }

  const pathLen = Math.hypot(midX - dotX, midY - dotY) + Math.abs(endX - midX) + 4;
  const dashOff = pathLen * (1 - smoothstep(lineProg));
  const ds = dotOn ? 1 : 0;

  const barX = isRight ? lx : lx - BAR_W;
  const barY = midY + 11;
  const fillW = (barPct / 100) * BAR_W;

  return (
    <g>
      {/* ── 1. SOLID WHITE DOT ── */}
      <circle
        cx={dotX} cy={dotY} r={2.4} fill="#FFFFFF"
        style={{
          transform: `scale(${ds})`,
          transformOrigin: `${dotX}px ${dotY}px`,
          transition: `transform ${ANIM.dotIn}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${ANIM.dotIn}ms ease`,
          opacity: dotOn ? 1 : 0,
        }}
      />

      {/* ── Ping ring ── */}
      <circle
        cx={dotX} cy={dotY} r={2.4} fill="none" stroke="#FFFFFF" strokeWidth={0.75}
        style={{
          opacity: dotOn ? 0.35 : 0,
          transform: dotOn ? 'scale(2.2)' : 'scale(1)',
          transformOrigin: `${dotX}px ${dotY}px`,
          animation: dotOn ? 'rv-ping 2.6s ease-out infinite' : 'none',
        }}
      />

      {/* ── 2. WHITE LINE ── */}
      <path
        d={`M${dotX},${dotY} L${midX},${midY} L${endX},${midY}`}
        fill="none" stroke="#FFFFFF" strokeWidth={1.1}
        strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={pathLen} strokeDashoffset={dashOff}
      />

      {/* ── 3. LABEL ── */}
      {labelOn && (
        <g className="rv-word-group" style={{ animation: 'rv-word-blink 0.38s ease-out forwards', pointerEvents: 'none' }}>
          <text
            x={lx} y={midY - 8} textAnchor={ta} fill="#FFFFFF"
            style={{ fontSize: '10.5px', fontFamily: "'Bebas Neue', 'Anton', sans-serif", letterSpacing: '0.12em', fontWeight: 400 }}
          >
            {mainTxt}
          </text>
          <text
            x={lx} y={midY + 5} textAnchor={ta} fill="#FFFFFF"
            style={{ fontSize: '8px', fontFamily: "'Inter', sans-serif", letterSpacing: '0.08em', opacity: 0.85 }}
          >
            {subTxt}
          </text>
        </g>
      )}

      {/* ── 4. STAT BAR ── */}
      {labelOn && (
        <g style={{ pointerEvents: 'none' }}>
          <rect x={barX} y={barY} width={BAR_W} height={BAR_H} rx={BAR_H / 2} fill="rgba(255,255,255,0.18)" />
          <rect x={barX} y={barY} width={Math.max(0, fillW)} height={BAR_H} rx={BAR_H / 2} fill="#FFFFFF" style={{ opacity: 0.92 }} />
          <text
            x={barX + BAR_W + 5} y={barY + BAR_H - 0.5} textAnchor="start" fill="#FFFFFF"
            style={{ fontSize: '7px', fontFamily: "'Inter', 'Helvetica', sans-serif", letterSpacing: '0.04em', opacity: 0.70 }}
          >
            {Math.round(barPct)}
          </text>
        </g>
      )}
    </g>
  );
}

export default function CalloutOverlay({ callouts, activeKey = 'default', visible = true, canvasW, canvasH }) {
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
          0%   { transform: scale(1);   opacity: 0.40; }
          65%  { transform: scale(2.8); opacity: 0;    }
          100% { transform: scale(1);   opacity: 0;    }
        }
      `}</style>
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible', zIndex: 6 }}
        viewBox={`0 0 ${canvasW} ${canvasH}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {callouts.map((c, i) => (
          <CalloutItem
            key={`${activeKey}-${c.id}-${i}`}
            c={c} canvasW={canvasW} canvasH={canvasH} idx={i} visible={visible}
          />
        ))}
      </svg>
    </>
  );
}
