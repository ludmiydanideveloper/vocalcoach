'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, Music2 } from 'lucide-react';

export default function VocalRecommender({ onOpenBooking }: { onOpenBooking: (prefill?: string) => void }) {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [mode, setMode] = useState('');
  const [level, setLevel] = useState('');

  const reset = () => {
    setGoal('');
    setMode('');
    setLevel('');
    setStep(1);
  };

  const getRecommendation = () => {
    if (mode === 'curso') {
      return {
        title: 'Curso Online: "De la Ducha al Escenario & Resonancia Sin Daño"',
        badge: 'Recomendado para tu ritmo',
        desc: 'Un programa estructurado en 6 módulos en video HD con ejercicios descargables en audio para practicar en el auto o en casa a la hora que quieras.',
        actionText: 'Ver Plan de Estudios',
        link: '#cursos',
      };
    }
    if (mode === 'presencial') {
      return {
        title: 'Programa VIP Presencial 1 a 1 (Estudio Acústico)',
        badge: 'Atención personalizada máxima',
        desc: `Ideal para tu objetivo de "${goal || 'Mejora vocal'}". Trabajaremos postura del cuerpo, monitoreo con micrófono profesional y repertorio en vivo en nuestro estudio de primer nivel.`,
        actionText: 'Agendar Sesión Presencial',
        isBooking: true,
      };
    }
    return {
      title: 'Coaching Vocal Virtual en Vivo (Zoom HD + Grabación)',
      badge: 'Flexibilidad & Resultados rápidos',
      desc: `Perfecto para tu nivel (${level || 'todos los niveles'}). Ejercicios de agilidad y calentamiento biomecánico transmitidos con audio de alta fidelidad desde tu hogar.`,
      actionText: 'Reservar Diagnóstico Virtual',
      isBooking: true,
    };
  };

  const rec = getRecommendation();

  return (
    <section id="diagnostico" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Layout en 2 columnas: Izquierda (Título + Collage Fotos Estudio/Cantantes), Derecha (El Cuestionario) */}
        <div className="grid-2" style={{ gap: '56px', alignItems: 'center' }}>
          
          {/* Columna Izquierda: Información y Fotos de Instrumentos y Gente Cantando */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h2 className="title-section" style={{ lineHeight: 1.2, marginBottom: '14px' }}>
                Simulador: Descubre tu Plan Vocal Ideal
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Responde 3 breves preguntas y nuestro sistema te sugerirá el formato y curso exacto según tu rango, experiencia y metas artísticas.
              </p>
            </div>

            {/* Collage de fotos de instrumentos y cantantes */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '16px', marginTop: '12px' }}>
              
              {/* Foto 1: Cantante apasionada en estudio */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '280px',
                  boxShadow: '0 15px 35px rgba(110, 50, 180, 0.15)',
                  border: '3px solid #FFFFFF',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80"
                  alt="Cantante interpretando en estudio"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '12px',
                    background: 'linear-gradient(transparent, rgba(45, 27, 54, 0.8))',
                    color: '#FFFFFF',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}
                >
                  🎙️ Interpretación & Escenario
                </div>
              </div>

              {/* Foto 2: Micrófono profesional e Instrumentos */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '240px',
                  alignSelf: 'end',
                  boxShadow: '0 15px 35px rgba(110, 50, 180, 0.15)',
                  border: '3px solid #FFFFFF',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80"
                  alt="Micrófono e instrumentos de grabación"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '12px',
                    background: 'linear-gradient(transparent, rgba(45, 27, 54, 0.8))',
                    color: '#FFFFFF',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}
                >
                  🎹 Acústica & Técnica
                </div>
              </div>

            </div>
          </div>

          {/* Columna Derecha: El Simulador a un costado */}
          <div style={{ width: '100%' }}>
            <div
              className="glass-card"
              style={{
                width: '100%',
                padding: '38px',
                backgroundColor: '#FFFFFF',
                borderRadius: '32px',
                boxShadow: '0 25px 50px rgba(110, 50, 180, 0.12)',
                border: '2px solid #FFFFFF',
              }}
            >
              {/* Progress Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Music2 size={22} style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-dark)' }}>
                    {step <= 3 ? `Paso ${step} de 3` : '✨ Tu Diagnóstico Ideal'}
                  </span>
                </div>
                {step > 1 && (
                  <button
                    onClick={reset}
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}
                  >
                    <RotateCcw size={15} /> Reiniciar
                  </button>
                )}
              </div>

              {/* STEP 1 */}
              {step === 1 && (
                <div style={{ animation: 'fadeIn 0.3s ease' }}>
                  <h3 className="font-serif" style={{ fontSize: '1.35rem', marginBottom: '20px', color: 'var(--text-dark)', lineHeight: 1.3 }}>
                    1. ¿Cuál es el mayor desafío o deseo que tienes hoy con tu voz?
                  </h3>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {[
                      'Quiero alcanzar notas agudas sin sentir dolor, tensión o gallos.',
                      'Siento que desafino o pierdo el aire rápido y quiero cantar por placer.',
                      'Soy cantante/actor y preparo audiciones, grabaciones o shows en vivo.',
                      'Hablo o canto mucho y necesito recuperar mi salud y resistencia vocal.',
                    ].map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setGoal(option);
                          setStep(2);
                        }}
                        style={{
                          padding: '16px 20px',
                          borderRadius: 'var(--radius-md)',
                          border: '2px solid var(--border-color)',
                          backgroundColor: goal === option ? 'var(--accent-light)' : '#FFFFFF',
                          textAlign: 'left',
                          fontSize: '0.94rem',
                          fontWeight: 500,
                          color: 'var(--text-dark)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.borderColor = 'var(--accent-primary)';
                          e.currentTarget.style.backgroundColor = '#FAF5FF';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor = goal === option ? 'var(--accent-primary)' : 'var(--border-color)';
                          e.currentTarget.style.backgroundColor = goal === option ? 'var(--accent-light)' : '#FFFFFF';
                        }}
                      >
                        <span>{option}</span>
                        <ArrowRight size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div style={{ animation: 'fadeIn 0.3s ease' }}>
                  <h3 className="font-serif" style={{ fontSize: '1.35rem', marginBottom: '20px', color: 'var(--text-dark)', lineHeight: 1.3 }}>
                    2. ¿Qué modalidad se adapta mejor a tu rutina y aprendizaje?
                  </h3>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {[
                      { id: 'presencial', label: '🎙️ Clases Presenciales 1 a 1 en Estudio (Acústica pro & micrófono)' },
                      { id: 'virtual', label: '💻 Clases Virtuales en Vivo (1 a 1 por Zoom HD desde cualquier ciudad)' },
                      { id: 'curso', label: '📱 Cursos Online Grabados (Para ver a mi propio ritmo 24/7)' },
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setMode(option.id);
                          setStep(3);
                        }}
                        style={{
                          padding: '18px 20px',
                          borderRadius: 'var(--radius-md)',
                          border: '2px solid var(--border-color)',
                          backgroundColor: mode === option.id ? 'var(--accent-light)' : '#FFFFFF',
                          textAlign: 'left',
                          fontSize: '0.96rem',
                          fontWeight: 600,
                          color: 'var(--text-dark)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.borderColor = 'var(--accent-primary)';
                          e.currentTarget.style.backgroundColor = '#FAF5FF';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor = mode === option.id ? 'var(--accent-primary)' : 'var(--border-color)';
                          e.currentTarget.style.backgroundColor = mode === option.id ? 'var(--accent-light)' : '#FFFFFF';
                        }}
                      >
                        <span>{option.label}</span>
                        <ArrowRight size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div style={{ animation: 'fadeIn 0.3s ease' }}>
                  <h3 className="font-serif" style={{ fontSize: '1.35rem', marginBottom: '20px', color: 'var(--text-dark)', lineHeight: 1.3 }}>
                    3. ¿Cuál es tu experiencia o tiempo cantando actualmente?
                  </h3>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {[
                      'Principiante absoluto (Nunca tomé clases formales)',
                      'Intermedio (Canto por hobby, en coros o bandas locales)',
                      'Avanzado / Artista (Busco perfeccionamiento técnico o vocal agility)',
                    ].map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setLevel(option);
                          setStep(4);
                        }}
                        style={{
                          padding: '16px 20px',
                          borderRadius: 'var(--radius-md)',
                          border: '2px solid var(--border-color)',
                          backgroundColor: level === option ? 'var(--accent-light)' : '#FFFFFF',
                          textAlign: 'left',
                          fontSize: '0.96rem',
                          fontWeight: 500,
                          color: 'var(--text-dark)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.borderColor = 'var(--accent-primary)';
                          e.currentTarget.style.backgroundColor = '#FAF5FF';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor = level === option ? 'var(--accent-primary)' : 'var(--border-color)';
                          e.currentTarget.style.backgroundColor = level === option ? 'var(--accent-light)' : '#FFFFFF';
                        }}
                      >
                        <span>{option}</span>
                        <ArrowRight size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* RESULT STEP */}
              {step === 4 && (
                <div style={{ animation: 'fadeIn 0.4s ease', textAlign: 'center', padding: '8px 0' }}>
                  <div style={{ display: 'inline-flex', padding: '6px 16px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.82rem', marginBottom: '14px' }}>
                    ✨ {rec.badge}
                  </div>
                  
                  <h3 className="font-serif" style={{ fontSize: '1.6rem', color: 'var(--text-dark)', marginBottom: '12px' }}>
                    {rec.title}
                  </h3>

                  <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', marginBottom: '22px', lineHeight: 1.6 }}>
                    {rec.desc}
                  </p>

                  <div style={{ backgroundColor: 'var(--bg-primary)', padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'left', marginBottom: '24px', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px', color: 'var(--text-dark)' }}>
                      Tu perfil seleccionado:
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--accent-primary)' }} /> <strong>Meta:</strong> {goal}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--accent-primary)' }} /> <strong>Nivel:</strong> {level}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {rec.isBooking ? (
                      <button
                        onClick={() => onOpenBooking(rec.title)}
                        className="btn btn-primary"
                        style={{ width: '100%', padding: '15px' }}
                      >
                        {rec.actionText} <Sparkles size={18} />
                      </button>
                    ) : (
                      <a href={rec.link} className="btn btn-primary" style={{ width: '100%', padding: '15px', textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
                        {rec.actionText} <ArrowRight size={18} />
                      </a>
                    )}
                    
                    <button onClick={reset} className="btn btn-outline" style={{ width: '100%', padding: '12px' }}>
                      Cambiar Opciones
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
