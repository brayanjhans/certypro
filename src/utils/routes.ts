/**
 * Configuración centralizada de rutas internas, externas y recursos estáticos.
 * 
 * ADAPTACIÓN DE RUTAS EN UN NUEVO ENTORNO:
 * - Para cambiar el dominio base o subdirectorio (ej. subruta /app/): modifica `BASE_PATH` o la variable `VITE_BASE_PATH`.
 * - Para cambiar el número de WhatsApp, correo, o redes: edita `EXTERNAL_LINKS`.
 * - Para mover imágenes a un CDN o carpeta externa: actualiza `ASSET_PATHS`.
 */

export const BASE_PATH = import.meta.env.BASE_URL || '/';

export const ROUTES = {
  HOME: '/',
  NOSOTROS: '/nosotros',
  CURSOS: '/cursos',
  CURSO_DETALLE: (id: string | number) => `/cursos/${id}`,
  CERTIFICADOS: '/certificados',
  ENVIOS: '/envios',
  CONTACTO: '/contacto',
  ACCESO: '/acceso',
  TERMINOS: '/terminos',
  PRIVACIDAD: '/privacidad',
} as const;

export const ASSET_PATHS = {
  LOGO: '/assets/logo.png',
  FAVICON: '/image.png',
  OG_IMAGE: '/og-edupro.png',
  SLIDERS: [
    '/assets/slider-1.png',
    '/assets/slider-2.png',
    '/assets/slider-3.png',
    '/assets/slider-4.png',
    '/assets/slider-5.png',
  ],
  COLEGIO_ABOGADOS: '/assets/colegio-abogados.png',
} as const;

export const EXTERNAL_LINKS = {
  WHATSAPP_PHONE: '+51990654088',
  WHATSAPP_DISPLAY: '+51 990 654 088',
  WHATSAPP_URL: (message?: string) => {
    const text = encodeURIComponent(message || 'Hola EduPRO360, deseo información sobre los cursos y certificaciones disponibles.');
    return `https://wa.me/51990654088?text=${text}`;
  },
  EMAIL: 'info@edupro360.net',
  EMAIL_CONTACTO: 'contacto@edupro360.pe',
  LOCATION_ADDRESS: 'Jr. Manuel Estacio N° 100, San Miguel, Lima, Perú',
  GOOGLE_MAPS_URL: 'https://maps.google.com/?q=Jr.+Manuel+Estacio+100,+San+Miguel,+Lima,+Peru',
  FACEBOOK: 'https://www.facebook.com/edupro360',
  INSTAGRAM: 'https://www.instagram.com/edupro360',
  LINKEDIN: 'https://www.linkedin.com/company/edupro360',
  TIKTOK: 'https://www.tiktok.com/@edupro360',
  AULA_VIRTUAL_EXTERNAL: 'https://edupro360.net/login',
} as const;

/**
 * Normaliza una ruta interna relativa a la base de la aplicación
 */
export function getRoute(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanBase = BASE_PATH.endsWith('/') ? BASE_PATH.slice(0, -1) : BASE_PATH;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

/**
 * Resuelve la ruta adecuada para cualquier recurso estático
 */
export function getAssetUrl(assetRelativePath: string): string {
  if (assetRelativePath.startsWith('http://') || assetRelativePath.startsWith('https://') || assetRelativePath.startsWith('data:')) {
    return assetRelativePath;
  }
  const cleanBase = BASE_PATH.endsWith('/') ? BASE_PATH.slice(0, -1) : BASE_PATH;
  const cleanPath = assetRelativePath.startsWith('/') ? assetRelativePath : `/${assetRelativePath}`;
  return `${cleanBase}${cleanPath}`;
}
