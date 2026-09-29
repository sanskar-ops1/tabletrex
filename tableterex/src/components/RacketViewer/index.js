'use client';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import CalloutOverlay from './CalloutOverlay';
import { LEVEL_CONFIGS } from './racketConfigs';

// Dynamically import 3D canvas to avoid SSR issues
const RacketCanvas = dynamic(() => import('./RacketCanvas'), { ssr: false });

const CANVAS_W = 520;
const CANVAS_H = 380;

export default function RacketViewer({ selectedLevel }) {
  const [displayLevel, setDisplayLevel] = useState(selectedLevel);
  const [phase,        setPhase]        = useState('enter');
  const prevLevel = useRef(selectedLevel);

  useEffect(() => {
    if (selectedLevel === prevLevel.current) return;
    prevLevel.current = selectedLevel;

    setPhase('exit');
    const t = setTimeout(() => {
      setDisplayLevel(selectedLevel);
      setPhase('enter');
    }, 150);

    return () => clearTimeout(t);
  }, [selectedLevel]);

  const cfg = LEVEL_CONFIGS[displayLevel] || LEVEL_CONFIGS['BEGINNER'];

  return (
    <div className="rv-wrapper">
      <div className="rv-canvas-wrap">
        <RacketCanvas config={cfg} />
        <CalloutOverlay
          callouts={cfg.callouts}
          activeKey={displayLevel}
          visible={phase === 'enter'}
          canvasW={CANVAS_W}
          canvasH={CANVAS_H}
        />
      </div>
    </div>
  );
}
