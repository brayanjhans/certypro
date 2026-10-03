import { ShippingRecord } from '../types';

export const SAMPLE_SHIPPINGS: ShippingRecord[] = [
  {
    id: 's1',
    trackingNumber: 'OLV-9841249',
    dni: '72345678',
    recipientName: 'Brayan Jhans Almerco Ramos',
    destinationCity: 'Lima - San Juan de Lurigancho',
    courier: 'Olva Courier',
    status: 'Entregado',
    dispatchDate: '2025-05-20',
    estimatedDeliveryDate: '2025-05-22',
    history: [
      { date: '2025-05-20 10:30', description: 'Paquete de diploma recibido en Agencia Central San Miguel', location: 'Lima' },
      { date: '2025-05-21 08:15', description: 'En ruta de reparto a domicilio local', location: 'Lima Este' },
      { date: '2025-05-22 14:40', description: 'Entregado conforme al titular con firma y DNI', location: 'San Juan de Lurigancho' },
    ],
  },
  {
    id: 's2',
    trackingNumber: 'SHA-2025-4819',
    dni: '45892134',
    recipientName: 'Ana Lucía Morales Vega',
    destinationCity: 'Arequipa - Cerro Colorado',
    courier: 'Shalom Empresarial',
    status: 'Listo para recojo',
    dispatchDate: '2025-06-24',
    estimatedDeliveryDate: '2025-06-26',
    history: [
      { date: '2025-06-24 16:00', description: 'Envío registrado y embalado en tubo protector rígido', location: 'Lima' },
      { date: '2025-06-25 09:20', description: 'En tránsito interprovincial Lima - Arequipa', location: 'Ruta Sur' },
      { date: '2025-06-26 11:00', description: 'Arribo a terminal de carga. Disponible para retiro en ventanilla', location: 'Agencia Shalom Cerro Colorado' },
    ],
  },
  {
    id: 's3',
    trackingNumber: 'OLV-9842103',
    dni: '71092834',
    recipientName: 'Carlos Eduardo Mendoza Quispe',
    destinationCity: 'Trujillo - La Libertad',
    courier: 'Olva Courier',
    status: 'En tránsito',
    dispatchDate: '2025-07-12',
    estimatedDeliveryDate: '2025-07-15',
    history: [
      { date: '2025-07-12 11:45', description: 'Emisión de guía de remisión física y código de barra', location: 'Lima' },
      { date: '2025-07-13 04:30', description: 'Carga despachada hacia el centro logístico norte', location: 'Panamericana Norte' },
    ],
  },
];

export function findShipping(query: string): ShippingRecord | null {
  const cleaned = query.trim().toUpperCase();
  if (!cleaned) return null;
  return (
    SAMPLE_SHIPPINGS.find(
      (s) =>
        s.trackingNumber.toUpperCase() === cleaned ||
        s.dni === cleaned ||
        s.recipientName.toUpperCase().includes(cleaned)
    ) || null
  );
}
