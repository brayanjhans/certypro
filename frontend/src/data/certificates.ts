import { CertificateRecord } from '../types';

export const SAMPLE_CERTIFICATES: CertificateRecord[] = [
  {
    id: '1',
    certificateCode: 'EDU-2025-7841',
    dni: '72345678',
    studentName: 'Brayan Jhans Almerco Ramos',
    courseTitle: 'Especialización en Seguridad y Salud en el Trabajo (SSOMA)',
    issueDate: '2025-05-18',
    durationHours: 140,
    finalGrade: '19/20 - Sobresaliente',
    accreditation: 'Respaldo Institucional y Convenio con Ilustre Colegio de Abogados',
    valid: true,
    qrCodeData: 'https://edupro360.pe/certificados?code=EDU-2025-7841',
  },
  {
    id: '2',
    certificateCode: 'EDU-2025-8912',
    dni: '45892134',
    studentName: 'Ana Lucía Morales Vega',
    courseTitle: 'Especialización en Ofimática Profesional Completa',
    issueDate: '2025-06-22',
    durationHours: 120,
    finalGrade: '18/20 - Distinguido',
    accreditation: 'Dirección Académica EduPRO360',
    valid: true,
    qrCodeData: 'https://edupro360.pe/certificados?code=EDU-2025-8912',
  },
  {
    id: '3',
    certificateCode: 'EDU-2025-9104',
    dni: '71092834',
    studentName: 'Carlos Eduardo Mendoza Quispe',
    courseTitle: 'Microsoft Power BI para Business Intelligence y Análisis de Datos',
    issueDate: '2025-07-10',
    durationHours: 90,
    finalGrade: '20/20 - Excelente',
    accreditation: 'División de Tecnologías de la Información EduPRO360',
    valid: true,
    qrCodeData: 'https://edupro360.pe/certificados?code=EDU-2025-9104',
  },
  {
    id: '4',
    certificateCode: 'EDU-2025-9320',
    dni: '48201948',
    studentName: 'María Fernanda Rojas Palacios',
    courseTitle: 'Prevención en Trabajos de Alto Riesgo (Altura, Confinados, Caliente, Izaje)',
    issueDate: '2025-08-04',
    durationHours: 80,
    finalGrade: '19/20 - Sobresaliente',
    accreditation: 'Certificación Técnica Ocupacional',
    valid: true,
    qrCodeData: 'https://edupro360.pe/certificados?code=EDU-2025-9320',
  },
];

export function findCertificate(query: string): CertificateRecord | null {
  const cleaned = query.trim().toUpperCase();
  if (!cleaned) return null;
  return (
    SAMPLE_CERTIFICATES.find(
      (c) =>
        c.certificateCode.toUpperCase() === cleaned ||
        c.dni === cleaned ||
        c.studentName.toUpperCase().includes(cleaned)
    ) || null
  );
}
