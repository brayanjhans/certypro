import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { ROUTES, getAssetUrl } from '../utils/routes';

const PROPOSALS = [
  {
    number: '01',
    title: 'Contenidos relevantes',
    text: 'Seleccionamos conocimientos, herramientas y temáticas vinculadas con las necesidades y cambios de los distintos campos profesionales.',
  },
  {
    number: '02',
    title: 'Aplicación práctica',
    text: 'Priorizamos un aprendizaje que pueda trasladarse a contextos laborales, académicos, técnicos o empresariales.',
  },
  {
    number: '03',
    title: 'Flexibilidad',
    text: 'Ofrecemos alternativas presenciales, virtuales, semipresenciales y a distancia, de acuerdo con la naturaleza de cada programa.',
  },
  {
    number: '04',
    title: 'Acompañamiento cercano',
    text: 'Promovemos una experiencia clara y accesible, con orientación durante el proceso formativo.',
  },
  {
    number: '05',
    title: 'Certificación',
    text: 'Emitimos certificados, constancias y diplomas correspondientes a los programas desarrollados por EduPRO360, de acuerdo con la naturaleza de cada actividad y la normativa aplicable.',
  },
];

const AREAS = [
  {
    title: 'Ingeniería',
    text: 'Ingeniería civil, industrial, ambiental, mecánica, eléctrica, electrónica y otras especialidades, junto con herramientas y aplicaciones propias de cada campo.',
  },
  {
    title: 'Arquitectura',
    text: 'Diseño arquitectónico, urbanismo, modelado, representación, planificación y herramientas aplicadas al desarrollo de proyectos.',
  },
  {
    title: 'Ciencias de la Salud',
    text: 'Medicina, enfermería, obstetricia, odontología, farmacia, nutrición y disciplinas vinculadas al cuidado y atención de la salud.',
  },
  {
    title: 'Derecho',
    text: 'Derecho civil, penal, laboral, administrativo, corporativo y demás ramas del ámbito jurídico.',
  },
  {
    title: 'Administración, Gestión y Negocios',
    text: 'Administración, gestión empresarial, gestión pública, gestión de proyectos, recursos humanos, liderazgo, emprendimiento, planificación y dirección.',
  },
  {
    title: 'Contabilidad, Economía y Finanzas',
    text: 'Contabilidad, tributación, costos, presupuestos, economía, finanzas, inversiones y materias relacionadas.',
  },
  {
    title: 'Seguridad, Salud Ocupacional y Medio Ambiente',
    text: 'Seguridad y Salud en el Trabajo, SSOMA, prevención y gestión de riesgos, trabajos de alto riesgo, higiene ocupacional, salud ocupacional, gestión ambiental y respuesta ante emergencias.',
  },
  {
    title: 'Educación',
    text: 'Pedagogía, docencia, metodologías de enseñanza, educación inicial, básica y superior, gestión educativa y desarrollo docente.',
  },
  {
    title: 'Psicología y Ciencias Sociales',
    text: 'Psicología, desarrollo humano, sociología, trabajo social y disciplinas relacionadas con el comportamiento y la sociedad.',
  },
  {
    title: 'Tecnología e Innovación Digital',
    text: 'Informática, computación, programación, inteligencia artificial, análisis y ciencia de datos, ciberseguridad y herramientas digitales.',
  },
  {
    title: 'Logística y Comercio Exterior',
    text: 'Logística, abastecimiento, almacenes, cadena de suministro, compras, operaciones y comercio exterior.',
  },
  {
    title: 'Marketing, Publicidad y Comunicación',
    text: 'Marketing, marketing digital, ventas, publicidad, comunicación corporativa, relaciones públicas y contenidos.',
  },
  {
    title: 'Calidad e Inocuidad',
    text: 'Gestión de la calidad, auditoría, mejora continua, buenas prácticas de manufactura, HACCP, inocuidad y homologaciones.',
  },
];

