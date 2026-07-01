'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);

  const pillars = [
    {
      title: 'Salud Biomecánica',
      subtitle: 'Cuidado Fonoaudiológico Integral',
      description: 'Aprenderás a respirar adecuadamente, modular el flujo de aire y liberar toda la tensión acumulada en mandíbula, cuello y lengua. Cantar nunca debe doler ni generar fatiga vocal tras horas de práctica o show.',
    },
    {
      title: 'Belting & Resonancia',
      subtitle: 'Potencia Aguda Sin Esfuerzo',
      description: 'Logra proyección potente en agudos, domina el mix vocal equilibrado y adquiere un brillo profesional. Con la técnica de inclinación tiroidea podrás alcanzar notas altas de forma segura sin empujar ni gritar.',
    },
    {
      title: 'Entre Canciones',
      subtitle: 'Identidad Artística & Emoción',
      description: 'El canto es el espejo genuino del alma. No solo trabajamos la técnica física, sino la conexión profunda con la letra, el fraseo musical y tu propia identidad interpretativa para cautivar a quien te escuche.',
    },
    {
      title: 'Espacio Seguro',
      subtitle: 'Confianza & Cero Juicios',
      description: 'Un ambiente cálido, empático y profesional donde equivocarse es parte del aprendizaje. Aquí celebramos cada pequeño logro de tu voz y desbloqueamos tu seguridad tanto en el estudio como frente al público.',
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % pillars.length);
  };

  // Cambio automático suave cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sobre-mi" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px auto' }}>
          <h2 className="title-section">
            Hola, soy Barby. Tu guía en el viaje de autodescubrimiento vocal
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '16px' }}>
            Durante años vi a cantantes frustrados por empujar su voz, sufrir afonías o sentir que &ldquo;no habían nacido con el don&rdquo;. Creé <strong>Entre Canciones</strong> con la misión de demostrarte que tu voz tiene un potencial fantástico que, con la técnica correcta, puede alcanzar cualquier nota y conmover a cualquier audiencia.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
          
          {/* Left Text Detail */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              padding: '36px',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '28px',
              border: '1px solid var(--border-color)',
              boxShadow: '0 10px 30px rgba(110, 50, 180, 0.05)',
            }}
          >
            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
              Formando voces libres en escenarios, estudios y desde casa
            </h3>
            
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.02rem' }}>
              Soy Especialista en Rendimiento Vocal y Expresión Artística. Mi metodología se aleja de los antiguos mitos del canto y se enfoca en la <strong>biomecánica funcional</strong> y la confianza escénica genuina.
            </p>
            
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.02rem' }}>
              Ya sea que busques dar tus primeros pasos cantando tu canción favorita sin miedo al qué dirán, o seas un profesional preparándose para shows o grabaciones, diseño cada clase como un traje a medida de tu voz.
            </p>
          </div>

          {/* Right Column: Tarjeta Grande en Modo Carrusel */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            
            <div
              className="glass-card about-card"
              style={{
                backgroundColor: '#FAF5FF',
                border: '2px solid var(--accent-light)',
                borderRadius: '32px',
                padding: '44px 40px',
                boxShadow: '0 20px 45px rgba(110, 50, 180, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '400px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Top Header info (sin contador 01/04) */}
              <div style={{ marginBottom: '28px', borderBottom: '1px solid rgba(110, 50, 180, 0.1)', paddingBottom: '16px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>
                  Pilares de la Metodología
                </h3>
              </div>

              {/* Main Slide Content (sin el recuadro del icono/logo) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, animation: 'fadeIn 0.4s ease' }} key={activeSlide}>
                <div>
                  <h4 className="font-serif" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1.2 }}>
                    {pillars[activeSlide].title}
                  </h4>
                  <span style={{ display: 'block', fontSize: '1rem', fontWeight: 600, color: 'var(--accent-primary)', marginTop: '6px' }}>
                    {pillars[activeSlide].subtitle}
                  </span>
                </div>

                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {pillars[activeSlide].description}
                </p>
              </div>

              {/* Controls & Indicators Footer (Solo una flecha) */}
              <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'space-between', marginTop: '36px', paddingTop: '20px', borderTop: '1px solid rgba(110, 50, 180, 0.1)' }}>
                
                {/* Dots */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  {pillars.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      style={{
                        width: activeSlide === i ? '32px' : '10px',
                        height: '10px',
                        borderRadius: '5px',
                        backgroundColor: activeSlide === i ? 'var(--accent-primary)' : '#D8B4FE',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      aria-label={`Ir al pilar ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Solo Una Flecha */}
                <button
                  onClick={nextSlide}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-primary)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#FFFFFF',
                    boxShadow: '0 6px 16px rgba(126, 58, 242, 0.35)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                    e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                  }}
                  aria-label="Siguiente pilar"
                >
                  <ChevronRight size={26} />
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
