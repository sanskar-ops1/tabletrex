'use client';

import { useEffect } from 'react';

// Run at client module evaluation time (before React hydration starts)
if (typeof window !== 'undefined') {
  try {
    const origError = console.error;
    console.error = function (...args) {
      const fullText = args
        .map((arg) => (typeof arg === 'string' ? arg : arg?.message || ''))
        .join(' ');
      if (
        fullText.includes('fdprocessedid') &&
        (fullText.includes('hydrated') ||
          fullText.includes('hydration') ||
          fullText.includes('Hydration') ||
          fullText.includes('didn\'t match the client properties'))
      ) {
        // Suppress browser-extension false-positive attribute hydration warning
        return;
      }
      return origError.apply(console, args);
    };

    // Strip any attributes already injected prior to React bundle execution
    const strip = () => {
      if (typeof document !== 'undefined') {
        const els = document.querySelectorAll('[fdprocessedid]');
        for (let i = 0; i < els.length; i++) {
          els[i].removeAttribute('fdprocessedid');
        }
      }
    };
    strip();
  } catch (e) {}
}

/**
 * Strips browser extension injected attributes (such as McAfee WebAdvisor's fdprocessedid)
 * cleanly via a MutationObserver and filters extension hydration noise in dev console.
 */
export default function ExtensionCleaner() {
  useEffect(() => {
    try {
      const observer = new MutationObserver((mutations) => {
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (m.type === 'attributes' && m.attributeName === 'fdprocessedid') {
            m.target.removeAttribute('fdprocessedid');
          }
        }
      });
      observer.observe(document.documentElement, {
        subtree: true,
        attributes: true,
        attributeFilter: ['fdprocessedid'],
      });

      // Also clean any existing elements on mount
      const els = document.querySelectorAll('[fdprocessedid]');
      for (let i = 0; i < els.length; i++) {
        els[i].removeAttribute('fdprocessedid');
      }

      return () => observer.disconnect();
    } catch (e) {}
  }, []);

  return null;
}

