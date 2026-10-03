import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { ROUTES, EXTERNAL_LINKS, getAssetUrl } from '../utils/routes';

interface Slide {
  image: string;
  title: string;
  description: string;
}

const SLIDES: Slide[] = [
  {
    image: '/assets/slider-1.png',
    title: 'Aprende. Certifica. Avanza.',
    description: 'Convierte cada aprendizaje en una oportunidad para desarrollar tus capacidades, respaldar tu formación y seguir construyendo tu futuro profesional.',
  },
  {
    image: '/assets/slider-2.png',
    title: 'Distintas profesiones. Una misma decisión: seguir avanzando.',
    description: 'Ingeniería, arquitectura, salud, derecho, educación, gestión, tecnología y muchas otras áreas se encuentran en EduPRO360 para quienes deciden seguir preparándose.',
  },
  {
    image: '/assets/slider-3.png',
    title: 'El mundo profesional cambia. Tu formación también debe hacerlo.',
    description: 'Actualiza tus conocimientos, incorpora nuevas herramientas y mantente preparado para responder a los retos de un entorno que evoluciona constantemente.',
  },
  {
    image: '/assets/slider-4.png',
    title: 'Lo que aprendes suma. Lo que acreditas también habla de ti.',
    description: 'Complementa tu formación con certificados, constancias y diplomas que acrediten los programas realizados y contribuyan a fortalecer tu perfil profesional.',
  },
  {
    image: '/assets/slider-5.png',
    title: 'Tu perfil se construye con cada paso que decides dar.',
    description: 'Cada nuevo conocimiento, habilidad y experiencia formativa suma a tu trayectoria y te prepara para seguir avanzando profesionalmente.',
  },
];

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative w-full h-[520px] sm:h-[600px] lg:h-[660px] overflow-hidden bg-[#0e1d57]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Carrusel principal de EduPRO360"
    >
      {/* Slides Background & Overlay */}
      {SLIDES.map((slide, idx) => {
        const isCurrent = idx === currentIndex;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Slide Image with Zoom Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={getAssetUrl(slide.image)}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ${
                  isCurrent ? 'scale-105' : 'scale-100'
                }`}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback gradient if slide asset fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
              {/* Deep Multilayer Gradient Scrim ensuring legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e1d57]/95 via-[#0e1d57]/80 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d57] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Slide Content */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <div className="max-w-2xl sm:max-w-3xl space-y-4 sm:space-y-6">
                
                {/* Subtle Kicker */}
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0c8897] bg-[#122361]/80 px-3.5 py-1 rounded-full border border-[#0c8897]/30 backdrop-blur-sm">
                  <ShieldCheck className="w-4 h-4 text-[#ffc24b]" />
                  <span>Plataforma Oficial de Capacitación</span>
                </div>

                {/* Hero Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] text-balance">
                  {slide.title}
                </h1>

                {/* Hero Description */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl text-pretty">
                  {slide.description}
                </p>

                {/* Action Buttons */}
                <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    to={ROUTES.CURSOS}
                    className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#0c8897] to-[#0a7380] hover:brightness-110 text-white font-black text-sm sm:text-base tracking-wide shadow-xl shadow-[#0c8897]/25 transition-all hover:translate-y-[-1px]"
                  >
                    <span>Ver cursos</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc24b]" />
                  </Link>

                  <Link
                    to={ROUTES.CONTACTO}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-lg border-2 border-slate-300/80 hover:border-white text-white hover:bg-white/10 font-bold text-sm sm:text-base tracking-wide transition-all backdrop-blur-sm"
                  >
                    <span>Solicitar información</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Manual Left/Right Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-[#0e1d57]/70 text-white hover:bg-[#0c8897] border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
        aria-label="Diapositiva anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-[#0e1d57]/70 text-white hover:bg-[#0c8897] border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
        aria-label="Siguiente diapositiva"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Indicator Bullets */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full h-2.5 ${
              idx === currentIndex
                ? 'w-8 bg-[#0c8897]'
                : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir a diapositiva ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