const VALUES = [
  {
    title: 'Profesionalismo',
    text: 'Trabajamos con seriedad y cuidamos la calidad de nuestros contenidos, documentos, plataforma y atención.',
  },
  {
    title: 'Actualización',
    text: 'Observamos los cambios del entorno para mantener nuestros programas conectados con nuevas necesidades y herramientas.',
  },
  {
    title: 'Cercanía',
    text: 'Creemos en una comunicación clara, humana y sencilla durante toda la experiencia con EduPRO360.',
  },
  {
    title: 'Progreso',
    text: 'Entendemos cada aprendizaje como una oportunidad para continuar construyendo una trayectoria profesional.',
  },
  {
    title: 'Confianza',
    text: 'Actuamos con responsabilidad y comunicamos únicamente aquello que podemos respaldar.',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#021b41] to-[#0e1d57] text-white">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0c8897] block">
              Nosotros
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Formación que impulsa tu crecimiento profesional
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal">
              En EduPRO360 brindamos una experiencia educativa diseñada para fortalecer tus habilidades, validar tus competencias con respaldo institucional y abrir nuevas puertas en el entorno laboral.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="p-3 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl">
              <img
                src={getAssetUrl('/assets/about-image.png')}
                alt="EduPRO360"
                className="w-full max-w-[280px] h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Purpose Section (Misión y Visión) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Misión */}
            <article className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0c8897] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#0e1d57]">
                Misión
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Brindar formación profesional actualizada, accesible y orientada a resultados, acompañando a nuestros participantes en el desarrollo de conocimientos y capacidades que contribuyan a su desempeño y proyección profesional.
              </p>
            </article>

            {/* Visión */}
            <article className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#0e1d57]">
                Visión
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Ser una plataforma de formación profesional reconocida por su innovación, calidad y alcance, conectando a las personas con nuevas oportunidades de aprendizaje y desarrollo.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* 3. Proposal Section (Nuestra Propuesta) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0e1d57]">
              Nuestra propuesta
            </h2>
            <div className="w-16 h-1 bg-[#0c8897] mx-auto mt-3 mb-3 rounded-full"></div>
            <p className="text-sm sm:text-base text-slate-500">
              Una experiencia pensada para aportar valor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROPOSALS.map((item) => (
              <article
                key={item.number}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div>
                  <span className="text-3xl font-black text-[#0c8897] block mb-3 opacity-60">
                    {item.number}
                  </span>
                  <h3 className="text-base font-bold text-[#0e1d57] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Areas Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0e1d57]">
              Áreas de formación
            </h2>
            <div className="w-16 h-1 bg-[#0c8897] mx-auto mt-3 mb-3 rounded-full"></div>
            <p className="text-sm sm:text-base text-slate-500">
              Programas orientados a diversos campos profesionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((area) => (
              <article
                key={area.title}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0c8897] transition-colors"
              >
                <h3 className="text-base font-bold text-[#0e1d57] mb-2 leading-snug">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {area.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Values Section (Lo que nos define) */}
      <section className="py-20 bg-[#0e1d57] text-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Lo que nos define
            </h2>
            <div className="w-16 h-1 bg-[#0c8897] mx-auto mt-3 mb-3 rounded-full"></div>
            <p className="text-sm sm:text-base text-slate-300">
              Principios que guían nuestro trabajo académico y servicio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {VALUES.map((val) => (
              <article
                key={val.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <h3 className="text-base font-bold text-[#ffc24b] mb-2 leading-snug">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {val.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0c8897] to-[#0a7481] text-white text-center">
        <div className="max-w-[800px] mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            ¿Listo para impulsar tu carrera?
          </h2>
          <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
            Explora nuestra oferta de cursos y únete a miles de profesionales que ya están transformando su futuro con EduPRO360.
          </p>
          <div className="pt-2">
            <Link
              to={ROUTES.CURSOS}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0e1d57] font-black text-sm uppercase tracking-wider shadow-xl hover:bg-slate-100 transition-all hover:scale-105"
            >
              <span>Ver cursos</span>
              <ArrowRight className="w-4 h-4 text-[#0c8897]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
