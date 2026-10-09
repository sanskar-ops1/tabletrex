'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const CENTER_MENU_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'PRODUCTS', href: '/products' },
  { label: 'BLOG', href: '/blog' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'BRANDS', href: '/#shop-by-brand' },
  { label: 'WHY TABLETREX', href: '/#why-tableterex' },
];

export default function Navbar({ rightActions = null, solid = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuHidden, setMenuHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      // Scroll logic for center menu & background:
      // When near top (currentY <= 40), always show center menu & background
      if (currentY <= 40) {
        setMenuHidden(false);
      } else {
        const diff = currentY - lastScrollY.current;
        // Scrolling down -> hide center menu and background (slides up)
        if (diff > 6) {
          setMenuHidden(true);
        }
        // Scrolling up -> show center menu and background (drops down)
        else if (diff < -6) {
          setMenuHidden(false);
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        {/* Background bar that slides UP on scroll down and drops DOWN on scroll up */}
        <div
          className={`navbar-bg${scrolled || solid ? ' scrolled' : ''}${menuHidden ? ' nav-bar-hidden' : ''}`}
          aria-hidden="true"
        />

        {/* Left: Mascot Logo & All-Orange TABLETEREX Brand */}
        <Link
          href="/"
          className="nav-logo"
        >
          <img
            src="/images/tableterex-logo.png"
            alt="TableTerex Logo"
            draggable={false}
            className="nav-logo-img"
          />
          <span className="nav-logo-text">TABLETEREX</span>
        </Link>

        {/* Center Main Menu with Codrops Effect 5 - slides up on scroll down, drops down on scroll up */}
        <nav
          className={`nav-center-menu cl-effect-5 ${menuHidden ? 'nav-menu-hidden' : ''}`}
          id="main-nav-center"
          aria-label="Main Navigation"
        >
          {CENTER_MENU_LINKS.map((link) => (
            <Link key={link.label} href={link.href}>
              <span data-hover={link.label}>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right side actions (e.g. cart badge/drawer trigger) + mobile burger */}
        <div className={`nav-right-actions ${menuHidden ? 'nav-actions-hidden' : ''}`}>
          {rightActions}

          {/* Mobile menu button (< 860px) */}
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`nav-mobile-drawer ${mobileOpen ? 'open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="nav-mobile-drawer-inner">
          <div className="nav-mobile-header">
            <Link href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
              <img
                src="/images/tableterex-logo.png"
                alt="TableTerex Logo"
                className="nav-logo-img"
              />
              <span className="nav-logo-text">TABLETEREX</span>
            </Link>
            <button
              type="button"
              className="nav-mobile-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close Menu"
            >
              ✕
            </button>
          </div>

          <div className="nav-mobile-links">
            {CENTER_MENU_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                <span>{link.label}</span>
                <span className="nav-mobile-arrow">→</span>
              </Link>
            ))}
          </div>

          <div className="nav-mobile-footer">
            <span className="nav-mobile-tagline">INDIA&apos;S PREMIER TABLE TENNIS CATALOG</span>
          </div>
        </div>
      </div>
    </>
  );
}
