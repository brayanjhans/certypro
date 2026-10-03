import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, getAssetUrl } from '../utils/routes';

export const HomeAbout: React.FC = () => {
  return (
    <section 
      className="py-16 sm:py-24 text-white border-y border-[#0c8897]/20 relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 86% 18%, rgba(12,136,151,0.13), transparent 28%), linear-gradient(120deg, #08183f, #0e1d57 58%, #0d5679)'
      }}
    >
      <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Text */}
        <div className="lg:col-span-8 space-y-5">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[#0c8897] block">
            SOBRE NOSOTROS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.14] tracking-tight">
            Formación profesional con respaldo y proyección
          </h2>

          <div className="text-sm sm:text-base text-slate-200 leading-relaxed space-y-4 font-normal">
            <p>
              Somos un centro superior de capacitación especializada dedicado a ofrecer programas de actualización de alto nivel, dirigidos tanto al público general como a profesionales exigentes.
            </p>
            <p>
              Con el firme compromiso de respaldar tu crecimiento, todos nuestros programas incluyen una <strong className="text-white font-bold underline decoration-[#0c8897] decoration-2 underline-offset-4">Certificación oficial con código QR</strong>. Este sistema facilita una verificación inmediata, garantizando que tus competencias estén plenamente validadas, sean altamente competitivas en el mercado laboral y destaquen de manera contundente en las convocatorias de trabajo más rigurosas.
            </p>
          </div>

          <div className="pt-3">
            <Link
              to={ROUTES.NOSOTROS}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0c8897] to-[#0a7481] hover:brightness-110 text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-[#0c8897]/25 transition-all hover:-translate-y-0.5"
            >
              CONOCE NUESTRA HISTORIA
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative p-3 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl">
            <img
              src={getAssetUrl('/assets/about-image.png')}
              alt="EduPRO360 Formación Profesional"
              className="w-full max-w-[280px] h-auto object-contain rounded-2xl drop-shadow-xl"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
