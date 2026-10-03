import './globals.css';
import ExtensionCleaner from '@/components/ExtensionCleaner';

export const metadata = {
  title: 'TableTerex — Premium Table Tennis Equipment',
  description: 'Shop the finest table tennis rackets, rubbers & accessories. Precision-engineered for champions. Free shipping above ₹999.',
  keywords: 'table tennis, rackets, rubbers, ping pong, butterfly, stiga, donic, tabletennis equipment india',
};

const extensionCleanScript = `
(function() {
  if (typeof window === 'undefined') return;
  try {
    var origError = console.error;
    console.error = function() {
      var str = '';
      for (var i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (typeof a === 'string') str += ' ' + a;
        else if (a && a.message) str += ' ' + a.message;
      }
      if (str.indexOf('fdprocessedid') !== -1 && (str.indexOf('hydrated') !== -1 || str.indexOf('hydration') !== -1 || str.indexOf('Hydration') !== -1)) {
        return;
      }
      return origError.apply(console, arguments);
    };

    var origSetAttr = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function(name, val) {
      if (name === 'fdprocessedid') return;
      return origSetAttr.apply(this, arguments);
    };

    var strip = function() {
      var els = document.querySelectorAll('[fdprocessedid]');
      for (var j = 0; j < els.length; j++) {
        els[j].removeAttribute('fdprocessedid');
      }
    };
    strip();

    if (typeof MutationObserver !== 'undefined') {
      var observer = new MutationObserver(function(mutations) {
        for (var k = 0; k < mutations.length; k++) {
          var m = mutations[k];
          if (m.type === 'attributes' && m.attributeName === 'fdprocessedid') {
            m.target.removeAttribute('fdprocessedid');
          }
        }
      });
      observer.observe(document.documentElement, {
        attributes: true,
        subtree: true,
        attributeFilter: ['fdprocessedid']
      });
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Bebas+Neue&family=Anton&family=Syne:wght@800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          id="extension-cleaner-head"
          dangerouslySetInnerHTML={{ __html: extensionCleanScript }}
        />
      </head>
      <body suppressHydrationWarning>
        <ExtensionCleaner />
        {children}
      </body>
    </html>
  );
}
