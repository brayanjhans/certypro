import React, { useState } from 'react';
import { EXTERNAL_LINKS } from '../utils/routes';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed right-5 sm:right-6 bottom-5 sm:bottom-6 z-40 flex items-center">
      {/* Tooltip on hover */}
      <div 
        className={`absolute right-16 sm:right-20 bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-xl whitespace-nowrap shadow-xl transition-all duration-200 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span>¿Necesitas ayuda? Chatea con un asesor</span>
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
      </div>

      {/* Floating Button */}
      <a
        href={EXTERNAL_LINKS.WHATSAPP_URL('Hola EduPRO360, deseo información y asesoría sobre los cursos y certificaciones.')}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25d366] hover:bg-[#20b358] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 animate-whatsapp cursor-pointer"
        aria-label="Contactar a EduPRO360 por WhatsApp"
      >
        {/* WhatsApp Official SVG Logo */}
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.074-1.745-.37-1.196-.479-1.996-1.674-2.056-1.753-.059-.08-1.488-1.982-1.488-3.78 0-1.799.943-2.684 1.279-3.048.336-.364.733-.455.978-.455.244 0 .489.002.703.013.226.012.529-.086.828.633.308.736 1.047 2.554 1.139 2.741.092.187.153.407.031.651-.122.244-.183.397-.365.611-.183.214-.384.478-.549.641-.183.183-.374.382-.161.748.214.366.95 1.569 2.038 2.539 1.399 1.246 2.578 1.632 2.944 1.815.366.183.58.153.794-.092.214-.244.916-1.07 1.16-1.436.244-.366.488-.305.824-.183.336.122 2.138 1.009 2.505 1.192.366.183.61.275.699.428.092.153.092.885-.052 1.29zM12 2C6.477 2 2 6.477 2 12c0 1.891.523 3.662 1.434 5.176L2 22l4.957-1.397C8.423 21.493 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
        </svg>
      </a>
    </div>
  );
};
