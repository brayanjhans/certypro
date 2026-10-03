import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail,
  MapPin,
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
    { label: 'CONTACTO', path: ROUTES.CONTACTO },
    { label: 'ENVÍOS', path: ROUTES.ENVIOS },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#021b41] border-b border-white/10 shadow-lg font-sans">
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between min-h-[96px] gap-4">
          
          {/* Left: Branding & Contact Lockup */}
          <div className="flex items-center gap-5 shrink-0">
            <Link 
              to={ROUTES.HOME} 
              className="flex items-center focus-visible:outline-none"
            >
              <img 
                src={getAssetUrl('/assets/logo.png')} 
                alt="EduPRO360 - Formación Profesional" 
                className="h-[75px] sm:h-[88px] w-auto max-w-[280px] object-contain transition-transform hover:scale-[1.02]"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.nextElementSibling) {
                    (target.nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              {/* Fallback */}
              <div className="hidden items-center gap-2 text-white">
                <span className="text-2xl font-black tracking-tight">EduPRO<span className="text-[#0c8897]">360</span></span>
              </div>
            </Link>

            {/* Quick Contacts beside logo (like original live site) */}
            <div className="hidden xl:flex flex-col text-xs text-[#d2d8e2] border-l border-white/15 pl-4 py-1 space-y-1">
              <a 
                href={`tel:${EXTERNAL_LINKS.WHATSAPP_PHONE}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0c8897]" />
                <span className="font-bold">{EXTERNAL_LINKS.WHATSAPP_DISPLAY}</span>
              </a>
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#0c8897]" />
                <span>San Miguel, Lima - Perú</span>
              </div>
            </div>
          </div>

          {/* Center/Right: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2.5 py-2 text-[12px] font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    active
                      ? 'text-white border-b-2 border-[#0c8897]'
                      : 'text-[#d3d9e2] hover:text-white border-b-2 border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Iniciar Sesión / Aula Virtual */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenAccessModal ? onOpenAccessModal() : window.location.href = ROUTES.ACCESO}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0c8897] to-[#0a7481] hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <LogIn className="w-3.5 h-3.5 text-[#ffc24b]" />
              <span>Aula Virtual</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenAccessModal ? onOpenAccessModal() : window.location.href = ROUTES.ACCESO}
              className="px-2.5 py-1.5 text-xs font-bold rounded-lg bg-[#0c8897] text-white sm:hidden"
            >
              Aula
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#011432] border-t border-white/10 px-5 pt-3 pb-6 space-y-2">
          {navLinks.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider ${
                  active
                    ? 'text-white bg-[#0c8897]'
                    : 'text-[#d3d9e2] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenAccessModal) onOpenAccessModal();
                else window.location.href = ROUTES.ACCESO;
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0c8897] text-white font-extrabold text-xs uppercase tracking-wider shadow-md"
            >
              <LogIn className="w-4 h-4 text-[#ffc24b]" />
              <span>Acceso a Aula Virtual</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
