import './globals.css';

export const metadata = {
  title: 'TableTerex — Premium Table Tennis Equipment',
  description: 'Shop the finest table tennis rackets, rubbers & accessories. Precision-engineered for champions. Free shipping above ₹999.',
  keywords: 'table tennis, rackets, rubbers, ping pong, butterfly, stiga, donic, tabletennis equipment india',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Bebas+Neue&family=Anton&family=Syne:wght@800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
