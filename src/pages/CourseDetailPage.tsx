import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  Award, 
  CheckCircle, 
  BookOpen, 
  ArrowLeft, 
  ShieldCheck, 
  Share2, 
  FileText, 
  Send
} from 'lucide-react';
import { COURSES } from '../data/courses';
import { ROUTES, EXTERNAL_LINKS, getAssetUrl } from '../utils/routes';

export const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = COURSES.find((c) => c.id === id);

  const [fullName, setFullName] = useState('');
  const [dni, setDni] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-50 py-20">
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-slate-200 text-center space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Curso no encontrado</h2>
          <p className="text-xs text-slate-500">El curso solicitado no existe o ha sido reubicado en el catálogo.</p>
          <Link
            to={ROUTES.CURSOS}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0e1d57] text-white text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Cursos</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `¡Hola EduPRO360! Deseo matricularme en el curso "${course.title}". Mis datos son: Nombre: ${fullName}, DNI: ${dni}, Teléfono: ${phone}, Correo: ${email}. ¿Cuáles son los números de cuenta / Yape?`;
    window.open(EXTERNAL_LINKS.WHATSAPP_URL(msg), '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Top Breadcrumb & Hero */}
      <section className="bg-[#0e1d57] text-white py-12 sm:py-16 border-b border-[#162a72]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={ROUTES.CURSOS}
            className="inline-flex items-center gap-1.5 text-xs text-[#0c8897] hover:text-white font-bold mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Catálogo de Cursos</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-[#0c8897] text-white text-xs font-black uppercase tracking-wider">
                {course.category}
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                {course.title}
              </h1>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {course.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Clock className="w-4 h-4 text-[#0c8897]" />
                  <span>{course.durationHours} horas académicas</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Award className="w-4 h-4 text-[#ffc24b]" />
                  <span>Modalidad {course.mode}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Certificado con Código QR</span>
                </div>
              </div>
            </div>

            {/* Price Snapshot Card */}
            <div className="lg:col-span-4 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-4">
              <div className="flex items-baseline justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs text-slate-400 block line-through">
                    Precio regular: S/ {course.priceRegular}.00
                  </span>
                  <div className="text-3xl font-black text-[#0e1d57]">
                    S/ {course.priceDiscount}.00
                  </div>
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  50% DSCTO
                </span>
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Acceso 24/7 a la plataforma de aprendizaje</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Materiales de lectura y plantillas descargables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certificado digital oficial con código QR</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Opción a envío de diploma físico a nivel nacional</span>
                </li>
              </ul>

              <a
                href={EXTERNAL_LINKS.WHATSAPP_URL(`Hola EduPRO360, deseo inscribirme inmediatamente en el curso: "${course.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0c8897] hover:bg-[#0a7380] text-white font-black text-sm tracking-wide shadow-md transition-all cursor-pointer"
              >
                <span>Matricularme por WhatsApp</span>
                <Send className="w-4 h-4 text-[#ffc24b]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Details: Syllabus, Objectives */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Description */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-black text-[#0e1d57]">
                Descripción del Programa
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Modules / Temario */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-[#0e1d57]">
                    Temario y Módulos de Aprendizaje
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {course.modules.length} módulos estructurados pedagógicamente
                  </p>
                </div>
                <BookOpen className="w-6 h-6 text-[#0c8897]" />
              </div>

              <div className="space-y-3">
                {course.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200/90 bg-slate-50 flex items-start gap-3.5 hover:border-[#0c8897] transition-colors"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#0e1d57] text-white text-xs font-black flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 leading-snug">
                        {mod}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Clases grabadas en alta definición, lecturas complementarias y cuestionarios prácticos de autoevaluación.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificación y Respaldo */}
            <div className="bg-[#0e1d57] text-white p-8 rounded-3xl shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-[#ffc24b]" />
                <div>
                  <h3 className="text-lg font-bold text-white">Certificación Oficial</h3>
                  <span className="text-xs text-slate-300">Con valor para concursos públicos y privados</span>
                </div>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                Al culminar y aprobar satisfactoriamente el curso con una calificación mínima aprobatoria (14/20), se emitirá tu certificado digital registrado en la base de datos de EduPRO360, con código QR único para que cualquier empleador pueda validar su autenticidad al instante.
              </p>
            </div>

          </div>

          {/* Right Enrollment Lead Form */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
              <h3 className="text-lg font-black text-[#0e1d57]">
                Solicitar Matrícula o Información
              </h3>
              <p className="text-xs text-slate-500">
                Déjanos tus datos y un asesor académico se contactará de inmediato con el temario completo y métodos de pago (Yape, Plin, BCP, BBVA, Interbank).
              </p>

              <form onSubmit={handleRegister} className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nombres y Apellidos
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    DNI / Carnet de Extranjería
                  </label>
                  <input
                    type="text"
                    required
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    placeholder="Número de 8 dígitos"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp de Contacto
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. 990654088"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0c8897] to-[#0a7380] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#ffc24b]" />
                  <span>Enviar y Recibir Temario</span>
                </button>
              </form>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-slate-400">
                  Tus datos están protegidos bajo la Ley N° 29733 de Protección de Datos Personales del Perú.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
