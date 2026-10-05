'use client';
import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Store', href: '/products' },
  { label: 'Brands', href: '/#shop-by-brand' },
];
const SOCIAL_LINKS = [
  { label: 'INSTAGRAM', href: 'https://instagram.com' },
  { label: 'WHATSAPP', href: 'https://wa.me/919999999999' },
  { label: 'YOUTUBE', href: 'https://youtube.com' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(''); }
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-logo">TABLE<span>TEREX</span></span>
          <p className="footer-tagline">
            INDIA&apos;S PREMIUM TABLE TENNIS EQUIPMENT STORE.<br />
            PRECISION. SPEED. CONTROL.
          </p>
          <div className="footer-socials">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                id={`footer-social-${s.label.toLowerCase()}`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <span className="footer-col-title">[ NAVIGATE ]</span>
          <ul className="footer-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <span className="footer-col-title">[ CONTACT ]</span>
          <ul className="footer-links">
            <li><a href="mailto:hello@tableterex.in">hello@tableterex.in</a></li>
            <li><a href="https://wa.me/919999899999">+91 99998 99999</a></li>
            <li><a href="#">Pune, Maharashtra</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <span className="footer-col-title">[ NEWSLETTER ]</span>
          <p className="footer-newsletter-desc">
            SIGN UP FOR NEW ARRIVALS,<br />
            EXCLUSIVE DEALS &amp; PRO TIPS.
          </p>
          {sent ? (
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              letterSpacing: '0.1em', color: 'var(--orange)', textTransform: 'uppercase'
            }}>
              ✓ YOU&apos;RE SUBSCRIBED!
            </p>
          ) : (
            <form
              className="footer-newsletter-form"
              onSubmit={handleSubscribe}
              id="newsletter-form"
              suppressHydrationWarning
            >
              <input
                type="email"
                className="footer-newsletter-input"
                placeholder="YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="newsletter-email-input"
                autoComplete="off"
                data-lpignore="true"
                suppressHydrationWarning
              />
              <button
                type="submit"
                className="footer-newsletter-btn"
                id="newsletter-submit-btn"
                aria-label="Subscribe"
                suppressHydrationWarning
              >
                →
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <span className="footer-copy">© TABLETEREX 2024 — ALL RIGHTS RESERVED</span>
        <span className="footer-copy">BUILT FOR CHAMPIONS</span>
      </div>

      {/* Watermark */}
      <div className="footer-watermark" aria-hidden="true">TABLETEREX</div>
    </footer>
  );
}
