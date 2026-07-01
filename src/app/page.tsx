'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VocalRecommender from '@/components/VocalRecommender';
import LeadMagnet from '@/components/LeadMagnet';
import Services from '@/components/Services';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Clase de Diagnóstico');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService('Clase de Diagnóstico 1 a 1');
    }
    setBookingOpen(true);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking('Clase de Diagnóstico')} />

      {/* Hero Split Section matching aesthetic mockup */}
      <Hero onOpenBooking={() => handleOpenBooking('Clase de Diagnóstico')} />

      {/* About Coach & 4 Pillars */}
      <About />

      {/* Interactive Tool: Vocal Level Recommender (Simulador) */}
      <VocalRecommender onOpenBooking={(prefill) => handleOpenBooking(prefill || 'Programa Personalizado')} />

      {/* Freebie Lead Magnet colocado exactamente abajo del simulador */}
      <LeadMagnet />

      {/* Core Teaching Services Cards (Presencial vs Virtual vs Coaching VIP) */}
      <Services onOpenBooking={(serviceTitle) => handleOpenBooking(serviceTitle)} />

      {/* Online Digital Courses Catalog */}
      <Courses onOpenEnroll={(courseTitle) => handleOpenBooking(`Inscripción al Curso: ${courseTitle}`)} />

      {/* Student Success Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions Accordion */}
      <Faq />

      {/* Footer & Contact */}
      <Footer onOpenBooking={() => handleOpenBooking('Consulta General')} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialSelection={selectedService}
      />
    </main>
  );
}
