'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Camila González',
      role: 'Cantante de Teatro Musical (Clases Presenciales)',
      content: 'Antes de llegar al estudio de Valeria, terminaba mis audiciones con la garganta irritada y miedo a las notas agudas. En 3 meses me enseñó la técnica de resonancia y apoyo. Hoy tengo el papel protagónico y canto 5 funciones a la semana sin fatiga.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Lucas Benítez',
      role: 'Cantautor Indie Pop (Clases Virtuales desde Madrid)',
      content: 'Tomar clases online con Valeria fue la mejor decisión. Pensé que por Zoom sería difícil, pero su oído es clínico: nota cada pequeña tensión por la cámara y las grabaciones que te envía te permiten mejorar cada día. Un 10/10.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Mariana Mendoza',
      role: 'Alumno del Curso "De la Ducha al Escenario"',
      content: 'Siempre me dijeron que era desafinada y me daba mucha vergüenza cantar en reuniones. El curso online me cambió la autoestima: los audios de 15 minutos en el auto me ayudaron a entender mi afinación. ¡Ayer canté en el cumpleaños de mi mamá y todos lloraron de emoción!',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section id="testimonios" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 64px auto' }}>
          <h2 className="title-section">Voces que Transformaron su Arte</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', marginTop: '12px' }}>
            Más de 600 alumnos han descubierto que su voz no tiene límites cuando se guía con la técnica adecuada y empatía.
          </p>
        </div>

        <div className="grid-3">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '36px',
                backgroundColor: 'var(--bg-primary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', color: '#F59E0B', marginBottom: '16px' }}>
                  <Star size={18} fill="#F59E0B" />
                  <Star size={18} fill="#F59E0B" />
                  <Star size={18} fill="#F59E0B" />
                  <Star size={18} fill="#F59E0B" />
                  <Star size={18} fill="#F59E0B" />
                </div>

                <Quote size={32} style={{ color: 'var(--accent-primary)', opacity: 0.3, marginBottom: '12px' }} />

                <p style={{ fontSize: '0.96rem', color: 'var(--text-dark)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '24px' }}>
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-primary)' }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)' }}>{rev.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
