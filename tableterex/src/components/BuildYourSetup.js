'use client';
import { useState } from 'react';
import Link from 'next/link';
import ExplodedBat3D from './ExplodedBat3D';
import {
  BeginnerSetupIsometricIcon,
  SpinSetupIsometricIcon,
  SpeedSetupIsometricIcon,
  ControlSetupIsometricIcon,
  OffensiveSetupIsometricIcon,
  DefensiveSetupIsometricIcon,
} from '@/components/icons';

const SETUPS = [
  {
    id: 's1',
    num: '001',
    intent: "I'M NEW",
    range: 'UNDER ₹7K',
    style: 'BEGINNER · ALL-ROUND',
    name: 'All-Round Entry',
    icon: BeginnerSetupIsometricIcon,
    blade: 'Donic Waldner Allplay',
    fhRubber: 'Donic Liga',
    bhRubber: 'Donic Liga',
    weight: '~170G',
    bladePrice: '₹5,089 MRP',
    rubberPrice: '₹2,275 MRP',
    totalPrice: '₹8,639',
    desc: 'A balanced combination built around control, feel and easy-to-manage speed for players developing their fundamentals.',
    color: 'cream',
  },
  {
    id: 's2',
    num: '002',
    intent: 'I WANT CONTROL',
    range: 'ALL-ROUND · SOFTER SETUP',
    style: 'CONTROL',
    name: 'Pure Control',
    icon: ControlSetupIsometricIcon,
    blade: 'Donic Waldner Allplay',
    fhRubber: 'Donic Twingo Plus',
    bhRubber: 'Donic Twingo Plus',
    weight: '~168G',
    bladePrice: '₹5,089 MRP',
    rubberPrice: '₹2,239 MRP',
    totalPrice: '₹9,567',
    desc: 'A softer all-round combination focused on control, touch and consistency in the short game.',
    color: 'cream',
  },
  {
    id: 's3',
    num: '003',
    intent: 'I WANT MORE SPIN',
    range: '₹7K–₹12K',
    style: 'SPIN',
    name: 'Heavy Spin Looper',
    icon: SpinSetupIsometricIcon,
    blade: 'Tibhar Gravity Offensive',
    fhRubber: 'Nittaku Hurricane 8-80 Power',
    bhRubber: 'Nittaku Hurricane 8-80 Power',
    weight: '~180G',
    bladePrice: '₹5,135 MRP',
    rubberPrice: '₹6,129 MRP',
    totalPrice: '₹17,393',
    desc: 'A spin-focused combination pairing an offensive blade with a grippy hybrid rubber for aggressive topspin play.',
    color: 'cream',
  },
  {
    id: 's4',
    num: '004',
    intent: 'I WANT MORE SPEED',
    range: '₹10K–₹20K',
    style: 'SPEED',
    name: 'Carbospeed Attacker',
    icon: SpeedSetupIsometricIcon,
    blade: 'Donic Original Carbospeed',
    fhRubber: 'Butterfly Tenergy 64',
    bhRubber: 'Butterfly Tenergy 64',
    weight: '~182G',
    bladePrice: '₹8,639 MRP',
    rubberPrice: '₹10,600 MRP',
    totalPrice: '₹29,839',
    desc: 'A fast carbon combination designed for players who want more pace and direct attacking response.',
    color: 'cream',
  },
  {
    id: 's5',
    num: '005',
    intent: 'I PLAY OFFENSIVE',
    range: '₹15K+',
    style: 'OFFENSIVE',
    name: 'Timo Boll ALC Pro',
    icon: OffensiveSetupIsometricIcon,
    blade: 'Butterfly Timo Boll ALC',
    fhRubber: 'Butterfly Tenergy 05',
    bhRubber: 'Butterfly Tenergy 05',
    weight: '~184G',
    bladePrice: '₹24,200 MRP',
    rubberPrice: '₹10,600 MRP',
    totalPrice: '₹45,400',
    desc: 'A premium offensive combination built around the Timo Boll ALC blade and Tenergy 05 on both sides.',
    color: 'cream',
  },
  {
    id: 's6',
    num: '006',
    intent: 'I PLAY DEFENSIVE',
    range: 'LONG-PIPS / DEFENSIVE',
    style: 'DEFENSIVE',
    name: 'Modern Chopper',
    icon: DefensiveSetupIsometricIcon,
    blade: 'Nittaku Flyatt Carbon',
    fhRubber: 'Donic Spike P2',
    bhRubber: 'Donic Spike P2',
    weight: '~165G',
    bladePrice: '₹6,129 MRP',
    rubberPrice: '₹3,874 MRP',
    totalPrice: '₹13,877',
    desc: 'A defensive combination using a specialized blade and long-pimple rubber for controlled defensive play and spin variation.',
    color: 'cream',
  },
];

