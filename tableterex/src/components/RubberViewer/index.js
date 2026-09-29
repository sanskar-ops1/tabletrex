'use client';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import CalloutOverlay from './CalloutOverlay';
import { RUBBER_CONFIGS } from './rubberConfigs';

// Dynamically import 3D rubber canvas to avoid SSR issues
const RubberCanvas = dynamic(() => import('./RubberCanvas'), { ssr: false });

const CANVAS_W = 520;
const CANVAS_H = 380;

export default function RubberViewer({ selectedStyle }) {
  const [displayStyle, setDisplayStyle] = useState(selectedStyle);
  const [phase,        setPhase]        = useState('enter');
  const prevStyle = useRef(selectedStyle);

  useEffect(() => {
    if (selectedStyle === prevStyle.current) return;
    prevStyle.current = selectedStyle;

    setPhase('exit');
    const t = setTimeout(() => {
      setDisplayStyle(selectedStyle);
      setPhase('enter');
    }, 150);

    return () => clearTimeout(t);
  }, [selectedStyle]);

  const cfg = RUBBER_CONFIGS[displayStyle] || RUBBER_CONFIGS['SPIN'];

  return (
    <div className="rv-wrapper">
      <div className="rv-canvas-wrap">
        <RubberCanvas config={cfg} />
        <CalloutOverlay
          callouts={cfg.callouts}
          activeKey={displayStyle}
          visible={phase === 'enter'}
          canvasW={CANVAS_W}
          canvasH={CANVAS_H}
        />
      </div>
    </div>
  );
}
