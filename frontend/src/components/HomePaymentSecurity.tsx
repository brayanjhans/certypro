import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { getAssetUrl } from '../utils/routes';

export const HomePaymentSecurity: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200" aria-labelledby="payment-methods-title">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        
        <h2 id="payment-methods-title" className="text-2xl sm:text-3xl font-black text-[#0e1d57] uppercase tracking-wide mb-8">
          MÉTODOS DE PAGOS
        </h2>

        <div className="flex flex-col items-center justify-center mb-8">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-md inline-flex flex-col items-center max-w-[280px] transition-transform hover:scale-[1.02]">
            <img
              src={getAssetUrl('/assets/yape-qr.png')}
              alt="QR de Yape de EduPRO360"
              className="w-48 h-auto object-contain rounded-xl shadow-sm mb-3"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                // styled fallback in case of loading error
                const target = e.currentTarget;
                target.style.display = 'none';
              }}
            />
            <span className="text-sm font-extrabold text-[#0e1d57] tracking-wider uppercase">
              EDUPRO360 S.A.C.
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">
              Escanea con Yape, Plin o tu banca móvil
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
          <ShieldCheck className="w-5 h-5 text-[#0c8897]" aria-hidden="true" />
          <span>Tu información está 100% protegida.</span>
        </div>

      </div>
    </section>
  );
};