export default function BuildYourSetup() {
  const [selectedId, setSelectedId] = useState('s1');
  const selectedSetup = SETUPS.find((s) => s.id === selectedId) || SETUPS[0];

  return (
    <section className="build-section" id="build-setup">
      <div className="build-watermark" aria-hidden="true">SETUP</div>

      <div className="build-header">
        <span className="text-label">RECOMMENDED COMBINATIONS</span>
        <h2 className="build-title text-display">BUILD YOUR<br />GAME</h2>
        <p className="build-sub">
          Curated racket and rubber combinations built around specific playing styles, from controlled all-round setups to high-speed offensive builds.
        </p>

        <div className="neo-section-rule" aria-hidden="true">
          <span className="neo-rule-diamond">◇</span>
          <span className="neo-rule-title">CURATED COMBINATIONS</span>
          <span className="neo-rule-dots" />
          <span className="neo-rule-count">06 BUILDS</span>
        </div>
      </div>

      {/* Standalone Real 3D Exploded Bat (Unboxed, Transparent Stage) */}
      <ExplodedBat3D selectedSetup={selectedSetup} />

      <div className="setup-grid">
        {SETUPS.map((s) => {
          const IconComponent = s.icon;
          const isSelected = s.id === selectedId;
          const cardColor = isSelected ? 'orange' : 'cream';

          return (
            <div
              key={s.id}
              onClick={() => setSelectedId(s.id)}
              className={`neo-card neo-card--${cardColor} setup-card setup-card--${cardColor}`}
              id={`setup-${s.id}`}
              style={{ cursor: 'pointer' }}
            >
              {/* TOP / UPPER CARD (Header + Framed Specs Diagram Frame) */}
              <div className="neo-card-upper">
                <div className="neo-card-upper-inner">
                  {/* Card Header with intent pill, index/range tags, and title with icon */}
                  <div className="neo-card-header">
                    <div className="neo-card-header-top">
                      <span className="neo-intent-pill">{s.intent}</span>
                    </div>
                    <div className="neo-card-title-row">
                      <div className="neo-icon-wrap" title={s.name}>
                        <IconComponent
                          size={46}
                          className="neo-racket-icon"
                          variant={cardColor === 'orange' ? 'cream' : 'orange'}
                        />
                      </div>
                      <div className="neo-card-title-col">
                        <h3 className="neo-card-title">{s.name}</h3>
                        <div className="neo-style-badge">
                          <span className="neo-style-bracket">[{s.style}]</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price block and CTA button moved up */}
                  <div className="neo-lower-footer">
                    <div className="neo-price-block">
                      <span className="neo-price-label">APPROX. TOTAL</span>
                      <span className="neo-price-val">{s.totalPrice}</span>
                    </div>
                    <Link href="/products" className="neo-cta-btn" id={`setup-btn-${s.id}`}>
                      BUILD THIS SETUP →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="build-footer-cta">
        <Link href="/products" className="btn-primary" id="build-customize-btn">
          CUSTOMIZE YOUR OWN SETUP →
        </Link>
      </div>
    </section>
  );
}

