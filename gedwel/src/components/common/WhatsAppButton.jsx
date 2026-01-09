import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    // Replace with the actual WhatsApp number
    const phoneNumber = '254700000000';
    const message = 'Hello, I would like to inquire about your services.';

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group"
            aria-label="Contact on WhatsApp"
        >
            <FaWhatsapp className="text-3xl" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-2">
                Chat with us
            </span>
        </button>
    );
};

export default WhatsAppButton;
