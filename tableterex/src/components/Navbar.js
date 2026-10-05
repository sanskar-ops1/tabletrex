'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const CENTER_MENU_LINKS = [
  { label: 'PRODUCTS', href: '/products' },
  { label: 'CATEGORIES', href: '/#categories' },
  { label: 'BLOG', href: '/blog' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'BRANDS', href: '/#shop-by-brand' },
  { label: 'WHY TABLETREX', href: '/#why-tableterex' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuHidden, setMenuHidden] = useState(false);
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

  return (
    <nav className="navbar">
      {/* Background bar that slides UP on scroll down and drops DOWN on scroll up */}
      <div
        className={`navbar-bg${scrolled ? ' scrolled' : ''}${menuHidden ? ' nav-bar-hidden' : ''}`}
        aria-hidden="true"
      />

      {/* Left: Logo & Brand - clickable link to home */}
      <Link
        href="/"
        className="nav-logo"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          userSelect: 'none',
          textDecoration: 'none',
        }}
      >
        <img
          src="/images/tableterex-logo.png"
          alt="TableTerex Logo"
          draggable={false}
          style={{ height: '38px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.25))', userSelect: 'none' }}
        />
        <span>TABLE<span>TEREX</span></span>
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
    </nav>
  );
}
