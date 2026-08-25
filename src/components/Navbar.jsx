import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <a href="#inicio" className="logo" onClick={closeMenu}>
        CG<span>.</span>
      </a>

      <nav
        className={`nav-links ${menuOpen ? 'open' : ''}`}
        aria-label="Navegación principal"
      >
        <a href="#inicio" onClick={closeMenu}>
          Inicio
        </a>

        <a href="#sobre-mi" onClick={closeMenu}>
          Sobre mí
        </a>

        <a href="#habilidades" onClick={closeMenu}>
          Habilidades
        </a>

        <a href="#proyectos" onClick={closeMenu}>
          Proyectos
        </a>

        <a href="#experiencia" onClick={closeMenu}>
          Experiencia
        </a>

        <a href="#contacto" onClick={closeMenu}>
          Contacto
        </a>
      </nav>

      <button
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        type="button"
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

export default Navbar