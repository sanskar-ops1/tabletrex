'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import './CircularRacketCarousel.css';

export const CATEGORY_RACKETS = {
  BEGINNER: [
    {
      id: 'stiga-clipper',
      name: 'Stiga Clipper Wood',
      brand: 'STIGA',
      price: '₹3,499',
      image: '/images/stiga-blade.jpg',
      desc: 'Targeted control & forgiving flex for learning fundamental stroke mechanics.',
      summary: 'Perfect first blade. Full wood, great tactile feel.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '1.8mm SOFT FOAM',       val: 55 },
        rubber:  { label: 'RUBBER',  sub: 'ALL-WOOD CONTROL',       val: 62 },
        blade:   { label: 'BLADE',   sub: '5-PLY AYOUS WOOD',       val: 58 },
        handle:  { label: 'HANDLE',  sub: 'FLARED WOOD GRIP',       val: 70 },
      },
    },
    {
      id: 'donic-appelgren',
      name: 'Donic Appelgren Allplay',
      brand: 'DONIC',
      price: '₹2,999',
      image: '/images/donic-blade.jpg',
      desc: 'Legendary Swedish all-wood blade renowned for supreme ball control.',
      summary: 'Swedish classic. Supreme control and forgiving sweet spot.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '1.6mm MEDIUM FOAM',      val: 48 },
        rubber:  { label: 'RUBBER',  sub: 'SWEDISH CONTROL',         val: 72 },
        blade:   { label: 'BLADE',   sub: '5-PLY LIMBA OUTER',       val: 60 },
        handle:  { label: 'HANDLE',  sub: 'COMFORT STRAIGHT',        val: 68 },
      },
    },
    {
      id: 'butterfly-primorac',
      name: 'Butterfly Primorac Classic',
      brand: 'BUTTERFLY',
      price: '₹4,499',
      image: '/images/pro-blade.jpg',
      desc: 'Proven 5-ply African wood design engineered for balanced progression.',
      summary: 'Time-tested African wood feel. Smooth rally transition.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '1.9mm ELASTIC FOAM',      val: 60 },
        rubber:  { label: 'RUBBER',  sub: 'TACKY TRAINING SHEET',    val: 65 },
        blade:   { label: 'BLADE',   sub: '5-PLY AFRICAN WOOD',      val: 63 },
        handle:  { label: 'HANDLE',  sub: 'FLARED ANATOMIC',          val: 72 },
      },
    },
    {
      id: 'yasaka-sweden-extra',
      name: 'Yasaka Sweden Extra',
      brand: 'YASAKA',
      price: '₹3,200',
      image: '/images/custom-racket.jpg',
      desc: 'Scandinavia-crafted flexible outer veneers for targeted placement.',
      summary: 'High tactile touch with balanced flex for developing players.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '1.7mm SCANDINAVIAN',      val: 52 },
        rubber:  { label: 'RUBBER',  sub: 'SOFT TOUCH SHEET',         val: 67 },
        blade:   { label: 'BLADE',   sub: 'FLEX SPRUCE VENEERS',      val: 55 },
        handle:  { label: 'HANDLE',  sub: 'CLASSIC FLARED GRIP',      val: 64 },
      },
    },
    {
      id: 'tibhar-iv-l',
      name: 'Tibhar IV-L Light Contact',
      brand: 'TIBHAR',
      price: '₹2,850',
      image: '/images/why-hero-racket.jpg',
      desc: 'Soft Ayous inner core dampening impact shock on defensive resets.',
      summary: 'Vibration absorbing core for effortless baseline control.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '1.5mm ABSORB FOAM',       val: 44 },
        rubber:  { label: 'RUBBER',  sub: 'DAMP CONTROL SHEET',       val: 74 },
        blade:   { label: 'BLADE',   sub: 'AYOUS INNER CORE',         val: 50 },
        handle:  { label: 'HANDLE',  sub: 'LIGHTWEIGHT FL',            val: 66 },
      },
    },
    {
      id: 'cornilleau-aero-all',
      name: 'Cornilleau Aero All',
      brand: 'CORNILLEAU',
      price: '₹3,100',
      image: '/images/why-lineup-racket-studio.jpg',
      desc: 'Ultra-light aerodynamic profile providing clean stroke mechanics.',
      summary: 'Featherlight handling with ergonomic flared grip.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '1.8mm AERO FOAM',         val: 53 },
        rubber:  { label: 'RUBBER',  sub: 'BALANCED TOPSHEET',        val: 63 },
        blade:   { label: 'BLADE',   sub: 'AERO 5-PLY LIGHT',         val: 57 },
        handle:  { label: 'HANDLE',  sub: 'ERGONOMIC FLARED',          val: 75 },
      },
    },
  ],
  INTERMEDIATE: [
    {
      id: 'donic-waldner-senso',
      name: 'Donic Waldner Senso Carbon',
      brand: 'DONIC',
      price: '₹5,999',
      image: '/images/donic-blade.jpg',
      desc: '5+2 Carbon composite with expanded sweet spot to transition to attack.',
      summary: 'Upgrade ready. Carbon assist for elevated pace.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm HIGH-ELASTIC',      val: 72 },
        rubber:  { label: 'RUBBER',  sub: 'TENSOR TOPSHEET',          val: 75 },
        blade:   { label: 'BLADE',   sub: '5+2 SENSO CARBON',         val: 70 },
        handle:  { label: 'HANDLE',  sub: 'SENSO VIBRA GRIP',         val: 76 },
      },
    },
    {
      id: 'stiga-infinity-vps',
      name: 'Stiga Infinity VPS V',
      brand: 'STIGA',
      price: '₹6,499',
      image: '/images/stiga-blade.jpg',
      desc: 'Diamond Touch surface finish with VPS wood core for solid mid-distance drive.',
      summary: 'Modern offensive wood with crisp acoustic feedback.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm VPS ELASTIC',       val: 70 },
        rubber:  { label: 'RUBBER',  sub: 'DIAMOND TOPSHEET',         val: 73 },
        blade:   { label: 'BLADE',   sub: 'VPS WOOD CORE',            val: 68 },
        handle:  { label: 'HANDLE',  sub: 'ANATOMIC FL GRIP',         val: 74 },
      },
    },
    {
      id: 'butterfly-korbel',
      name: 'Butterfly Petr Korbel',
      brand: 'BUTTERFLY',
      price: '₹5,499',
      image: '/images/pro-blade.jpg',
      desc: 'Classic Limba outer plies for high-dwell looping and counter topspins.',
      summary: 'Benchmark looping blade for developing technical attackers.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm DWELL FOAM',        val: 74 },
        rubber:  { label: 'RUBBER',  sub: 'SPIN ARC TOPSHEET',        val: 78 },
        blade:   { label: 'BLADE',   sub: '5-PLY LIMBA OUTER',        val: 72 },
        handle:  { label: 'HANDLE',  sub: 'KORBEL FLARED',            val: 71 },
      },
    },
    {
      id: 'yasaka-extra-offensive',
      name: 'Yasaka Ma Lin Extra Offensive',
      brand: 'YASAKA',
      price: '₹5,800',
      image: '/images/custom-racket.jpg',
      desc: 'Hard walnut outer veneers producing sharp catapult trajectory.',
      summary: 'Crisp speed assist for active close-to-table counter-drives.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm CATAPULT FOAM',     val: 76 },
        rubber:  { label: 'RUBBER',  sub: 'WALNUT SHARP SHEET',       val: 76 },
        blade:   { label: 'BLADE',   sub: 'HARD WALNUT VENEER',       val: 74 },
        handle:  { label: 'HANDLE',  sub: 'OFFENSIVE STRAIGHT',        val: 70 },
      },
    },
    {
      id: 'tibhar-samsonov-cb',
      name: 'Tibhar Stratus Samsonov CB',
      brand: 'TIBHAR',
      price: '₹6,200',
      image: '/images/why-hero-racket.jpg',
      desc: 'Flexible carbon blend maintaining exceptional ball dwell on blocks.',
      summary: 'Balanced carbon flex engineered for modern progressive offense.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm FLEX CARBON',       val: 73 },
        rubber:  { label: 'RUBBER',  sub: 'BLOCK DWELL SHEET',        val: 77 },
        blade:   { label: 'BLADE',   sub: 'CB CARBON BLEND',          val: 71 },
        handle:  { label: 'HANDLE',  sub: 'SAMSONOV FLARED',          val: 73 },
      },
    },
    {
      id: 'xiom-offensive-s',
      name: 'Xiom Offensive S',
      brand: 'XIOM',
      price: '₹4,999',
      image: '/images/why-lineup-racket-studio.jpg',
      desc: '5-ply pure offensive structure with enhanced sweet spot stability.',
      summary: 'Consistent loop-drive performance across all rally phases.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm SWEET SPOT',        val: 69 },
        rubber:  { label: 'RUBBER',  sub: 'LOOP-DRIVE SHEET',         val: 74 },
        blade:   { label: 'BLADE',   sub: '5-PLY PURE OFFENSE',       val: 67 },
        handle:  { label: 'HANDLE',  sub: 'ERGONOMIC FL GRIP',        val: 72 },
      },
    },
  ],
  ADVANCED: [
    {
      id: 'butterfly-tb-alc',
      name: 'Butterfly TB-ALC (Timo Boll)',
      brand: 'BUTTERFLY',
      price: '₹12,499',
      image: '/images/pro-blade.jpg',
      desc: 'Arylate-Carbon composite offering world-class stiffness and precision.',
      summary: 'Arylate-Carbon. World-class crisp performance.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.1mm SPRING MAX',        val: 90 },
        rubber:  { label: 'RUBBER',  sub: 'HIGH-TENSION PRO',         val: 92 },
        blade:   { label: 'BLADE',   sub: 'ARYLATE-CARBON ALC',       val: 93 },
        handle:  { label: 'HANDLE',  sub: 'TOURNAMENT GRADE',          val: 88 },
      },
    },
    {
      id: 'stiga-carbonado-190',
      name: 'Stiga Carbonado 190',
      brand: 'STIGA',
      price: '₹14,200',
      image: '/images/stiga-blade.jpg',
      desc: 'TeXtreme carbon weave aligned at 90 degrees for direct flat power.',
      summary: 'Ultra-low trajectory with explosive tournament strike dynamics.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.1mm TEXCARBON MAX',     val: 88 },
        rubber:  { label: 'RUBBER',  sub: 'FLAT POWER TOPSHEET',      val: 91 },
        blade:   { label: 'BLADE',   sub: 'TEXTREME 90° WEAVE',       val: 95 },
        handle:  { label: 'HANDLE',  sub: 'ELITE CARBON GRIP',        val: 87 },
      },
    },
    {
      id: 'donic-ovtcharov-tc',
      name: 'Donic Ovtcharov True Carbon',
      brand: 'DONIC',
      price: '₹11,999',
      image: '/images/donic-blade.jpg',
      desc: 'High-grade Aramid Carbon inner core offering maximum speed reserve.',
      summary: 'Dimitrij Ovtcharov weapon of choice for relentless attacking play.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.1mm ARAMID FOAM',       val: 87 },
        rubber:  { label: 'RUBBER',  sub: 'MAX SPEED RESERVE',        val: 89 },
        blade:   { label: 'BLADE',   sub: 'TRUE CARBON ARAMID',       val: 91 },
        handle:  { label: 'HANDLE',  sub: 'PRO ATTACK FL',            val: 85 },
      },
    },
    {
      id: 'dhs-hurricane-301',
      name: 'DHS Hurricane 301',
      brand: 'DHS',
      price: '₹8,999',
      image: '/images/custom-racket.jpg',
      desc: 'BBT technology ensuring consistent rebound and lethal mid-court power.',
      summary: 'Internal carbon structure with heavy catapult on active swings.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.1mm BBT FOAM',          val: 83 },
        rubber:  { label: 'RUBBER',  sub: 'MID-COURT CATAPULT',       val: 85 },
        blade:   { label: 'BLADE',   sub: 'BBT INNER CARBON',         val: 86 },
        handle:  { label: 'HANDLE',  sub: 'FLARED PRO GRIP',          val: 82 },
      },
    },
    {
      id: 'tibhar-fortino-pro',
      name: 'Tibhar Fortino Pro',
      brand: 'TIBHAR',
      price: '₹13,500',
      image: '/images/why-hero-racket.jpg',
      desc: 'Dyneema fabric synthesis providing acute tactile clarity.',
      summary: 'World-first super-fiber composite for elite competition match play.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.1mm DYNEEMA FOAM',      val: 91 },
        rubber:  { label: 'RUBBER',  sub: 'TACTILE CLARITY',          val: 93 },
        blade:   { label: 'BLADE',   sub: 'SUPER-FIBER WEAVE',        val: 94 },
        handle:  { label: 'HANDLE',  sub: 'COMPETITION GRIP',         val: 90 },
      },
    },
    {
      id: 'nittaku-acoustic-carbon',
      name: 'Nittaku Acoustic Carbon',
      brand: 'NITTAKU',
      price: '₹15,999',
      image: '/images/why-lineup-racket-studio.jpg',
      desc: 'Stringed-instrument adhesive technology with outer FE-carbon weave.',
      summary: 'Acoustic resonant sound with ferocious loop-drive dynamics.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.1mm RESONANT FOAM',     val: 89 },
        rubber:  { label: 'RUBBER',  sub: 'FE-CARBON TOPSHEET',       val: 94 },
        blade:   { label: 'BLADE',   sub: 'ACOUSTIC CARBON',          val: 96 },
        handle:  { label: 'HANDLE',  sub: 'LUTHIER BOND GRIP',        val: 86 },
      },
    },
  ],
  OFFENSIVE: [
    {
      id: 'dhs-long-5',
      name: 'DHS Hurricane Long 5',
      brand: 'DHS',
      price: '₹4,299',
      image: '/images/custom-racket.jpg',
      desc: 'Aggressive forward strike dynamics engineered for high-velocity looping & kills.',
      summary: 'Power and sheer speed. Made for relentless attackers.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.1mm POWER HARD',        val: 78 },
        rubber:  { label: 'RUBBER',  sub: 'KILL SHOT FRICTION',       val: 82 },
        blade:   { label: 'BLADE',   sub: '7-PLY POWER WOOD',         val: 80 },
        handle:  { label: 'HANDLE',  sub: 'ATTACK FLARED',            val: 76 },
      },
    },
    {
      id: 'butterfly-fzd-alc',
      name: 'Butterfly Fan Zhendong ALC',
      brand: 'BUTTERFLY',
      price: '₹14,999',
      image: '/images/pro-blade.jpg',
      desc: 'Elite Arylate-Carbon core delivering ferocious bounce on quick loop kills.',
      summary: 'Official Fan Zhendong weapon with acute offensive catapult.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.15mm ELITE FOAM',       val: 95 },
        rubber:  { label: 'RUBBER',  sub: 'FZD LOOP-KILL',            val: 97 },
        blade:   { label: 'BLADE',   sub: 'ALC PRO CATAPULT',         val: 98 },
        handle:  { label: 'HANDLE',  sub: 'FZD SIGNATURE GRIP',       val: 93 },
      },
    },
    {
      id: 'stiga-dynasty-carbon',
      name: 'Stiga Dynasty Carbon',
      brand: 'STIGA',
      price: '₹16,500',
      image: '/images/stiga-blade.jpg',
      desc: 'TeXtreme+ carbon weave providing unrestricted sweet spot punch across all zones.',
      summary: 'Developed with Xu Xin for explosive forehand looping domination.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.1mm TEXTREME+',         val: 92 },
        rubber:  { label: 'RUBBER',  sub: 'FOREHAND DOMINATOR',       val: 95 },
        blade:   { label: 'BLADE',   sub: 'DYNASTY CARBON',           val: 97 },
        handle:  { label: 'HANDLE',  sub: 'XU XIN SIGNATURE',         val: 91 },
      },
    },
    {
      id: 'donic-carbospeed',
      name: 'Donic Original CarboSpeed',
      brand: 'DONIC',
      price: '₹7,499',
      image: '/images/donic-blade.jpg',
      desc: 'Thick balsa center core reinforced by rigid carbon for blistering direct smashes.',
      summary: 'Uncompromising speed weapon for decisive flat finishing strikes.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.1mm BALSA HARD',        val: 82 },
        rubber:  { label: 'RUBBER',  sub: 'SMASH FRICTION MAX',       val: 88 },
        blade:   { label: 'BLADE',   sub: 'BALSA+CARBON RIGID',       val: 90 },
        handle:  { label: 'HANDLE',  sub: 'SPEED FL GRIP',            val: 81 },
      },
    },
    {
      id: 'tibhar-nuytinck',
      name: 'Tibhar Cedric Nuytinck Hybrid',
      brand: 'TIBHAR',
      price: '₹12,200',
      image: '/images/why-hero-racket.jpg',
      desc: 'Synthetic hybrid weave engineered for close-table aggressive countering.',
      summary: 'Sharp catapult velocity for modern counter-looping champions.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm HYBRID CORE',       val: 86 },
        rubber:  { label: 'RUBBER',  sub: 'COUNTER-LOOP SHEET',       val: 90 },
        blade:   { label: 'BLADE',   sub: 'HYBRID WEAVE FIBER',       val: 88 },
        handle:  { label: 'HANDLE',  sub: 'COUNTER ATTACK FL',        val: 84 },
      },
    },
    {
      id: 'victas-koki-niwa',
      name: 'Victas Koki Niwa Wood',
      brand: 'VICTAS',
      price: '₹11,400',
      image: '/images/why-lineup-racket-studio.jpg',
      desc: '7-ply pure wood construction designed for supernatural near-net reflex counters.',
      summary: 'Signature wood blade for creative and aggressive offensive touch.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm REFLEX FOAM',       val: 80 },
        rubber:  { label: 'RUBBER',  sub: 'NEAR-NET TOUCH',           val: 84 },
        blade:   { label: 'BLADE',   sub: '7-PLY REFLEX WOOD',        val: 83 },
        handle:  { label: 'HANDLE',  sub: 'KOKI NIWA SIGNATURE',      val: 85 },
      },
    },
  ],
  DEFENSIVE: [
    {
      id: 'tibhar-stratus-def',
      name: 'Tibhar Stratus Power Defense',
      brand: 'TIBHAR',
      price: '₹4,899',
      image: '/images/why-hero-racket.jpg',
      desc: 'Max dampening shield profile to absorb incoming loops and reset long chops.',
      summary: 'Control-focused. Unrivaled for defensive choppers.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '1.5mm ABSORB SHIELD',     val: 40 },
        rubber:  { label: 'RUBBER',  sub: 'LONG CHOP CONTROL',        val: 82 },
        blade:   { label: 'BLADE',   sub: 'DAMPENING CORE',           val: 55 },
        handle:  { label: 'HANDLE',  sub: 'LONG REACH STRAIGHT',      val: 76 },
      },
    },
    {
      id: 'butterfly-diode-v',
      name: 'Butterfly Diode V',
      brand: 'BUTTERFLY',
      price: '₹6,800',
      image: '/images/pro-blade.jpg',
      desc: 'Oversized head blade with hard outer plies to generate heavy inverted backspin.',
      summary: 'Traditional defensive blade with superb heavy-chop generation.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '1.5mm BACKSPIN FOAM',     val: 38 },
        rubber:  { label: 'RUBBER',  sub: 'HEAVY CHOP INVERTED',      val: 86 },
        blade:   { label: 'BLADE',   sub: 'OVERSIZED HEAD PLY',       val: 52 },
        handle:  { label: 'HANDLE',  sub: 'DEFENSIVE FL GRIP',        val: 72 },
      },
    },
    {
      id: 'donic-defplay-senso',
      name: 'Donic Defplay Senso',
      brand: 'DONIC',
      price: '₹4,299',
      image: '/images/donic-blade.jpg',
      desc: 'Hollow Senso handle absorbing shock to cushion heavy incoming topspin loops.',
      summary: 'Gentle deceleration profile for consistent long-distance defense.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '1.6mm SENSO ABSORB',      val: 42 },
        rubber:  { label: 'RUBBER',  sub: 'TOPSPIN CUSHION',          val: 80 },
        blade:   { label: 'BLADE',   sub: 'DEFPLAY CORE',             val: 50 },
        handle:  { label: 'HANDLE',  sub: 'HOLLOW SENSO DAMP',       val: 78 },
      },
    },
    {
      id: 'stiga-defensive-pro',
      name: 'Stiga Defensive Pro',
      brand: 'STIGA',
      price: '₹7,200',
      image: '/images/stiga-blade.jpg',
      desc: '5+2 soft carbon structure giving defensive choppers sudden attack acceleration.',
      summary: 'Modern defender blade crafted for lethal transition counters.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '1.8mm SOFT CARBON',       val: 56 },
        rubber:  { label: 'RUBBER',  sub: 'TRANSITION COUNTER',       val: 79 },
        blade:   { label: 'BLADE',   sub: '5+2 DEF CARBON',           val: 62 },
        handle:  { label: 'HANDLE',  sub: 'COUNTER ATTACK GRIP',      val: 74 },
      },
    },
    {
      id: 'victas-koji-matsushita',
      name: 'Victas Koji Matsushita',
      brand: 'VICTAS',
      price: '₹8,500',
      image: '/images/why-lineup-racket-studio.jpg',
      desc: 'Handcrafted Japanese cedar and ayous plies for pinpoint chop placement.',
      summary: 'The ultimate modern chopping blade by the legend Koji Matsushita.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '1.5mm CEDAR FOAM',        val: 35 },
        rubber:  { label: 'RUBBER',  sub: 'PINPOINT PLACEMENT',       val: 88 },
        blade:   { label: 'BLADE',   sub: 'CEDAR+AYOUS CRAFT',        val: 58 },
        handle:  { label: 'HANDLE',  sub: 'MATSUSHITA LONG ST',       val: 80 },
      },
    },
    {
      id: 'dhs-power-g-def',
      name: 'DHS Power.G 9 Def',
      brand: 'DHS',
      price: '₹3,600',
      image: '/images/custom-racket.jpg',
      desc: 'Absorbent wood matrix absorbing heavy kinetic loops for safe reset returns.',
      summary: 'High stability defensive foundation with oversized sweet spot.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '1.5mm ABSORB MATRIX',     val: 38 },
        rubber:  { label: 'RUBBER',  sub: 'SAFE RESET CONTROL',       val: 84 },
        blade:   { label: 'BLADE',   sub: 'POWER.G WOOD MATRIX',      val: 48 },
        handle:  { label: 'HANDLE',  sub: 'STABILITY GRIP',           val: 77 },
      },
    },
  ],
  'ALL-ROUND': [
    {
      id: 'cornilleau-vari-400',
      name: 'Cornilleau Vari 400',
      brand: 'CORNILLEAU',
      price: '₹3,200',
      image: '/images/why-lineup-racket-studio.jpg',
      desc: 'Harmonic equilibrium of spin, speed, and placement across every table zone.',
      summary: 'Balanced for every style of play.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm BALANCED FOAM',     val: 65 },
        rubber:  { label: 'RUBBER',  sub: 'ALL-ZONE BALANCED',        val: 68 },
        blade:   { label: 'BLADE',   sub: '5-PLY HARMONY CORE',       val: 66 },
        handle:  { label: 'HANDLE',  sub: 'UNIVERSAL FL GRIP',        val: 70 },
      },
    },
    {
      id: 'stiga-allround-classic',
      name: 'Stiga Allround Classic',
      brand: 'STIGA',
      price: '₹3,600',
      image: '/images/stiga-blade.jpg',
      desc: 'The world benchmark for all-round play, celebrated by millions of players.',
      summary: 'Unmatched ball feeling and control for complete court mastery.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm CLASSIC FOAM',      val: 66 },
        rubber:  { label: 'RUBBER',  sub: 'BENCHMARK TOPSHEET',       val: 70 },
        blade:   { label: 'BLADE',   sub: 'ALL-ROUND CLASSIC',        val: 67 },
        handle:  { label: 'HANDLE',  sub: 'WORLD STANDARD GRIP',      val: 72 },
      },
    },
    {
      id: 'donic-waldner-allplay',
      name: 'Donic Waldner Allplay',
      brand: 'DONIC',
      price: '₹3,400',
      image: '/images/donic-blade.jpg',
      desc: 'Natural wood elasticity ensuring flawless touch on passive blocks and drives.',
      summary: 'Jan-Ove Waldner all-round classic for technical equilibrium.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm ELASTIC TOUCH',     val: 64 },
        rubber:  { label: 'RUBBER',  sub: 'PASSIVE BLOCK SHEET',      val: 72 },
        blade:   { label: 'BLADE',   sub: 'WALDNER ALLPLAY',          val: 65 },
        handle:  { label: 'HANDLE',  sub: 'TECHNICAL FLARED',         val: 68 },
      },
    },
    {
      id: 'butterfly-timo-all',
      name: 'Butterfly Timo Boll Allround',
      brand: 'BUTTERFLY',
      price: '₹4,800',
      image: '/images/pro-blade.jpg',
      desc: 'Balanced medium-soft feel supporting both controlled spin rallies and blocks.',
      summary: 'Clean modern all-wood feedback for versatile playing styles.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm MEDIUM-SOFT',       val: 67 },
        rubber:  { label: 'RUBBER',  sub: 'SPIN + BLOCK BALANCE',     val: 73 },
        blade:   { label: 'BLADE',   sub: 'TIMO ALLROUND WOOD',       val: 68 },
        handle:  { label: 'HANDLE',  sub: 'TIMO SIGNATURE FL',        val: 74 },
      },
    },
    {
      id: 'yasaka-extra-allround',
      name: 'Yasaka Extra Allround',
      brand: 'YASAKA',
      price: '₹3,900',
      image: '/images/custom-racket.jpg',
      desc: 'Scandinavian spruce and ayous equilibrium for high-dwell topspins.',
      summary: 'Flexible construction producing outstanding touch and spin curve.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm DWELL SPRUCE',      val: 63 },
        rubber:  { label: 'RUBBER',  sub: 'TOPSPIN CURVE SHEET',      val: 71 },
        blade:   { label: 'BLADE',   sub: 'SPRUCE+AYOUS BLEND',       val: 64 },
        handle:  { label: 'HANDLE',  sub: 'SCANDINAVIAN FLARED',      val: 69 },
      },
    },
    {
      id: 'tibhar-samsonov-pure',
      name: 'Tibhar Samsonov Pure Wood',
      brand: 'TIBHAR',
      price: '₹4,100',
      image: '/images/why-hero-racket.jpg',
      desc: 'Crafted with Vladimir Samsonov for pure touch and intuitive zone control.',
      summary: 'All-wood harmony delivering confidence in every stroke.',
      profile: {
        sponge: { label: 'SPONGE',  sub: '2.0mm PURE WOOD',         val: 62 },
        rubber:  { label: 'RUBBER',  sub: 'INTUITIVE CONTROL',        val: 74 },
        blade:   { label: 'BLADE',   sub: 'SAMSONOV ALL-WOOD',        val: 63 },
        handle:  { label: 'HANDLE',  sub: 'PURE TOUCH GRIP',          val: 71 },
      },
    },
  ],
};

