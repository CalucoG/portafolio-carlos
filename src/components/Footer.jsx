import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#inicio" className="footer-logo">
              Carlos<span>.</span>
            </a>

            <p>
              Desarrollador de Software enfocado en construir soluciones
              modernas para backend y frontend.
            </p>
          </div>

          <div className="footer-navigation">
            <h3>Navegación</h3>

            <div className="footer-links">
              <a href="#inicio">Inicio</a>
              <a href="#sobre-mi">Sobre mí</a>
              <a href="#habilidades">Habilidades</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#experiencia">Experiencia</a>
              <a href="#contacto">Contacto</a>
            </div>
          </div>

          <div className="footer-social">
            <h3>Conecta conmigo</h3>

            <p>
              Puedes encontrar mis proyectos y repositorios públicos en GitHub.
            </p>

            <div className="footer-social-links">
              <a
                href="https://github.com/CalucoG"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                GitHub
              </a>

              <span className="footer-social-disabled">
                LinkedIn
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Carlos Gavilanes. Todos los derechos reservados.
          </p>

          <a href="#inicio" className="back-to-top">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer