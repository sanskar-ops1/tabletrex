/* ─── Official WhatsApp Click-to-Chat Helper (100% Free wa.me API) ─── */

export const WHATSAPP_PHONE = '919999899999'; // Testing phone number - replace with your official business number anytime

/**
 * Builds a direct WhatsApp click-to-chat URL with pre-filled inquiry / order text
 */
export function getWhatsAppProductUrl(product, selectedOptions = {}) {
  const optionsEntries = Object.entries(selectedOptions).filter(([_, val]) => Boolean(val));
  const optionsText = optionsEntries.length > 0 
    ? optionsEntries.map(([key, val]) => `• *${key}:* ${val}`).join('\n')
    : '';

  const message = 
`Hi TableTerex! 👋

I would like to order / inquire about this product from your official store:

🏓 *Product:* ${product.name}
💰 *Price:* ${product.price}
🏷️ *Brand:* ${product.brand}
📁 *Category:* ${product.category}
${product.specs ? `📦 *Specs:* ${product.specs}\n` : ''}${optionsText ? `\n*Selected Options:*\n${optionsText}\n` : ''}
-----------------------------------
*Please help me with:*
[1] Confirm availability for Pan-India express dispatch
[2] Payment details (UPI / Netbanking / Cards)
[3] Free professional rubber assembly & gluing

Thank you!`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a WhatsApp URL for the complete cart order
 */
export function getWhatsAppCartUrl(cartItems, subtotal) {
  const itemList = cartItems.map((item, index) => 
    `${index + 1}. *${item.name}* (${item.brand}) × ${item.qty} — ${item.price}`
  ).join('\n');

  const message = 
`Hi TableTerex! 👋

I would like to place an order for the items in my shopping bag:

${itemList}

-----------------------------------
💵 *Order Subtotal:* ₹${subtotal.toLocaleString('en-IN')}.00
🚚 *Shipping:* Free Insured Pan-India Express Delivery

*Customer Delivery Info:*
• Full Name: 
• Contact Number: 
• Delivery Address: 
• City & Pincode: 
• Preferred Payment: UPI / Netbanking / Card

Please verify stock and send the payment QR / account details. Thank you!`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
