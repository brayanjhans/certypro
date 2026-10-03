import React from 'react';
import { Target, Compass, Award, Shield, CheckCircle, GraduationCap, Users } from 'lucide-react';
import { getAssetUrl, ROUTES, EXTERNAL_LINKS } from '../utils/routes';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Page Header */}
      <section className="bg-[#0e1d57] text-white py-16 sm:py-20 border-b border-[#162a72]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0c8897] uppercase">
            Identidad y Filosofía
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Acerca de EduPRO360
          </h1>
          <div className="w-16 h-1 bg-[#0c8897] mx-auto mt-2 rounded-full"></div>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Plataforma de formación profesional orientada al desarrollo de nuevas competencias, respaldo curricular y crecimiento laboral en el Perú.
          </p>
        </div>
      </section>

      {/* Misión y Visión Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Misión Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0c8897] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#0e1d57] mb-3">
                Nuestra Misión
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Brindar formación profesional actualizada, accesible y orientada a resultados, acompañando a nuestros participantes en el desarrollo de conocimientos y capacidades que contribuyan a su desempeño y proyección profesional.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0c8897]">
              <CheckCircle className="w-4 h-4" />
              <span>Educación sin fronteras geográficas</span>
            </div>
          </div>

          {/* Visión Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#0e1d57] mb-3">
                Nuestra Visión
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Ser una plataforma de formación profesional reconocida por su innovación, calidad y alcance, conectando a las personas con nuevas oportunidades de aprendizaje y desarrollo integral en los principales sectores productivos.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-amber-600">
              <CheckCircle className="w-4 h-4" />
              <span>Liderazgo en formación continua</span>
            </div>
          </div>

        </div>
      </section>

      {/* Respaldo Institucional y Convenios */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4 max-w-sm">
                <img
                  src={getAssetUrl('/assets/colegio-abogados.png')}
                  alt="Colegio de Abogados Convenio"
                  className="h-28 w-auto mx-auto object-contain drop-shadow"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <h4 className="text-base font-black text-[#0e1d57]">
                  Ilustre Colegio de Abogados
                </h4>
                <p className="text-xs text-slate-500">
                  Convenio interinstitucional de cooperación académica para la validación y acreditación curricular de nuestros programas de especialización.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0c8897]">
                Compromiso con la Calidad
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#0e1d57] leading-tight">
                Formación con valor curricular y legal en todo el territorio nacional
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                En EduPRO360 entendemos que el tiempo invertido en capacitarte debe traducirse en ventajas competitivas reales. Por eso, nuestros programas están estructurados de acuerdo con las exigencias del mercado y la normativa laboral vigente (Ley 29783, reglamentos sectoriales y estándares ISO).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0c8897] flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#0e1d57]">Seguridad y Autenticidad</h5>
                    <p className="text-xs text-slate-500">Certificados con firma digitalizada, registro numérico y código QR único.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0c8897] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#0e1d57]">Docentes Especialistas</h5>
                    <p className="text-xs text-slate-500">Profesionales en activo con amplia trayectoria técnica y pedagógica.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <Link
                  to={ROUTES.CURSOS}
                  className="px-6 py-3 rounded-xl bg-[#0e1d57] hover:bg-[#122361] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all"
                >
                  Conocer Cursos Disponibles
                </Link>
                <Link
                  to={ROUTES.CONTACTO}
                  className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs sm:text-sm tracking-wide transition-all"
                >
                  Atención al Alumno
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
