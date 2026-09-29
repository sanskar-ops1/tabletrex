'use client';
import { useState } from 'react';
import TornDivider from '@/components/TornDivider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ShopByCategory from '@/components/ShopByCategory';
import FreshThisWeek from '@/components/FreshThisWeek';
import BestSellers from '@/components/BestSellers';
import FindYourPlay from '@/components/FindYourPlay';
import CustomizeSetup from '@/components/CustomizeSetup';
import BuildYourSetup from '@/components/BuildYourSetup';
import PhilosophySection from '@/components/PhilosophySection';
import TechPerformance from '@/components/TechPerformance';
import WhyTableTrex from '@/components/WhyTableTrex';
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

        {/* 3 ── FRESH THIS WEEK ── dark */}
        <div style={{ background: 'var(--black)' }}>
          <FreshThisWeek />
        </div>

        {/* dark → cream */}
        <D2C seed={2} />

        {/* 4 ── BEST SELLERS ── cream */}
        <div style={{ background: 'var(--cream)' }}>
          <BestSellers onProductClick={setProduct} />
        </div>

        {/* cream → dark */}
        <C2D seed={0} />

        {/* 5 ── FIND YOUR RACKET + RUBBER ── dark */}
        <div style={{ background: 'var(--black)' }}>
          <FindYourPlay />
        </div>

        {/* dark → cream */}
        <D2C seed={1} />

        {/* 6 ── CUSTOMIZE YOUR SETUP ── cream */}
        <div style={{ background: 'var(--cream)' }}>
          <CustomizeSetup />
        </div>

        {/* cream → dark */}
        <C2D seed={2} />

        {/* 7 ── BUILD YOUR SETUP ── dark */}
        <div style={{ background: 'var(--black)' }}>
          <BuildYourSetup />
        </div>

        {/* dark → cream */}
        <D2C seed={0} />

        {/* 9 ── WHY TABLETREX ── cream */}
        <div style={{ background: 'var(--cream)' }}>
          <WhyTableTrex />
        </div>

        {/* cream → dark */}
        <C2D seed={2} />

        {/* 10 ── TECHNOLOGY & PERFORMANCE ── dark */}
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

      {/* 15 ── FOOTER & CONTACT ── dark with TABLETEREX giant watermark */}
      <div style={{ background: 'var(--black)' }}>
        <Footer />
      </div>

      <ProductModal product={product} onClose={() => setProduct(null)} />
    </>
  );
}
