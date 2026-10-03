import React from 'react';
import { Shield, FileText, ArrowLeft } from 'lucide-react';
import { ROUTES } from '../utils/routes';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link
          to={ROUTES.HOME}
          className="inline-flex items-center gap-1.5 text-xs text-[#0c8897] font-bold hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </Link>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-700">
          
          <div className="border-b border-slate-200 pb-6">
            <span className="text-xs font-bold text-[#0c8897] uppercase tracking-wider block mb-1">
              Políticas Legales y de Servicio
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0e1d57]">
              Términos, Condiciones y Políticas de Privacidad
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Última actualización: Febrero 2025 | Edupro360 E.I.R.L. (RUC 20612348911)
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0e1d57]">1. Identidad del Proveedor</h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              Edupro360 E.I.R.L., con domicilio fiscal en Jr. Manuel Estacio N° 100, distrito de San Miguel, departamento de Lima, Perú, ofrece servicios de formación y capacitación profesional a través de su plataforma virtual.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0e1d57]">2. Acceso a los Programas y Aula Virtual</h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              El acceso a los contenidos, videos, materiales descargables y evaluaciones se otorga al alumno de forma personal e intransferible. El participante dispondrá de acceso continuo durante el período estipulado en el plan formativo correspondiente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0e1d57]">3. Emisión y Validación de Certificados</h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              La emisión de constancias, certificados y diplomas está sujeta a la aprobación de las evaluaciones con una calificación mínima de catorce (14/20). Cada documento cuenta con un código de registro institucional y un código QR único que permite su verificación inmediata en nuestro portal web institucional.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0e1d57]">4. Política de Protección de Datos Personales</h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              En estricto cumplimiento de la Ley N° 29733 (Ley de Protección de Datos Personales del Perú) y su Reglamento, los datos personales proporcionados por los usuarios son tratados de manera confidencial y utilizados exclusivamente para fines académicos, administrativos y de contacto informativo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0e1d57]">5. Envíos Físicos de Diplomas</h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              Los envíos de diplomas en formato físico se efectúan a través de empresas de courier formalmente constituidas (Olva Courier, Shalom Empresarial u otras). Se proporciona un código de remisión o guía para el rastreo del despacho en tiempo real.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
