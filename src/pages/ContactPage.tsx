import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { EXTERNAL_LINKS } from '../utils/routes';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('SSOMA');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hola EduPRO360, mi nombre es ${name}. Correo: ${email}, Teléfono: ${phone}. Área de interés: ${interest}. Mensaje: ${message}`;
    window.open(EXTERNAL_LINKS.WHATSAPP_URL(formatted), '_blank');
    setSubmitted(true);
  };

  const faqs = [
    {
      q: '¿Cómo accedo al curso después de matricularme?',
      a: 'Una vez validado el comprobante de pago, el equipo académico de EduPRO360 te enviará tu usuario y contraseña de acceso al Aula Virtual vía WhatsApp y correo en menos de 15 minutos.',
    },
    {
      q: '¿Los certificados tienen valor para postular a trabajos?',
      a: 'Sí. Todos nuestros certificados y diplomas consignan horas académicas lectivas, código de registro institucional, código QR de verificación digital y cuentan con respaldo en convenio con el Colegio de Abogados.',
    },
    {
      q: '¿Puedo solicitar el certificado físico si vivo en provincia?',
      a: 'Por supuesto. Realizamos envíos diarios a través de Olva Courier y Shalom Empresarial con cobertura a todas las regiones del Perú hasta tu domicilio o agencia más cercana.',
    },
    {
      q: '¿Qué formas de pago aceptan?',
      a: 'Aceptamos transferencias bancarias directas (BCP, BBVA, Interbank, Banco de la Nación), billeteras digitales (Yape, Plin) y tarjetas de crédito/débito.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Header Banner */}
      <section className="bg-[#0e1d57] text-white py-16 sm:py-20 border-b border-[#162a72]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0c8897] uppercase">
            Canales de Atención
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contáctanos
          </h1>
          <div className="w-16 h-1 bg-[#0c8897] mx-auto mt-2 rounded-full"></div>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Estamos a tu disposición para asesorarte sobre inscripciones, planes de estudio corporativos y acreditaciones oficiales.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-black text-[#0e1d57]">
              Información de la Institución
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Comunícate con nuestros coordinadores o visítanos en nuestras oficinas administrativas en San Miguel, Lima.
            </p>

            <div className="space-y-4 pt-2">
              {/* Address */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0c8897] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0e1d57] text-sm">Dirección Principal</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{EXTERNAL_LINKS.LOCATION_ADDRESS}</p>
                  <a
                    href={EXTERNAL_LINKS.GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0c8897] hover:underline mt-1 inline-block"
                  >
                    Ver en Google Maps ›
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0c8897] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0e1d57] text-sm">Central Telefónica y WhatsApp</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{EXTERNAL_LINKS.WHATSAPP_DISPLAY}</p>
                  <a
                    href={EXTERNAL_LINKS.WHATSAPP_URL()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0c8897] hover:underline mt-1 inline-block"
                  >
                    Iniciar conversación directa ›
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0c8897] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0e1d57] text-sm">Correos Electrónicos</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{EXTERNAL_LINKS.EMAIL}</p>
                  <p className="text-xs text-slate-600">{EXTERNAL_LINKS.EMAIL_CONTACTO}</p>
                </div>
              </div>

              {/* Schedule */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0c8897] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0e1d57] text-sm">Horario de Atención</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Lunes a Viernes: 9:00 am - 7:00 pm</p>
                  <p className="text-xs text-slate-600">Sábados: 9:00 am - 1:00 pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-black text-[#0e1d57]">
                  Envíanos un mensaje
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Completa el formulario y te responderemos a la brevedad con la información solicitada.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>¡Mensaje preparado! Te hemos redirigido a WhatsApp para concretar tu solicitud de forma inmediata.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nombres Completos
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Jorge Ramírez"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Celular / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej. 990654088"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Área o Curso de Interés
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
                    >
                      <option value="SSOMA">Seguridad y Salud en el Trabajo (SSOMA)</option>
                      <option value="Ofimática">Ofimática Profesional (Excel, Word, Access)</option>
                      <option value="Power BI">Microsoft Power BI / Business Intelligence</option>
                      <option value="Alto Riesgo">Trabajos de Alto Riesgo (Altura, Confinados)</option>
                      <option value="AutoCAD">AutoCAD 2D y 3D</option>
                      <option value="Gestión Pública">Gestión Pública y OSCE</option>
                      <option value="Otro">Otra especialidad o consulta general</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mensaje o Consulta Específica
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe aquí tu consulta, horarios deseados o dudas sobre la certificación..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0c8897] to-[#0a7380] hover:brightness-110 text-white font-black text-sm uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#ffc24b]" />
                  <span>Enviar Consulta por WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* FAQs Accordion / Grid */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0c8897]">
              Dudas Habituales
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0e1d57] mt-1">
              Preguntas Frecuentes
            </h3>
            <div className="w-12 h-1 bg-[#0c8897] mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2"
              >
                <div className="flex items-center gap-2 text-[#0e1d57] font-bold text-sm">
                  <HelpCircle className="w-4 h-4 text-[#0c8897] shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
