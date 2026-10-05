'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './about.css';

const PILLARS = [
  {
    num: '01',
    title: '100% GENUINE GUARANTEE',
    desc: 'Every blade, rubber sheet, and accessory in our catalog is sourced directly through official manufacturer channels. Certified ITTF tournament compliance with anti-counterfeit holographic verification.',
  },
  {
    num: '02',
    title: 'WORKSHOP ASSEMBLY',
    desc: 'Each custom setup is hand-assembled in our workshop using tournament-grade VOC-free water glue, calibrated blade weight matching, and razor-sharp edge trimming to maximize sweet-spot stability.',
  },
  {
    num: '03',
    title: 'WHOLESALE AT RETAIL',
    desc: 'We eliminated traditional multi-tier importer margins. Individual players, academies, and clubs get authentic pro equipment at transparent pricing designed to support athletic growth.',
  },
  {
    num: '04',
    title: 'COACH & PLAYER ADVICE',
    desc: 'Unsure between 2.0mm vs. Max sponge thickness, or Koto vs. Limba outer plies? Our team consists of competitive players and gear technicians ready to assist your game development.',
  },
];

const WORKSHOP_STEPS = [
  {
    num: 'STEP 01',
    title: 'Frame Inspection',
    desc: 'Digital gram scale calibration, grain inspection, and face seal check to prevent splintering.',
  },
  {
    num: 'STEP 02',
    title: 'Latex VOC-Free Bonding',
    desc: 'Two micro-layers of water-based adhesive dried uniformly under controlled humidity.',
  },
  {
    num: 'STEP 03',
    title: 'Uniform Pressure Rolling',
    desc: 'Weighted precision roller removes micro air pockets without stretching rubber tension pores.',
  },
  {
    num: 'STEP 04',
    title: 'Contour Edge Trimming',
    desc: 'Surgical blade cut flush to 0.2mm edge boundary, finished with heavy-duty protective side tape.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <div className="about-container">
          {/* ── 1. Hero Section ── */}
          <header className="about-hero">
            <span className="about-eyebrow">
              [ WHO WE ARE // EST. 2024 ]
            </span>
            <h1 className="about-hero-title">
              PRECISION IN CRAFT. <br />
              POWER IN <span>PERFORMANCE.</span>
            </h1>
            <p className="about-hero-sub">
              TableTerex was founded on an uncompromising principle: every player—from aspiring junior
              talents to seasoned tournament veterans—deserves genuine, elite table tennis equipment without
              inflated distributor markups.
            </p>

            <div className="about-hero-badges">
              <div className="about-hero-stat">
                <span className="about-hero-stat-num">500+</span>
                <span className="about-hero-stat-label">In-Stock Pro Products</span>
              </div>
              <div className="about-hero-stat">
                <span className="about-hero-stat-num">15+</span>
                <span className="about-hero-stat-label">Global Partner Brands</span>
              </div>
              <div className="about-hero-stat">
                <span className="about-hero-stat-num">12,000+</span>
                <span className="about-hero-stat-label">Custom Setups Assembled</span>
              </div>
              <div className="about-hero-stat">
                <span className="about-hero-stat-num">48 HRS</span>
                <span className="about-hero-stat-label">Fast Nationwide Dispatch</span>
              </div>
            </div>
          </header>

          {/* ── 2. The Story / Origin Section ── */}
          <section className="about-story-section">
            <div className="about-story-text">
              <span className="about-section-tag">[ THE TABLETEREX HERITAGE ]</span>
              <h2 className="about-story-heading">
                BORN FROM THE LOVE OF THE GAME
              </h2>
              <p className="about-story-para">
                For years, Indian table tennis players faced a frustrating dilemma: either settle for cheap,
                dead-sponge recreational bats from local sports stores, or pay exorbitant prices through
                convoluted import channels with weeks of delay and constant fears of counterfeit rubbers.
              </p>
              <p className="about-story-para">
                We launched TableTerex to eliminate those roadblocks forever. By establishing direct distributor
                alliances with top tier manufacturers like Butterfly, DHS, Nittaku, Stiga, Xiom, and Tibhar,
                we stock fresh weekly batches in India and ship them same-day to your doorstep.
              </p>
              <blockquote className="about-story-quote">
                &ldquo;A player’s racket is an extension of their nervous system. When the equipment is genuine and balanced to the millimeter, confidence transforms into champions.&rdquo;
              </blockquote>
            </div>

            <div className="about-story-media">
              <div className="about-story-frame">
                <img
                  src="/images/hero-athlete.jpg"
                  alt="Competitive Table Tennis Athlete"
                  className="about-story-img"
                />
              </div>
              <div className="about-story-badge">
                <span className="about-story-badge-val">100%</span>
                <span className="about-story-badge-txt">ITTF AUTHENTIC GEAR</span>
              </div>
            </div>
          </section>

          {/* ── 3. Four Core Pillars ── */}
          <section className="about-pillars-section">
            <div className="about-pillars-header">
              <span className="about-section-tag">[ OUR FOUNDATION ]</span>
              <h2 className="about-pillars-title">FOUR PILLARS OF TABLETEREX</h2>
              <p style={{ color: 'rgba(232, 224, 208, 0.65)', fontSize: '0.95rem' }}>
                Every racket we build and every rubber sheet we dispatch adheres to strict performance standards.
              </p>
            </div>

            <div className="about-pillars-grid">
              {PILLARS.map((p) => (
                <div key={p.num} className="about-pillar-card">
                  <span className="about-pillar-num">{p.num} // PILLAR</span>
                  <h3 className="about-pillar-title">{p.title}</h3>
                  <p className="about-pillar-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4. Workshop Assembly Process ── */}
          <section className="about-workshop-section">
            <span className="about-section-tag">[ WORKSHOP PROTOCOL ]</span>
            <h2 className="about-workshop-title">HOW WE ASSEMBLE YOUR SETUP</h2>
            <p className="about-workshop-sub">
              Our workshop is staffed by competitive club players who understand the difference a clean glue
              bond and zero-stretch rubber application makes on your topspin arc.
            </p>

            <div className="about-workshop-steps">
              {WORKSHOP_STEPS.map((s) => (
                <div key={s.num} className="about-step-item">
                  <span className="about-step-num">{s.num}</span>
                  <h4 className="about-step-title">{s.title}</h4>
                  <p className="about-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 5. Final CTA ── */}
          <section className="about-cta-section">
            <span className="about-section-tag">[ ELEVATE YOUR PLAY ]</span>
            <h2 className="about-cta-title">
              READY TO UPGRADE YOUR <span>GAME?</span>
            </h2>
            <p className="about-cta-sub">
              Browse our complete catalog of tournament blades, rubbers, and accessories, or read our latest technical
              papers on rubber hardness and blade dwell time.
            </p>
            <div className="about-cta-btns">
              <Link href="/products" className="about-btn-primary">
                EXPLORE STORE CATALOG →
              </Link>
              <Link href="/blog" className="about-btn-outline">
                READ PRO JOURNAL &amp; GUIDES
              </Link>
              <a
                href="https://wa.me/919999899999?text=Hi%20TableTerex!%20I'd%20like%20guidance%20on%20choosing%20the%20best%20table%20tennis%20setup."
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn-outline"
                style={{ borderColor: 'rgba(37, 211, 102, 0.4)', color: '#25D366' }}
              >
                WHATSAPP CONSULTATION
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
