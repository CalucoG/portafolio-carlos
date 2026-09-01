import './Hero.css'

import CodeGlitchBackground from './CodeGlitchBackground'
import { useLanguage } from '../context/LanguageContext'

const firstName = 'CARLOS'
const lastName = 'GAVILANES'

const technologies = [
  'React',
  'Node.js',
  'Express',
  'REST API',
  'SQL',
  'Git',
]

const heroText = {
  es: {
    boot: [
      'inicializando portafolio...',
      'cargando perfil de desarrollador...',
      'compilando interfaz...',
    ],

    eyebrow: 'SOFTWARE DEVELOPER / FULL STACK JUNIOR',

    role: 'Desarrollador de Software',

    description:
      'Desarrollo aplicaciones web conectando interfaces modernas, servicios backend, APIs REST y bases de datos para construir soluciones funcionales, escalables y orientadas a necesidades reales.',

    projects: 'Ver proyectos',
    contact: 'Contáctame',

    status: 'ESTADO',
    available: 'Disponible para oportunidades',

    roleWidth: '24ch',
  },

  en: {
    boot: [
      'initializing portfolio...',
      'loading developer profile...',
      'compiling interface...',
    ],

    eyebrow: 'SOFTWARE DEVELOPER / FULL STACK JUNIOR',

    role: 'Software Developer',

    description:
      'I build web applications by connecting modern interfaces, backend services, REST APIs and databases to create functional, scalable solutions focused on real-world needs.',

    projects: 'View projects',
    contact: 'Contact me',

    status: 'STATUS',
    available: 'Available for opportunities',

    roleWidth: '18ch',
  },
}

function Hero() {
  const { language } = useLanguage()

  const text = heroText[language]

  return (
    <section
      className="hero hero-redesign"
      id="inicio"
    >
      <CodeGlitchBackground />

      <div
        className="hero-index"
        aria-hidden="true"
      >
        01 / PORTFOLIO
      </div>

      <div className="hero-content">

        {/* TERMINAL DE INICIO */}

        <div
          className="hero-terminal-intro"
          aria-hidden="true"
        >
          <div className="terminal-intro-line terminal-line-1">
            <span className="terminal-prompt">
              &gt;
            </span>

            {text.boot[0]}
          </div>

          <div className="terminal-intro-line terminal-line-2">
            <span className="terminal-prompt">
              &gt;
            </span>

            {text.boot[1]}
          </div>

          <div className="terminal-intro-line terminal-line-3">
            <span className="terminal-prompt">
              &gt;
            </span>

            {text.boot[2]}
          </div>

          <div className="terminal-intro-line terminal-line-4">
            <span className="terminal-prompt">
              &gt;
            </span>

            <span className="terminal-ready">
              READY
            </span>

            <span className="terminal-intro-cursor">
              _
            </span>
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL */}

        <div className="hero-main-sequence">

          <div className="hero-eyebrow hero-boot">
            <span className="hero-status-dot"></span>

            <span>
              {text.eyebrow}
            </span>

            <span className="hero-terminal-cursor">
              _
            </span>
          </div>

          <h1
            className="hero-name"
            aria-label="Carlos Gavilanes"
          >
            <span
              className="hero-name-first"
              aria-hidden="true"
            >
              {firstName.split('').map((letter, index) => (
                <span
                  className="hero-letter"
                  key={`${letter}-${index}`}
                  style={{
                    '--letter-delay':
                      `${3.35 + index * 0.09}s`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>

            <span
              className="hero-name-last"
              aria-hidden="true"
            >
              {lastName.split('').map((letter, index) => (
                <span
                  className="hero-letter"
                  key={`${letter}-${index}`}
                  style={{
                    '--letter-delay':
                      `${4.05 + index * 0.085}s`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>

          <div className="hero-role">
            <span className="hero-role-line"></span>

            <div className="hero-role-terminal">
              <p
                style={{
                  '--role-width': text.roleWidth,
                }}
              >
                {text.role}
              </p>

              <span className="hero-role-cursor">
                _
              </span>
            </div>
          </div>

          <p className="hero-description">
            {text.description}
          </p>

          <div className="hero-stack">
            {technologies.map((technology, index) => (
              <span
                key={technology}
                style={{
                  '--stack-delay':
                    `${6.05 + index * 0.12}s`,
                }}
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="hero-buttons">
            <a
              href="#proyectos"
              className="hero-btn hero-btn-primary"
            >
              {text.projects}

              <span>
                ↗
              </span>
            </a>

            <a
              href="#contacto"
              className="hero-btn hero-btn-secondary"
            >
              {text.contact}
            </a>
          </div>

        </div>
      </div>

      <div className="hero-corner-info">
        <span className="hero-corner-label">
          {text.status}
        </span>

        <div className="hero-available">
          <span></span>

          {text.available}
        </div>

        <p>
          Frontend · Backend · Cloud
        </p>
      </div>
    </section>
  )
}

export default Hero