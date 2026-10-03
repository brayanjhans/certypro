/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DiscountWheelModal } from './components/DiscountWheelModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { StudentAccessModal } from './components/StudentAccessModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { ShippingPage } from './pages/ShippingPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { ROUTES } from './utils/routes';

// Scroll to top upon route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [accessModalOpen, setAccessModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans selection:bg-[#0c8897] selection:text-white">
        {/* Navigation Bar */}
        <Navbar onOpenAccessModal={() => setAccessModalOpen(true)} />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.NOSOTROS} element={<AboutPage />} />
            <Route path={ROUTES.CURSOS} element={<CoursesPage />} />
            <Route path="/cursos/:id" element={<CourseDetailPage />} />
            <Route path={ROUTES.CERTIFICADOS} element={<CertificatesPage />} />
            <Route path={ROUTES.ENVIOS} element={<ShippingPage />} />
            <Route path={ROUTES.CONTACTO} element={<ContactPage />} />
            <Route path={ROUTES.ACCESO} element={<HomePage />} />
            <Route path={ROUTES.TERMINOS} element={<TermsPage />} />
            <Route path={ROUTES.PRIVACIDAD} element={<TermsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Floating Ruleta de Descuentos (Bottom-Left) */}
        <DiscountWheelModal />

        {/* Floating WhatsApp Pulsating Button (Bottom-Right) */}
        <WhatsAppFloat />

        {/* Student Virtual Classroom Access Modal */}
        <StudentAccessModal
          isOpen={accessModalOpen}
          onClose={() => setAccessModalOpen(false)}
        />

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
