# Landing Page & Plataforma para Vocal Coach - Next.js 14

Una hermosa y moderna landing page de alta conversión para una **Vocal Coach** profesional, diseñada para presentar su metodología y vender tanto sus **clases presenciales en estudio** como sus **clases virtuales en vivo** y **cursos online autoasistidos**.

El diseño está fuertemente inspirado en una estética moderna, cálida y elegante (tonos melocotón, crema y terracota, tipografía serif con acentos en cursiva manuscrita y tarjetas con efecto vidrio/glassmorphism).

## 🌟 Características Principales

- **Diseño Estético Premium ("Wild Social Style")**: Paleta en tonos pastel melocotón/terracota (`#FFF9F6`, `#FDEEE8`, `#E0846D`), tipografías combinadas (*Playfair Display*, *Alex Brush* y *Plus Jakarta Sans*).
- **Hero de Alta Conversión**: Sección de presentación con marco fotográfico sobre bloques geométricos, subtítulo manuscrito y llamados a la acción claros.
- **Herramienta Interactiva "Simulador & Recomendador Vocal"**: Micro-aplicación interactiva de 3 pasos que ayuda al estudiante a descubrir qué modalidad (presencial, virtual o curso grabado) y qué nivel se adapta mejor a sus objetivos artísticos.
- **Tarjetas de Servicios (Presencial vs Virtual vs Mentoring)**: Desglose claro de beneficios, acústica en estudio y grabaciones por Zoom HD.
- **Catálogo de Cursos Online Grabados**: Tarjetas con precios en dólares, temarios destacados e inscripción directa.
- **Sección "Lead Magnet / Freebie"**: Captura de clientes potenciales ofreciendo gratis una *Guía Práctica de Calentamiento Vocal PDF + Audios Mp3*.
- **Testimonios Reales & FAQ Interactivo**: Reseñas con estrellas y acordeón de preguntas frecuentes.
- **Modal de Reserva Rápida & WhatsApp**: Permite agendar clases e integrarse en 1 clic con WhatsApp pre-completando los datos del alumno.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

Abre tu terminal (PowerShell o CMD) en la carpeta `c:\Programacion\vocalcoach` y ejecuta:

### 1. Instalar las dependencias
```bash
npm install
```

### 2. Iniciar el servidor de desarrollo
```bash
npm run dev
```

Abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver la landing page en funcionamiento.

---

## 📂 Estructura del Proyecto

```
vocalcoach/
├── package.json
├── tsconfig.json
├── next.config.js
└── src/
    ├── app/
    │   ├── globals.css      # Variables CSS, animaciones y diseño estético
    │   ├── layout.tsx       # Configuración SEO y fuentes de Google
    │   └── page.tsx         # Orquestador principal y estado del modal
    └── components/
        ├── Navbar.tsx             # Barra de navegación con menú móvil
        ├── Hero.tsx               # Sección principal dividida con foto encuadrada
        ├── About.tsx              # Biografía y 4 pilares biomecánicos
        ├── VocalRecommender.tsx   # Quiz interactivo recomendador de nivel
        ├── Services.tsx           # 3 tarjetas de modalidades (Presencial y Virtual)
        ├── Courses.tsx            # Catálogo de cursos digitales grabados
        ├── LeadMagnet.tsx         # Sección para descargar la guía gratuita (Freebie)
        ├── Testimonials.tsx       # Reseñas y testimonios de alumnos
        ├── Faq.tsx                # Acordeón de preguntas frecuentes
        ├── Footer.tsx             # Pie de página y CTA de WhatsApp
        └── BookingModal.tsx       # Popup interactivo para reservas e inscripción
```
