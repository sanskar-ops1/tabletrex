'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import './CircularRacketCarousel.css'; // Re-use same CSS — same layout

export const CATEGORY_RUBBERS = {
  SPIN: [
    {
      id: 'dhs-hurricane-3',
      name: 'DHS Hurricane 3',
      brand: 'DHS',
      price: '₹1,899',
      image: '/images/red-rubber.jpg',
      desc: 'Tacky Chinese topsheet engineered for devastating heavy topspin loops.',
      summary: 'The benchmark Chinese rubber for looping and spin dominance.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.15mm DENSE BLUE',      val: 88 },
        topsheet: { label: 'TOPSHEET', sub: 'TACKY CHINESE GRIP',     val: 95 },
        pips:     { label: 'PIPS',     sub: 'CONICAL HIGH-DWELL',      val: 91 },
        ittf:     { label: 'ITTF',     sub: 'REG 24-108 TOURNAMENT',   val: 100 },
      },
    },
    {
      id: 'yasaka-rakza-z',
      name: 'Yasaka Rakza Z',
      brand: 'YASAKA',
      price: '₹2,499',
      image: '/images/black-rubber.jpg',
      desc: 'Hybrid ZAP sponge with extreme topspin grip for mid-distance looping.',
      summary: 'ZAP tensor sponge — maximum rotational velocity at contact.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.0mm ZAP TENSOR',       val: 84 },
        topsheet: { label: 'TOPSHEET', sub: 'MAX SPIN FRICTION',       val: 92 },
        pips:     { label: 'PIPS',     sub: 'HIGH-DWELL ARRAY',        val: 88 },
        ittf:     { label: 'ITTF',     sub: 'REG 14-022 APPROVED',     val: 100 },
      },
    },
    {
      id: 'tibhar-evolution-mxp',
      name: 'Tibhar Evolution MX-P',
      brand: 'TIBHAR',
      price: '₹3,199',
      image: '/images/tibhar-rubber.jpg',
      desc: 'Max Power Energy Cell sponge for explosive spin-speed looping.',
      summary: 'Energy Cell tensor for ferocious close-table loop attacks.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.1mm ENERGY CELL',      val: 87 },
        topsheet: { label: 'TOPSHEET', sub: 'POWER SPIN SHEET',        val: 90 },
        pips:     { label: 'PIPS',     sub: 'EXPANDED PIPS MATRIX',    val: 85 },
        ittf:     { label: 'ITTF',     sub: 'REG TIB-09 CERTIFIED',    val: 100 },
      },
    },
    {
      id: 'xiom-vega-china',
      name: 'Xiom Vega China',
      brand: 'XIOM',
      price: '₹2,799',
      image: '/images/red-rubber.jpg',
      desc: 'Carbo-Black sponge fused with Chinese topsheet for tacky spin power.',
      summary: 'Chinese-style tacky grip with European tensor sponge.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.0mm CARBO-BLACK',      val: 82 },
        topsheet: { label: 'TOPSHEET', sub: 'TACKY HYBRID GRIP',       val: 89 },
        pips:     { label: 'PIPS',     sub: 'HEAVY LOOP PIPS',         val: 86 },
        ittf:     { label: 'ITTF',     sub: 'REG XIO-79 APPROVED',     val: 100 },
      },
    },
    {
      id: 'donic-baracuda',
      name: 'Donic Baracuda',
      brand: 'DONIC',
      price: '₹2,199',
      image: '/images/black-rubber.jpg',
      desc: 'Hard, rough topsheet producing extreme rotation and looping bite.',
      summary: 'European spin benchmark — heavy arc and high friction.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.0mm HARD TENSOR',      val: 80 },
        topsheet: { label: 'TOPSHEET', sub: 'ROUGH HIGH-FRICTION',     val: 91 },
        pips:     { label: 'PIPS',     sub: 'GRIP PIPS ARRAY',         val: 87 },
        ittf:     { label: 'ITTF',     sub: 'REG DON-41 APPROVED',     val: 100 },
      },
    },
    {
      id: 'nittaku-fastarc-g1',
      name: 'Nittaku Fastarc G-1',
      brand: 'NITTAKU',
      price: '₹2,999',
      image: '/images/tibhar-rubber.jpg',
      desc: 'High-tension tensor rubber offering outstanding spin and linear speed.',
      summary: 'Fastarc spinforce technology — clean arcing loop flight.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.0mm SPINFORCE FOAM',   val: 83 },
        topsheet: { label: 'TOPSHEET', sub: 'HIGH-TENSION GRIP',       val: 93 },
        pips:     { label: 'PIPS',     sub: 'INVERTED SPIN PIPS',      val: 89 },
        ittf:     { label: 'ITTF',     sub: 'REG NIT-G1 TOURNAMENT',   val: 100 },
      },
    },
  ],
  SPEED: [
    {
      id: 'butterfly-tenergy-64',
      name: 'Butterfly Tenergy 64',
      brand: 'BUTTERFLY',
      price: '₹5,499',
      image: '/images/red-rubber.jpg',
      desc: 'Explosive spring sponge delivering blistering flat speed and velocity.',
      summary: 'The fastest Tenergy variant — flat counters at lethal pace.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.1mm SPRING FOAM',      val: 98 },
        topsheet: { label: 'TOPSHEET', sub: 'TENSOR SPEED SHEET',      val: 96 },
        pips:     { label: 'PIPS',     sub: 'EXPANDED SPEED PIPS',     val: 94 },
        ittf:     { label: 'ITTF',     sub: 'REG 05-001 PRO TENSOR',   val: 100 },
      },
    },
    {
      id: 'stiga-mantra-m',
      name: 'Stiga Mantra M',
      brand: 'STIGA',
      price: '₹2,699',
      image: '/images/black-rubber.jpg',
      desc: 'Dynamic Energy Cell III sponge for mid-weight fast drives and counters.',
      summary: 'Mantra M — balanced speed and dwell for modern attackers.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.0mm DEC-III FOAM',     val: 86 },
        topsheet: { label: 'TOPSHEET', sub: 'DRIVE SPEED SHEET',       val: 88 },
        pips:     { label: 'PIPS',     sub: 'OFFENSIVE PIPS ARRAY',    val: 84 },
        ittf:     { label: 'ITTF',     sub: 'REG STG-21 APPROVED',     val: 100 },
      },
    },
    {
      id: 'victas-v15-extra',
      name: 'Victas V>15 Extra',
      brand: 'VICTAS',
      price: '₹3,899',
      image: '/images/tibhar-rubber.jpg',
      desc: 'Extra-hard tensor sponge maximising direct energy for smash finishers.',
      summary: 'Hard sponge catapult — lethal smash and drive finisher.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.0mm EXTRA-HARD',       val: 90 },
        topsheet: { label: 'TOPSHEET', sub: 'CATAPULT TOPSHEET',       val: 92 },
        pips:     { label: 'PIPS',     sub: 'DIRECT-IMPACT PIPS',      val: 89 },
        ittf:     { label: 'ITTF',     sub: 'REG VIC-15 CERTIFIED',    val: 100 },
      },
    },
    {
      id: 'tibhar-hybrid-k1',
      name: 'Tibhar Hybrid K1',
      brand: 'TIBHAR',
      price: '₹3,499',
      image: '/images/red-rubber.jpg',
      desc: 'Hybrid boosted sponge combining speed and light spin for drives.',
      summary: 'K1 hybrid tensor — fast and clean for offensive counters.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.1mm HYBRID BOOST',     val: 88 },
        topsheet: { label: 'TOPSHEET', sub: 'SPEED HYBRID GRIP',       val: 90 },
        pips:     { label: 'PIPS',     sub: 'SPEED ARC PIPS',          val: 86 },
        ittf:     { label: 'ITTF',     sub: 'REG TIB-K1 APPROVED',     val: 100 },
      },
    },
    {
      id: 'dhs-hurricane-neo-3',
      name: 'DHS Hurricane Neo III',
      brand: 'DHS',
      price: '₹2,299',
      image: '/images/black-rubber.jpg',
      desc: 'Neo blue sponge pre-boosted for high rebound and fast drive returns.',
      summary: 'Neo III — factory-boosted for explosive flat hitting.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.15mm NEO BLUE',        val: 85 },
        topsheet: { label: 'TOPSHEET', sub: 'BOOSTED FLAT DRIVE',      val: 87 },
        pips:     { label: 'PIPS',     sub: 'NEO REBOUND PIPS',        val: 83 },
        ittf:     { label: 'ITTF',     sub: 'REG DHS-NEO APPROVED',    val: 100 },
      },
    },
    {
      id: 'xiom-omega-vii-euro',
      name: 'Xiom Omega VII Euro',
      brand: 'XIOM',
      price: '₹4,199',
      image: '/images/tibhar-rubber.jpg',
      desc: 'Carbo-Black VII sponge with catapult speed for European style attackers.',
      summary: 'Omega VII Euro — fast and linear for attacking loops.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.0mm CARBO-VII',        val: 91 },
        topsheet: { label: 'TOPSHEET', sub: 'LINEAR SPEED SHEET',      val: 93 },
        pips:     { label: 'PIPS',     sub: 'EURO SPEED GRID',         val: 88 },
        ittf:     { label: 'ITTF',     sub: 'REG XIO-07 CERTIFIED',    val: 100 },
      },
    },
  ],
  CONTROL: [
    {
      id: 'yasaka-rakza-7-soft',
      name: 'Yasaka Rakza 7 Soft',
      brand: 'YASAKA',
      price: '₹2,099',
      image: '/images/red-rubber.jpg',
      desc: 'Soft sponge with generous dwell time for precision placement control.',
      summary: 'Rakza 7 Soft — maximum contact time for short-game mastery.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '1.8mm SOFT ABSORB',      val: 45 },
        topsheet: { label: 'TOPSHEET', sub: 'HIGH-ELASTIC GUM',        val: 82 },
        pips:     { label: 'PIPS',     sub: 'HIGH DWELL PIPS',         val: 80 },
        ittf:     { label: 'ITTF',     sub: 'REG 12-003 PRECISION',    val: 100 },
      },
    },
    {
      id: 'butterfly-rozena',
      name: 'Butterfly Rozena',
      brand: 'BUTTERFLY',
      price: '₹3,499',
      image: '/images/black-rubber.jpg',
      desc: 'Spring Sponge X with Tenergy performance for precision return players.',
      summary: 'Rozena — Tenergy feel at an accessible control level.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.0mm SPRING SPX',       val: 60 },
        topsheet: { label: 'TOPSHEET', sub: 'TENERGY CONTROL',         val: 80 },
        pips:     { label: 'PIPS',     sub: 'MEDIUM DWELL PIPS',       val: 76 },
        ittf:     { label: 'ITTF',     sub: 'REG BTY-ROZ APPROVED',    val: 100 },
      },
    },
    {
      id: 'donic-coppa-x2',
      name: 'Donic Coppa X2',
      brand: 'DONIC',
      price: '₹1,899',
      image: '/images/tibhar-rubber.jpg',
      desc: 'Soft flex sponge for clean arc placement and consistent return play.',
      summary: 'Coppa X2 — German-engineered for reliable placement control.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '1.8mm FLEX SOFT',        val: 42 },
        topsheet: { label: 'TOPSHEET', sub: 'CONTROL GUM SHEET',       val: 83 },
        pips:     { label: 'PIPS',     sub: 'TOUCH-DWELL PIPS',        val: 78 },
        ittf:     { label: 'ITTF',     sub: 'REG DON-X2 CERTIFIED',    val: 100 },
      },
    },
    {
      id: 'tibhar- 1q',
      name: 'Tibhar 1Q',
      brand: 'TIBHAR',
      price: '₹1,699',
      image: '/images/red-rubber.jpg',
      desc: 'Reliable all-round rubber for training and consistent placement.',
      summary: '1Q — forgiving training rubber with clean ball contact.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '1.8mm TRAINING FOAM',    val: 40 },
        topsheet: { label: 'TOPSHEET', sub: 'TRAINING CONTROL',        val: 78 },
        pips:     { label: 'PIPS',     sub: 'STANDARD PIPS ARRAY',     val: 72 },
        ittf:     { label: 'ITTF',     sub: 'REG TIB-1Q APPROVED',     val: 100 },
      },
    },
    {
      id: 'nittaku-moristo-sp-ax',
      name: 'Nittaku Moristo SP AX',
      brand: 'NITTAKU',
      price: '₹2,399',
      image: '/images/black-rubber.jpg',
      desc: 'Medium sponge with consistent arc and excellent rally placement.',
      summary: 'Moristo SP AX — reliable all-position control rubber.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '1.9mm MEDIUM FOAM',      val: 50 },
        topsheet: { label: 'TOPSHEET', sub: 'CONSISTENT ARC GRIP',     val: 79 },
        pips:     { label: 'PIPS',     sub: 'PLACEMENT PIPS ARRAY',    val: 75 },
        ittf:     { label: 'ITTF',     sub: 'REG NIT-SP APPROVED',     val: 100 },
      },
    },
    {
      id: 'stiga-calibra-lt',
      name: 'Stiga Calibra LT',
      brand: 'STIGA',
      price: '₹1,999',
      image: '/images/tibhar-rubber.jpg',
      desc: 'Light tensor for effortless clean placement and training consistency.',
      summary: 'Calibra LT — light-tension training rubber for all levels.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '1.8mm LIGHT TENSOR',     val: 44 },
        topsheet: { label: 'TOPSHEET', sub: 'LIGHT TOUCH SHEET',       val: 76 },
        pips:     { label: 'PIPS',     sub: 'LIGHT TENSOR PIPS',       val: 70 },
        ittf:     { label: 'ITTF',     sub: 'REG STG-LT APPROVED',     val: 100 },
      },
    },
  ],
  OFFENSIVE: [
    {
      id: 'butterfly-tenergy-05',
      name: 'Butterfly Tenergy 05',
      brand: 'BUTTERFLY',
      price: '₹5,799',
      image: '/images/red-rubber.jpg',
      desc: 'World No.1 rubber — Spring Sponge for explosive spin-speed looping.',
      summary: 'Tenergy 05 — the definitive offensive rubber worldwide.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.1mm SPRING SPONGE',    val: 96 },
        topsheet: { label: 'TOPSHEET', sub: 'MAX-ENERGY SPIN SHEET',   val: 98 },
        pips:     { label: 'PIPS',     sub: 'DIRECT-IMPACT MATRIX',    val: 95 },
        ittf:     { label: 'ITTF',     sub: 'REG 05-002 WORLD CLASS',  val: 100 },
      },
    },
    {
      id: 'dhs-hurricane-8',
      name: 'DHS Hurricane 8',
      brand: 'DHS',
      price: '₹2,699',
      image: '/images/black-rubber.jpg',
      desc: 'Hard black sponge delivering maximum attacking power and speed.',
      summary: 'Hurricane 8 — fast and lethal for decisive offensive play.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.1mm HARD BLACK',       val: 90 },
        topsheet: { label: 'TOPSHEET', sub: 'ATTACK POWER SHEET',      val: 92 },
        pips:     { label: 'PIPS',     sub: 'POWER PIPS ARRAY',        val: 88 },
        ittf:     { label: 'ITTF',     sub: 'REG DHS-8 APPROVED',      val: 100 },
      },
    },
    {
      id: 'xiom-omega-vii-asia',
      name: 'Xiom Omega VII Asia',
      brand: 'XIOM',
      price: '₹4,499',
      image: '/images/tibhar-rubber.jpg',
      desc: 'Carbo-Black VII sponge with tacky topsheet for Chinese-style attack.',
      summary: 'Omega VII Asia — tacky spin power meets tensor catapult.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.0mm CARBO-TACKY',      val: 93 },
        topsheet: { label: 'TOPSHEET', sub: 'TACKY ATTACK GRIP',       val: 95 },
        pips:     { label: 'PIPS',     sub: 'ASIA LOOP PIPS',          val: 92 },
        ittf:     { label: 'ITTF',     sub: 'REG XIO-07A CERTIFIED',   val: 100 },
      },
    },
    {
      id: 'victas-v20-double-extra',
      name: 'Victas V>20 Double Extra',
      brand: 'VICTAS',
      price: '₹4,199',
      image: '/images/red-rubber.jpg',
      desc: 'Double extra hard tensor for ferocious loop-drive offensive play.',
      summary: 'V>20 DE — maximum catapult for modern offensive dominance.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.0mm DOUBLE-HARD',      val: 94 },
        topsheet: { label: 'TOPSHEET', sub: 'FEROCIOUS LOOP SHEET',    val: 96 },
        pips:     { label: 'PIPS',     sub: 'CATAPULT PIPS MATRIX',    val: 91 },
        ittf:     { label: 'ITTF',     sub: 'REG VIC-20 APPROVED',     val: 100 },
      },
    },
    {
      id: 'stiga-mantra-h',
      name: 'Stiga Mantra H',
      brand: 'STIGA',
      price: '₹2,999',
      image: '/images/black-rubber.jpg',
      desc: 'Hard DEC-III sponge for offensive loop-drive power and flat smashes.',
      summary: 'Mantra H — hard tension for relentless attack power.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.0mm DEC-III HARD',     val: 88 },
        topsheet: { label: 'TOPSHEET', sub: 'OFFENSIVE HARD SHEET',    val: 89 },
        pips:     { label: 'PIPS',     sub: 'HARD ATTACK PIPS',        val: 86 },
        ittf:     { label: 'ITTF',     sub: 'REG STG-MH APPROVED',     val: 100 },
      },
    },
    {
      id: 'nittaku-fastarc-c1',
      name: 'Nittaku Fastarc C-1',
      brand: 'NITTAKU',
      price: '₹3,299',
      image: '/images/tibhar-rubber.jpg',
      desc: 'Spinforce offensive tensor for heavy attacking loops with high friction.',
      summary: 'Fastarc C-1 — Japan-grade offensive friction for looping.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '2.0mm SPINFORCE-C',      val: 87 },
        topsheet: { label: 'TOPSHEET', sub: 'OFFENSIVE FRICTION',      val: 91 },
        pips:     { label: 'PIPS',     sub: 'HIGH-GRIP LOOP PIPS',     val: 89 },
        ittf:     { label: 'ITTF',     sub: 'REG NIT-C1 APPROVED',     val: 100 },
      },
    },
  ],
  DEFENSIVE: [
    {
      id: 'donic-slice-40',
      name: 'Donic Slice 40',
      brand: 'DONIC',
      price: '₹1,399',
      image: '/images/red-rubber.jpg',
      desc: 'Thin dampening sponge for heavy backspin chops and controlled defense.',
      summary: 'Slice 40 — excellent chop control and long defense placement.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '1.5mm DAMPENING FOAM',   val: 35 },
        topsheet: { label: 'TOPSHEET', sub: 'MICRO CHOP TEXTURE',      val: 82 },
        pips:     { label: 'PIPS',     sub: 'DECELERATION PIPS',       val: 70 },
        ittf:     { label: 'ITTF',     sub: 'REG DON-33 APPROVED',     val: 100 },
      },
    },
    {
      id: 'butterfly-bryce-fx',
      name: 'Butterfly Bryce FX',
      brand: 'BUTTERFLY',
      price: '₹4,199',
      image: '/images/black-rubber.jpg',
      desc: 'Soft spring sponge for deep dampening and consistent defensive reset.',
      summary: 'Bryce FX — soft and precise for close-table defensive blocks.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '1.8mm FX SOFT SPRING',   val: 40 },
        topsheet: { label: 'TOPSHEET', sub: 'BLOCK CONTROL SHEET',     val: 79 },
        pips:     { label: 'PIPS',     sub: 'DAMPENING PIPS ARRAY',    val: 72 },
        ittf:     { label: 'ITTF',     sub: 'REG BTY-FX APPROVED',     val: 100 },
      },
    },
    {
      id: 'tibhar-grip-s-eu',
      name: 'Tibhar Grip-S EU',
      brand: 'TIBHAR',
      price: '₹1,799',
      image: '/images/tibhar-rubber.jpg',
      desc: 'Medium-soft gripping sheet for consistent backspin and chop defense.',
      summary: 'Grip-S EU — reliable chop and block rubber for defenders.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '1.6mm GRIP SOFT',        val: 38 },
        topsheet: { label: 'TOPSHEET', sub: 'BACKSPIN GRIP SHEET',     val: 80 },
        pips:     { label: 'PIPS',     sub: 'CHOP CONTROL PIPS',       val: 74 },
        ittf:     { label: 'ITTF',     sub: 'REG TIB-GS APPROVED',     val: 100 },
      },
    },
    {
      id: 'nittaku-hammond-fa',
      name: 'Nittaku Hammond FA',
      brand: 'NITTAKU',
      price: '₹2,199',
      image: '/images/red-rubber.jpg',
      desc: 'Super soft absorbing sponge for maximum ball deceleration on chops.',
      summary: 'Hammond FA — soft absorption for deep defensive chopping.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '1.5mm FA ABSORB',        val: 32 },
        topsheet: { label: 'TOPSHEET', sub: 'CHOP ABSORB SHEET',       val: 84 },
        pips:     { label: 'PIPS',     sub: 'ABSORBING PIPS ARRAY',    val: 68 },
        ittf:     { label: 'ITTF',     sub: 'REG NIT-FA APPROVED',     val: 100 },
      },
    },
    {
      id: 'yasaka-phantom-007',
      name: 'Yasaka Phantom 007',
      brand: 'YASAKA',
      price: '₹1,599',
      image: '/images/black-rubber.jpg',
      desc: 'Long pips defensive rubber for unpredictable spin reversal returns.',
      summary: 'Phantom 007 — spin-reversing long pips for tricky defense.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: 'OX LONG PIPS',           val: 28 },
        topsheet: { label: 'TOPSHEET', sub: 'SPIN REVERSAL SHEET',     val: 76 },
        pips:     { label: 'PIPS',     sub: 'LONG-PIP DESTABILIZER',   val: 65 },
        ittf:     { label: 'ITTF',     sub: 'REG YAS-007 APPROVED',    val: 100 },
      },
    },
    {
      id: 'victas-curl-p1r',
      name: 'Victas Curl P1R',
      brand: 'VICTAS',
      price: '₹2,499',
      image: '/images/tibhar-rubber.jpg',
      desc: 'Long pips with super low friction for unpredictable lob and chop returns.',
      summary: 'Curl P1R — low-friction long pips for tricky lob defense.',
      profile: {
        sponge:   { label: 'SPONGE',   sub: '0.5mm CURL FOAM',        val: 25 },
        topsheet: { label: 'TOPSHEET', sub: 'CURL LOW FRICTION',       val: 72 },
        pips:     { label: 'PIPS',     sub: 'CURL LONG PIPS',          val: 62 },
        ittf:     { label: 'ITTF',     sub: 'REG VIC-P1 APPROVED',     val: 100 },
      },
    },
  ],
};

