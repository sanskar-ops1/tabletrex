'use client';
import { useEffect, useRef, useSyncExternalStore } from 'react';

const subscribe = () => () => {};

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener('mousemove', onMove);

    let raf;
    const animate = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      dot.style.left  = mx + 'px';
      dot.style.top   = my + 'px';
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const addHover = () => dot.classList.add('hover');
    const rmHover  = () => dot.classList.remove('hover');
    const hoverEls = document.querySelectorAll('a, button, [data-cursor]');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', rmHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!mounted) return null;
  return (
    <>
      <div className="cursor"     ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
