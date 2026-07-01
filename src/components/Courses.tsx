'use client';

import React from 'react';
import { PlayCircle, Clock, Users, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function Courses({ onOpenEnroll }: { onOpenEnroll: (courseTitle: string) => void }) {
  const courses = [
    {
      title: 'De la Ducha al Escenario: Fundamentos del Canto',
      badge: 'Bestseller Principiantes',
      level: 'Todos los niveles',
      duration: '6 Módulos en Video HD + Audios Mp3',
      students: '420+ alumnos activos',
      price: '$47 USD',
      originalPrice: '$89 USD',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      description: 'Pierde el miedo y domina los cimientos reales del canto en 6 semanas. Incluye rutinas diarias guiadas de 15 minutos en audio para descargar en tu teléfono.',
      highlights: [
        'Respiración costo-diaphragmática y apoyo subglótico',
        'Eliminación del quiebre entre voz de pecho y cabeza',
        'Rutina diaria de calentamiento en mp3 (para auto o ducha)',
        'Acceso de por vida + Actualizaciones y comunidad privada',
      ],
    },
    {
      title: 'Belting Saludable & Resonancia Mixta (Mix Vocal)',
      badge: 'Nivel Intermedio / Avanzado',
      level: 'Especialización',
      duration: '5 Masterclasses + Guía Anatómica',
      students: '280+ cantantes formados',
      price: '$67 USD',
      originalPrice: '$120 USD',
      image: 'https://images.unsplash.com/photo-1520523839898-5071114f296d?auto=format&fit=crop&w=800&q=80',
      description: '¿Sientes que gritas en las notas agudas? Aprende la técnica exacta de los cantantes de Broadway y Pop contemporáneo para lograr notas altas potentes y brillantes sin forzar.',
      highlights: [
        'Anatomía del tracto vocal y modificación de vocales',
        'Inclinación del cartílago tiroides y twang saludable',
        'Ejercicios específicos para ampliar 1 octava tu rango',
        'Sesión grupal en vivo de preguntas y respuestas cada mes',
      ],
    },
    {
      title: 'Mastering Vocal Agility: Runs, Riffs & Melismas R&B',
      badge: 'Tendencia Pro',
      level: 'Avanzado',
      duration: '4 Módulos Intensivos + Pistas de Práctica',
      students: '195+ artistas',
      price: '$57 USD',
      originalPrice: '$99 USD',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
      description: 'Desarrolla agilidad acrobática en tu voz. Domina escalas rápidas, melismas estilo R&B, adornos vocales y expresividad escénica con metrónomo y pistas desglosadas.',
      highlights: [
        'Independencia laríngea y velocidad en escalas pentatónicas',
        'Desglose nota por nota de riffs icónicos del Pop & Soul',
        'Control del vibrato y dinámicas expresivas',
        'Certificado de finalización firmado por Barby',
      ],
    },
  ];

  return (
    <section id="cursos" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
          <h2 className="title-section">Formación Digital a Tu Ritmo</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', marginTop: '12px' }}>
            ¿Prefieres aprender en tus tiempos libres? Descubre nuestros cursos en video HD con ejercicios descargables. Acceso inmediato y de por vida con un solo pago.
          </p>
        </div>

        <div className="mobile-carousel" style={{ display: 'grid', gap: '40px' }}>
          {courses.map((course, idx) => (
            <div key={idx} className="glass-card course-card">
              {/* Course Image */}
              <div className="course-img-wrapper">
                <img src={course.image} alt={course.title} />
                <div className="course-badge">
                  {course.badge}
                </div>
              </div>

              {/* Course Info */}
              <div className="course-info">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <PlayCircle size={16} style={{ color: 'var(--accent-primary)' }} /> {course.duration}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Users size={16} style={{ color: 'var(--accent-primary)' }} /> {course.students}
                  </span>
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '10px' }}>
                  {course.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', marginBottom: '20px', lineHeight: 1.6 }}>
                  {course.description}
                </p>

                {/* Highlights grid */}
                <div className="course-highlights">
                  {course.highlights.map((hl, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem' }}>
                      <Check size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '18px', borderTop: '1px solid var(--border-color)' }}>
                  <div>
                    <span style={{ textDecoration: 'line-through', fontSize: '0.9rem', color: 'var(--text-muted)', marginRight: '8px' }}>
                      {course.originalPrice}
                    </span>
                    <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-dark)', fontFamily: 'Playfair Display' }}>
                      {course.price}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', display: 'block', fontWeight: 600 }}>
                      Pago único · Acceso de por vida
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenEnroll(course.title)}
                    className="btn btn-primary"
                    style={{ padding: '14px 32px' }}
                  >
                    Inscribirme Ahora <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
