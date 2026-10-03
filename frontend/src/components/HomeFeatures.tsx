import React from 'react';
import { Award, UserCheck } from 'lucide-react';
import { getAssetUrl } from '../utils/routes';

export const HomeFeatures: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#f4f7fb]" aria-labelledby="featurebar-title">
      <h2 id="featurebar-title" className="sr-only">Alianzas y certificaciones</h2>
      
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          
          {/* Item 1: Ilustre Colegio de Abogados */}
          <article className="bg-white border border-[#e8edf4] rounded-2xl p-8 sm:p-9 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1.5 hover:border-[#0b2d5d]/30 flex flex-col items-center">
            <div className="w-[88px] h-[88px] rounded-full bg-[#f0f4f9] p-2.5 mx-auto mb-5 flex items-center justify-center shadow-inner">
              <img
                src={getAssetUrl('/assets/colegio-abogados.png')}
                alt="Ilustre Colegio de Abogados"
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <h3 className="text-lg font-bold text-[#0e1d57] mb-2 leading-snug">
              Ilustre Colegio de Abogados
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Nos enorgullecemos de contar con el convenio del Ilustre Colegio de Abogados.
            </p>
          </article>

          {/* Item 2: Certificados */}
          <article className="bg-white border border-[#e8edf4] rounded-2xl p-8 sm:p-9 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1.5 hover:border-[#0b2d5d]/30 flex flex-col items-center">
            <div className="w-[88px] h-[88px] rounded-full bg-[#f0f4f9] mx-auto mb-5 flex items-center justify-center text-[#0c8897] shadow-inner">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-bold text-[#0e1d57] mb-2 leading-snug">
              Certificados
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Emitimos certificados de alta calidad que validan tus competencias.
            </p>
          </article>

          {/* Item 3: Ponentes Certificados */}
          <article className="bg-white border border-[#e8edf4] rounded-2xl p-8 sm:p-9 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1.5 hover:border-[#0b2d5d]/30 flex flex-col items-center">
            <div className="w-[88px] h-[88px] rounded-full bg-[#f0f4f9] mx-auto mb-5 flex items-center justify-center text-[#0c8897] shadow-inner">
              <UserCheck className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-bold text-[#0e1d57] mb-2 leading-snug">
              Ponentes Certificados
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Nos enfocamos en brindar ponentes altamente calificados y avalados en su especialidad.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
};
