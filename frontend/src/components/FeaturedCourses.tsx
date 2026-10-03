import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { Course } from '../types';
import { COURSES } from '../data/courses';
import { ROUTES, EXTERNAL_LINKS } from '../utils/routes';

export const FeaturedCourses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'SSOMA', 'Ofimática', 'Tecnología', 'Ingeniería', 'Gestión y Negocios'];

  const filteredCourses = activeCategory === 'Todos'
    ? COURSES
    : COURSES.filter((c) => c.category === activeCategory);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0c8897] uppercase mb-2 inline-block">
              Capacitación Continua
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1d57] tracking-tight">
              Cursos y Especializaciones Destacadas
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              Cursos actualizados con metodología práctica, acceso 24/7 y certificación oficial avalada.
            </p>
          </div>

          <Link
            to={ROUTES.CURSOS}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0c8897] hover:text-[#0e1d57] transition-colors group"
          >
            <span>Ver todo el catálogo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Pills / Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0e1d57] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.slice(0, 6).map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Header Top */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0c8897] bg-teal-50 px-2.5 py-1 rounded">
                    {course.category}
                  </span>
                  {course.badge && (
                    <span className="text-[11px] font-bold text-amber-800 bg-[#fff4dc] border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      {course.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#0e1d57] group-hover:text-[#0c8897] transition-colors leading-snug mb-3">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {course.shortDescription}
                </p>

                {/* Details Badges */}
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0c8897]" />
                    <span><strong>Duración:</strong> {course.durationHours} horas académicas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#0c8897]" />
                    <span className="truncate"><strong>Modalidad:</strong> {course.mode} con Aula Virtual 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="truncate">Certificado con validación QR oficial</span>
                  </div>
                </div>
              </div>

              {/* Card Bottom CTA & Pricing */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 line-through">
                    S/ {course.priceRegular}.00
                  </div>
                  <div className="text-lg font-black text-[#0e1d57]">
                    S/ {course.priceDiscount}.00
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to={ROUTES.CURSO_DETALLE(course.id)}
                    className="px-3 py-2 rounded-lg text-xs font-bold text-[#0e1d57] hover:bg-slate-200 transition-colors"
                  >
                    Detalles
                  </Link>
                  <a
                    href={EXTERNAL_LINKS.WHATSAPP_URL(`Hola EduPRO360, deseo inscribirme en el curso "${course.title}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#0c8897] hover:bg-[#0a7380] text-white text-xs font-bold tracking-wide transition-all shadow-sm"
                  >
                    Inscribirme
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Catalog Callout */}
        <div className="mt-12 text-center">
          <Link
            to={ROUTES.CURSOS}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#0e1d57] hover:bg-[#122361] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-[#0e1d57]/20 transition-all hover:-translate-y-0.5"
          >
            <span>Explorar los {COURSES.length} Cursos Disponibles</span>
            <ArrowRight className="w-5 h-5 text-[#ffc24b]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
