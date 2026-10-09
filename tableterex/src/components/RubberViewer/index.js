'use client';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import CalloutOverlay from './CalloutOverlay';
import { RUBBER_CONFIGS } from './rubberConfigs';
import CanvasErrorBoundary from '../CanvasErrorBoundary';
import { dynamicWithRetry } from '@/utils/dynamicRetry';

// Dynamically import 3D rubber canvas to avoid SSR issues
const RubberCanvas = dynamic(() => dynamicWithRetry(() => import('./RubberCanvas')), { ssr: false });

const CANVAS_W = 520;
const CANVAS_H = 380;

// Merge per-rubber profile data into the base level callouts
function buildCalloutsFromProfile(levelCallouts, profile) {
  if (!profile) return levelCallouts;
  return levelCallouts.map((c) => {
    const p = profile[c.id]; // 'sponge' | 'topsheet' | 'pips' | 'ittf'
    if (!p) return c;
    return {
      ...c,
      label: p.label || c.label,
      sub:   p.sub   || c.sub,
      val:   p.val,   // 0–100 stat bar value
    };
  });
}

export default function RubberViewer({ selectedStyle, selectedRubber }) {
  const [displayStyle,  setDisplayStyle]  = useState(selectedStyle);
  const [displayRubber, setDisplayRubber] = useState(selectedRubber);
  const [phase,         setPhase]         = useState('enter');
  const prevStyle  = useRef(selectedStyle);
  const prevRubber = useRef(selectedRubber?.id);

  useEffect(() => {
    const styleChanged  = selectedStyle   !== prevStyle.current;
    const rubberChanged = selectedRubber?.id !== prevRubber.current;

    if (!styleChanged && !rubberChanged) return;

    prevStyle.current  = selectedStyle;
    prevRubber.current = selectedRubber?.id;

    setPhase('exit');
    const t = setTimeout(() => {
      setDisplayStyle(selectedStyle);
      setDisplayRubber(selectedRubber);
      setPhase('enter');
    }, 150);

    return () => clearTimeout(t);
  }, [selectedStyle, selectedRubber]);

  const cfg = RUBBER_CONFIGS[displayStyle] || RUBBER_CONFIGS['SPIN'];

  // Merge per-rubber profile into the style's base callouts
  const callouts = buildCalloutsFromProfile(
    cfg.callouts,
    displayRubber?.profile
  );

  // Key forces CalloutOverlay remount (re-animates) on every rubber change
  const overlayKey = `${displayStyle}-${displayRubber?.id || 'default'}`;

  return (
    <div className="rv-wrapper">
      <div className="rv-canvas-wrap">
        <CanvasErrorBoundary fallback={<div className="rv-placeholder" />}>
          <RubberCanvas config={cfg} />
        </CanvasErrorBoundary>
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
