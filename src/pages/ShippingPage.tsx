import React, { useState } from 'react';
import { 
  Truck, 
  Search, 
  Package, 
  CheckCircle, 
  MapPin, 
  Calendar, 
  Clock, 
  Phone, 
  XCircle,
  ExternalLink
} from 'lucide-react';
import { ShippingRecord } from '../types';
import { findShipping } from '../data/shipping';
import { EXTERNAL_LINKS } from '../utils/routes';

export const ShippingPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [shipping, setShipping] = useState<ShippingRecord | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const result = findShipping(query);
    setShipping(result);
    setSearched(true);
  };

  const handleQuickDemo = (code: string) => {
    setQuery(code);
    const result = findShipping(code);
    setShipping(result);
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Header Banner */}
      <section className="bg-[#0e1d57] text-white py-16 sm:py-20 border-b border-[#162a72]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0c8897] bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            <Truck className="w-4 h-4 text-[#ffc24b]" />
            <span>Cobertura a Todo el Perú</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Seguimiento de Envíos
          </h1>
          <div className="w-16 h-1 bg-[#0c8897] mx-auto mt-2 rounded-full"></div>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Rastrea en tiempo real el despacho y la entrega de tus diplomas y certificados físicos enviados por Olva Courier y Shalom.
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto pt-6">
            <form onSubmit={handleSearch} className="relative flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ingresa tu N° de Guía (ej. OLV-9841249) o DNI..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-[#0c8897]/50 shadow-2xl"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 rounded-2xl bg-[#0c8897] hover:bg-[#0a7482] text-white font-black text-sm tracking-wide shadow-xl transition-all cursor-pointer whitespace-nowrap"
              >
                Rastrear Envío
              </button>
            </form>

            {/* Quick Demo Test Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-slate-300">
              <span className="font-semibold">Guías de prueba:</span>
              <button
                type="button"
                onClick={() => handleQuickDemo('OLV-9841249')}
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono transition-colors cursor-pointer border border-white/10"
              >
                OLV-9841249 (Entregado)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemo('SHA-2025-4819')}
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono transition-colors cursor-pointer border border-white/10"
              >
                SHA-2025-4819 (En Agencia)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemo('OLV-9842103')}
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono transition-colors cursor-pointer border border-white/10"
              >
                OLV-9842103 (En Tránsito)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Results Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {searched && (
          <div className="animate-fadeIn">
            {shipping ? (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                
                {/* Header status bar */}
                <div className="bg-[#0e1d57] text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#0c8897] font-bold block mb-1">
                      Courier: {shipping.courier}
                    </span>
                    <h3 className="text-2xl font-black">
                      Guía: {shipping.trackingNumber}
                    </h3>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-right">
                    <span className="text-[11px] text-slate-300 block">Estado Actual</span>
                    <strong className="text-sm font-extrabold text-[#ffc24b]">
                      {shipping.status}
                    </strong>
                  </div>
                </div>

                {/* Details summary */}
                <div className="p-6 sm:p-8 border-b border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-slate-50/50">
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Destinatario</span>
                    <strong className="text-sm text-slate-800 font-bold">{shipping.recipientName}</strong>
                    <span className="text-xs text-slate-500 block">DNI: {shipping.dni}</span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Destino</span>
                    <strong className="text-sm text-slate-800 font-bold">{shipping.destinationCity}</strong>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Fecha de Despacho</span>
                    <strong className="text-sm text-slate-800 font-bold">{shipping.dispatchDate}</strong>
                  </div>
                </div>

                {/* Timeline History */}
                <div className="p-6 sm:p-8 space-y-6">
                  <h4 className="text-base font-black text-[#0e1d57]">
                    Historial del Envío
                  </h4>

                  <div className="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                    {shipping.history.map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full bg-[#0c8897] text-white flex items-center justify-center text-[10px] font-bold ring-4 ring-white">
                          ✓
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 mb-1">
                            <span className="font-semibold text-slate-700">{step.location}</span>
                            <span>{step.date}</span>
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-[#0e1d57]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom support bar */}
                <div className="px-6 sm:px-8 py-4 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-600">
                    ¿Tienes dudas con la entrega o necesitas coordinar un recojo?
                  </span>
                  <a
                    href={EXTERNAL_LINKS.WHATSAPP_URL(`Hola EduPRO360, deseo consultar el estado de mi guía de envío: ${shipping.trackingNumber}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#0c8897] hover:bg-[#0a7380] text-white font-bold text-xs flex items-center gap-2"
                  >
                    <span>Contactar Área Logística</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ) : (
              <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-md text-center max-w-lg mx-auto space-y-4">
                <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 mx-auto flex items-center justify-center">
                  <XCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Envío no encontrado
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No se encontró ningún paquete con la guía o DNI: <strong>"{query}"</strong>. Los códigos pueden tardar hasta 24 horas hábiles en registrarse en el sistema del courier.
                </p>
                <div className="pt-2">
                  <a
                    href={EXTERNAL_LINKS.WHATSAPP_URL(`Hola EduPRO360, solicité mi certificado físico pero no encuentro la guía con mi DNI: ${query}. ¿Me podrían indicar el estado?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0e1d57] text-white text-xs font-bold"
                  >
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Courier Partnerships Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0c8897] flex items-center justify-center shrink-0">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0e1d57] mb-1">
                Embalaje Rígido de Alta Protección
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Todos los diplomas y constancias se envían en tubos cilíndricos rígidos o sobres acolchados impermeables para garantizar que lleguen en impecable estado de conservación.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0c8897] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0e1d57] mb-1">
                Entrega a Domicilio y Agencia
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Entregas directas a domicilio o para recojo en agencias autorizadas de Olva Courier y Shalom a lo largo de los 24 departamentos del Perú.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
