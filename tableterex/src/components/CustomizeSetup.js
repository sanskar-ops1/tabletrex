'use client';
import { useEffect } from 'react';
import {
  ChooseRacketIsometricIcon,
  ChooseRubberIsometricIcon,
  CustomizeSetupIsometricIcon,
  PlayReadySetupIsometricIcon,
} from '@/components/icons';

const PROCESS_STEPS = [
  {
    num: '01',
    shortName: 'RACKET',
    action: 'CHOOSE',
    title: 'Choose Your Racket',
    desc: 'Select your blade foundation from 250+ pro-grade wood and carbon frames tailored to your grip and blade weight.',
    tag: 'BLADE SELECTION',
    icon: ChooseRacketIsometricIcon,
  },
  {
    num: '02',
    shortName: 'RUBBER',
    action: 'COMBINE',
    title: 'Choose Your Rubber',
    desc: 'Pair high-tension forehand and backhand rubber sheets with customized sponge thickness and hardness ratings.',
    tag: 'RUBBER SELECTION',
    icon: ChooseRubberIsometricIcon,
  },
  {
    num: '03',
    shortName: 'CUSTOMIZE',
    action: 'CUSTOMIZE',
    title: 'Customize Your Setup',
    desc: 'Specify grip shape (Flared, Straight, Penhold), edge tape protection, and custom weight balance distribution.',
    tag: 'CONFIGURATION',
    icon: CustomizeSetupIsometricIcon,
  },
  {
    num: '04',
    shortName: 'YOUR SETUP',
    action: 'PLAY',
    title: 'Your Setup',
    desc: 'Hand-assembled with VOC-free pro glue, laser edge trimmed, and dispatched ready to take to the match table.',
    tag: 'PLAY READY',
    icon: PlayReadySetupIsometricIcon,
  },
];

export default function CustomizeSetup() {
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
          '.cust-step-card',
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: '.cust-process-flow', start: 'top 80%' },
          }
        );
        gsap.fromTo(
          '.cust-headline',
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: '.customize-section', start: 'top 75%' },
          }
        );
      });
    });
  }, []);

  return (
    <section className="customize-section" id="customize">
      {/* Header & Mission */}
      <div className="cust-inner">
        <div className="cust-left">
          <span className="text-label">CUSTOMIZE YOUR SETUP</span>
          <h2 className="cust-headline text-display">
            BUILD IT<br />
            <span className="cust-accent">YOUR WAY</span>
          </h2>
          <p className="cust-desc">
            DON&apos;T SETTLE FOR AN OFF-THE-SHELF SETUP.<br />
            CHOOSE YOUR BLADE, COMBINE YOUR RUBBER, AND CONFIGURE YOUR GRIP.<br />
            WE PROFESSIONALLY ASSEMBLE IT TO YOUR EXACT COMPETITION SPECIFICATION.
          </p>
          <div className="cust-badges">
            <span className="cust-badge">100% GENUINE EQUIPMENT</span>
            <span className="cust-badge">HAND-ASSEMBLED WITH PRO GLUE</span>
            <span className="cust-badge">DISPATCHED IN 48 HOURS</span>
          </div>
          <a href="/customize" className="btn-primary cust-main-cta" id="customize-main-cta">
            START CUSTOMIZING →
          </a>
        </div>

        {/* Directional Process Banner */}
        <div className="cust-right">
          <div className="cust-flow-headline text-label">
            <span>CHOOSE</span>
            <span className="cust-flow-sep">→</span>
            <span>COMBINE</span>
            <span className="cust-flow-sep">→</span>
            <span>CUSTOMIZE</span>
            <span className="cust-flow-sep">→</span>
            <span style={{ color: 'var(--orange)' }}>PLAY</span>
          </div>

          <div className="cust-process-flow">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={step.num} className="cust-step-card" id={`cust-step-${step.num}`}>
                  <div className="cust-step-card-header">
                    <span className="cust-step-card-num text-display">{step.num}</span>
                    <span className="cust-step-action-badge">{step.action}</span>
                  </div>

                  <div className="cust-step-icon-box">
                    <IconComp size={50} className="cust-48-icon" variant="orange" />
                  </div>

                  <span className="cust-step-tag text-label">{step.tag}</span>
                  <h3 className="cust-step-card-title">{step.title}</h3>
                  <p className="cust-step-card-desc">{step.desc}</p>

                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="cust-step-connector-line" aria-hidden="true" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Visual Directional Flow Strip */}
      <div className="cust-process-strip" aria-label="Customization workflow summary">
        {PROCESS_STEPS.map((s, i) => (
          <div key={s.num} className="cust-strip-item">
            <span className="cust-strip-num">{s.num}</span>
            <span className="cust-strip-short">{s.shortName}</span>
            {i < PROCESS_STEPS.length - 1 ? (
              <span className="cust-strip-arrow">→</span>
            ) : (
              <span className="cust-strip-ready text-label">READY TO PLAY</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
