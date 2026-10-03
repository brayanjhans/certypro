import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, Award, CheckCircle, ArrowRight, Star, Filter } from 'lucide-react';
import { COURSES } from '../data/courses';
import { ROUTES, EXTERNAL_LINKS } from '../utils/routes';

export const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'SSOMA', 'Ofimática', 'Tecnología', 'Ingeniería', 'Gestión y Negocios'];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat = selectedCategory === 'Todos' || course.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Header Banner */}
      <section className="bg-[#0e1d57] text-white py-16 border-b border-[#162a72]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0c8897] uppercase">
            Catálogo Oficial de Programas
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Cursos y Especializaciones
          </h1>
          <div className="w-16 h-1 bg-[#0c8897] mx-auto mt-2 rounded-full"></div>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explora nuestros programas con certificación oficial con código QR, acceso 24/7 y respaldo curricular.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por curso, especialidad o palabra clave (ej. SSOMA, Excel, Power BI)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-4 focus:ring-[#0c8897]/50 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-500 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0e1d57] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-semibold">
            Mostrando <strong>{filteredCourses.length}</strong> de {COURSES.length} cursos
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-md mx-auto my-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              No se encontraron cursos
            </h3>
            <p className="text-xs text-slate-500">
              Prueba con otro término de búsqueda o selecciona otra categoría.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }}
              className="px-4 py-2 rounded-lg bg-[#0e1d57] text-white text-xs font-bold"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div className="p-6">
                  {/* Category & Badge */}
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

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0e1d57] group-hover:text-[#0c8897] transition-colors leading-snug mb-3">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {course.shortDescription}
                  </p>

                  {/* Metadata */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#0c8897]" />
                      <span><strong>Duración:</strong> {course.durationHours} horas académicas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#0c8897]" />
                      <span className="truncate"><strong>Modalidad:</strong> {course.mode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="truncate">Certificado oficial con validación QR</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Pricing & Actions */}
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
                      Ver Temario
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
        )}

      </div>
    </div>
  );
};
