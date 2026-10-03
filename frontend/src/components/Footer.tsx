import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck
} from 'lucide-react';
import { ROUTES, EXTERNAL_LINKS, getAssetUrl } from '../utils/routes';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="text-slate-300 font-sans border-t-[3px] border-[#0c8897]/70"
      style={{
        background: 'linear-gradient(180deg, #061421, #04111e)',
      }}
    >
      {/* Upper Main Footer Grid */}
      <div className="max-w-[1300px] mx-auto px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Identity & Contacts */}
          <div className="space-y-4">
            <Link to={ROUTES.HOME} className="inline-block">
              <img
                src={getAssetUrl('/assets/logo.png')}
                alt="EduPRO360"
                className="h-14 w-auto object-contain brightness-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-[340px]">
              EduPRO360 brinda formación profesional mediante cursos y programas orientados al desarrollo de nuevas competencias y respaldo curricular con valor laboral en todo el Perú.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0c8897] shrink-0 mt-0.5" />
                <span>{EXTERNAL_LINKS.LOCATION_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0c8897] shrink-0" />
                <a href={`tel:${EXTERNAL_LINKS.WHATSAPP_PHONE}`} className="hover:text-white transition-colors">
                  {EXTERNAL_LINKS.WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0c8897] shrink-0" />
                <a href={`mailto:${EXTERNAL_LINKS.EMAIL}`} className="hover:text-white transition-colors">
                  {EXTERNAL_LINKS.EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Enlaces de Navegación */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider border-l-2 border-[#0c8897] pl-2.5">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to={ROUTES.HOME} className="hover:text-white transition-colors">
                  › INICIO
                </Link>
              </li>
              <li>
                <Link to={ROUTES.NOSOTROS} className="hover:text-white transition-colors">
                  › NOSOTROS
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CURSOS} className="hover:text-white transition-colors">
                  › CURSOS
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CERTIFICADOS} className="hover:text-white transition-colors">
                  › CERTIFICADOS
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACTO} className="hover:text-white transition-colors">
                  › CONTACTO
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ENVIOS} className="hover:text-white transition-colors">
                  › ENVÍOS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Planes y Servicios */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider border-l-2 border-[#0c8897] pl-2.5">
              Planes y Servicios
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>• Plan BÁSICO (30 cursos + diplomados)</li>
              <li>• Plan PREMIUM (Acceso Total 1 año)</li>
              <li>• Plan PROFESIONAL (Diplomados ilimitados)</li>
              <li>• Validación digital de certificados con QR</li>
              <li>• Envíos físicos a domicilio Olva y Shalom</li>
              <li>• Convenio Ilustre Colegio de Abogados</li>
            </ul>
          </div>

          {/* Col 4: Legal & Reclamaciones */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider border-l-2 border-[#0c8897] pl-2.5">
              Información Legal
            </h4>
            <div className="text-xs text-slate-400 space-y-3">
              <p>RUC: 20612348911 | Edupro360 E.I.R.L.</p>
              <p>Empresa dedicada a la educación continua y capacitación laboral de adultos.</p>
              
              <div className="pt-2">
                <Link
                  to={ROUTES.CONTACTO}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-[#ffc24b]" />
                  <span>Libro de Reclamaciones</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#030d17] py-6 border-t border-white/10 text-xs text-slate-400">
        <div className="max-w-[1300px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} EduPRO360. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link to={ROUTES.TERMINOS} className="hover:text-white transition-colors">
              Términos del Servicio
            </Link>
            <span>•</span>
            <Link to={ROUTES.PRIVACIDAD} className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
