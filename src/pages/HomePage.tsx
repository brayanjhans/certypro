import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { PillarsSection } from '../components/PillarsSection';
import { FeaturedCourses } from '../components/FeaturedCourses';
import { AreasSection } from '../components/AreasSection';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Users, 
  Award, 
  BookOpen, 
  Headphones, 
  ArrowRight, 
  ShieldCheck,
  Star
} from 'lucide-react';
import { ROUTES, EXTERNAL_LINKS } from '../utils/routes';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Key Stats Strip */}
      <section className="bg-[#0e1d57] text-white py-8 border-y border-[#162a72]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-r border-[#162a72] last:border-none">
              <div className="text-3xl sm:text-4xl font-black text-[#0c8897] mb-1">
                +15,000
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300">
                Alumnos Certificados
              </div>
            </div>

            <div className="p-4 border-r border-[#162a72] last:border-none">
              <div className="text-3xl sm:text-4xl font-black text-[#ffc24b] mb-1">
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300">
                Acreditación con Código QR
              </div>
            </div>

            <div className="p-4 border-r border-[#162a72] last:border-none">
              <div className="text-3xl sm:text-4xl font-black text-[#0c8897] mb-1">
                +45
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300">
                Cursos y Especializaciones
              </div>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                24/7
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300">
                Acceso a Aula Virtual
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Courses */}
      <FeaturedCourses />

      {/* 4. Pillars & Institutional Guarantees */}
      <PillarsSection />

      {/* 5. Areas of Specialization */}
      <AreasSection />

      {/* 6. Social Proof / Testimonials */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0c8897] mb-2 inline-block">
              Testimonios Reales
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1d57] tracking-tight">
              Lo que dicen nuestros estudiantes
            </h2>
            <div className="w-16 h-1 bg-[#0c8897] mx-auto mt-4 mb-4 rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base">
              Profesionales que han impulsado sus carreras gracias a la formación práctica y certificada de EduPRO360.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                "Llevé el curso de Trabajos de Alto Riesgo y la Especialización SSOMA. Las clases son 100% prácticas con normativas reales. El certificado digital con QR me ayudó a validar mi postulación para una minera en el sur."
              </p>
              <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0e1d57] text-white flex items-center justify-center font-bold text-sm">
                  JA
                </div>
                <div>
                  <h4 className="font-bold text-[#0e1d57] text-sm">Ing. Jorge Alarcón</h4>
                  <span className="text-xs text-slate-500">Supervisor SSOMA - Arequipa</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                "Excelente la especialización en Ofimática Profesional. Aprendí desde fórmulas complejas hasta macros en Excel y bases en Access. El material descargable y la atención por WhatsApp son de primera."
              </p>
              <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0c8897] text-white flex items-center justify-center font-bold text-sm">
                  LM
                </div>
                <div>
                  <h4 className="font-bold text-[#0e1d57] text-sm">Lic. Lucía Medina</h4>
                  <span className="text-xs text-slate-500">Asistente Administrativa - Lima</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                "El módulo de Power BI me permitió automatizar los reportes de ventas de mi empresa. El envío físico de mi certificado llegó puntual por Olva Courier hasta Trujillo en perfecto estado."
              </p>
              <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffc24b] text-slate-900 flex items-center justify-center font-bold text-sm">
                  CR
                </div>
                <div>
                  <h4 className="font-bold text-[#0e1d57] text-sm">Carlos Rivas</h4>
                  <span className="text-xs text-slate-500">Analista de Operaciones - Trujillo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom Action Banner */}
      <section className="bg-gradient-to-r from-[#0e1d57] via-[#0c3175] to-[#0c8897] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-black tracking-wider uppercase text-[#ffc24b] border border-white/20">
            Formación sin límites
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto">
            ¿Listo para llevar tu perfil profesional al siguiente nivel?
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto">
            Inscríbete hoy en nuestros programas con certificación oficial y estudia a tu propio ritmo desde cualquier lugar.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to={ROUTES.CURSOS}
              className="px-8 py-4 rounded-xl bg-white text-[#0e1d57] hover:bg-slate-100 font-black text-sm tracking-wide shadow-xl transition-all hover:scale-105"
            >
              Ver Catálogo de Cursos
            </Link>
            <a
              href={EXTERNAL_LINKS.WHATSAPP_URL('Hola EduPRO360, deseo asesoría personalizada para elegir el mejor curso para mi carrera.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#0c8897] hover:bg-[#0a7482] text-white font-black text-sm tracking-wide border border-white/30 shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>Chatear con un Asesor</span>
              <ArrowRight className="w-4 h-4 text-[#ffc24b]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
