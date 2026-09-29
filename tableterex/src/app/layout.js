import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'TableTerex — Premium Table Tennis Equipment',
  description: 'Shop the finest table tennis rackets, rubbers & accessories. Precision-engineered for champions. Free shipping above ₹999.',
  keywords: 'table tennis, rackets, rubbers, ping pong, butterfly, stiga, donic, tabletennis equipment india',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Bebas+Neue&family=Anton&family=Syne:wght@800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
        {/* Strip browser extension injected attributes (e.g. McAfee WebAdvisor fdprocessedid) before React hydration */}
        <Script id="strip-extension-attrs" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var observer = new MutationObserver(function(mutations) {
                  for (var i = 0; i < mutations.length; i++) {
                    var m = mutations[i];
                    if (m.type === 'attributes' && m.attributeName === 'fdprocessedid') {
                      m.target.removeAttribute('fdprocessedid');
                    }
                  }
                });
                observer.observe(document.documentElement, {
                  subtree: true,
                  attributes: true,
                  attributeFilter: ['fdprocessedid']
                });
              } catch (e) {}
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
