'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Mic, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

export default function BookingModal({
  isOpen,
  onClose,
  initialSelection = 'Clase de Diagnóstico',
}: {
  isOpen: boolean;
  onClose: () => void;
  initialSelection?: string;
}) {
  const [service, setService] = useState(initialSelection || 'Clases Presenciales 1 a 1');
  const [format, setFormat] = useState('presencial');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialSelection) {
      setService(initialSelection);
      if (initialSelection.toLowerCase().includes('virtual') || initialSelection.toLowerCase().includes('online')) {
        setFormat('virtual');
      } else if (initialSelection.toLowerCase().includes('presencial')) {
        setFormat('presencial');
      }
    }
  }, [initialSelection]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hola Barby! Quiero reservar: *${service}* (${format.toUpperCase()}).\nMi nombre es ${name}.\nFecha preferida: ${date || 'A convenir'}.\nObjetivo: ${goal || 'Mejorar mi técnica'}.`;
    window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(45, 27, 54, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="glass-card booking-modal-card"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '580px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-secondary)',
            border: 'none',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-dark)',
          }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)', marginBottom: '4px' }}>
              <Sparkles size={18} />
              <span style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>Reserva Rápida</span>
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '8px' }}>
              Agendar {service}
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Completa tus datos para confirmar disponibilidad con Barby. Te responderemos en menos de 2 horas.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Modalidad Selection */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '8px' }}>
                  Modalidad de la Sesión
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {[
                    { id: 'presencial', label: '🎙️ Presencial (Estudio BS AS)' },
                    { id: 'virtual', label: '💻 Virtual en Vivo (Zoom HD)' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormat(opt.id)}
                      style={{
                        padding: '12px',
                        borderRadius: 'var(--radius-sm)',
                        border: format === opt.id ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                        backgroundColor: format === opt.id ? 'var(--accent-light)' : '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        color: 'var(--text-dark)',
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Laura Pérez"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+54 9 11..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input-field"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  required
                  placeholder="laura@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                />
              </div>

              {/* Date preference */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
                  ¿Cuándo te gustaría tener tu primera clase?
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="input-field"
                />
              </div>

              {/* Goal */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
                  ¿Qué canción o meta te gustaría trabajar en la sesión?
                </label>
                <textarea
                  rows={2}
                  placeholder="Ej: Quiero cantar sin gallos en los agudos o preparar una canción..."
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="input-field"
                  style={{ resize: 'none' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '10px', padding: '16px' }}
              >
                Confirmar Solicitud de Clase
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <CheckCircle2 size={54} style={{ color: 'var(--accent-primary)', margin: '0 auto 16px auto' }} />
            
            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '10px' }}>
              ¡Solicitud Recibida!
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', marginBottom: '24px' }}>
              Hemos registrado tu solicitud para <strong>{service}</strong> ({format.toUpperCase()}). Te enviaremos los detalles de horarios y confirmación a <strong>{email}</strong> y al WhatsApp <strong>{phone}</strong>.
            </p>

            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '20px', borderRadius: 'var(--radius-md)', marginBottom: '24px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px' }}>⚡ ¿Quieres acelerar tu reserva?</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Envía un mensaje directo por WhatsApp a Barby con tus datos pre-cargados para coordinar en minutos:
              </p>
              <button
                onClick={handleWhatsAppSend}
                className="btn"
                style={{ backgroundColor: '#25D366', color: '#FFFFFF', width: '100%', marginTop: '14px', fontWeight: 700 }}
              >
                <MessageCircle size={18} /> Continuar en WhatsApp
              </button>
            </div>

            <button onClick={onClose} className="btn btn-outline" style={{ width: '100%' }}>
              Volver a la página
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