// Fallback for backwards compatibility
export const RACKET_CAROUSEL_DATA = CATEGORY_RACKETS.BEGINNER;

export const CIRCULAR_POSITIONS = {
  0: {
    x: 0,
    y: 8,
    z: 35,
    rotateY: 0,
    scale: 1.06,
    opacity: 1,
    zIndex: 60,
  },
  1: {
    x: 114,
    y: 2,
    z: -18,
    rotateY: -18,
    scale: 0.88,
    opacity: 0.88,
    zIndex: 45,
  },
  '-1': {
    x: -114,
    y: 2,
    z: -18,
    rotateY: 18,
    scale: 0.88,
    opacity: 0.88,
    zIndex: 45,
  },
  2: {
    x: 198,
    y: -18,
    z: -85,
    rotateY: -10,
    scale: 0.74,
    opacity: 0.70,
    zIndex: 30,
  },
  '-2': {
    x: -198,
    y: -18,
    z: -85,
    rotateY: 10,
    scale: 0.74,
    opacity: 0.70,
    zIndex: 30,
  },
  3: {
    x: 0,
    y: -42,
    z: -125,
    rotateY: 0,
    scale: 0.72,
    opacity: 0.62,
    zIndex: 15,
  },
};

export default function CircularRacketCarousel({
  category = 'BEGINNER',
  selectedStyle,
  onSelect,
  onSelectRacket,
}) {
  const currentCategory = category || selectedStyle || 'BEGINNER';
  const rackets = CATEGORY_RACKETS[currentCategory] || CATEGORY_RACKETS.BEGINNER;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  // Responsive screen detection for 3D coordinate multipliers
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Reset activeIndex when category changes and broadcast first racket
  useEffect(() => {
    setActiveIndex(0);
    const firstRacket = rackets[0];
    if (firstRacket) {
      if (onSelectRacket) onSelectRacket(firstRacket);
      if (onSelect) onSelect(firstRacket.id);
    }
  }, [currentCategory]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelectIndex = useCallback(
    (index) => {
      const clamped = (index + rackets.length) % rackets.length;
      setActiveIndex(clamped);
      const chosenRacket = rackets[clamped];
      if (chosenRacket) {
        if (onSelectRacket) onSelectRacket(chosenRacket);
        if (onSelect) onSelect(chosenRacket.id);
      }
    },
    [rackets, onSelectRacket, onSelect]
  );

  const handlePrev = useCallback(() => {
    handleSelectIndex(activeIndex - 1);
  }, [activeIndex, handleSelectIndex]);

  const handleNext = useCallback(() => {
    handleSelectIndex(activeIndex + 1);
  }, [activeIndex, handleSelectIndex]);

  // Pointer drag gestures
  const handlePointerDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handlePointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const endX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
    const diff = endX - dragStartX.current;
    if (diff > 45) {
      handlePrev();
    } else if (diff < -45) {
      handleNext();
    }
  };

  const multX = isMobile ? 0.58 : 1;
  const multY = isMobile ? 0.68 : 1;
  const multZ = isMobile ? 0.55 : 1;
  const scaleMult = isMobile ? 0.88 : 1;

  return (
    <div className="crc-container" aria-label="Interactive 3D Circular Racket Selector">
      {/* ── 3D Circular Ring Viewport (Pills strip removed per user request) ── */}
      <div
        className="crc-viewport"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {/* Navigation Arrows */}
        <button
          type="button"
          className="crc-nav-btn crc-nav-prev"
          onClick={handlePrev}
          aria-label="Previous Racket"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          className="crc-nav-btn crc-nav-next"
          onClick={handleNext}
          aria-label="Next Racket"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Stage hosting the 3D Square Cards along the circular cylinder */}
        <div className="crc-stage">
          {rackets.map((card, i) => {
            const count = rackets.length;
            let diff = i - activeIndex;

            // Normalise diff into range [-2, 3]
            while (diff > 3) diff -= count;
            while (diff < -2) diff += count;

            const posKey = String(diff);
            const pos = CIRCULAR_POSITIONS[posKey] || CIRCULAR_POSITIONS[0];
            const isActive = diff === 0;
            const isBack = Math.abs(diff) >= 2;

            const x = pos.x * multX;
            const y = pos.y * multY;
            const z = pos.z * multZ;
            const scale = pos.scale * scaleMult;

            return (
              <div
                key={card.id}
                className={`crc-card${isActive ? ' active' : ''}${isBack ? ' is-back' : ''}`}
                style={{
                  transform: `translateX(${x}px) translateY(${y}px) translateZ(${z}px) rotateY(${pos.rotateY}deg) scale(${scale})`,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                }}
                onClick={() => handleSelectIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSelectIndex(i);
                  }
                }}
                aria-label={`${card.name} - ${card.brand}`}
              >
                {/* Pure Square Racket Blade Visual Photo (no text overlays) */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="crc-card-img"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Bottom Indicator Dots ── */}
      <div className="crc-dots" role="tablist" aria-label="Racket carousel pagination">
        {rackets.map((card, i) => (
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