export const CIRCULAR_POSITIONS = {
  0:    { x: 0,    y: 8,   z: 35,   rotateY: 0,   scale: 1.06, opacity: 1,    zIndex: 60 },
  1:    { x: 114,  y: 2,   z: -18,  rotateY: -18, scale: 0.88, opacity: 0.88, zIndex: 45 },
  '-1': { x: -114, y: 2,   z: -18,  rotateY: 18,  scale: 0.88, opacity: 0.88, zIndex: 45 },
  2:    { x: 198,  y: -18, z: -85,  rotateY: -10, scale: 0.74, opacity: 0.70, zIndex: 30 },
  '-2': { x: -198, y: -18, z: -85,  rotateY: 10,  scale: 0.74, opacity: 0.70, zIndex: 30 },
  3:    { x: 0,    y: -42, z: -125, rotateY: 0,   scale: 0.72, opacity: 0.62, zIndex: 15 },
};

export default function CircularRubberCarousel({
  category = 'SPIN',
  onSelectRubber,
}) {
  const rubbers = CATEGORY_RUBBERS[category] || CATEGORY_RUBBERS.SPIN;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Reset when category changes, broadcast first rubber
  useEffect(() => {
    setActiveIndex(0);
    const first = rubbers[0];
    if (first && onSelectRubber) onSelectRubber(first);
  }, [category]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelectIndex = useCallback(
    (index) => {
      const clamped = (index + rubbers.length) % rubbers.length;
      setActiveIndex(clamped);
      const chosen = rubbers[clamped];
      if (chosen && onSelectRubber) onSelectRubber(chosen);
    },
    [rubbers, onSelectRubber]
  );

  const handlePrev = useCallback(() => handleSelectIndex(activeIndex - 1), [activeIndex, handleSelectIndex]);
  const handleNext = useCallback(() => handleSelectIndex(activeIndex + 1), [activeIndex, handleSelectIndex]);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };
  const handlePointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const endX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
    const diff = endX - dragStartX.current;
    if (diff > 45) handlePrev();
    else if (diff < -45) handleNext();
  };

  const multX = isMobile ? 0.58 : 1;
  const multY = isMobile ? 0.68 : 1;
  const multZ = isMobile ? 0.55 : 1;
  const scaleMult = isMobile ? 0.88 : 1;

  return (
    <div className="crc-container" aria-label="Interactive 3D Circular Rubber Selector">
      <div
        className="crc-viewport"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <button type="button" className="crc-nav-btn crc-nav-prev" onClick={handlePrev} aria-label="Previous Rubber">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button type="button" className="crc-nav-btn crc-nav-next" onClick={handleNext} aria-label="Next Rubber">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="crc-stage">
          {rubbers.map((card, i) => {
            const count = rubbers.length;
            let diff = i - activeIndex;
            while (diff > 3) diff -= count;
            while (diff < -2) diff += count;

            const pos = CIRCULAR_POSITIONS[String(diff)] || CIRCULAR_POSITIONS[0];
            const isActive = diff === 0;
            const isBack = Math.abs(diff) >= 2;

            return (
              <div
                key={card.id}
                className={`crc-card${isActive ? ' active' : ''}${isBack ? ' is-back' : ''}`}
                style={{
                  transform: `translateX(${pos.x * multX}px) translateY(${pos.y * multY}px) translateZ(${pos.z * multZ}px) rotateY(${pos.rotateY}deg) scale(${pos.scale * scaleMult})`,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                }}
                onClick={() => handleSelectIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelectIndex(i); }}
                aria-label={`${card.name} - ${card.brand}`}
              >
                <img src={card.image} alt={card.name} className="crc-card-img" loading="lazy" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="crc-dots" role="tablist" aria-label="Rubber carousel pagination">
        {rubbers.map((card, i) => (
          <button
            key={card.id}
            type="button"
            className={`crc-dot${i === activeIndex ? ' active' : ''}`}
            onClick={() => handleSelectIndex(i)}
            aria-label={`Go to ${card.name}`}
          />
        ))}
      </div>
    </div>
  );
}
