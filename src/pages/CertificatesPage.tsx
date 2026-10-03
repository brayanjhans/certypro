import React, { useState } from 'react';
import { 
  Search, 
  Award, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  Clock, 
  Download, 
  QrCode, 
  ShieldCheck, 
  FileCheck2,
  Printer
} from 'lucide-react';
import { CertificateRecord } from '../types';
import { findCertificate, SAMPLE_CERTIFICATES } from '../data/certificates';
import { getAssetUrl, EXTERNAL_LINKS } from '../utils/routes';

export const CertificatesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [certificate, setCertificate] = useState<CertificateRecord | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const result = findCertificate(searchQuery);
    setCertificate(result);
    setSearched(true);
  };

  const handleSampleClick = (sampleCode: string) => {
    setSearchQuery(sampleCode);
    const result = findCertificate(sampleCode);
    setCertificate(result);
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Header Banner */}
      <section className="bg-[#0e1d57] text-white py-16 sm:py-20 border-b border-[#162a72]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0c8897] bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            <ShieldCheck className="w-4 h-4 text-[#ffc24b]" />
            <span>Sistema Oficial de Acreditación</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Validación de Certificados
          </h1>
          <div className="w-16 h-1 bg-[#0c8897] mx-auto mt-2 rounded-full"></div>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Verifica la autenticidad, horas académicas y validez de los certificados emitidos por EduPRO360 en convenio institucional.
          </p>

          {/* Search Input Box */}
          <div className="max-w-2xl mx-auto pt-6">
            <form onSubmit={handleSearch} className="relative flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ingresa DNI (8 dígitos) o Código (ej. EDU-2025-7841)..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-[#0c8897]/50 shadow-2xl"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 rounded-2xl bg-[#0c8897] hover:bg-[#0a7482] text-white font-black text-sm tracking-wide shadow-xl transition-all cursor-pointer whitespace-nowrap"
              >
                Verificar Ahora
              </button>
            </form>

            {/* Quick Demo Test Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-slate-300">
              <span className="font-semibold">Códigos de prueba rápida:</span>
              <button
                type="button"
                onClick={() => handleSampleClick('EDU-2025-7841')}
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono transition-colors cursor-pointer border border-white/10"
              >
                EDU-2025-7841
              </button>
              <button
                type="button"
                onClick={() => handleSampleClick('72345678')}
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono transition-colors cursor-pointer border border-white/10"
              >
                DNI 72345678
              </button>
              <button
                type="button"
                onClick={() => handleSampleClick('EDU-2025-8912')}
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono transition-colors cursor-pointer border border-white/10"
              >
                EDU-2025-8912
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {searched && (
          <div className="animate-fadeIn">
            {certificate ? (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                
                {/* Result Status Banner */}
                <div className="bg-emerald-600 text-white px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                    <div>
                      <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-100">
                        Estado de Verificación
                      </span>
                      <h3 className="text-base sm:text-lg font-black">
                        CERTIFICADO VÁLIDO Y AUTÉNTICO
                      </h3>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right text-xs text-emerald-100 font-mono">
                    ID REGISTRO: {certificate.certificateCode}
                  </div>
                </div>

                {/* Printable Certificate Simulation Frame */}
                <div className="p-6 sm:p-10 border-8 border-slate-50 bg-gradient-to-b from-white via-amber-50/10 to-white relative">
                  
                  {/* Decorative Border Frame */}
                  <div className="border-2 border-[#0e1d57]/20 p-6 sm:p-8 rounded-2xl relative">
                    
                    {/* Top Certificate Header */}
                    <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-200 pb-6 gap-4 text-center sm:text-left">
                      <div className="flex items-center gap-4">
                        <img
                          src={getAssetUrl('/assets/logo.png')}
                          alt="EduPRO360 Logo"
                          className="h-12 w-auto object-contain"
                        />
                        <div>
                          <h4 className="text-sm font-black text-[#0e1d57]">EDUPRO360</h4>
                          <span className="text-[10px] text-slate-500 uppercase tracking-widest block">Dirección Académica Central</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <img
                          src={getAssetUrl('/assets/colegio-abogados.png')}
                          alt="Convenio Ilustre Colegio de Abogados"
                          className="h-12 w-auto object-contain"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>
                    </div>

                    {/* Certificate Body Text */}
                    <div className="my-8 text-center space-y-4">
                      <span className="text-xs font-bold text-slate-400 tracking-widest uppercase block">
                        Certifica que
                      </span>

                      <h2 className="text-2xl sm:text-3xl font-black text-[#0e1d57] underline decoration-[#0c8897] decoration-2 underline-offset-8">
                        {certificate.studentName}
                      </h2>

                      <p className="text-xs text-slate-500">
                        Identificado(a) con DNI / Documento: <strong>{certificate.dni}</strong>
                      </p>

                      <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed pt-2">
                        Ha culminado y aprobado satisfactoriamente el programa de formación profesional en:
                      </p>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0c8897] max-w-2xl mx-auto">
                        "{certificate.courseTitle}"
                      </h3>

                      <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center max-w-2xl mx-auto">
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <span className="text-[11px] text-slate-400 block font-semibold">Horas Lectivas</span>
                          <strong className="text-sm font-bold text-[#0e1d57]">{certificate.durationHours} hrs</strong>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <span className="text-[11px] text-slate-400 block font-semibold">Calificación Final</span>
                          <strong className="text-sm font-bold text-[#0e1d57]">{certificate.finalGrade}</strong>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <span className="text-[11px] text-slate-400 block font-semibold">Fecha de Emisión</span>
                          <strong className="text-sm font-bold text-[#0e1d57]">{certificate.issueDate}</strong>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <span className="text-[11px] text-slate-400 block font-semibold">Acreditación</span>
                          <strong className="text-sm font-bold text-emerald-700">Conforme</strong>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Signatures & QR Section */}
                    <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                      <div className="text-center space-y-1">
                        <div className="w-28 h-10 border-b border-slate-400 mx-auto"></div>
                        <span className="text-[11px] font-bold text-slate-700 block">Dirección Académica</span>
                        <span className="text-[10px] text-slate-400 block">EduPRO360</span>
                      </div>

                      <div className="text-center space-y-1">
                        <div className="w-28 h-10 border-b border-slate-400 mx-auto"></div>
                        <span className="text-[11px] font-bold text-slate-700 block">Coordinación General</span>
                        <span className="text-[10px] text-slate-400 block">Convenio Institucional</span>
                      </div>

                      <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl border border-slate-200">
                        {/* Authentic QR representation */}
                        <div className="w-16 h-16 bg-white border border-slate-300 p-1 flex items-center justify-center">
                          <QrCode className="w-14 h-14 text-slate-800" />
                        </div>
                        <span className="text-[9px] font-mono text-slate-500 mt-1">
                          {certificate.certificateCode}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Actions Bar */}
                <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-600">
                    Este documento electrónico cuenta con validez legal según la Ley N° 27269 de Firmas y Certificados Digitales.
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => window.print()}
                      className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Imprimir</span>
                    </button>
                    <a
                      href={EXTERNAL_LINKS.WHATSAPP_URL(`Hola EduPRO360, deseo solicitar una copia en alta definición de mi certificado: ${certificate.certificateCode}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#0c8897] hover:bg-[#0a7380] text-white font-bold text-xs flex items-center gap-2 shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Solicitar PDF Original</span>
                    </a>
                  </div>
                </div>

              </div>
            ) : (
              /* Not Found Card */
              <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-md text-center max-w-lg mx-auto space-y-4">
                <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 mx-auto flex items-center justify-center">
                  <XCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Certificado no encontrado
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No se encontró ningún registro con el criterio: <strong>"{searchQuery}"</strong>. Verifica que el DNI o código de certificado esté correctamente escrito.
                </p>
                <div className="pt-2">
                  <a
                    href={EXTERNAL_LINKS.WHATSAPP_URL(`Hola EduPRO360, no encuentro mi certificado con el código o DNI: ${searchQuery}. ¿Me podrían ayudar a verificarlo?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0e1d57] text-white text-xs font-bold hover:bg-[#122361] transition-colors"
                  >
                    <span>Consultar con Soporte de Certificación</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Informative Security Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0c8897] flex items-center justify-center">
              <QrCode className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-[#0e1d57] text-base">Código QR Instantáneo</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Cada certificado físico y digital cuenta con un código QR que enlaza de manera directa e inalterable con este portal oficial.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0c8897] flex items-center justify-center">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-[#0e1d57] text-base">Registro Centralizado</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              La base de datos de EduPRO360 almacena el historial de notas, horas y actas de evaluación de cada participante.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0c8897] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-[#0e1d57] text-base">Seguridad Antifraude</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Garantizamos la máxima inviolabilidad para postulaciones a convocatorias laborales públicas (CAS, 728, 276) y privadas.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
