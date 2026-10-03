import React, { useState } from 'react';
import { X, LogIn, Lock, User, AlertCircle, ExternalLink } from 'lucide-react';
import { EXTERNAL_LINKS } from '../utils/routes';

interface StudentAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentAccessModal: React.FC<StudentAccessModalProps> = ({ isOpen, onClose }) => {
  const [docNumber, setDocNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docNumber.trim() || !password.trim()) {
      setError('Por favor ingresa tu documento y contraseña.');
      return;
    }
    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // Informative feedback with option to contact support or redirect
      setError('Credenciales en proceso de sincronización con la plataforma EduPRO360. Si eres alumno nuevo, solicita tu activación por WhatsApp.');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8">
        
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0e1d57] to-[#0c8897]"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center pt-2 mb-6">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0c8897] mx-auto flex items-center justify-center mb-3">
            <LogIn className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black text-[#0e1d57] tracking-tight">
            Aula Virtual EduPRO360
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Ingresa a tus clases virtuales, materiales y evaluaciones 24/7
          </p>
        </div>

        {error && (
          <div className="p-3 mb-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Número de DNI / Documento de Identidad
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={docNumber}
                onChange={(e) => setDocNumber(e.target.value)}
                placeholder="Ingresa tu DNI de 8 dígitos"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" className="rounded text-[#0c8897]" defaultChecked />
              <span>Recordar sesión</span>
            </label>
            <a
              href={EXTERNAL_LINKS.WHATSAPP_URL('Hola EduPRO360, olvidé mi contraseña del Aula Virtual. Mi DNI es: ')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0c8897] hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#0e1d57] hover:bg-[#122361] text-white font-black text-sm tracking-wide shadow-md transition-all disabled:opacity-60 cursor-pointer"
          >
            {loading ? 'Accediendo...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500 mb-2">
            ¿Eres estudiante nuevo y no tienes acceso?
          </p>
          <a
            href={EXTERNAL_LINKS.WHATSAPP_URL('Hola EduPRO360, me inscribí recientemente y deseo solicitar mis accesos al Aula Virtual.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c8897] hover:underline"
          >
            <span>Solicitar activación con Soporte Académico</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
