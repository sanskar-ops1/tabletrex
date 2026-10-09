'use client';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import BatCalloutOverlay from './BatCalloutOverlay';

// Dynamically import the real 3D WebGL Canvas to prevent SSR issues
const ExplodedBatCanvas = dynamic(() => import('./ExplodedBatCanvas'), {
  ssr: false,
  loading: () => (
    <div className="diag-3d-loading">
      <div className="diag-loading-pip" />
      <span className="diag-loading-text">INITIALIZING 3D ARCHITECTURAL MODEL...</span>
    </div>
  ),
});
// ── Stats calculation per setup ─────────────────────────────────────────────
function getSetupStats(setup) {
  const id = setup?.id;
  if (id === 's1') return { spin: 74, control: 94, speed: 66, dwell: 92 };
  if (id === 's2') return { spin: 78, control: 98, speed: 64, dwell: 96 };
  if (id === 's3') return { spin: 98, control: 82, speed: 88, dwell: 88 };
  if (id === 's4') return { spin: 86, control: 68, speed: 98, dwell: 72 };
  if (id === 's5') return { spin: 96, control: 84, speed: 94, dwell: 86 };
  if (id === 's6') return { spin: 92, control: 98, speed: 54, dwell: 98 };
  return { spin: 80, control: 88, speed: 78, dwell: 85 };
}

export default function ExplodedBat3D({ selectedSetup }) {
  const [activeSetup, setActiveSetup] = useState(selectedSetup);
  const [isCombined, setIsCombined] = useState(false);
  const [focusLayer, setFocusLayer] = useState('all'); // 'all' | 'rubber-fh' | 'blade' | 'rubber-bh'
  const [animKey, setAnimKey] = useState(0);
  const prevSetupId = useRef(selectedSetup?.id);

  // ── Combine & Explode Animation on Card Click ─────────────────────────────
  // When a card is clicked:
  // 1. Spring physics accelerates layers into the blade core (isCombined = true)
  // 2. Setup specs, typewriter description, and telemetry stats update
  // 3. Spring physics releases and layers explode outward into the separated layers!
  useEffect(() => {
    if (!selectedSetup || selectedSetup.id === prevSetupId.current) return;
    prevSetupId.current = selectedSetup.id;

    // Phase 1: Combine layers inward with spring acceleration
    const t1 = setTimeout(() => setIsCombined(true), 0);

    // Phase 2: Switch data and explode back out with physical recoil
    const t2 = setTimeout(() => {
      setActiveSetup(selectedSetup);
      setIsCombined(false);
      setAnimKey((k) => k + 1);
    }, 340);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [selectedSetup]);

  const stats = getSetupStats(activeSetup);

  return (
    <div className="diag-3d-standalone" id="exploded-bat-showcase">
      <div className="diag-center-stage">
        {/* Real 3D WebGL Canvas */}
        <div className="diag-canvas-container">
          <ExplodedBatCanvas
            isCombined={isCombined}
            focusLayer={focusLayer}
          />
        </div>

        {/* Interactive Vector Callouts Anchored Directly to 3D Model Layers */}
        <BatCalloutOverlay
          activeSetup={activeSetup}
          stats={stats}
          isCombined={isCombined}
          focusLayer={focusLayer}
          animKey={animKey}
          canvasW={620}
          canvasH={450}
        />
      </div>

      {/* Dynamic Setup Description on the right side of the section close to the edge */}
      <div className="diag-bottom-desc">
        <p className="diag-desc-text">{activeSetup?.desc}</p>
      </div>
    </div>
  );
}
