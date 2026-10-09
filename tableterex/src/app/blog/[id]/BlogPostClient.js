'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TornDivider from '@/components/TornDivider';
import { BLOG_POSTS, getBlogPostById } from '@/data/blogPosts';
import './blog-post.css';

export default function BlogPostClient({ postId }) {
  const post = getBlogPostById(postId) || BLOG_POSTS[0];

  const [openFaq, setOpenFaq] = useState(0);
  const [copied, setCopied] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <>
      <Navbar solid />

      <main className="bp-page">
        <div className="bp-container">
          {/* ── 1. Breadcrumb Bar ── */}
          <nav className="bp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/blog" className="bp-back-link">
              ← Newsroom
            </Link>
            <span className="bp-sep">/</span>
            <span>{post.category}</span>
            <span className="bp-sep">/</span>
            <span style={{ color: '#ffffff', opacity: 0.85 }}>{post.title.slice(0, 36)}...</span>
          </nav>

          {/* ── 2. Blog Header ── */}
          <header className="bp-header">
            <div className="bp-meta-row">
              <span className="bp-category-badge">{post.category}</span>
              <span>•</span>
              <span>{post.publishDate}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="bp-title">{post.title}</h1>

            {/* Author and Share Strip */}
            <div className="bp-author-strip">
              <div className="bp-author-left">
                <div className="bp-author-avatar">TT</div>
                <div>
                  <div className="bp-author-name">{post.author}</div>
                  <div className="bp-author-role">{post.authorRole}</div>
                </div>
              </div>

              <div className="bp-share-group">
                <button type="button" className="bp-share-btn" onClick={handleCopy}>
                  {copied ? '✓ Link Copied' : '⎘ Copy Link'}
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`Read this table tennis guide: ${post.title} - `)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bp-share-btn"
                  style={{ color: '#25D366' }}
                >
                  Share on WhatsApp
                </a>
              </div>
            </div>
          </header>

          {/* ── 3. Banner of the Blog Image ── */}
          <div className="bp-banner">
            <img src={post.image} alt={post.title} className="bp-banner-img" />
          </div>

          {/* ── 4. Blog Content Below the Banner ── */}
          <article className="bp-content">
            {/* Excerpt Lead */}
            <p className="bp-excerpt-lead">{post.excerpt}</p>

            {/* Key Technical Takeaways Box */}
            {post.takeaways && post.takeaways.length > 0 && (
              <aside className="bp-takeaways" aria-label="Key Technical Takeaways">
                <h2 className="bp-takeaways-heading">
                  <span>⚡</span> Key Technical Takeaways
                </h2>
                <ul className="bp-takeaways-list">
                  {post.takeaways.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </aside>
            )}

            {/* Formatted Sections */}
            {post.content.map((sec, i) => (
              <section key={i} className="bp-section">
                <h2 className="bp-section-heading">{sec.heading}</h2>
                <p className="bp-section-text">{sec.text}</p>

                {sec.table && (
                  <div className="bp-table-wrap">
                    <table className="bp-table">
                      <thead>
                        <tr>
                          {sec.table.headers.map((h, hi) => (
                            <th key={hi}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((row, ri) => (
                          <tr key={ri}>
                            {row.map((cell, ci) => (
                              <td key={ci}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {/* Related Gear Callout */}
            <div className="bp-gear-cta">
              <div>
                <h3 className="bp-gear-title">Upgrade Your Matchday Setup</h3>
                <p className="bp-gear-desc">
                  Explore tournament-grade blades, high-tension rubbers, and custom assembled rackets in
                  our store.
                </p>
              </div>
              <Link href="/products" className="bp-gear-btn">
                Browse Equipment Catalog →
              </Link>
            </div>
          </article>

          {/* ── 5. FAQs in the End of Blog Content ── */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="bp-faqs-section" aria-label="Frequently Asked Questions">
              <div className="bp-faqs-header">
                <span className="bp-faqs-tag">[ QUESTIONS &amp; ANSWERS ]</span>
                <h2 className="bp-faqs-title">Frequently Asked Questions</h2>
                <p className="bp-faqs-desc">
                  Everything you need to know about gear compatibility, maintenance, and technical rules.
                </p>
              </div>

              <div className="bp-faqs-list">
                {post.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`bp-faq-item ${isOpen ? 'open' : ''}`}
                    >
                      <button
                        type="button"
                        className="bp-faq-question-btn"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <span className="bp-faq-icon" aria-hidden="true">
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="bp-faq-answer">
                          <p style={{ margin: 0 }}>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* ── Seamless Organic Hand-Torn Transition: Cream #e7dfcf → Dark Footer ── */}
      <div
        style={{
          background: 'var(--black, #111110)',
          marginTop: '-3px',
          marginBottom: '-1px',
          lineHeight: 0,
          position: 'relative',
          zIndex: 5,
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <TornDivider variant="top" fill="#e7dfcf" height={70} variantIndex={1} />
      </div>

      <Footer />
    </>
  );
}
