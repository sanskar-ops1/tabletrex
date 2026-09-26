const fs = require('fs');

function seededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generatePoints(width, baseY, amp, seed) {
  const rand = seededRandom(seed);
  const pts = [];
  const step = 8;
  for (let x = 0; x <= width; x += step) {
    const macro1 = Math.sin(x * 0.003 + seed * 1.5) * (amp * 0.45);
    const macro2 = Math.cos(x * 0.008 + seed * 2.3) * (amp * 0.28);
    const med1 = Math.sin(x * 0.038 + seed * 3.7) * (amp * 0.16);
    const med2 = Math.cos(x * 0.095 + seed * 4.1) * (amp * 0.08);
    const micro = (rand() - 0.5) * 3.6;
    const y = Math.round((baseY + macro1 + macro2 + med1 + med2 + micro) * 10) / 10;
    pts.push({ x, y });
  }
  return pts;
}

function makeTopPath(pts, width) {
  let d = 'M0,0 L' + width + ',0 L' + width + ',' + pts[pts.length - 1].y + ' ';
  for (let i = pts.length - 1; i >= 0; i--) {
    d += 'L' + pts[i].x + ',' + pts[i].y + ' ';
  }
  d += 'L0,0 Z';
  return d;
}

function makeBottomPath(pts, width, height) {
  let d = 'M0,' + pts[0].y + ' ';
  for (let i = 0; i < pts.length; i++) {
    d += 'L' + pts[i].x + ',' + pts[i].y + ' ';
  }
  d += 'L' + width + ',' + height + ' L0,' + height + ' Z';
  return d;
}

function makeFiberPath(pts) {
  let d = 'M' + pts[0].x + ',' + pts[0].y + ' ';
  for (let i = 1; i < pts.length; i++) {
    d += 'L' + pts[i].x + ',' + pts[i].y + ' ';
  }
  return d;
}

const sets = [101, 202, 303].map(seed => {
  const pts = generatePoints(1920, 52, 28, seed);
  return {
    top: makeTopPath(pts, 1920),
    bottom: makeBottomPath(pts, 1920, 100),
    fiber: makeFiberPath(pts)
  };
});

const content = `'use client';

// Authentic high-fidelity hand-torn paper SVG paths
// Multi-octave harmonic undulation + organic micro-fiber variance

const TORN_SETS = ${JSON.stringify(sets, null, 2)};

export default function TornDivider({
  variant = 'top',
  fill = '#141312',
  fiberColor,
  variantIndex = 0,
  height = 80,
  shadow = true,
  style = {},
  className = '',
}) {
  const setIndex = Math.abs(variantIndex) % TORN_SETS.length;
  const currentSet = TORN_SETS[setIndex];
  const mainPath = variant === 'top' ? currentSet.top : currentSet.bottom;
  const fiberPath = currentSet.fiber;

  const isDarkFill = fill === '#141312' || fill === '#111110' || fill === '#1A1817' || fill === 'var(--black)' || fill.includes('141') || fill.includes('111') || fill.includes('1A1');
  const defaultFiber = isDarkFill
    ? 'rgba(238, 226, 210, 0.45)'
    : 'rgba(255, 255, 255, 0.85)';
  const activeFiber = fiberColor || defaultFiber;

  return (
    <div
      className={\`torn-divider torn-divider--\${variant} \${className}\`}
      style={{
        width: '100%',
        lineHeight: 0,
        position: 'relative',
        zIndex: 5,
        filter: shadow ? 'drop-shadow(0 6px 14px rgba(0, 0, 0, 0.38))' : 'none',
        pointerEvents: 'none',
        overflow: 'hidden',
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1920 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: \`\${height}px\`, display: 'block' }}
      >
        <path d={mainPath} fill={fill} />
        <path
          d={fiberPath}
          fill="none"
          stroke={activeFiber}
          strokeWidth="1.8"
          strokeDasharray="8,3,14,2,6,4"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}
`;

fs.writeFileSync('src/components/TornDivider.js', content, 'utf8');
console.log('TornDivider.js generated successfully!');
