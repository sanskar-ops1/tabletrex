'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'About Us',  href: '/about'   },
  { label: 'Store',     href: '/store'   },
  { label: 'Brands',    href: '/brands'  },
  { label: 'Contact',   href: '/contact' },
];

export default function Navbar({ onMenuOpen }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    if (onMenuOpen) onMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    if (onMenuOpen) onMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="nav-logo">
          TABLE<span>TEREX</span>
        </Link>

        <div className="nav-right">
          <button
            ref={btnRef}
            className={`nav-menu-btn${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            id="nav-menu-toggle"
          >
            <span />
          </button>
        </div>
      </nav>

      {/* ── Fullscreen Menu Overlay ── */}
      <div className={`menu-overlay${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        {/* Left racket panel */}
        <div className="menu-side">
          <span className="menu-side-label">TABLETEREX</span>
          <button className="menu-side-close" onClick={closeMenu}>[CLOSE]</button>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
            alt="Table tennis racket"
          />
        </div>

        {/* Center nav */}
        <div className="menu-center">
          <span className="menu-brand">TABLETEREX</span>
          <button className="menu-close-center" onClick={closeMenu}>[CLOSE]</button>
          <div className="menu-watermark" aria-hidden="true">PLAY</div>

          <ul className="menu-nav">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right racket panel */}
        <div className="menu-side">
          <span className="menu-side-label">TABLETEREX</span>
          <button className="menu-side-close" onClick={closeMenu}>[CLOSE]</button>
          <img
            src="https://images.unsplash.com/photo-1549144511-f099e773c147?w=400&q=80"
            alt="Table tennis action"
          />
        </div>
      </div>
    </>
  );
}
