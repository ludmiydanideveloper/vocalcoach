'use client';

import React, { useState } from 'react';
import { Gift, Download, Sparkles, CheckCircle2 } from 'lucide-react';

export default function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        <div
          className="glass-card leadmagnet-card"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '48px',
            boxShadow: 'var(--shadow-lg)',
            border: '2px solid #FFFFFF',
          }}
        >
          <div className="grid-2" style={{ gap: '56px', alignItems: 'center' }}>
            
            {/* Left Side: Graphic */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '10%',
                  width: '80%',
                  height: '100%',
                  backgroundColor: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-lg)',
                  transform: 'rotate(-4deg)',
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  backgroundColor: '#FAF5FF',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  boxShadow: '0 15px 35px rgba(110,50,180,0.15)',
                  border: '6px solid #FFFFFF',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
                  alt="Guía de Calentamiento Vocal PDF"
                  style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
                />
                
                <div style={{ marginTop: '16px', textAlign: 'left' }}>
                  <span className="badge" style={{ fontSize: '0.7rem', marginBottom: '8px' }}>E-Book + 3 Audios MP3</span>
                  <div className="font-serif" style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-dark)' }}>
                    Guía Práctica: 5 Minutos de Calentamiento Vocal & Higiene de la Voz
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Por Barby · Entre Canciones 2026
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="title-section" style={{ marginBottom: '14px' }}>
                Descarga Gratis Tu Kit Express de Calentamiento
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '28px', lineHeight: 1.7 }}>
                ¿Vas a cantar, dar una conferencia o entrar a grabar? No arriesgues tus cuerdas vocales. Déjanos tus datos para enviarte al instante nuestro manual en PDF y 3 audios guiados de 5 minutos.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
                      Tu Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Sofía Martínez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
                      Tu Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sofia@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '8px', padding: '16px' }}
                  >
                    Descargar Kit Gratuito <Download size={18} />
                  </button>

                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '4px' }}>
                    🔒 Respetamos tu privacidad. Sin spam, solo material educativo de valor.
                  </p>
                </form>
              ) : (
                <div
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    padding: '32px',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                    border: '1px solid var(--border-color)',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  <CheckCircle2 size={48} style={{ color: 'var(--accent-primary)', margin: '0 auto 16px auto' }} />
                  <h3 className="font-serif" style={{ fontSize: '1.6rem', color: 'var(--text-dark)', marginBottom: '8px' }}>
                    ¡Felicitaciones, {name}!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>
                    Hemos enviado el Kit Express de Calentamiento a <strong>{email}</strong>. Puedes descargarlo también directamente con el botón de abajo:
                  </p>
                  <a
                    href="#descarga-simulada"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('¡Descarga de la guía PDF y audios iniciada con éxito!');
                    }}
                    className="btn btn-primary"
                    style={{ display: 'inline-flex' }}
                  >
                    Descargar Archivo ZIP (14 MB) <Download size={18} />
                  </a>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
