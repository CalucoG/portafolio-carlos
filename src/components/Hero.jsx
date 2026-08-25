import './Hero.css'
import CodeGlitchBackground from './CodeGlitchBackground'

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

function Hero() {
  return (
    <section className="hero hero-redesign" id="inicio">
      <CodeGlitchBackground />

      <div className="hero-index" aria-hidden="true">
        01 / PORTFOLIO
      </div>

      <div className="hero-content">
        <div className="hero-terminal-intro" aria-hidden="true">
          <div className="terminal-intro-line terminal-line-1">
            <span className="terminal-prompt">&gt;</span>
            initializing portfolio...
          </div>

          <div className="terminal-intro-line terminal-line-2">
            <span className="terminal-prompt">&gt;</span>
            loading developer profile...
          </div>

          <div className="terminal-intro-line terminal-line-3">
            <span className="terminal-prompt">&gt;</span>
            compiling interface...
          </div>

          <div className="terminal-intro-line terminal-line-4">
            <span className="terminal-prompt">&gt;</span>
            <span className="terminal-ready">READY</span>
            <span className="terminal-intro-cursor">_</span>
          </div>
        </div>

        <div className="hero-main-sequence">
          <div className="hero-eyebrow hero-boot">
            <span className="hero-status-dot"></span>

            <span>
              SOFTWARE DEVELOPER / FULL STACK JUNIOR
            </span>

            <span className="hero-terminal-cursor">_</span>
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
                    '--letter-delay': `${3.35 + index * 0.09}s`,
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
                    '--letter-delay': `${4.05 + index * 0.085}s`,
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
              <p>Desarrollador de Software</p>

              <span className="hero-role-cursor">
                _
              </span>
            </div>
          </div>

          <p className="hero-description">
            Desarrollo aplicaciones web conectando interfaces modernas,
            servicios backend, APIs REST y bases de datos para construir
            soluciones funcionales, escalables y orientadas a necesidades
            reales.
          </p>

          <div className="hero-stack">
            {technologies.map((technology, index) => (
              <span
                key={technology}
                style={{
                  '--stack-delay': `${6.05 + index * 0.12}s`,
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
              Ver proyectos
              <span>↗</span>
            </a>

            <a
              href="#contacto"
              className="hero-btn hero-btn-secondary"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>

      <div className="hero-corner-info">
        <span className="hero-corner-label">
          STATUS
        </span>

        <div className="hero-available">
          <span></span>
          Disponible para oportunidades
        </div>

        <p>Frontend · Backend · Cloud</p>
      </div>
    </section>
  )
}

export default Hero