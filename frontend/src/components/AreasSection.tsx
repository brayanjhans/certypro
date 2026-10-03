import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Building2, 
  HeartPulse, 
  Scale, 
  Briefcase, 
  DollarSign, 
  HardHat, 
  BookOpen, 
  Brain, 
  Cpu, 
  Truck, 
  TrendingUp, 
  CheckSquare, 
  Pickaxe,
  ArrowRight
} from 'lucide-react';
import { ROUTES } from '../utils/routes';

interface Area {
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

const AREAS: Area[] = [
  {
    title: 'Ingeniería',
    text: 'Ingeniería civil, industrial, ambiental, mecánica, eléctrica, electrónica y otras especialidades, junto con herramientas y aplicaciones propias de cada campo.',
    icon: Wrench,
  },
  {
    title: 'Arquitectura',
    text: 'Diseño arquitectónico, urbanismo, modelado, representación, planificación y herramientas aplicadas al desarrollo de proyectos.',
    icon: Building2,
  },
  {
    title: 'Ciencias de la Salud',
    text: 'Medicina, enfermería, obstetricia, odontología, farmacia, nutrición y disciplinas vinculadas al cuidado y atención de la salud.',
    icon: HeartPulse,
  },
  {
    title: 'Derecho',
    text: 'Derecho civil, penal, laboral, administrativo, corporativo y demás ramas del ámbito jurídico.',
    icon: Scale,
  },
  {
    title: 'Administración, Gestión y Negocios',
    text: 'Administración, gestión empresarial, gestión pública, gestión de proyectos, recursos humanos, liderazgo, emprendimiento, planificación y dirección.',
    icon: Briefcase,
  },
  {
    title: 'Contabilidad, Economía y Finanzas',
    text: 'Contabilidad, tributación, costos, presupuestos, economía, finanzas, inversiones y materias relacionadas.',
    icon: DollarSign,
  },
  {
    title: 'Seguridad, Salud Ocupacional y Medio Ambiente',
    text: 'Seguridad y Salud en el Trabajo, SSOMA, prevención y gestión de riesgos, trabajos de alto riesgo, higiene ocupacional, salud ocupacional y medio ambiente.',
    icon: HardHat,
  },
  {
    title: 'Tecnología e Innovación Digital',
    text: 'Informática, computación, programación, inteligencia artificial, análisis y ciencia de datos, ciberseguridad y herramientas digitales.',
    icon: Cpu,
  },
  {
    title: 'Educación',
    text: 'Pedagogía, docencia, metodologías de enseñanza, educación inicial, básica y superior, gestión educativa y desarrollo docente.',
    icon: BookOpen,
  },
  {
    title: 'Psicología y Ciencias Sociales',
    text: 'Psicología, desarrollo humano, sociología, trabajo social y disciplinas relacionadas con el comportamiento y la sociedad.',
    icon: Brain,
  },
  {
    title: 'Logística y Comercio Exterior',
    text: 'Logística, abastecimiento, almacenes, cadena de suministro, compras, operaciones y comercio exterior.',
    icon: Truck,
  },
  {
    title: 'Marketing, Publicidad y Comunicación',
    text: 'Marketing, marketing digital, ventas, publicidad, comunicación corporativa, relaciones públicas y contenidos.',
    icon: TrendingUp,
  },
  {
    title: 'Calidad e Inocuidad',
    text: 'Gestión de la calidad, auditoría, mejora continua, buenas prácticas de manufactura, HACCP, inocuidad y homologaciones.',
    icon: CheckSquare,
  },
  {
    title: 'Minería, Energía y Construcción',
    text: 'Operaciones mineras, seguridad minera D.S. 024-2016-EM, perforación, voladura, maquinaria pesada y obras civiles.',
    icon: Pickaxe,
  },
];

export const AreasSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0c8897] uppercase mb-2 inline-block">
            Formación Multidisciplinaria
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1d57] tracking-tight">
            Áreas de formación y especialización
          </h2>
          <div className="w-16 h-1 bg-[#0c8897] mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-600">
            Diseñamos programas de capacitación técnica y profesional en los sectores con mayor demanda laboral del país.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="p-6 rounded-xl border border-slate-200/90 hover:border-[#0c8897]/50 bg-white hover:bg-slate-50/50 transition-all hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0e1d57] group-hover:bg-[#0c8897] group-hover:text-white transition-all flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0e1d57] mb-2 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {area.text}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0c8897] group-hover:translate-x-0.5 transition-transform">
                  <Link to={ROUTES.CURSOS} className="inline-flex items-center gap-1.5 hover:underline">
                    <span>Ver cursos del área</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
