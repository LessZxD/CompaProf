// config/whatsapp.ts
// WHATSAPP CONFIG
const phoneNumber = "+6281298529573";
const defaultMessage = "Ingin bertanya mengenai website dong";
export const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
