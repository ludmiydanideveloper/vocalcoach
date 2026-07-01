'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Color exacto del fondo del logo para que se fusione perfectamente
  const logoBgColor = '#F4F2EB';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: logoBgColor,
        boxShadow: scrolled ? '0 4px 20px rgba(45, 27, 54, 0.08)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(110, 50, 180, 0.1)' : 'none',
        padding: scrolled ? '10px 0' : '14px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Solo el Logo grande */}
        <a href="#inicio" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src="/entrecanciones.jpg"
            className="navbar-logo"
            onError={(e) => {
              e.currentTarget.src = '/logo.jpg';
              e.currentTarget.onerror = () => {
                e.currentTarget.style.display = 'none';
              };
            }}
            alt="Logo Entre Canciones Espacio de Canto"
            style={{
              height: '76px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {[
            { name: 'Inicio', href: '#inicio' },
            { name: 'Sobre Mí', href: '#sobre-mi' },
            { name: 'Servicios', href: '#servicios' },
            { name: 'Diagnóstico', href: '#diagnostico' },
            { name: 'Cursos', href: '#cursos' },
            { name: 'Testimonios', href: '#testimonios' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                textDecoration: 'none',
                color: 'var(--text-dark)',
                fontWeight: 600,
                fontSize: '0.96rem',
                transition: 'color 0.2s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-dark)')}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={onOpenBooking}
            className="btn btn-primary btn-sm desktop-btn"
            style={{ padding: '12px 24px' }}
          >
            Reservar Clase
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-dark)',
              display: 'none',
            }}
            className="mobile-toggle"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: logoBgColor,
            padding: '24px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
            borderTop: '1px solid rgba(110, 50, 180, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {[
            { name: 'Inicio', href: '#inicio' },
            { name: 'Sobre Mí', href: '#sobre-mi' },
            { name: 'Servicios', href: '#servicios' },
            { name: 'Diagnóstico Vocal', href: '#diagnostico' },
            { name: 'Cursos Online', href: '#cursos' },
            { name: 'Testimonios', href: '#testimonios' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-dark)',
                fontWeight: 600,
                fontSize: '1.1rem',
                padding: '8px 0',
                borderBottom: '1px solid rgba(110, 50, 180, 0.1)',
              }}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '8px' }}
          >
            Reservar Clase de Diagnóstico
          </button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 850px) {
          .desktop-nav,
          .desktop-btn {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
