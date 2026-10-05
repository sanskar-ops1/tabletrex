'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BLOG_POSTS } from '@/data/blogPosts';
import './blog.css';

export default function BlogPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // First post is featured lead card
  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  // Remaining posts for the 3-column cards grid
  const gridPosts = BLOG_POSTS.filter((p) => p.id !== featuredPost.id);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <>
      <Navbar />

      <main className="nr-page">
        {/* Ambient radial glow behind header */}
        <div className="nr-ambient-glow" aria-hidden="true" />

        <div className="nr-container">
          {/* ── 1. Page Header ── */}
          <header className="nr-header">
            <h1 className="nr-title">Newsroom</h1>
            <p className="nr-subtitle">
              News and resources from the frontiers of table tennis technology, blade engineering, and
              tournament performance.
            </p>
          </header>

          {/* ── 2. Featured Lead Card ── */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.id}`}
              className="nr-featured-card"
              id={`featured-card-${featuredPost.id}`}
            >
              <div className="nr-featured-content">
                <div className="nr-featured-top">
                  <span className="nr-featured-tag">
                    {featuredPost.category === 'RUBBER LAB' ? 'Insight' : featuredPost.category}
                  </span>
                  <h2 className="nr-featured-title">{featuredPost.title}</h2>
                  <p className="nr-featured-excerpt">{featuredPost.excerpt}</p>
                </div>
                <span className="nr-featured-date">{featuredPost.publishDate}</span>
              </div>
              <div className="nr-featured-media">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="nr-featured-img"
                  loading="eager"
                />
              </div>
            </Link>
          )}

          {/* ── 3. Middle Section: Newsletter + Follow Us ── */}
          <section className="nr-mid-section" aria-label="Newsletter and Social Channels">
            <div className="nr-newsletter-box">
              <h3 className="nr-newsletter-title">
                Subscribe to our newsletter for daily industry insights
              </h3>
              {subscribed ? (
                <div style={{ color: 'var(--orange, #FF5A1F)', fontSize: '0.9rem', fontWeight: 600 }}>
                  ✓ You are subscribed to daily technical dispatches!
                </div>
              ) : (
                <form className="nr-newsletter-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    className="nr-newsletter-input"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="nr-newsletter-btn">
                    Start Free Trial
                  </button>
                </form>
              )}
            </div>

            <div className="nr-social-box">
              <h3 className="nr-social-title">Follow us</h3>
              <p className="nr-social-sub">
                Get the latest news and tournament equipment inspiration.
              </p>
              <div className="nr-social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nr-social-link"
                  aria-label="Follow us on Twitter"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nr-social-link"
                  aria-label="Follow us on Facebook"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50985H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50985H7.19795V13.4901H9.19795V21.5Z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nr-social-link"
                  aria-label="Follow us on YouTube"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nr-social-link"
                  aria-label="Follow us on Instagram"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* ── 4. 3-Column Cards Grid ── */}
          <section className="nr-cards-grid" aria-label="Recent Articles">
            {gridPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="nr-card"
                id={`blog-card-${post.id}`}
              >
                <div className="nr-card-media">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="nr-card-img"
                    loading="lazy"
                  />
                </div>
                <div className="nr-card-body">
                  <div className="nr-card-meta">
                    <span>Insight</span>
                    <span className="nr-card-meta-dot">•</span>
                    <span>{post.publishDate}</span>
                  </div>
                  <h3 className="nr-card-title">{post.title}</h3>
                  <p className="nr-card-excerpt">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </main>

      {/* ── 5. End Section: The Footer shown in the 2nd image ── */}
      <Footer />
    </>
  );
}
