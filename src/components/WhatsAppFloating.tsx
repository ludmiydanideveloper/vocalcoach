'use client';

import React, { useState } from 'react';

export default function WhatsAppFloating() {
  const [hovered, setHovered] = useState(false);

  const phoneNumber = '5491112345678';
  const defaultText = 'Hola Barby, visité tu web y me gustaría recibir información sobre tus clases de canto.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1900,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      {/* Tooltip on Hover */}
      <div
        style={{
          backgroundColor: '#2D1B36',
          color: '#FFFFFF',
          padding: '8px 16px',
          borderRadius: '9999px',
          fontSize: '0.85rem',
          fontWeight: 600,
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(10px)',
          pointerEvents: hovered ? 'auto' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          whiteSpace: 'nowrap',
        }}
      >
        Escríbeme por WhatsApp ✨
      </div>

      {/* Floating Circle Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          textDecoration: 'none',
          position: 'relative',
        }}
      >
        {/* Pulsing ring animation in background */}
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            opacity: 0.3,
            animation: 'pulse-soft 2s infinite',
            zIndex: -1,
          }}
        />

        {/* WhatsApp Official SVG Icon */}
        <svg viewBox="0 0 24 24" width="34" height="34" fill="#FFFFFF">
          <path d="M11.996 0C5.372 0 0 5.372 0 11.996c0 2.115.556 4.184 1.614 6.012L.055 24l6.16-1.618A11.942 11.942 0 0 0 11.996 24C18.62 24 24 18.624 24 11.996 24 5.372 18.62 0 11.996 0zm0 21.968c-1.8 0-3.565-.483-5.118-1.399l-.367-.217-3.799.998.998-3.799-.217-.367a9.92 9.92 0 0 1-1.399-5.118c0-5.503 4.497-10 10-10s10 4.497 10 10-4.497 10-10 10zm5.491-7.514c-.301-.151-1.782-.88-2.058-.981-.276-.101-.478-.151-.679.151-.201.301-.782.981-.958 1.182-.176.201-.352.226-.653.075-.301-.151-1.27-.468-2.421-1.494-.895-.798-1.499-1.783-1.675-2.084-.176-.301-.019-.464.132-.614.135-.135.301-.352.452-.528.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.528-.075-.151-.679-1.636-.93-2.241-.243-.588-.49-.508-.679-.517-.176-.008-.377-.01-.578-.01-.201 0-.528.075-.804.377-.276.301-1.055 1.03-1.055 2.513 0 1.483 1.08 2.915 1.231 3.116.151.201 2.126 3.245 5.148 4.549.719.311 1.28.497 1.718.636.722.23 1.38.197 1.899.12.58-.086 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.2-.578-.351z" />
        </svg>
      </a>
    </div>
  );
}
