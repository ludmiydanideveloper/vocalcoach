'use client';

import React from 'react';
import { Mic, Video, Award, CheckCircle, Sparkles } from 'lucide-react';

export default function Services({ onOpenBooking }: { onOpenBooking: (serviceName?: string) => void }) {
  const services = [
    {
      title: 'Clases Presenciales 1 a 1',
      subtitle: 'En Estudio Privado de Alta Performance',
      icon: <Mic size={28} />,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
      price: 'Sesión o Pack Mensual',
      tag: 'El favorito en estudio',
      features: [
        'Acústica tratada y micrófono de condensador profesional',
        'Ejercicios guiados en piano y monitoreo en tiempo real',
        'Análisis biomecánico de postura y resonancia fonoaudiológica',
        'Repertorio personalizado en tu género favorito (Pop, R&B, Rock, Musical)',
      ],
      btnText: 'Reservar Lugar Presencial',
    },
    {
      title: 'Clases Virtuales en Vivo',
      subtitle: 'Aprende desde cualquier ciudad o país',
      icon: <Video size={28} />,
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80',
      price: '100% En Vivo (Zoom HD)',
      tag: 'Global & Flexible',
      features: [
        'Transmisión con audio de alta fidelidad sin retrasos',
        'Grabación completa en video/audio de cada clase para tu práctica',
        'Ejercicios en mp3 y guías PDF enviadas al instante tras la sesión',
        'Horarios adaptados para Argentina, México, España, USA y Colombia',
      ],
      btnText: 'Agendar Sesión Virtual',
      featured: true,
    },
    {
      title: 'Coaching para Shows & Audiciones',
      subtitle: 'Para Artistas, Cantautores & Actores',
      icon: <Award size={28} />,
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
      price: 'Mentoria Intensiva',
      tag: 'Alto Rendimiento',
      features: [
        'Preparación intensiva antes de entrar a estudio de grabación',
        'Técnica de Belting seguro y resistencia vocal para sets de 2 horas',
        'Desarrollo de agilidad vocal (runs, riffs y melismas R&B)',
        'Manejo del miedo escénico y comunicación emocional con el público',
      ],
      btnText: 'Solicitar Mentoring VIP',
    },
  ];

  return (
    <section id="servicios" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px auto' }}>
          <h2 className="title-section">Modalidades de Enseñanza & Coaching</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', marginTop: '12px' }}>
            Elige la modalidad que mejor encaje con tus objetivos y ubicación. Todas nuestras clases incluyen acompañamiento personalizado y feedback pedagógico continuo.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid-3">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: srv.featured ? '#FAF5FF' : '#FFFFFF',
                border: srv.featured ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Featured Badge */}
              {srv.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    zIndex: 10,
                    backgroundColor: 'var(--accent-primary)',
                    color: '#FFF',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Sparkles size={14} /> {srv.tag}
                </div>
              )}

              {/* Framed Image Header in Violet Frame */}
              <div style={{ padding: '20px', backgroundColor: 'var(--accent-light)', position: 'relative' }}>
                <div
                  style={{
                    height: '240px',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '6px solid #FFFFFF',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                  }}
                >
                  <img
                    src={srv.image}
                    alt={srv.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                </div>
              </div>

              {/* Content Body */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-primary)', marginBottom: '8px' }}>
                  {srv.icon}
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {srv.price}
                  </span>
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '6px' }}>
                  {srv.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  {srv.subtitle}
                </p>

                {/* Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px', flex: 1 }}>
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                      <CheckCircle size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => onOpenBooking(srv.title)}
                  className={srv.featured ? 'btn btn-primary' : 'btn btn-outline'}
                  style={{ width: '100%' }}
                >
                  {srv.btnText}
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
