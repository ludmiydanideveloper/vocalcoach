'use client';

import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero({
  onOpenBooking,
}: {
  onOpenBooking: () => void;
}) {
  return (
    <section
      id="inicio"
      style={{
        paddingTop: '130px',
        paddingBottom: '80px',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Organic Hero Card Container in soft violet/lilac */}
        <div
          style={{
            backgroundColor: '#F3E8FF',
            borderRadius: '48px',
            padding: '56px 48px',
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            maxWidth: '100%',
            boxShadow: '0 20px 45px rgba(110, 50, 180, 0.1)',
            border: '2px solid rgba(255, 255, 255, 0.85)',
          }}
          className="hero-container"
        >
          {/* Background decorative wavy blob inside card */}
          <div
            style={{
              position: 'absolute',
              top: '-15%',
              right: '-5%',
              width: '560px',
              height: '560px',
              backgroundColor: '#E9D5FF',
              borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
              opacity: 0.7,
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />

          <div className="grid-2" style={{ gap: '48px', alignItems: 'center', position: 'relative', zIndex: 2, width: '100%' }}>
            
            {/* Left Column: Typography & Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
              

              <h1
                className="font-serif hero-title"
                style={{
                  fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  wordBreak: 'break-word',
                }}
              >
                Soy Barby
              </h1>

              <p
                className="font-serif hero-subtitle"
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                  fontStyle: 'italic',
                  color: 'var(--text-dark)',
                  fontWeight: 500,
                  lineHeight: 1.45,
                  marginTop: '4px',
                }}
              >
                Vocal Coach, Creadora de &ldquo;Entre Canciones&rdquo;, Artista &amp; Mentora. El lugar donde tu voz despierta su potencia, libertad y emoción.
              </p>

              <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '480px', marginTop: '8px' }}>
                Bienvenido a un espacio en internet donde nunca te sentirás juzgado, frustrado ni estancado. Aprende técnica vocal biomecánica sin dañar tus cuerdas en clases presenciales y virtuales.
              </p>

              {/* Action Buttons: Ambos del mismo tamaño y en color claro */}
              <div
                className="hero-actions"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                  gap: '16px',
                  marginTop: '24px',
                  width: '100%',
                  maxWidth: '520px',
                }}
              >
                <button
                  onClick={onOpenBooking}
                  className="btn"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: 'var(--text-dark)',
                    border: '2px solid #FFFFFF',
                    padding: '16px 20px',
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    boxShadow: '0 8px 20px rgba(110, 50, 180, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    width: '100%',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(0px)';
                  }}
                >
                  <Calendar size={18} style={{ color: 'var(--accent-primary)' }} />
                  Agendar Diagnóstico
                </button>
                
                <a
                  href="#diagnostico"
                  className="btn"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: 'var(--text-dark)',
                    border: '2px solid #FFFFFF',
                    padding: '16px 20px',
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    boxShadow: '0 8px 20px rgba(110, 50, 180, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    width: '100%',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(0px)';
                  }}
                >
                  Simulador Nivel <ArrowRight size={18} style={{ color: 'var(--accent-primary)' }} />
                </a>
              </div>

            </div>

            {/* Right Column: Organic Blob Photo (limpia, sin placas superpuestas) */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              
              {/* Outer Glow / Accent shape */}
              <div
                style={{
                  position: 'absolute',
                  width: '90%',
                  height: '90%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '50% 50% 40% 60% / 60% 40% 60% 40%',
                  opacity: 0.6,
                  zIndex: 0,
                  transform: 'scale(1.06)',
                }}
              />

              {/* Main Organic Cutout Photo Container */}
              <div
                style={{
                  width: '100%',
                  maxWidth: '430px',
                  aspectRatio: '1 / 1.05',
                  borderRadius: '48% 52% 45% 55% / 55% 45% 55% 45%',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 25px 50px rgba(110, 50, 180, 0.2)',
                  border: '8px solid #FFFFFF',
                  backgroundColor: '#E9D5FF',
                }}
              >
                {/* Lee /barby.jpeg desde public */}
                <img
                  src="/barby.jpeg"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=80';
                  }}
                  alt="Barby Vocal Coach"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </div>

            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        @media (max-width: 850px) {
          .hero-container {
            padding: 32px 20px !important;
            border-radius: 28px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-container {
            padding: 24px 14px !important;
            border-radius: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
