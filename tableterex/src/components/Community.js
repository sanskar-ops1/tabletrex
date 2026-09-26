'use client';

const COMMUNITY_ITEMS = [
  { id:'c1', label:'PLAYERS',      img:'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80', size:'large' },
  { id:'c2', label:'TRAINING',     img:'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&q=80', size:'small' },
  { id:'c3', label:'CLUBS',        img:'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&q=80', size:'small' },
  { id:'c4', label:'COMPETITIONS', img:'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80', size:'large' },
  { id:'c5', label:'LIFESTYLE',    img:'https://images.unsplash.com/photo-1617839625591-e5a789593135?w=400&q=80', size:'small' },
  { id:'c6', label:'COMMUNITY',    img:'https://images.unsplash.com/photo-1603204077167-2fa0397f591f?w=400&q=80', size:'small' },
];

export default function Community() {
  return (
    <section className="community-section" id="community">
      <div className="community-header">
        <div>
          <span className="text-label">[11] — PLAYERS &amp; COMMUNITY</span>
          <h2 className="community-title text-display">THE TABLE<br />TENNIS<br /><span className="comm-accent">LIFE</span></h2>
        </div>
        <div className="community-header-right">
          <p className="community-sub">
            PLAYERS, COACHES, CLUBS &amp; COMPETITIONS.<br />
            THE TABLETEREX COMMUNITY IS GROWING.<br />
            JOIN US ON INSTAGRAM.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="comm-ig-btn"
            id="community-ig-btn"
          >
            @TABLETEREX ↗
          </a>
        </div>
      </div>

      <div className="comm-grid">
        {COMMUNITY_ITEMS.map((item) => (
          <div key={item.id} className={`comm-item comm-item--${item.size}`} id={`comm-${item.id}`}>
            <img src={item.img} alt={item.label} className="comm-img" />
            <div className="comm-item-overlay">
              <span className="comm-item-label">[{item.label}]</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
