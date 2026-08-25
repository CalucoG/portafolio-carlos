import { useState } from 'react'
import './Contact.css'

const contactMethods = [
  {
    id: 1,
    label: 'Email',
    value: 'cgavilanes.dev@gmail.com',
    href: 'mailto:cgavilanes.dev@gmail.com',
    code: '@',
  },
  {
    id: 2,
    label: 'GitHub',
    value: 'CalucoG',
    href: 'https://github.com/CalucoG',
    code: 'GH',
  },
  {
    id: 3,
    label: 'LinkedIn',
    value: 'Próximamente',
    href: '',
    code: 'IN',
  },
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maewzkjj'

function Contact() {
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setFormStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario')
      }

      form.reset()
      setFormStatus('success')
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setFormStatus('error')
    }
  }

  return (
    <section className="contact" id="contacto">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="contact-label">Contacto</p>

          <h2>
            ¿Tienes un proyecto o una <span>oportunidad?</span>
          </h2>

          <p className="contact-description">
            Puedes contactarme para conversar sobre desarrollo de software,
            proyectos, colaboraciones u oportunidades profesionales.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <span className="contact-code">&lt;contact /&gt;</span>

            <h3>
              Conectemos y construyamos
              <span> algo útil.</span>
            </h3>

            <p>
              Estoy interesado en participar en nuevos proyectos, colaborar en
              soluciones de software y continuar desarrollando mi experiencia
              profesional.
            </p>

            <div className="contact-methods">
              {contactMethods.map((method) => (
                <div className="contact-method" key={method.id}>
                  <div className="contact-method-icon">
                    {method.code}
                  </div>

                  <div className="contact-method-content">
                    <span>{method.label}</span>

                    {method.href ? (
                      <a
                        href={method.href}
                        target={
                          method.href.startsWith('mailto:')
                            ? undefined
                            : '_blank'
                        }
                        rel={
                          method.href.startsWith('mailto:')
                            ? undefined
                            : 'noopener noreferrer'
                        }
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p>{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              <div className="contact-form-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>nuevo-mensaje</span>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="nombre@correo.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto</label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="¿Sobre qué quieres conversar?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Escribe tu mensaje..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending'
                  ? 'Enviando...'
                  : 'Enviar mensaje'}
              </button>

              <div className="form-status" aria-live="polite">
                {formStatus === 'success' && (
                  <p className="form-status-success">
                    ✓ Mensaje enviado correctamente. Gracias por contactarme.
                  </p>
                )}

                {formStatus === 'error' && (
                  <p className="form-status-error">
                    No se pudo enviar el mensaje. Inténtalo nuevamente.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact