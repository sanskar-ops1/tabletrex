'use client';
import { useEffect, useState } from 'react';

export default function ProductModal({ product, onClose }) {
  const [qty, setQty] = useState(1);
  const isOpen = !!product;

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!product) return null;

  const waMessage = encodeURIComponent(
    `Hi! I want to order:\n*${product.name}* by ${product.brand}\nQty: ${qty}\nPrice: ${product.price}\n\nPlease confirm availability.`
  );
  const waLink = `https://wa.me/919999999999?text=${waMessage}`;

  return (
    <>
      <div
        className={`modal-backdrop${isOpen ? ' open' : ''}`}
        onClick={onClose}
        id="modal-backdrop"
      />

      <div
        className={`modal${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        id="product-modal"
      >
        {/* Header */}
        <div className="modal-header">
          <span className="modal-brand">TABLETEREX</span>
          <button className="modal-close" onClick={onClose} id="modal-close-btn">
            [CLOSE]
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Image */}
          <div className="modal-img-wrap" data-watermark={product.brand}>
            <img
              className="modal-img"
              src={product.image}
              alt={product.name}
            />
          </div>

          {/* Details */}
          <div className="modal-details" data-bg-text={product.category}>
            <span className="modal-product-label">{product.brand} — {product.category}</span>
            <h3 className="modal-product-name">{product.name}</h3>
            <span className="modal-price">{product.price}</span>
            <p className="modal-desc">{product.desc}</p>

            <div className="modal-actions">
              <div className="modal-qty">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  id="modal-qty-minus"
                  aria-label="Decrease quantity"
                >−</button>
                <span>{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  id="modal-qty-plus"
                  aria-label="Increase quantity"
                >+</button>
              </div>
              <button className="modal-add-cart" id="modal-add-cart-btn">
                ADD TO CART
              </button>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-wa-btn"
              id="modal-whatsapp-btn"
            >
              <span className="wa-icon">💬</span>
              ORDER ON WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
