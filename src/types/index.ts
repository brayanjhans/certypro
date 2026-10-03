export interface Course {
  id: string;
  title: string;
  category: 'SSOMA' | 'Ofimática' | 'Tecnología' | 'Gestión y Negocios' | 'Ingeniería';
  shortDescription: string;
  description: string;
  durationHours: number;
  mode: '100% Virtual' | 'En Vivo' | 'Semipresencial';
  certification: string;
  modules: string[];
  priceRegular: number;
  priceDiscount: number;
  highlighted?: boolean;
  image?: string;
  badge?: string;
}

export interface CertificateRecord {
  id: string;
  certificateCode: string; // e.g. EDU-2025-0842
  dni: string;
  studentName: string;
  courseTitle: string;
  issueDate: string; // YYYY-MM-DD
  durationHours: number;
  finalGrade: string; // e.g. 19/20 - Sobresaliente
  accreditation: string; // e.g. En convenio con Colegio de Abogados
  valid: boolean;
  qrCodeData: string;
}

export interface ShippingRecord {
  id: string;
  trackingNumber: string;
  dni: string;
  recipientName: string;
  destinationCity: string;
  courier: 'Olva Courier' | 'Shalom Empresarial' | 'Envío Directo Express';
  status: 'En preparación' | 'En tránsito' | 'Listo para recojo' | 'Entregado';
  dispatchDate: string;
  estimatedDeliveryDate: string;
  history: {
    date: string;
    description: string;
    location: string;
  }[];
}

export interface WheelPrize {
  id: number;
  label: string;
  discountPercentage: number;
  couponCode: string;
  color: string;
}
