'use client';
import { useState } from 'react';
import TornDivider from '@/components/TornDivider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ShopByCategory from '@/components/ShopByCategory';
import FreshThisWeek from '@/components/FreshThisWeek';
import ShopByBudget from '@/components/ShopByBudget';
import BuildYourSetup from '@/components/BuildYourSetup';
import BestSellers from '@/components/BestSellers';
import FindYourPlay from '@/components/FindYourPlay';
import ShopByBrand from '@/components/ShopByBrand';
import ReadyMadeBats from '@/components/ReadyMadeBats';
import WhyTableTrex from '@/components/WhyTableTrex';
import TechPerformance from '@/components/TechPerformance';
import Reviews from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ProductModal from '@/components/ProductModal';

/* ─── Seamless In-Flow Torn Transitions ─── */
const D2C = ({ seed = 0 }) => ( // Dark → Cream
  <div style={{ background: 'var(--cream)', marginTop: '-3px', marginBottom: '-1px', lineHeight: 0, position: 'relative', zIndex: 5, overflow: 'hidden' }}>
    <TornDivider variant="top" fill="#111110" height={80} variantIndex={seed} />
  </div>
);

const C2D = ({ seed = 0 }) => ( // Cream → Dark
  <div style={{ background: 'var(--black)', marginTop: '-3px', marginBottom: '-1px', lineHeight: 0, position: 'relative', zIndex: 5, overflow: 'hidden' }}>
    <TornDivider variant="top" fill="#E8E0D0" height={80} variantIndex={seed} />
  </div>
);

export default function HomePage() {
  const [product, setProduct] = useState(null);

  return (
    <>
      <Navbar />

      <main>
        {/* 1 ── HERO ── dark */}
        <div style={{ background: 'var(--black)' }}>
          <Hero />
        </div>

        {/* dark → cream */}
        <D2C seed={0} />

        {/* 2 ── SHOP BY CATEGORY ── cream */}
        <div style={{ background: 'var(--cream)' }}>
          <Marquee />
          <ShopByCategory />
        </div>

        {/* cream → dark */}
        <C2D seed={1} />

        {/* 3 ── FRESH STOCK ── dark */}
        <div style={{ background: 'var(--black)' }}>
          <FreshThisWeek />
        </div>

        {/* 4 ── SHOP BY BUDGET ── dark */}
        <div style={{ background: 'var(--black)' }}>
          <ShopByBudget />
        </div>

        {/* 5 ── BUILD YOUR GAME (RECOMMENDED COMBINATIONS) ── dark */}
        <div style={{ background: 'var(--black)' }}>
          <BuildYourSetup />
        </div>

        {/* dark → cream */}
        <D2C seed={2} />

        {/* 6 ── BEST SELLERS / PLAYERS' CHOICE ── cream */}
        <div style={{ background: 'var(--cream)' }}>
          <BestSellers onProductClick={setProduct} />
        </div>

        {/* cream → dark */}
        <C2D seed={0} />

        {/* 7 ── BUILD YOUR SETUP / FIND YOUR SETUP ── dark */}
        <div style={{ background: 'var(--black)' }}>
          <FindYourPlay />
        </div>

        {/* dark → cream */}
        <D2C seed={1} />

        {/* 8 ── SHOP BY BRAND ── cream */}
        <div style={{ background: 'var(--cream)' }}>
          <ShopByBrand />
        </div>

        {/* cream → dark */}
        <C2D seed={2} />

        {/* 9 ── READY-MADE BATS (FIND YOUR FIRST BAT) ── dark */}
        <div style={{ background: 'var(--black)' }}>
          <ReadyMadeBats />
        </div>

        {/* dark → cream */}
        <D2C seed={0} />

        {/* 10 ── WHY TABLETREX ── cream */}
        <div style={{ background: 'var(--cream)' }}>
          <WhyTableTrex />
        </div>

        {/* cream → dark */}
        <C2D seed={1} />

        {/* 11 ── GEAR GUIDE (TECHNOLOGY & PERFORMANCE) ── dark */}
        <div style={{ background: 'var(--black)' }}>
          <TechPerformance />
        </div>

        {/* 12 ── REVIEWS & TESTIMONIALS ── dark */}
        <div style={{ background: 'var(--black)' }}>
          <Reviews />
        </div>

        {/* 13 ── FINAL CTA ── high-energy orange */}
        <FinalCTA />
      </main>

      {/* 14 ── FOOTER & CONTACT ── dark with TABLETEREX giant watermark */}
      <div style={{ background: 'var(--black)' }}>
        <Footer />
      </div>

      <ProductModal product={product} onClose={() => setProduct(null)} />
    </>
  );
}
