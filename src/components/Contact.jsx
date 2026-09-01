import { useState } from 'react'

import './Contact.css'

import { useLanguage } from '../context/LanguageContext'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maewzkjj'

const contactText = {
  es: {
    label: 'Contacto',

    titleFirst: '¿Tienes un proyecto o una',
    titleAccent: ' oportunidad?',

    description:
      'Puedes contactarme para conversar sobre desarrollo de software, proyectos, colaboraciones u oportunidades profesionales.',

    infoTitleFirst:
      'Conectemos y construyamos',

    infoTitleAccent:
      ' algo útil.',

    infoDescription:
      'Estoy interesado en participar en nuevos proyectos, colaborar en soluciones de software y continuar desarrollando mi experiencia profesional.',

    methods: [
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
    ],

    formTitle: 'nuevo-mensaje',

    name: 'Nombre',
    namePlaceholder: 'Tu nombre',

    email: 'Correo electrónico',
    emailPlaceholder: 'nombre@correo.com',

    subject: 'Asunto',
    subjectPlaceholder:
      '¿Sobre qué quieres conversar?',

    message: 'Mensaje',
    messagePlaceholder:
      'Escribe tu mensaje...',

    send: 'Enviar mensaje',
    sending: 'Enviando...',

    success:
      '✓ Mensaje enviado correctamente. Gracias por contactarme.',

    error:
      'No se pudo enviar el mensaje. Inténtalo nuevamente.',

    consoleError:
      'Error al enviar el formulario:',
  },

  en: {
    label: 'Contact',

    titleFirst: 'Do you have a project or an',
    titleAccent: ' opportunity?',

    description:
      'Feel free to contact me to discuss software development, projects, collaborations or professional opportunities.',

    infoTitleFirst:
      'Let’s connect and build',

    infoTitleAccent:
      ' something useful.',

    infoDescription:
      'I am interested in joining new projects, collaborating on software solutions and continuing to grow my professional experience.',

    methods: [
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
        value: 'Coming soon',
        href: '',
        code: 'IN',
      },
    ],

    formTitle: 'new-message',

    name: 'Name',
    namePlaceholder: 'Your name',

    email: 'Email address',
    emailPlaceholder: 'name@email.com',

    subject: 'Subject',
    subjectPlaceholder:
      'What would you like to discuss?',

    message: 'Message',
    messagePlaceholder:
      'Write your message...',

    send: 'Send message',
    sending: 'Sending...',

    success:
      '✓ Message sent successfully. Thank you for contacting me.',

    error:
      'The message could not be sent. Please try again.',

    consoleError:
      'Error sending the form:',
  },
}

function Contact() {
  const [formStatus, setFormStatus] = useState('idle')

  const { language } = useLanguage()

  const text = contactText[language]

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setFormStatus('sending')

    try {
      const response = await fetch(
        FORMSPREE_ENDPOINT,
        {
          method: 'POST',
          body: formData,

          headers: {
            Accept: 'application/json',
          },
        }
      )

      if (!response.ok) {
        throw new Error(
          'No se pudo enviar el formulario'
        )
      }

      form.reset()

      setFormStatus('success')
    } catch (error) {
      console.error(
        text.consoleError,
        error
      )

      setFormStatus('error')
    }
  }

  return (
    <section
      className="contact"
      id="contacto"
    >
      <div className="contact-container">

        <div className="contact-heading">
          <p className="contact-label">
            {text.label}
          </p>

          <h2>
            {text.titleFirst}

            <span>
              {text.titleAccent}
            </span>
          </h2>

          <p className="contact-description">
            {text.description}
          </p>
        </div>

        <div className="contact-layout">

          <div className="contact-info">
            <span className="contact-code">
              &lt;contact /&gt;
            </span>

            <h3>
              {text.infoTitleFirst}

              <span>
                {text.infoTitleAccent}
              </span>
            </h3>

            <p>
              {text.infoDescription}
            </p>

            <div className="contact-methods">

              {text.methods.map((method) => (
                <div
                  className="contact-method"
                  key={method.id}
                >
                  <div className="contact-method-icon">
                    {method.code}
                  </div>

                  <div className="contact-method-content">
                    <span>
                      {method.label}
                    </span>

                    {method.href ? (
                      <a
                        href={method.href}
                        target={
                          method.href.startsWith(
                            'mailto:'
                          )
                            ? undefined
                            : '_blank'
                        }
                        rel={
                          method.href.startsWith(
                            'mailto:'
                          )
                            ? undefined
                            : 'noopener noreferrer'
                        }
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p>
                        {method.value}
                      </p>
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

              <span>
                {text.formTitle}
              </span>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">
                <label htmlFor="name">
                  {text.name}
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={
                    text.namePlaceholder
                  }
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  {text.email}
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={
                    text.emailPlaceholder
                  }
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  {text.subject}
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={
                    text.subjectPlaceholder
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  {text.message}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder={
                    text.messagePlaceholder
                  }
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={
                  formStatus === 'sending'
                }
              >
                {formStatus === 'sending'
                  ? text.sending
                  : text.send}
              </button>

              <div
                className="form-status"
                aria-live="polite"
              >
                {formStatus === 'success' && (
                  <p className="form-status-success">
                    {text.success}
                  </p>
                )}

                {formStatus === 'error' && (
                  <p className="form-status-error">
                    {text.error}
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