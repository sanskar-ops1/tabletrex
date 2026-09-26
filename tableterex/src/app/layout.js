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
      </head>
      <body>{children}</body>
    </html>
  );
}
