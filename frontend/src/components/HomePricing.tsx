import React from 'react';
import { EXTERNAL_LINKS } from '../utils/routes';
import { Check } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  numericPrice: number;
  highlighted?: boolean;
  features: string[];
}

const PLANS: Plan[] = [
  {
    name: 'BÁSICO',
    price: 'S/ 499.99',
    numericPrice: 499.99,
    features: ['30 cursos', '30 certificados', '10 diplomados'],
  },
  {
    name: 'PREMIUM',
    price: 'S/ 999.99',
    numericPrice: 999.99,
    highlighted: true,
    features: ['1 año de acceso total', 'Más de 100 cursos', 'Certificados ilimitados'],
  },
  {
    name: 'PROFESIONAL',
    price: 'S/ 1499.99',
    numericPrice: 1499.99,
    features: ['1 año de acceso total', 'Más de 100 cursos', 'Certificados y diplomados ilimitados'],
  },
];

export const HomePricing: React.FC = () => {
  const handleAcquire = (plan: Plan) => {
    const msg = `Hola EduPRO360, deseo adquirir el Plan ${plan.name} en promoción por ${plan.price}. ¿Cuáles son las formas de pago y activación inmediata?`;
    window.open(EXTERNAL_LINKS.WHATSAPP_URL(msg), '_blank');
  };

  return (
    <section className="py-20 px-5 text-center bg-[#0d5679] text-white border-t-4 border-[#0c8897] border-b border-white/10 font-sans">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide uppercase relative inline-block pb-3.5">
            PROMOCIÓN
            <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-28 h-1 bg-[#0c8897] rounded-full shadow-lg shadow-[#0c8897]/50"></span>
          </h2>
          <p className="text-base sm:text-lg text-slate-200 mt-3 font-medium">
            ¡Hasta un 50% de dscto en nuestros planes!
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-[#0e214d] to-[#091533] border-2 border-[#ffc24b] shadow-2xl scale-[1.02]'
                  : 'bg-[#091b3e] border border-white/15 shadow-xl hover:-translate-y-1'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#ffc24b] text-slate-900 text-xs font-black uppercase tracking-wider shadow-md">
                  Más Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">
                  Plan <span className="text-[#0c8897]">{plan.name}</span>
                </h3>

                <ul className="space-y-4 mb-8 text-left text-sm text-slate-200">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0c8897]/20 text-[#0c8897] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">
                  {plan.price}
                </div>

                <button
                  type="button"
                  onClick={() => handleAcquire(plan)}
                  className={`w-full py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all cursor-pointer ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-[#0c8897] via-[#0ba2b5] to-[#ffc24b] text-white hover:brightness-110'
                      : 'bg-[#0c8897] hover:bg-[#0a7481] text-white'
                  }`}
                >
                  Adquirir plan
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
