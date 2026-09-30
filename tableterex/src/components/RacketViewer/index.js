'use client';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import CalloutOverlay from './CalloutOverlay';
import { LEVEL_CONFIGS } from './racketConfigs';

// Dynamically import 3D canvas to avoid SSR issues
const RacketCanvas = dynamic(() => import('./RacketCanvas'), { ssr: false });

const CANVAS_W = 520;
const CANVAS_H = 380;

// Build callouts from the racket's profile (per-racket specific data)
function buildCalloutsFromProfile(levelCallouts, profile) {
  if (!profile) return levelCallouts;
  return levelCallouts.map((c) => {
    const key = c.id; // 'sponge' | 'rubber' | 'blade' | 'handle'
    const p = profile[key];
    if (!p) return c;
    return {
      ...c,
      label: p.label || c.label,
      sub:   p.sub   || c.sub,
      val:   p.val,   // 0–100 stat bar value
    };
  });
}

export default function RacketViewer({ selectedLevel, selectedRacket }) {
  const [displayLevel,  setDisplayLevel]  = useState(selectedLevel);
  const [displayRacket, setDisplayRacket] = useState(selectedRacket);
  const [phase,         setPhase]         = useState('enter');
  const prevLevel  = useRef(selectedLevel);
  const prevRacket = useRef(selectedRacket?.id);

  // ── Animate transition when level OR racket changes ──────────────────────
  useEffect(() => {
    const levelChanged  = selectedLevel !== prevLevel.current;
    const racketChanged = selectedRacket?.id !== prevRacket.current;

    if (!levelChanged && !racketChanged) return;

    prevLevel.current  = selectedLevel;
    prevRacket.current = selectedRacket?.id;

    setPhase('exit');
    const t = setTimeout(() => {
      setDisplayLevel(selectedLevel);
      setDisplayRacket(selectedRacket);
      setPhase('enter');
    }, 150);

    return () => clearTimeout(t);
  }, [selectedLevel, selectedRacket]);

  const cfg = LEVEL_CONFIGS[displayLevel] || LEVEL_CONFIGS['BEGINNER'];

  // Merge per-racket profile into the level's base callouts
  const callouts = buildCalloutsFromProfile(
    cfg.callouts,
    displayRacket?.profile
  );

  // Key to force CalloutOverlay remount on each racket change (re-triggers animation)
  const overlayKey = `${displayLevel}-${displayRacket?.id || 'default'}`;

  return (
    <div className="rv-wrapper">
      <div className="rv-canvas-wrap">
        <RacketCanvas config={cfg} />
        <CalloutOverlay
          callouts={callouts}
          activeKey={overlayKey}
          visible={phase === 'enter'}
          canvasW={CANVAS_W}
          canvasH={CANVAS_H}
        />
      </div>
    </div>
  );
}
