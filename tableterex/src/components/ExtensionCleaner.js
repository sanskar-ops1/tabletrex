'use client';

import { useEffect } from 'react';

/**
 * Strips browser extension injected attributes (such as McAfee WebAdvisor's fdprocessedid)
 * cleanly via a MutationObserver without rendering any <script> tags into the React DOM tree.
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
      return () => observer.disconnect();
    } catch (e) {}
  }, []);

  return null;
}
