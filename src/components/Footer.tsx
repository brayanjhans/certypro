import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  BookOpen,
  Award,
  Truck
} from 'lucide-react';
import { ROUTES, EXTERNAL_LINKS, getAssetUrl } from '../utils/routes';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#09143c] text-slate-300 border-t border-[#122361]">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Institutional & Identity */}
          <div className="space-y-4">
            <Link to={ROUTES.HOME} className="inline-block">
              <img
                src={getAssetUrl('/assets/logo.png')}
                alt="EduPRO360"
                className="h-12 w-auto object-contain brightness-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              EduPRO360 es una plataforma de educación virtual dedicada a la formación integral de profesionales en diversas disciplinas, con programas de alta calidad, metodologías prácticas y certificaciones con valor curricular.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="text-[11px] text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <span className="font-bold text-white">RUC:</span> 20612348911 | Edupro360 E.I.R.L.
              </div>
            </div>
          </div>

          {/* Col 2: Enlaces Rápidos */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider border-l-2 border-[#0c8897] pl-2.5">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to={ROUTES.HOME} className="hover:text-[#0c8897] transition-colors flex items-center gap-1.5">
                  <span>› Inicio</span>
                </Link>
              </li>
              <li>
                <Link to={ROUTES.NOSOTROS} className="hover:text-[#0c8897] transition-colors flex items-center gap-1.5">
                  <span>› Nosotros y Filosofía</span>
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CURSOS} className="hover:text-[#0c8897] transition-colors flex items-center gap-1.5">
                  <span>› Catálogo de Cursos</span>
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CERTIFICADOS} className="hover:text-[#0c8897] transition-colors flex items-center gap-1.5">
                  <span>› Verificación de Certificados</span>
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ENVIOS} className="hover:text-[#0c8897] transition-colors flex items-center gap-1.5">
                  <span>› Seguimiento de Envíos</span>
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACTO} className="hover:text-[#0c8897] transition-colors flex items-center gap-1.5">
                  <span>› Contáctanos</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programas y Áreas */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider border-l-2 border-[#0c8897] pl-2.5">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>• Seguridad y Salud en el Trabajo (SSOMA)</li>
              <li>• Ofimática Profesional Word, Excel y Access</li>
              <li>• Microsoft Power BI y Análisis de Datos</li>
              <li>• Trabajos de Alto Riesgo (Altura, Confinados)</li>
              <li>• AutoCAD 2D/3D y Diseño Técnico</li>
              <li>• Gestión Pública y Contrataciones</li>
              <li>• Animación y Modelado con Blender</li>
            </ul>
          </div>

          {/* Col 4: Contacto y Ubicación */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider border-l-2 border-[#0c8897] pl-2.5">
              Contacto y Atención
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0c8897] shrink-0 mt-0.5" />
                <span>{EXTERNAL_LINKS.LOCATION_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0c8897] shrink-0" />
                <a 
                  href={`tel:${EXTERNAL_LINKS.WHATSAPP_PHONE}`}
                  className="hover:text-[#0c8897] transition-colors"
                >
                  {EXTERNAL_LINKS.WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0c8897] shrink-0" />
                <a 
                  href={`mailto:${EXTERNAL_LINKS.EMAIL}`}
                  className="hover:text-[#0c8897] transition-colors"
                >
                  {EXTERNAL_LINKS.EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#0c8897] shrink-0 mt-0.5" />
                <div>
                  <p>Lun - Vie: 9:00 am - 7:00 pm</p>
                  <p>Sábados: 9:00 am - 1:00 pm</p>
                </div>
              </div>
            </div>

            {/* Libro de Reclamaciones */}
            <div className="pt-2">
              <Link
                to={ROUTES.CONTACTO}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-[#ffc24b]" />
                <span>Libro de Reclamaciones Virtual</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Copyright & Legal Bar */}
      <div className="bg-[#050c26] py-6 border-t border-[#122361] text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} EduPRO360. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link to={ROUTES.TERMINOS} className="hover:text-white transition-colors">
              Términos del Servicio
            </Link>
            <span>•</span>
            <Link to={ROUTES.PRIVACIDAD} className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <span>•</span>
            <a 
              href={EXTERNAL_LINKS.WHATSAPP_URL()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0c8897] hover:underline"
            >
              Soporte al Alumno
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
