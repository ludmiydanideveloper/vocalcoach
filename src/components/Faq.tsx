'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Necesito tener "don natural" o experiencia previa para tomar clases?',
      a: '¡En absoluto! El canto es una habilidad neuromuscular que se entrena. El "don natural" suele ser simplemente una mayor intuición auditiva o relajación laringea que otros desarrollaron antes. Con nuestros ejercicios biomecánicos, cualquier persona puede aprender a afinar, ampliar su rango y cantar con belleza y libertad.',
    },
    {
      q: '¿Qué diferencia hay entre las clases presenciales y las virtuales en vivo?',
      a: 'Ambas son 1 a 1 y totalmente personalizadas. Las clases presenciales se dictan en nuestro estudio equipado con tratamiento acústico, micrófono e in-ear monitors. Las virtuales se realizan por Zoom en alta resolución (HD Audio), con la gran ventaja de que grabamos la sesión en video para que tengas tu rutina de práctica diaria siempre en tu celular o PC.',
    },
    {
      q: '¿Cómo accedo a los cursos online una vez comprados?',
      a: 'Al realizar la compra recibes al instante un correo con tu usuario y contraseña para nuestra plataforma educativa las 24 horas del día. El acceso es de por vida e incluye todas las futuras actualizaciones del curso sin costo adicional.',
    },
    {
      q: '¿Qué métodos de pago aceptan para clases y cursos?',
      a: 'Aceptamos tarjetas de crédito/débito de todo el mundo mediante Stripe y PayPal. Para residentes en Argentina aceptamos MercadoPago (Transferencia y cuotas), y para México y España transferencia bancaria local o Bizum.',
    },
    {
      q: '¿Puedo reprogramar una clase personalizada si me surge un imprevisto?',
      a: 'Sí, entendemos que las agendas artísticas y personales pueden cambiar. Solicitamos al menos 24 horas de anticipación para reagendar tu sesión sin ningún tipo de penalidad.',
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 56px auto' }}>
          <h2 className="title-section">Preguntas Frecuentes</h2>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-dark)')}
                >
                  <span>{faq.q}</span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                      color: isOpen ? '#FFFFFF' : 'var(--text-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      flexShrink: 0,
                      marginLeft: '16px',
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 28px 24px 28px',
                      color: 'var(--text-muted)',
                      fontSize: '0.98rem',
                      lineHeight: 1.7,
                      animation: 'fadeIn 0.25s ease',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
