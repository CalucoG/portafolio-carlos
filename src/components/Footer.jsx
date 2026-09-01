import './Footer.css'

import { useLanguage } from '../context/LanguageContext'

const footerText = {
  es: {
    brandDescription:
      'Desarrollador de Software enfocado en construir soluciones modernas para backend y frontend.',

    navigation: 'Navegación',

    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Sobre mí', href: '#sobre-mi' },
      { label: 'Habilidades', href: '#habilidades' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Experiencia', href: '#experiencia' },
      { label: 'Contacto', href: '#contacto' },
    ],

    connect: 'Conecta conmigo',

    socialDescription:
      'Puedes encontrar mis proyectos y repositorios públicos en GitHub.',

    copyright:
      'Todos los derechos reservados.',

    backToTop: 'Volver arriba',
  },

  en: {
    brandDescription:
      'Software Developer focused on building modern frontend and backend solutions.',

    navigation: 'Navigation',

    links: [
      { label: 'Home', href: '#inicio' },
      { label: 'About me', href: '#sobre-mi' },
      { label: 'Skills', href: '#habilidades' },
      { label: 'Projects', href: '#proyectos' },
      { label: 'Experience', href: '#experiencia' },
      { label: 'Contact', href: '#contacto' },
    ],

    connect: 'Connect with me',

    socialDescription:
      'You can find my projects and public repositories on GitHub.',

    copyright:
      'All rights reserved.',

    backToTop: 'Back to top',
  },
}

function Footer() {
  const currentYear = new Date().getFullYear()

  const { language } = useLanguage()

  const text = footerText[language]

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <a
              href="#inicio"
              className="footer-logo"
            >
              Carlos<span>.</span>
            </a>

            <p>
              {text.brandDescription}
            </p>
          </div>

          <div className="footer-navigation">
            <h3>
              {text.navigation}
            </h3>

            <div className="footer-links">
              {text.links.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-social">
            <h3>
              {text.connect}
            </h3>

            <p>
              {text.socialDescription}
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
            © {currentYear} Carlos Gavilanes.{' '}
            {text.copyright}
          </p>

          <a
            href="#inicio"
            className="back-to-top"
          >
            {text.backToTop} ↑
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer