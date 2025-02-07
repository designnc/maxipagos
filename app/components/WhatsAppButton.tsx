// components/WhatsAppButton.tsx

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  // Número de WhatsApp en formato internacional sin el "+"
  const phoneNumber: string = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '#';
  const message: string = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || '';

  const whatsappLink: string = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition-transform transform hover:scale-110"
      aria-label="Chat de WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
