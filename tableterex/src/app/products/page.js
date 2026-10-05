'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ALL_PRODUCTS } from '@/data/allProducts';
import WaterCanvas from '@/components/WaterCanvas';
import Footer from '@/components/Footer';
import { getWhatsAppCartUrl } from '@/utils/whatsapp';
import './products.css';

/* ─── 4 Value Props for the Continuous Right-to-Left Marquee ─── */
const VALUE_PROPS = [
  {
    icon: (
      <svg className="nl-vp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: '100% Genuine Gear',
    desc: 'Authorized Indian Distributors',
  },
  {
    icon: (
      <svg className="nl-vp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Pan-India Dispatch',
    desc: 'Fast insured express shipping',
  },
  {
    icon: (
      <svg className="nl-vp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'Custom Assembly',
    desc: 'Pro rubber cutting & VOC-free gluing',
  },
  {
    icon: (
      <svg className="nl-vp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Secure Payments',
    desc: 'UPI, Cards & Netbanking Verified',
  },
];

/* ─── 4 Secondary Guarantees for Continuous Marquee (Matches Section 4) ─── */
const SECONDARY_TRUST = [
  {
    icon: (
      <svg className="nl-vp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Genuine Import',
    desc: 'Authorized Indian Stock',
  },
  {
    icon: (
      <svg className="nl-vp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'Competition Grade',
    desc: 'ITTF Tournament Approved',
  },
  {
    icon: (
      <svg className="nl-vp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Pro Craftsmanship',
    desc: 'Free Racket Assembly',
  },
  {
    icon: (
      <svg className="nl-vp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Trusted by Pros',
    desc: '10,000+ players nationwide',
  },
];

/* ─── 8 Equipment Category Cards (Matches 1st Reference Image Design) ─── */
const CATEGORIES = [
  {
    name: 'Rubbers',
    titleBold: 'Tournament',
    titleLight: 'Rubbers',
    theme: 'orange',
    img: '/images/categories/rubber.png',
  },
  {
    name: 'Blades',
    titleBold: 'Pro Carbon',
    titleLight: 'Blades',
    theme: 'white',
    img: '/images/categories/blade.png',
  },
  {
    name: 'Ready Bats',
    titleBold: 'Pre-Assembled',
    titleLight: 'Match Bats',
    theme: 'black',
    img: '/images/categories/racket.png',
  },
  {
    name: 'Plastic Balls',
    titleBold: '3-Star ITTF',
    titleLight: 'Plastic Balls',
    theme: 'white',
    img: '/images/categories/balls.png',
  },
  {
    name: 'Tables',
    titleBold: 'Arena 25mm',
    titleLight: 'Tables',
    theme: 'black',
    img: '/images/categories/table.png',
  },
  {
    name: 'Care & Glue',
    titleBold: 'VOC-Free Glue',
    titleLight: '& Care',
    theme: 'white',
    img: '/images/categories/glue.png',
  },
  {
    name: 'Footwear',
    titleBold: 'Court Grip',
    titleLight: 'Footwear',
    theme: 'black',
    img: '/images/categories/shoes.png',
  },
  {
    name: 'Cases & Robots',
    titleBold: 'Digital Robots',
    titleLight: '& Hard Cases',
    theme: 'white',
    img: '/images/categories/robot.png',
  },
];

/* ─── Dynamic Promo Collections Map (Adapts according to activeCategory) ─── */
const PROMO_DATA = {
  All: {
    card1: {
      tag: 'FEATURED BLADE COLLECTION',
      title: 'Pro Carbon & ALC Series',
      desc: 'Butterfly Viscaria, Nittaku Acoustic & Tibhar Lebrun — engineered for explosive offensive counter-looping.',
      cta: 'EXPLORE BLADES →',
      bg: '/images/pro-blade.jpg',
      target: 'Blades',
    },
    card2: {
      tag: 'COMPETITION RUBBERS',
      title: 'High-Tension Spin Series',
      desc: 'Dignics 09C, Tenergy 05, Fastarc G-1 & Hybrid K3 with state-of-the-art sponge dynamics.',
      cta: 'EXPLORE RUBBERS →',
      bg: '/images/tibhar-rubber.jpg',
      target: 'Rubbers',
    },
  },
  Rubbers: {
    card1: {
      tag: 'HYBRID MICRO-ADHESIVE',
      title: 'Explosive Arc & Tacky Grip',
      desc: 'Featuring Butterfly Dignics 09C, Nittaku Hurricane Pro 3 Turbo & Tibhar Hybrid K3 for maximum spin.',
      cta: 'SHOP HIGH-TENSION →',
      bg: '/images/black-rubber.jpg',
      target: 'Rubbers',
    },
    card2: {
      tag: 'TACTICAL PIPS & ANTI',
      title: 'Maximum Reversal & Control',
      desc: 'Featuring Nittaku Moristo SP short pips, Feint Long III & Donic Spike P1 for disruptive tactical defense.',
      cta: 'SHOP TACTICAL PIPS →',
      bg: '/images/red-rubber.jpg',
      target: 'Rubbers',
    },
  },
  Blades: {
    card1: {
      tag: 'ARYLATE CARBON & SUPER ZLC',
      title: 'Elite Tournament Blades',
      desc: 'Featuring Butterfly Viscaria Super ALC, Timo Boll ALC & Felix Lebrun Hyper Carbon for surgical precision.',
      cta: 'SHOP CARBON BLADES →',
      bg: '/images/donic-blade.jpg',
      target: 'Blades',
    },
    card2: {
      tag: 'CLASSIC ALL-WOOD & BALSA',
      title: 'Natural Touch & Resonance',
      desc: 'Featuring Nittaku Acoustic FL, Violin FL, Donic Waldner Allplay & Balsa Carbon for acoustic feedback.',
      cta: 'SHOP ALL-WOOD →',
      bg: '/images/stiga-blade.jpg',
      target: 'Blades',
    },
  },
  'Ready Bats': {
    card1: {
      tag: 'CARBOTEC CARBON SERIES',
      title: '100% Graphite Attack Rackets',
      desc: 'Donic Carbotec 7000 and 3000 — lightweight carbon frame with zero warping and championship power.',
      cta: 'SHOP CARBOTECH →',
      bg: '/images/custom-racket.jpg',
      target: 'Ready Bats',
    },
    card2: {
      tag: 'CLUB & COACHING SERIES',
      title: 'Player Sets & Tournament Bats',
      desc: 'Butterfly Timo Boll CF 2000, Wakaba 3000 & Tibhar Samsonov Powergrip for club training.',
      cta: 'SHOP READY BATS →',
      bg: '/images/hero-athlete.jpg',
      target: 'Ready Bats',
    },
  },
  Tables: {
    card1: {
      tag: '25MM ARENA TOURNAMENT TABLES',
      title: 'Donic Waldner 909 Arena',
      desc: '25mm tournament top, 100mm industrial heavy-duty wheels, reinforced 20x50mm steel apron.',
      cta: 'VIEW 25MM ARENA →',
      bg: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=1000&q=80',
      target: 'Tables',
    },
    card2: {
      tag: 'CLUB & RECREATION TABLES',
      title: 'Donic Team 707 & Champ Series',
      desc: '19mm and 18mm competition tables with compact safety-lock rollaway chassis.',
      cta: 'VIEW CLUB TABLES →',
      bg: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=1000&q=80',
      target: 'Tables',
    },
  },
  'Plastic Balls': {
    card1: {
      tag: 'ITTF APPROVED 3-STAR BALLS',
      title: 'Nittaku Premium 40+ Match',
      desc: 'Made in Japan seamless precision for official international championship play.',
      cta: 'VIEW MATCH BALLS →',
      bg: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=1000&q=80',
      target: 'Plastic Balls',
    },
    card2: {
      tag: 'CLUB TRAINING MULTI-PACKS',
      title: '72 & 144 Ball Bulk Packs',
      desc: 'Tibhar 40+ SL and Looop 3-Star H40+ bulk packs for daily coaching multi-ball drills.',
      cta: 'VIEW TRAINING BALLS →',
      bg: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1000&q=80',
      target: 'Plastic Balls',
    },
  },
  'Care & Glue': {
    card1: {
      tag: 'WATER-BASED VOC-FREE GLUES',
      title: 'Free Chack II & Clean Fix',
      desc: 'ITTF-compliant water-based adhesive formulas for clean, bubble-free rubber mounting.',
      cta: 'VIEW GLUES →',
      bg: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1000&q=80',
      target: 'Care & Glue',
    },
    card2: {
      tag: 'RUBBER CLEANERS & TAPES',
      title: 'Vario Clean & Edge Protection',
      desc: 'Preserve topsheet tackiness and protect blade perimeter edges from table strikes.',
      cta: 'VIEW ACCESSORIES →',
      bg: '/images/black-rubber.jpg',
      target: 'Care & Glue',
    },
  },
  Footwear: {
    card1: {
      tag: 'BUTTERFLY LEZOLINE RIFONES',
      title: 'Flagship Tournament Footwear',
      desc: 'Engineered for lightning-fast lateral footwork with torsion-resistant B-Armor technology.',
      cta: 'VIEW LEZOLINE →',
      bg: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&q=80',
      target: 'Footwear',
    },
    card2: {
      tag: 'LIGHTWEIGHT COURT TRACTION',
      title: 'Lezoline Vilight & Unizes',
      desc: 'Featherlight breathable mesh construction with non-marking high-friction rubber soles.',
      cta: 'VIEW ALL FOOTWEAR →',
      bg: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1000&q=80',
      target: 'Footwear',
    },
  },
  'Cases & Robots': {
    card1: {
      tag: 'ROBOTIC TRAINING SYSTEMS',
      title: 'Butterfly Amicus Prime Robot',
      desc: 'Made in Germany. Programmable frequency, spin, and trajectory via wireless tablet app.',
      cta: 'VIEW AMICUS ROBOT →',
      bg: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1000&q=80',
      target: 'Cases & Robots',
    },
    card2: {
      tag: 'TOURNAMENT BAT CASES & BAGS',
      title: 'Donic Full Aluminum Bat Cases',
      desc: 'Reinforced metal corners, shock-absorbing high-density foam, and moisture seal.',
      cta: 'VIEW BAT CASES →',
      bg: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=1000&q=80',
      target: 'Cases & Robots',
    },
  },
};

/* ─── 4 Verified Customer Testimonials (Auto-Rotates in 1 Clean Card) ─── */
const REVIEWS = [
  {
    name: 'Coach Rajesh M.',
    badge: 'National Level Coach · Pune TT Academy',
    setup: 'Butterfly Dignics 09C + Timo Boll ALC',
    rating: 5,
    quote: '“Every rubber and blade arrived factory-sealed in mint condition. The Butterfly Dignics 09C and Timo Boll ALC pairing gave my state academy players extraordinary arc, explosive spin, and counter-drive control.”',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80',
  },
  {
    name: 'Vikram S.',
    badge: 'Verified Tournament Player · Maharashtra State Ranking',
    setup: 'Nittaku Fastarc G-1 + Donic Waldner 909',
    rating: 5,
    quote: '“Authentic products directly from authorized importers. Nittaku Fastarc G-1 and Donic Waldner 909 are the real deal. Super fast dispatch, prompt WhatsApp tracking updates, and impeccable customer care.”',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
  },
  {
    name: 'Ananya P.',
    badge: 'State Cadet Champion · All-India Junior Circuit',
    setup: 'Tibhar Evolution MX-P + Free Chack II Assembly',
    rating: 5,
    quote: '“The custom assembly was flawless — zero air bubbles, perfect edge-tape alignment, and genuine Free Chack II used. TableTerex is our entire team’s official go-to equipment store for tournament season.”',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
  },
  {
    name: 'Devendra K.',
    badge: 'Club Captain · Mumbai Suburban TT League',
    setup: 'Stiga Pro Carbon Blade + Butterfly Rozena',
    rating: 5,
    quote: '“Getting genuine ITTF tournament-grade gear delivered in 48 hours with batch codes matching official distributor imports gives complete peace of mind. Hands down India’s finest table tennis catalog.”',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
  },
];

/* ─── Instagram Lifestyle Images ─── */
const INSTA_POSTS = [
  '/images/hero-action.jpg',
  '/images/pro-blade.jpg',
  '/images/donic-blade.jpg',
  '/images/tibhar-rubber.jpg',
  '/images/custom-racket.jpg',
  '/images/hero-athlete.jpg',
];

/* ─── Iconic Brand Sub-Groups by Product Name / Series ─── */
const BRAND_SUBGROUPS = {
  Butterfly: [
    { label: 'Timo Boll', keywords: ['timo boll', 'timoboll', 'tb5'] },
    { label: 'Dignics', keywords: ['dignics'] },
    { label: 'Tenergy', keywords: ['tenergy'] },
    { label: 'Viscaria', keywords: ['viscaria'] },
    { label: 'Fan Zhendong', keywords: ['fan zhendong'] },
    { label: 'Innerforce & Harimoto', keywords: ['innerforce', 'innerforace', 'harimoto', 'franziska'] },
    { label: 'Primorac & Korbel', keywords: ['primorac', 'korbel', 'konglin'] },
    { label: 'Mizutani Jun', keywords: ['mizutani'] },
    { label: 'RDJ & Addoy Bats', keywords: ['rdj', 'addoy', 'wakaba', 'stayer', 'logo racket', 'outdoor racket'] },
    { label: 'Sriver & Flextra', keywords: ['sriver', 'flextra', 'tackiness', 'tackness', 'fient', 'super anti'] },
    { label: 'Rozena & Glayzer', keywords: ['rozena', 'glayzer', 'bryce', 'impartial', 'bugler', 'challenger', 'zyre'] },
    { label: 'Lezoline Footwear', keywords: ['lezoline', 'sneaker', 'shoe'] },
    { label: 'Pro Carbon Blades', keywords: ['outerforce', 'outerfforce', 'sardius', 'hadraw', 'diode', 'divode', 'ovtcharov', 'tiago apolonia', 'zhang jike', 'lin yun-ju', 'revolida', 'freitas'] },
    { label: 'Apparel & Care Gear', keywords: ['ball', 'chack', 'cleaner', 'protector', 'case', 'sheet', 'bag', 'robot', 'shirt', 'short', 'suit', 'cure water', 'glue free'] },
  ],
  Nittaku: [
    { label: 'Acoustic Series', keywords: ['acoustic'] },
    { label: 'Fastarc Series', keywords: ['fastarc'] },
    { label: 'Hurricane Series', keywords: ['hurricane'] },
    { label: 'Violin Series', keywords: ['violin'] },
    { label: 'Genextion & Hammond', keywords: ['genextion', 'hammond'] },
    { label: 'Moristo Pips', keywords: ['moristo'] },
    { label: 'Flyatt & Septear', keywords: ['flyatt', 'magic carbon', 'septear'] },
    { label: '3-Star Premium Balls', keywords: ['3-star', '3 star', 'ball'] },
    { label: 'Accessories & Care', keywords: ['tape', 'protect'] },
  ],
  Donic: [
    { label: 'Waldner Series', keywords: ['waldner'] },
    { label: 'Bluestorm & Bluestar', keywords: ['bluestorm', 'bluestrorm', 'bluestar'] },
    { label: 'Bluegrip & Bluefire', keywords: ['bluegrip', 'blue fire'] },
    { label: 'Carbotec Carbon Bats', keywords: ['carbotec'] },
    { label: 'Acuda Series', keywords: ['acuda'] },
    { label: 'Baracuda Series', keywords: ['barracudda', 'baracuda'] },
    { label: 'Persson & Appelgren', keywords: ['persson', 'person', 'appelgreen', 'appelgren'] },
    { label: 'Coppa & Desto', keywords: ['coppa', 'desto', 'spike', 'piranja', 'sonex', 'vario', 'liga', 'twingo'] },
    { label: 'Original Carbon Blades', keywords: ['zhang jike', 'original', 'balsa', 'testra', 'anders lind', 'defplay', 'whiper'] },
    { label: 'Legend & Sensation Bats', keywords: ['legend', 'top team', 'sensation', 'young champ'] },
    { label: 'Tables (909 / Team / Champ)', keywords: ['table', '909', '707', '505', '303', '202', '101'] },
    { label: 'Balls, Cleaners & Care', keywords: ['schildkrot', '40+', 'elite', 'clean', 'formula', 'tape', 'case'] },
  ],
  Tibhar: [
    { label: 'Hybrid Series', keywords: ['hybrid'] },
    { label: 'Evolution Series', keywords: ['evolution'] },
    { label: 'Lebrun Series', keywords: ['lebrun'] },
    { label: 'Samsonov Series', keywords: ['samsonov'] },
    { label: 'Grass & Speedy Soft', keywords: ['grass', 'speedy'] },
    { label: 'Quantum & Aurus', keywords: ['quantum', 'aurus', 'genius'] },
    { label: 'Gravity & Carbon Blades', keywords: ['gravity', 'carbon shot', 'velociti', 'kratos', 'cca', 'krypto', 'libra', 'champ', 'game'] },
    { label: 'Ready Match Bats', keywords: ['samsonov powergrip', 'xxx'] },
    { label: 'Apparel & Footwear', keywords: ['socks', 'shirt', 'short', 'tracksuit', 't-shirt', 'towel'] },
    { label: 'Covers & Bat Cases', keywords: ['cover', 'bat case', 'backpack', 'bag', 'box'] },
    { label: 'Balls & Table Tennis Care', keywords: ['pack of', 'clean', 'glue', 'cleaner', 'tape', 'spin', 'blade', 'ball', 'net', 'surrounds', 'rolling pin'] },
  ],
  Looop: [
    { label: '3-Star H40+ Balls', keywords: ['3 star', '3-star'] },
    { label: '1-Star 40+ Balls', keywords: ['1 star', '1-star'] },
    { label: 'Ripple 9C Blade', keywords: ['ripple'] },
  ]
};
 
function BrandPillButton({
  brand,
  isSelected,
  hasActiveBrand,
  isOpen,
  activeSubGroup,
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, vx: 0, vy: 0 });
  const lastMouseRef = useRef({ x: 0, y: 0, t: 0 });

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    lastMouseRef.current = { x, y, t: performance.now() };
    setMousePos({ x, y, vx: 0, vy: 0 });
    setIsHovered(true);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = performance.now();
    const dt = Math.max(1, now - lastMouseRef.current.t);
    const vx = ((x - lastMouseRef.current.x) / dt) * 16;
    const vy = ((y - lastMouseRef.current.y) / dt) * 16;
    lastMouseRef.current = { x, y, t: now };
    setMousePos({ x, y, vx, vy });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`nl-brand-pill ${isSelected ? 'active' : ''} ${hasActiveBrand && !isSelected ? 'inactive' : ''}`}
      aria-expanded={isOpen}
      aria-haspopup="true"
      id={`brand-btn-${brand.toLowerCase()}`}
    >
      <WaterCanvas isHovered={isHovered} mousePos={mousePos} />

      <span className="nl-brand-name">{brand}</span>
      {isSelected && activeSubGroup && (
        <span className="nl-brand-subtag">· {activeSubGroup}</span>
      )}
      <svg
        className={`nl-brand-chevron ${isOpen ? 'open' : ''}`}
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeBrand, setActiveBrand] = useState(null);
  const [activeSubGroup, setActiveSubGroup] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(24);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [openBrandDropdown, setOpenBrandDropdown] = useState(null);

  /* Auto-rotate testimonial card continuously every 4 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIdx((prev) => (prev + 1) % REVIEWS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.nl-brand-dropdown-wrapper')) {
        setOpenBrandDropdown(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addToCart = (product, e) => {
    if (e) e.stopPropagation();
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateCartQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.numericPrice * item.qty,
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Dynamic filter across complete catalog of all 343 products
  const filteredProducts = ALL_PRODUCTS.filter((p) => {
    const matchCat = activeCategory ? p.category === activeCategory : true;
    const matchBrand = activeBrand ? p.brand === activeBrand : true;

    // Sub-group filter by name / series keywords
    let matchSubGroup = true;
    if (activeBrand && activeSubGroup) {
      const groups = BRAND_SUBGROUPS[activeBrand] || [];
      const current = groups.find((g) => g.label === activeSubGroup);
      if (current) {
        matchSubGroup = current.keywords.some((k) =>
          p.name.toLowerCase().includes(k.toLowerCase())
        );
      }
    }

    const matchSearch = searchQuery
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchCat && matchBrand && matchSubGroup && matchSearch;
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="nl-page-container">
      {/* ── 2. STORE HEADER & NAVIGATION ── */}
      <header className="nl-navbar">
        <div className="nl-navbar-inner">
          <div className="nl-logo">
            <img
              src="/images/tableterex-logo.png"
              alt="TableTerex Logo"
              className="nl-logo-img"
              draggable={false}
            />
            <div className="nl-logo-text">
              <span className="nl-logo-main">TABLETEREX</span>
              <span className="nl-logo-sub">OFFICIAL STORE · PRO GEAR</span>
            </div>
          </div>

          <nav className="nl-nav-desktop">
            <ul className="nl-nav-links">
              <li>
                <Link href="/" className="nl-nav-link">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#categories"
                  className="nl-nav-link active"
                  onClick={() => setActiveCategory(null)}
                >
                  Categories ▾
                </a>
              </li>
              <li>
                <a href="#bestsellers" className="nl-nav-link">
                  All Products
                </a>
              </li>
              <li>
                <a href="#story" className="nl-nav-link">
                  Brand Heritage
                </a>
              </li>
              <li>
                <a href="#reviews" className="nl-nav-link">
                  Reviews
                </a>
              </li>
            </ul>
          </nav>

          <div className="nl-nav-actions">
            {/* Search Button */}
            <button
              className="nl-action-icon"
              aria-label="Search Catalog"
              onClick={() => {
                const el = document.getElementById('bestsellers');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Wishlist Button with Badge */}
            <button
              className="nl-action-icon"
              aria-label="Wishlist"
              onClick={() => {
                const el = document.getElementById('bestsellers');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlist.length > 0 && (
                <span className="nl-badge">{wishlist.length}</span>
              )}
            </button>

            {/* Cart Trigger with Count */}
            <button
              className="nl-action-icon"
              onClick={() => setCartOpen(true)}
              aria-label="Shopping Cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && <span className="nl-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* ── 3. HERO SHOWCASE SECTION (Exact same code, spacing, length & breadth as Home Page Banner) ── */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <img
            src="/images/hero-action.jpg"
            alt="Table tennis pro player in action"
          />
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-content">
          <span className="hero-eyebrow text-label">
            OFFICIAL STORE &nbsp;•&nbsp; INDIA&apos;S PREMIUM TABLE TENNIS CATALOG
          </span>

          <div className="hero-headline-wrap">
            <span className="hero-line-1 text-display">PLAY BEYOND</span>
            <span className="hero-line-2 text-display hero-accent">LIMITS</span>
          </div>

          <div className="hero-text-badge">
            WHOLESALE PRICES · RETAIL QUANTITIES
          </div>

          <p className="hero-tagline">
            Shop table tennis rackets and performance-focused rubber from fresh weekly batches. Build your setup around the way you play.
          </p>

          <div className="hero-cta-group">
            <a href="#categories" className="btn-primary" id="hero-btn-rackets">SHOP BY CATEGORY</a>
            <a href="#bestsellers" className="btn-outline" id="hero-btn-rubber">VIEW ALL PRODUCTS</a>
          </div>
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <div className="hero-scroll-line" />
          <span>SCROLL</span>
        </div>
      </section>

      {/* ── 4. VALUE PROPS / TRUST BAR (Moving Right to Left) ── */}
      <section className="nl-value-props" aria-label="Store Guarantees">
        <div className="nl-vp-marquee">
          <div className="nl-vp-track">
            {[0, 1, 2, 3].map((copyIndex) => (
              <div key={copyIndex} className="nl-vp-group" aria-hidden={copyIndex > 0 ? 'true' : undefined}>
                {VALUE_PROPS.map((vp, i) => (
                  <div key={i} className="nl-vp-item">
                    {vp.icon}
                    <div>
                      <div className="nl-vp-title">{vp.title}</div>
                      <div className="nl-vp-desc">{vp.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SHOP BY CATEGORY (8 CIRCULAR TILES DERIVED FROM PRODUCTS) ── */}
      <section className="nl-categories-section" id="categories">
        <div className="nl-section-header">
          <div>
            <span className="nl-mono-label">EQUIPMENT CATEGORIES</span>
            <h2 className="nl-section-title nl-serif">Find Equipment for Every Style</h2>
          </div>
          <button
            className="nl-view-all-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => {
              setActiveCategory(null);
              setActiveBrand(null);
            }}
          >
            {activeCategory ? `Clear Filter (${activeCategory}) ✕` : 'View all →'}
          </button>
        </div>

        <div className="nl-categories-grid">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                type="button"
                className={`nl-cat-feature-card nl-theme-${cat.theme}${isSelected ? ' is-selected' : ''}`}
                onClick={() => {
                  const nextCat = isSelected ? null : cat.name;
                  setActiveCategory(nextCat);
                  const el = document.getElementById('bestsellers');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                {/* Left Content Area */}
                <div className="nl-cat-content">
                  <div className="nl-cat-titles">
                    <span className="nl-cat-title-bold">{cat.titleBold}</span>
                    <span className="nl-cat-title-light">{cat.titleLight}</span>
                  </div>
                </div>

                {/* Right 3D Cutout Image (Transparent Background) */}
                <div className="nl-cat-img-wrapper">
                  <img src={cat.img} alt={cat.name} className="nl-cat-hero-img" loading="lazy" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── 7. BESTSELLERS / PRODUCT CATALOG GRID (Moves & Filters dynamically with Categories) ── */}
      <section className="nl-bestsellers-section" id="bestsellers">
        <div className="nl-section-header" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="nl-mono-label">
                {activeSubGroup
                  ? `${activeBrand?.toUpperCase()} · ${activeSubGroup.toUpperCase()}`
                  : activeBrand
                  ? `BRAND: ${activeBrand.toUpperCase()}`
                  : activeCategory
                  ? `CATEGORY: ${activeCategory.toUpperCase()}`
                  : 'OFFICIAL MANUFACTURER CATALOG'}
              </span>
              <h2 className="nl-section-title nl-serif">
                {activeSubGroup
                  ? `${activeBrand} ${activeSubGroup}`
                  : activeBrand
                  ? `${activeBrand} Collection`
                  : activeCategory
                  ? `${activeCategory} Collection`
                  : 'All 343 Competition Equipment Items'}
              </h2>
              <p style={{ margin: '6px 0 0', fontSize: '0.82rem', color: 'rgba(17, 17, 16, 0.65)', fontFamily: 'var(--font-mono)' }}>
                Showing {displayedProducts.length} of {filteredProducts.length} products
                {activeBrand ? ` in ${activeBrand}` : ' from Butterfly, Nittaku, Donic, Tibhar & Looop'}
                {activeSubGroup ? ` (${activeSubGroup})` : ''}
              </p>
            </div>

            {/* Quick Search Bar */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
              <input
                type="text"
                placeholder="Search by name, spec or brand..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(24);
                }}
                autoComplete="off"
                suppressHydrationWarning
                style={{
                  width: '100%',
                  padding: '10px 36px 10px 36px',
                  borderRadius: '24px',
                  border: '1px solid rgba(17, 17, 16, 0.2)',
                  background: 'var(--white)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  outline: 'none',
                  color: 'var(--black)',
                }}
              />
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '13px',
                    color: '#888',
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Brand Filter Buttons with Name-based Sub-Groups (No Products in Dropdown) */}
          <div className="nl-brand-pills-bar">
            {['Butterfly', 'Nittaku', 'Donic', 'Tibhar', 'Looop'].map((b) => {
              const isSelected = activeBrand === b;
              const isOpen = openBrandDropdown === b;
              const hasActiveBrand = activeBrand !== null;
              const brandProducts = ALL_PRODUCTS.filter((p) => p.brand === b);
              const brandGroups = BRAND_SUBGROUPS[b] || [];

              return (
                <div key={b} className="nl-brand-dropdown-wrapper">
                  <BrandPillButton
                    brand={b}
                    isSelected={isSelected}
                    hasActiveBrand={hasActiveBrand}
                    isOpen={isOpen}
                    activeSubGroup={activeSubGroup}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isOpen) {
                        setOpenBrandDropdown(null);
                      } else {
                        setOpenBrandDropdown(b);
                        setActiveBrand(b);
                        setActiveSubGroup(null);
                        setVisibleCount(24);
                      }
                    }}
                  />

                  {/* Dropdown Menu for this Brand (Only Name-based Sub-groups) */}
                  {isOpen && (
                    <div
                      className={`nl-brand-dropdown-menu ${b === 'Tibhar' || b === 'Looop' ? 'align-right' : ''}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="nl-bdd-cats">
                        <button
                          type="button"
                          className={`nl-bdd-cat-btn ${isSelected && !activeSubGroup ? 'active' : ''}`}
                          onClick={() => {
                            setActiveBrand(b);
                            setActiveSubGroup(null);
                            setVisibleCount(24);
                            setOpenBrandDropdown(null);
                          }}
                        >
                          <span>All {b} Gear</span>
                          <span className="nl-bdd-cat-count">{brandProducts.length}</span>
                        </button>
                        {brandGroups.map((g) => {
                          const isGroupActive = isSelected && activeSubGroup === g.label;
                          const gCount = brandProducts.filter((p) =>
                            g.keywords.some((k) => p.name.toLowerCase().includes(k.toLowerCase()))
                          ).length;

                          return (
                            <button
                              key={g.label}
                              type="button"
                              className={`nl-bdd-cat-btn ${isGroupActive ? 'active' : ''}`}
                              onClick={() => {
                                setActiveBrand(b);
                                setActiveSubGroup(g.label);
                                setVisibleCount(24);
                                setOpenBrandDropdown(null);
                              }}
                            >
                              <span>{g.label}</span>
                              <span className="nl-bdd-cat-count">{gCount}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {(activeCategory || activeBrand || activeSubGroup || searchQuery) && (
              <button
                className="nl-reset-filters-btn"
                onClick={() => {
                  setActiveCategory(null);
                  setActiveBrand(null);
                  setActiveSubGroup(null);
                  setOpenBrandDropdown(null);
                  setSearchQuery('');
                  setVisibleCount(24);
                }}
              >
                Reset All Filters ✕
              </button>
            )}
          </div>
        </div>

        {displayedProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'rgba(17, 17, 16, 0.03)', borderRadius: '12px', margin: '30px 0' }}>
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>No products match your criteria</h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(17, 17, 16, 0.6)', marginBottom: '16px' }}>Try adjusting your search terms or clearing selected brand/category filters.</p>
            <button
              className="nl-btn-secondary"
              onClick={() => {
                setActiveCategory(null);
                setActiveBrand(null);
                setSearchQuery('');
                setVisibleCount(24);
              }}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>
            <div className="nl-products-grid">
              {displayedProducts.map((prod) => {
                const isFav = wishlist.includes(prod.id);
                const inCart = cart.find((item) => item.id === prod.id);
                const displayPrice = typeof prod.price === 'string' ? prod.price.replace(/\.00$/, '') : prod.price;

                return (
                  <Link
                    key={prod.id}
                    href={`/products/${prod.id}`}
                    className="nl-product-card"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {/* Full-bleed product image background */}
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="nl-product-card-bg"
                      loading="lazy"
                    />

                    {/* Gradient overlay for contrast */}
                    <div className="nl-product-card-overlay" />

                    {/* Circular Black Wishlist Button (Top Right) */}
                    <button
                      type="button"
                      className={`nl-card-heart-btn${isFav ? ' active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(prod.id, e);
                      }}
                      aria-label={isFav ? "Remove from Wishlist" : "Save to Wishlist"}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill={isFav ? '#ff3b30' : 'none'}
                        stroke={isFav ? '#ff3b30' : '#ffffff'}
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>

                    {/* Bottom Info & Cart Action */}
                    <div className="nl-card-bottom">
                      <div className="nl-card-text">
                        <h3 className="nl-card-title">{prod.name}</h3>
                        <div className="nl-card-subtitle">{prod.brand}</div>
                        <div className="nl-card-price">{displayPrice}</div>
                      </div>

                      {/* White Squircle Add-To-Cart Button (Bottom Right) */}
                      <button
                        type="button"
                        className={`nl-card-cart-btn${inCart ? ' added' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(prod, e);
                        }}
                        aria-label="Add to cart"
                      >
                        {inCart ? (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2.1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 4h2.5l2 10.5h9.5l2.2-7H6.8" />
                            <circle cx="9" cy="18.5" r="1.3" fill="#000000" />
                            <circle cx="16" cy="18.5" r="1.3" fill="#000000" />
                            <path d="M14 14.5l5-5" />
                            <path d="M15 9.5h4v4" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Load More Products Button */}
            {visibleCount < filteredProducts.length && (
              <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <button
                  className="nl-btn-secondary"
                  onClick={() => setVisibleCount((prev) => prev + 24)}
                  style={{
                    padding: '16px 40px',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                  }}
                >
                  LOAD MORE PRODUCTS ({filteredProducts.length - visibleCount} REMAINING) ↓
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* ── 8. BRAND HERITAGE & QUALITY GUARANTEE ── */}
      <section className="nl-story-section" id="story">
        <div className="nl-story-grid">
          {/* Left Lifestyle Photo */}
          <div className="nl-story-img-card">
            <img
              src="/images/hero-athlete.jpg"
              alt="Professional Table Tennis Athlete"
              className="nl-story-img"
            />
          </div>

          {/* Center Brand Philosophy */}
          <div className="nl-story-center-card">
            <span className="nl-mono-label">AUTHENTIC TOURNAMENT EQUIPMENT</span>
            <h2 className="nl-story-title nl-serif">
              Engineered for
              <br />
              Championship Play
            </h2>
            <p className="nl-story-desc">
              Every rubber sheet, blade ply, and competition table in our inventory is sourced directly from authorized Indian distribution channels of Butterfly, Nittaku, Donic, and Tibhar.
            </p>
            <div>
              <a href="#bestsellers" className="nl-btn-primary">
                VIEW CATALOG →
              </a>
            </div>
          </div>

          {/* Right Dark Card */}
          <div className="nl-story-dark-card">
            <div className="nl-story-dark-overlay" />
            <div className="nl-story-dark-content">
              <h3 className="nl-story-dark-title">
                TableTerex
                <br />
                Pro Quality Guarantee
              </h3>

              <ul className="nl-pillars-list">
                <li className="nl-pillar-item">
                  <svg className="nl-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span>100% Factory Sealed Batches</span>
                </li>
                <li className="nl-pillar-item">
                  <svg className="nl-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span>Official ITTF Approved Stamps</span>
                </li>
                <li className="nl-pillar-item">
                  <svg className="nl-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span>Laser-Checked Blade Weight</span>
                </li>
                <li className="nl-pillar-item">
                  <svg className="nl-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span>Free Professional Assembly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. SECONDARY TRUST MARQUEE (Continuous Ticker Bar like Section 4) ── */}
      <section className="nl-secondary-trust" aria-label="Secondary Guarantees">
        <div className="nl-vp-marquee">
          <div className="nl-vp-track">
            {[0, 1, 2, 3].map((copyIndex) => (
              <div key={copyIndex} className="nl-vp-group" aria-hidden={copyIndex > 0 ? 'true' : undefined}>
                {SECONDARY_TRUST.map((item, i) => (
                  <div key={i} className="nl-vp-item">
                    {item.icon}
                    <div>
                      <div className="nl-vp-title">{item.title}</div>
                      <div className="nl-vp-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. SINGLE CLEAN AUTO-ROTATING TESTIMONIAL CARD ── */}
      <section className="nl-reviews-section" id="reviews">
        <div className="nl-reviews-header">
          <span className="nl-mono-label">VERIFIED COMMUNITY REVIEWS</span>
          <h2 className="nl-section-title nl-serif">Trusted by Players & Academies</h2>
        </div>

        <div className="nl-single-review-card">
          {/* Animated Review Body */}
          <div key={reviewIdx} className="nl-single-review-body">
            {/* Top Row: Rating, Verified Badge & Quote Mark */}
            <div className="nl-single-review-top">
              <div className="nl-single-rating-wrap">
                <div className="nl-single-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <span className="nl-single-verified-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  VERIFIED PURCHASE
                </span>
              </div>
              <div className="nl-single-quote-mark" aria-hidden="true">
                “
              </div>
            </div>

            {/* Testimonial Quote */}
            <p className="nl-single-quote-text">
              {REVIEWS[reviewIdx].quote}
            </p>

            {/* Author Profile */}
            <div className="nl-single-author-row">
              <div className="nl-single-author-profile">
                <div className="nl-single-avatar-box">
                  <img
                    src={REVIEWS[reviewIdx].avatar}
                    alt={REVIEWS[reviewIdx].name}
                    className="nl-single-avatar-img"
                  />
                  <span className="nl-single-avatar-check" title="Verified Customer">✓</span>
                </div>
                <div>
                  <h4 className="nl-single-author-name">{REVIEWS[reviewIdx].name}</h4>
                  <span className="nl-single-author-role">{REVIEWS[reviewIdx].badge}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer: Centered Progress Dots */}
          <div className="nl-single-card-footer">
            <div className="nl-single-dots">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  className={`nl-single-dot${i === reviewIdx ? ' active' : ''}`}
                  onClick={() => setReviewIdx(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ── 13. GLOBAL DARK FOOTER (Matches Home Page & Reference Design) ── */}
      <Footer />

      {/* ── 14. QUICK VIEW MODAL ── */}
      {selectedProduct && (
        <div className="nl-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="nl-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="nl-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="nl-modal-grid">
              <div className="nl-modal-img-wrap">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="nl-modal-img"
                />
              </div>

              <div className="nl-modal-body">
                <span className="nl-mono-label" style={{ color: 'var(--orange)' }}>
                  {selectedProduct.brand} · {selectedProduct.category}
                </span>
                <h2 className="nl-modal-title nl-serif">{selectedProduct.name}</h2>
                <div className="nl-modal-price">{selectedProduct.price}</div>

                <div className="nl-product-rating" style={{ marginBottom: '14px' }}>
                  <span className="nl-stars">★★★★★</span>
                  <span className="nl-reviews-count">
                    ({selectedProduct.reviews} verified reviews)
                  </span>
                </div>

                <p className="nl-modal-desc">{selectedProduct.desc}</p>

                <div className="nl-modal-specs">
                  <div className="nl-spec-row">
                    <span className="nl-spec-k">Specifications:</span>
                    <span className="nl-spec-v">{selectedProduct.specs}</span>
                  </div>
                  <div className="nl-spec-row">
                    <span className="nl-spec-k">Material / Build:</span>
                    <span className="nl-spec-v">{selectedProduct.material}</span>
                  </div>
                  <div className="nl-spec-row">
                    <span className="nl-spec-k">Origin:</span>
                    <span className="nl-spec-v">{selectedProduct.origin}</span>
                  </div>
                </div>

                <button
                  className="nl-btn-primary"
                  style={{ width: '100%', marginTop: '16px' }}
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                >
                  ADD TO CART ({selectedProduct.price})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 15. SLIDE-OUT MINI CART DRAWER ── */}
      {cartOpen && (
        <div className="nl-drawer-backdrop" onClick={() => setCartOpen(false)}>
          <div className="nl-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="nl-drawer-header">
              <h3 className="nl-drawer-title nl-serif">
                Your Bag ({cartCount})
              </h3>
              <button
                className="nl-drawer-close"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            <div className="nl-drawer-items">
              {cart.length === 0 ? (
                <div className="nl-drawer-empty">
                  <p>Your shopping bag is empty.</p>
                  <button
                    className="nl-btn-primary"
                    onClick={() => setCartOpen(false)}
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="nl-drawer-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="nl-drawer-item-img"
                    />
                    <div className="nl-drawer-item-info">
                      <h4 className="nl-drawer-item-name">{item.name}</h4>
                      <div className="nl-drawer-item-price">{item.price}</div>
                      <div className="nl-qty-ctrl">
                        <button
                          className="nl-qty-btn"
                          onClick={() => updateCartQty(item.id, -1)}
                        >
                          −
                        </button>
                        <span className="nl-qty-num">{item.qty}</span>
                        <button
                          className="nl-qty-btn"
                          onClick={() => updateCartQty(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="nl-drawer-footer">
                <div className="nl-drawer-total">
                  <span>Subtotal:</span>
                  <span className="nl-total-num">
                    ₹{cartTotal.toLocaleString('en-IN')}.00
                  </span>
                </div>
                <a
                  href={getWhatsAppCartUrl(cart, cartTotal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nl-btn-primary"
                  style={{
                    width: '100%',
                    marginBottom: '10px',
                    background: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    fontWeight: 700,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.12c-.24.68-1.39 1.31-1.92 1.39-.5.08-1.14.12-3.69-.93-3.26-1.35-5.36-4.66-5.52-4.88-.16-.22-1.32-1.76-1.32-3.36s.84-2.39 1.14-2.72c.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.2.01.47-.08.74.56.27.66.93 2.27 1.01 2.44.08.16.14.36.03.58-.11.22-.16.36-.33.56-.16.2-.35.45-.5.6-.16.16-.33.34-.14.67.19.33.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.96 1.04-1.29.22-.33.44-.27.74-.16.3.11 1.92.9 2.25 1.06.33.16.55.25.63.39.08.14.08.82-.16 1.5z" />
                  </svg>
                  <span>ORDER VIA WHATSAPP →</span>
                </a>
                <div style={{ textAlign: 'center', fontSize: '0.65rem', color: 'var(--gray)' }}>
                  100% Guaranteed Genuine Equipment with Free Assembly
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
