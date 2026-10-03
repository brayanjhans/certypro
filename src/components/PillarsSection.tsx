import React from 'react';
import { Award, BookCheck, Clock, Users, Shield, GraduationCap, CheckCircle } from 'lucide-react';
import { getAssetUrl, ROUTES } from '../utils/routes';
import { Link } from 'react-router-dom';

const PILLARS = [
  {
    number: '01',
    title: 'Contenidos relevantes',
    text: 'Seleccionamos conocimientos, herramientas y temáticas vinculadas con las necesidades y cambios de los distintos campos profesionales.',
    icon: BookCheck,
  },
  {
    number: '02',
    title: 'Aplicación práctica',
    text: 'Priorizamos un aprendizaje que pueda trasladarse a contextos laborales, académicos, técnicos o empresariales.',
    icon: GraduationCap,
  },
  {
    number: '03',
    title: 'Flexibilidad',
    text: 'Ofrecemos alternativas virtuales, en vivo y asincrónicas 24/7, adaptadas al ritmo y exigencias de cada participante.',
    icon: Clock,
  },
  {
    number: '04',
    title: 'Acompañamiento cercano',
    text: 'Promovemos una experiencia clara y accesible, con orientación y resolución continua de dudas durante el proceso formativo.',
    icon: Users,
  },
  {
    number: '05',
    title: 'Certificación',
    text: 'Emitimos certificados, constancias y diplomas oficiales con código QR y validación digital inmediata en nuestra plataforma.',
    icon: Award,
  },
];

export const PillarsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0c8897] uppercase mb-2 inline-block">
            ¿Por qué elegir EduPRO360?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1d57] tracking-tight">
            Nuestra propuesta
          </h2>
          <div className="w-16 h-1 bg-[#0c8897] mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-600">
            Una experiencia pensada para aportar valor real y fortalecer tu proyección profesional.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.number}
                className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#0c8897]/30 group-hover:text-[#0c8897] transition-colors">
                      {p.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#0c8897] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#0e1d57] mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Accreditation Banner */}
        <div className="bg-[#0e1d57] text-white rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#0c8897]/20 to-transparent pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ffc24b] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                <Shield className="w-3.5 h-3.5" />
                <span>Garantía Académica e Institucional</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Certificados con Respaldo y Código QR Verificable
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                Nuestros diplomas y constancias cuentan con acreditación de horas académicas, código único de registro y sistema de validación digital en línea para empresas e instituciones públicas del Perú.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to={ROUTES.CERTIFICADOS}
                  className="px-5 py-2.5 rounded-lg bg-[#0c8897] hover:bg-[#0a7380] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md inline-flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-[#ffc24b]" />
                  <span>Validar un Certificado</span>
                </Link>
                <Link
                  to={ROUTES.CURSOS}
                  className="px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-white/10 text-white font-bold text-xs sm:text-sm tracking-wide transition-all inline-flex items-center gap-2"
                >
                  <span>Explorar Programas</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm text-center">
              <img
                src={getAssetUrl('/assets/colegio-abogados.png')}
                alt="Convenio Institucional Colegio de Abogados"
                className="h-20 w-auto object-contain mb-3 drop-shadow-md"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-xs font-semibold text-slate-300">
                Respaldo y Convenios Institucionales
              </span>
              <span className="text-[11px] text-slate-400 mt-1">
                Conforme a la normativa y estándares profesionales de formación continua
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
