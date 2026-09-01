import { useState } from 'react'

import { useLanguage } from '../context/LanguageContext'

import './Navbar.css'

const navbarText = {
  es: {
    home: 'Inicio',
    about: 'Sobre mí',
    skills: 'Habilidades',
    projects: 'Proyectos',
    experience: 'Experiencia',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },

  en: {
    home: 'Home',
    about: 'About me',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const { language, changeLanguage } = useLanguage()

  const text = navbarText[language]

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <a
        href="#inicio"
        className="logo"
        onClick={closeMenu}
      >
        CG<span>.</span>
      </a>

      <nav
        className={`nav-links ${menuOpen ? 'open' : ''}`}
        aria-label="Navegación principal"
      >
        <a href="#inicio" onClick={closeMenu}>
          {text.home}
        </a>

        <a href="#sobre-mi" onClick={closeMenu}>
          {text.about}
        </a>

        <a href="#habilidades" onClick={closeMenu}>
          {text.skills}
        </a>

        <a href="#proyectos" onClick={closeMenu}>
          {text.projects}
        </a>

        <a href="#experiencia" onClick={closeMenu}>
          {text.experience}
        </a>

        <a href="#contacto" onClick={closeMenu}>
          {text.contact}
        </a>
      </nav>

      <div className="navbar-actions">

        <div
          className="language-switcher"
          aria-label="Seleccionar idioma"
        >
          <button
            type="button"
            className={
              language === 'es'
                ? 'language-option active'
                : 'language-option'
            }
            onClick={() => changeLanguage('es')}
            aria-pressed={language === 'es'}
          >
            ES
          </button>

          <span className="language-divider">
            /
          </span>

          <button
            type="button"
            className={
              language === 'en'
                ? 'language-option active'
                : 'language-option'
            }
            onClick={() => changeLanguage('en')}
            aria-pressed={language === 'en'}
          >
            EN
          </button>
        </div>

        <button
          className={`menu-toggle ${
            menuOpen ? 'active' : ''
          }`}
          type="button"
          onClick={toggleMenu}
          aria-label={
            menuOpen
              ? text.closeMenu
              : text.openMenu
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  )
}

export default Navbar