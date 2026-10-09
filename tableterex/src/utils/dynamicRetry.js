'use client';

/**
 * Wraps dynamic import with automatic retry on chunk loading failure.
 * When Turbopack or Webpack hot-reloads or deploys new chunk hashes,
 * older browser clients may fail to load a missing/stale chunk hash (ChunkLoadError).
 * This retries the import, and if it fails completely, refreshes the window once to fetch the fresh bundle.
 */
export function dynamicWithRetry(importFn, retries = 2, delay = 500) {
  return new Promise((resolve, reject) => {
    importFn()
      .then(resolve)
      .catch((err) => {
        const isChunkError =
          err?.name === 'ChunkLoadError' ||
          err?.message?.includes('chunk') ||
          err?.message?.includes('Failed to load chunk');

        if (retries > 0) {
          setTimeout(() => {
            dynamicWithRetry(importFn, retries - 1, delay)
              .then(resolve)
              .catch(reject);
          }, delay);
        } else {
          if (typeof window !== 'undefined' && isChunkError) {
            const lastReload = sessionStorage.getItem('last_chunk_reload');
            const now = Date.now();
            if (!lastReload || now - Number(lastReload) > 10000) {
              sessionStorage.setItem('last_chunk_reload', String(now));
              window.location.reload();
              return;
            }
          }
          reject(err);
        }
      });
  });
}
