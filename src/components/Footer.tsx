'use client';

import React from 'react';
import { Instagram, Youtube, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer({ onOpenBooking }: { onOpenBooking?: () => void }) {
  return (
    <footer style={{ backgroundColor: '#F4F2EB', color: 'var(--text-dark)', position: 'relative', borderTop: '1px solid rgba(110, 50, 180, 0.1)' }}>
      
      {/* Main Footer Links */}
      <div className="container" style={{ padding: '72px 24px 48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1.5fr) 1fr 1fr 1fr', gap: '48px' }} className="footer-grid">
          
          {/* Brand Logo */}
          <div>
            <a href="#inicio" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
              <img
                src="/entrecanciones.jpg"
                onError={(e) => {
                  e.currentTarget.src = '/logo.jpg';
                  e.currentTarget.onerror = () => {
                    e.currentTarget.style.display = 'none';
                  };
                }}
                alt="Logo Entre Canciones Espacio de Canto"
                style={{
                  height: '80px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </a>

            <p style={{ fontSize: '0.92rem', color: '#5A4663', lineHeight: 1.7, marginBottom: '24px' }}>
              Coaching vocal integral con enfoque saludable y escénico. Clases presenciales en estudio profesional y sesiones virtuales para todo el mundo hispanohablante.
            </p>
            <div style={{ display: 'flex', gap: '14px' }}>
              {[
                { icon: <Instagram size={20} />, href: 'https://instagram.com' },
                { icon: <Youtube size={20} />, href: 'https://youtube.com' },
                { icon: <MessageCircle size={20} />, href: 'https://whatsapp.com' },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(45, 27, 54, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2D1B36',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(45, 27, 54, 0.06)';
                    e.currentTarget.style.color = '#2D1B36';
                    e.currentTarget.style.transform = 'translateY(0px)';
                  }}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1E1424', marginBottom: '20px' }}>Navegación</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Inicio', 'Sobre Mí', 'Servicios', 'Diagnóstico Vocal', 'Cursos Online', 'Testimonios'].map((link, idx) => (
                <a
                  key={idx}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{ color: '#5A4663', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#5A4663')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Links 2 */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1E1424', marginBottom: '20px' }}>Programas</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Clases Presenciales VIP',
                'Coaching Virtual 1 a 1',
                'De la Ducha al Escenario',
                'Belting & Resonancia',
                'Mastering Vocal Agility',
                'Preparación de Audiciones',
              ].map((item, idx) => (
                <a
                  key={idx}
                  href="#cursos"
                  style={{ color: '#5A4663', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#5A4663')}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1E1424', marginBottom: '20px' }}>Estudio & Contacto</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: '#5A4663' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '3px' }} />
                <span>Estudio Entre Canciones, Buenos Aires (Clases Presenciales)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                <span>info@entrecanciones.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageCircle size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                <span>+54 9 11 1234-5678</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Frankia Branding */}
        <div style={{ marginTop: '56px', paddingTop: '28px', borderTop: '1px solid rgba(45, 27, 54, 0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', fontSize: '0.85rem', color: '#6B5876' }}>
          <div>© 2026 Entre Canciones Vocal Coaching. Todos los derechos reservados.</div>
          
          {/* Frankia Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.8rem', color: '#6B5876', fontWeight: 500 }}>by</span>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', userSelect: 'none' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', lineHeight: 1 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: '1.35rem', letterSpacing: '-0.04em', color: '#1E1424', textTransform: 'lowercase' }}>
                  frankia
                </span>
                <span style={{ position: 'absolute', top: '1px', right: '-8px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#7E3AF2', boxShadow: '0 0 6px rgba(126, 58, 242, 0.6)' }}></span>
              </div>
              <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', color: '#6B5876', textTransform: 'uppercase', marginTop: '3px', lineHeight: 1 }}>
                Desarrollo e Innovación
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#privacidad" style={{ color: '#6B5876', textDecoration: 'none' }}>Términos y Privacidad</a>
            <a href="#cookies" style={{ color: '#6B5876', textDecoration: 'none' }}>Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

