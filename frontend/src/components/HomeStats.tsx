import React from 'react';

export const HomeStats: React.FC = () => {
  return (
    <section className="bg-[#0b1c3a] text-white py-12 sm:py-16 border-b border-[#122b59]" aria-label="Métricas de experiencia">
      <div className="max-w-[1200px] mx-auto px-6 text-center space-y-10">
        
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-slate-200">
          Somos un <strong className="font-black text-white text-[#ffc24b]">equipo comprometido</strong> en cada proyecto
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          
          {/* Stat 1 */}
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-black text-[#0c8897] tracking-tight">
              +480
            </div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
              CAPACITACIONES
            </div>
          </div>

          {/* Stat 2 */}
          <div className="space-y-1 md:border-x md:border-slate-700/80 md:px-6">
            <div className="text-4xl sm:text-5xl font-black text-[#ffc24b] tracking-tight">
              +10,000
            </div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
              ESTUDIANTES
            </div>
          </div>

          {/* Stat 3 */}
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              +1,000
            </div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
              CLASES
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
