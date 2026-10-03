import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  GraduationCap, 
  Award, 
  Truck, 
  BookOpen, 
  Users, 
  LogIn
} from 'lucide-react';
import { ROUTES, EXTERNAL_LINKS, getAssetUrl } from '../utils/routes';

interface NavbarProps {
  onOpenAccessModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAccessModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'INICIO', path: ROUTES.HOME },
    { label: 'NOSOTROS', path: ROUTES.NOSOTROS },
    { label: 'CURSOS', path: ROUTES.CURSOS },
    { label: 'CERTIFICADOS', path: ROUTES.CERTIFICADOS },
    { label: 'ENVÍOS', path: ROUTES.ENVIOS },
    { label: 'CONTACTO', path: ROUTES.CONTACTO },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0e1d57] text-white shadow-md border-b border-[#162a72]">
      {/* Top Banner Notice Bar */}
      <div className="bg-[#09143c] text-xs py-1.5 px-4 text-slate-300 border-b border-[#122361] hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              Matrículas abiertas 2025 - Cursos con certificación oficial
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${EXTERNAL_LINKS.WHATSAPP_PHONE}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0c8897]" />
              <span>{EXTERNAL_LINKS.WHATSAPP_DISPLAY}</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 font-medium">Jr. Manuel Estacio N° 100, San Miguel, Lima</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link 
            to={ROUTES.HOME} 
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0c8897] rounded-lg"
          >
            <img 
              src={getAssetUrl('/assets/logo.png')} 
              alt="EduPRO360 - Formación Profesional" 
              className="h-12 w-auto object-contain transition-transform hover:scale-[1.02]"
              onError={(e) => {
                // High-fidelity fallback if image fails
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.nextElementSibling) {
                  (target.nextElementSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            {/* Fallback branded text in case of image failure */}
            <div className="hidden items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#0c8897] flex items-center justify-center font-black text-xl text-white">
                360°
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">EduPRO<span className="text-[#0c8897]">360</span></span>
                <span className="text-[10px] tracking-wider text-slate-300 uppercase">Formación Profesional</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-bold tracking-wide transition-all rounded-md whitespace-nowrap ${
                    active
                      ? 'text-[#0c8897] bg-[#122361] shadow-inner'
                      : 'text-slate-100 hover:text-[#0c8897] hover:bg-[#122361]/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenAccessModal ? onOpenAccessModal() : window.location.href = ROUTES.ACCESO}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider rounded-lg border border-[#0c8897] text-[#0c8897] hover:bg-[#0c8897] hover:text-white transition-all whitespace-nowrap shadow-sm cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>Aula Virtual</span>
            </button>

            <a
              href={EXTERNAL_LINKS.WHATSAPP_URL('Hola EduPRO360, deseo inscribirme en un curso.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider rounded-lg bg-gradient-to-r from-[#0c8897] to-[#0a7380] text-white hover:brightness-110 transition-all shadow-md whitespace-nowrap cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-[#ffc24b]" />
              <span>Inscribirme</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenAccessModal ? onOpenAccessModal() : window.location.href = ROUTES.ACCESO}
              className="px-2.5 py-1.5 text-xs font-bold rounded border border-[#0c8897] text-[#0c8897] sm:hidden"
            >
              Aula Virtual
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-[#122361] focus:outline-none focus:ring-2 focus:ring-[#0c8897]"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09143c] border-b border-[#162a72] px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-bold tracking-wide ${
                  active
                    ? 'text-white bg-[#0c8897]'
                    : 'text-slate-200 hover:text-white hover:bg-[#122361]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-[#162a72] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenAccessModal) onOpenAccessModal();
                else window.location.href = ROUTES.ACCESO;
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-[#0c8897] text-[#0c8897] font-bold text-sm bg-[#0e1d57]"
            >
              <LogIn className="w-4 h-4" />
              <span>Acceso a Aula Virtual</span>
            </button>

            <a
              href={EXTERNAL_LINKS.WHATSAPP_URL()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#0c8897] text-white font-bold text-sm shadow-md"
            >
              <Phone className="w-4 h-4 text-[#ffc24b]" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
