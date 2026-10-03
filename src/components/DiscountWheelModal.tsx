import React, { useState } from 'react';
import { Gift, X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { EXTERNAL_LINKS } from '../utils/routes';

interface Prize {
  label: string;
  code: string;
  discount: string;
  color: string;
}

const PRIZES: Prize[] = [
  { label: '50% DSCTO', discount: '50% de Descuento', code: 'EDUPRO-50OFF', color: '#14b8c4' },
  { label: 'BECA 30%', discount: '30% de Descuento', code: 'PRO-BECA30', color: '#f5a524' },
  { label: 'OFIMÁTICA 2X1', discount: '2x1 en Ofimática', code: 'PRO-OFIMATICA2X1', color: '#0e1d57' },
  { label: '40% DSCTO', discount: '40% de Descuento', code: 'PRO-40SPECIAL', color: '#f0616d' },
  { label: 'CURSO GRATIS*', discount: '1 Curso Taller de Regalo', code: 'PRO-FREEWORKSHOP', color: '#2f6fed' },
  { label: '25% DSCTO', discount: '25% de Descuento', code: 'PRO-WELCOME25', color: '#22b573' },
];

export const DiscountWheelModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSpin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setErrorMessage('Por favor completa todos los campos para girar la ruleta.');
      return;
    }
    if (phone.trim().length < 9) {
      setErrorMessage('Ingresa un número de WhatsApp válido de 9 dígitos.');
      return;
    }

    setErrorMessage('');
    setSpinning(true);

    // Pick a prize (e.g. index 0 or 1: 50% or 30%)
    const selectedIndex = Math.floor(Math.random() * PRIZES.length);
    const prize = PRIZES[selectedIndex];

    // Segment size is 360 / 6 = 60 deg
    const segmentAngle = 360 / PRIZES.length;
    // To land on selectedIndex, the pointer is at top (270 deg or 0 deg).
    // Add multiple full spins (5 * 360 = 1800) plus offset
    const extraSpins = 5 * 360;
    const targetAngle = extraSpins + (360 - (selectedIndex * segmentAngle + segmentAngle / 2));

    const finalAngle = rotation + targetAngle;
    setRotation(finalAngle);

    setTimeout(() => {
      setSpinning(false);
      setWonPrize(prize);
    }, 3800);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Left matching edupro360.pe) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 sm:left-6 bottom-5 sm:bottom-6 z-40 inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#0c8897] via-[#0b6e7a] to-[#0e1d57] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-2xl border-2 border-white/80 hover:scale-105 active:scale-95 transition-all cursor-pointer animate-wheel-btn"
        aria-label="Abrir ruleta de descuentos"
      >
        <Gift className="w-5 h-5 text-[#ffc24b] animate-bounce shrink-0" />
        <span className="hidden sm:inline">¡Gira y Gana Descuentos!</span>
        <span className="sm:hidden font-black">Ruleta</span>
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8">
            
            {/* Top decorative stripe */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0e1d57] via-[#0c8897] to-[#ffc24b]"></div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              disabled={spinning}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors disabled:opacity-50 cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center pt-2 mb-4">
              <span className="inline-block px-3 py-1 text-[11px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 rounded-full mb-1">
                ★ Ruleta de la Suerte EduPRO360 ★
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0e1d57] tracking-tight">
                ¡Gira y Obtén tu Beca!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Participa y reclama descuentos de hasta el 50% en tu próxima especialización.
              </p>
            </div>

            {/* The Wheel Visual */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto my-4 flex items-center justify-center">
              
              {/* Pointer indicator at top */}
              <div className="absolute -top-3 z-30 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[28px] border-t-[#f0616d] drop-shadow-md"></div>

              {/* Outer Glowing Ring */}
              <div className="absolute -inset-2 rounded-full border-4 border-amber-300 bulbs-border shadow-xl"></div>

              {/* Rotating Wheel Circle */}
              <div
                className="w-full h-full rounded-full border-4 border-white shadow-2xl relative overflow-hidden transition-transform duration-[3800ms] cubic-bezier(0.15, 0.78, 0.18, 1)"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  background: 'conic-gradient(#14b8c4 0deg 60deg, #f5a524 60deg 120deg, #0e1d57 120deg 180deg, #f0616d 180deg 240deg, #2f6fed 240deg 300deg, #22b573 300deg 360deg)',
                }}
              >
                {/* Center Star Hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-[#0e1d57] text-[#f5a524] flex items-center justify-center font-black text-xl shadow-md z-20">
                    ★
                  </div>
                </div>

                {/* Prize Labels */}
                {PRIZES.map((prize, idx) => {
                  const angle = idx * 60 + 30; // Center of 60 deg slice
                  return (
                    <div
                      key={idx}
                      className="absolute w-full text-center text-[10px] sm:text-[11px] font-black text-white tracking-wider"
                      style={{
                        top: '12%',
                        left: '0%',
                        transform: `rotate(${angle}deg)`,
                        transformOrigin: '50% 120px',
                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                      }}
                    >
                      {prize.label}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Error Feedback */}
            {errorMessage && (
              <div className="p-2.5 mb-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold text-center">
                {errorMessage}
              </div>
            )}

            {/* Won Prize Result */}
            {wonPrize ? (
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#0c8897] text-white mx-auto flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-[#ffc24b]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0e1d57]">
                  ¡Felicidades, {name}!
                </h3>
                <p className="text-sm font-bold text-[#0c8897]">
                  Has ganado: <span className="underline">{wonPrize.discount}</span>
                </p>
                <div className="bg-white py-2 px-4 rounded-xl border border-teal-300 inline-block">
                  <span className="text-xs text-slate-500 block">Tu código promocional:</span>
                  <code className="text-base font-black text-[#0e1d57] tracking-wider">
                    {wonPrize.code}
                  </code>
                </div>
                <p className="text-xs text-slate-600">
                  Válido para canjear de forma inmediata con uno de nuestros asesores académicos vía WhatsApp.
                </p>
                <a
                  href={EXTERNAL_LINKS.WHATSAPP_URL(`¡Hola EduPRO360! He girado la ruleta y gané "${wonPrize.discount}" con el código: ${wonPrize.code}. Mi nombre es ${name}. ¿Cómo lo canjeo?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#0c8897] to-[#0a7380] text-white font-extrabold text-sm shadow-md hover:brightness-110 transition-all cursor-pointer"
                >
                  <span>Reclamar mi Descuento en WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-[#ffc24b]" />
                </a>
              </div>
            ) : (
              /* Participant Form */
              <form onSubmit={handleSpin} className="space-y-3 mt-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nombres y Apellidos
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Juan Pérez Gómez"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897] focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp / Celular
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej. 990654088"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897] focus:border-transparent"
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
                      placeholder="correo@ejemplo.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897] focus:border-transparent"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={spinning}
                  className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-[#0c8897] via-[#0b7482] to-[#0e1d57] text-white font-black text-sm tracking-wider uppercase shadow-xl hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#ffc24b]" />
                  <span>{spinning ? 'Girando ruleta...' : '¡Girar la Ruleta Ahora!'}</span>
                </button>
              </form>
            )}

            <div className="mt-4 text-center">
              <span className="text-[11px] text-slate-400">
                Promoción sujeta a términos y condiciones. Válida para cursos del mes en curso.
              </span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
