import './Projects.css'

import { useLanguage } from '../context/LanguageContext'

const projectsText = {
  es: {
    label: 'Trabajo seleccionado',

    titleFirst: 'Proyectos que convierten',
    titleAccent: ' conocimiento en código.',

    description:
      'Proyectos utilizados para aplicar desarrollo frontend, backend, APIs REST, gestión de datos y buenas prácticas de ingeniería de software.',

    githubPending: 'GitHub pendiente',
    demoPending: 'Demo pendiente',
    viewProject: 'Ver proyecto',

    projects: [
      {
        id: 1,
        number: '01',
        type: 'Full Stack',

        title: 'Sistema de Gestión de Inventario',

        description:
          'Aplicación Full Stack orientada a la gestión de productos y control de stock. Actualmente cuenta con un backend desarrollado con Node.js y Express, una API REST funcional con operaciones CRUD, validación de datos y manejo de respuestas HTTP.',

        technologies: [
          'Node.js',
          'Express',
          'REST API',
          'CRUD',
          'MySQL',
          'React',
        ],

        progress: [
          'API REST funcional',
          'CRUD completo',
          'Validación de datos',
          'MySQL pendiente',
          'Frontend React pendiente',
        ],

        github: '',
        demo: '',

        status: 'En desarrollo',

        active: true,
        featured: true,
      },

      {
        id: 2,
        number: '02',
        type: 'Frontend',

        title: 'Portafolio Profesional',

        description:
          'Portafolio web personal desarrollado con React y Vite para presentar experiencia, habilidades técnicas y proyectos. Incluye arquitectura basada en componentes, diseño responsive, navegación móvil, animaciones, formulario de contacto funcional y despliegue en Vercel.',

        technologies: [
          'React',
          'JavaScript',
          'Vite',
          'CSS3',
          'Formspree',
        ],

        progress: [
          'Diseño responsive',
          'Componentes React',
          'Formulario funcional',
          'Animaciones',
          'Despliegue en Vercel',
        ],

        github:
          'https://github.com/CalucoG/portafolio-carlos',

        demo:
          'https://portafolio-carlos-eosin.vercel.app/',

        status: 'Publicado',

        active: false,
        featured: false,
      },

      {
        id: 3,
        number: '03',
        type: 'Roadmap',

        title: 'Próximo Proyecto',

        description:
          'Nuevo proyecto enfocado en continuar fortaleciendo conocimientos Full Stack, integración de servicios, bases de datos y despliegue de aplicaciones.',

        technologies: [
          'Full Stack',
          'APIs',
          'Cloud',
        ],

        progress: [],

        github: '',
        demo: '',

        status: 'Próximamente',

        active: false,
        featured: false,
      },
    ],
  },

  en: {
    label: 'Selected Work',

    titleFirst: 'Projects that turn',
    titleAccent: ' knowledge into code.',

    description:
      'Projects used to apply frontend and backend development, REST APIs, data management and software engineering best practices.',

    githubPending: 'GitHub pending',
    demoPending: 'Demo pending',
    viewProject: 'View project',

    projects: [
      {
        id: 1,
        number: '01',
        type: 'Full Stack',

        title: 'Inventory Management System',

        description:
          'Full Stack application focused on product management and stock control. It currently includes a backend developed with Node.js and Express, a functional REST API with CRUD operations, data validation and HTTP response handling.',

        technologies: [
          'Node.js',
          'Express',
          'REST API',
          'CRUD',
          'MySQL',
          'React',
        ],

        progress: [
          'Functional REST API',
          'Complete CRUD',
          'Data validation',
          'MySQL pending',
          'React frontend pending',
        ],

        github: '',
        demo: '',

        status: 'In development',

        active: true,
        featured: true,
      },

      {
        id: 2,
        number: '02',
        type: 'Frontend',

        title: 'Professional Portfolio',

        description:
          'Personal web portfolio developed with React and Vite to showcase experience, technical skills and projects. It includes a component-based architecture, responsive design, mobile navigation, animations, a functional contact form and deployment on Vercel.',

        technologies: [
          'React',
          'JavaScript',
          'Vite',
          'CSS3',
          'Formspree',
        ],

        progress: [
          'Responsive design',
          'React components',
          'Functional contact form',
          'Animations',
          'Vercel deployment',
        ],

        github:
          'https://github.com/CalucoG/portafolio-carlos',

        demo:
          'https://portafolio-carlos-eosin.vercel.app/',

        status: 'Published',

        active: false,
        featured: false,
      },

      {
        id: 3,
        number: '03',
        type: 'Roadmap',

        title: 'Next Project',

        description:
          'New project focused on continuing to strengthen Full Stack development, service integration, databases and application deployment skills.',

        technologies: [
          'Full Stack',
          'APIs',
          'Cloud',
        ],

        progress: [],

        github: '',
        demo: '',

        status: 'Coming soon',

        active: false,
        featured: false,
      },
    ],
  },
}

function Projects() {
  const { language } = useLanguage()

  const text = projectsText[language]

  return (
    <section className="projects" id="proyectos">
      <div className="projects-container">

        <div className="projects-heading">
          <div>
            <p className="projects-label">
              {text.label}
            </p>

            <h2>
              {text.titleFirst}
              <span>
                {text.titleAccent}
              </span>
            </h2>
          </div>

          <p className="projects-description">
            {text.description}
          </p>
        </div>

        <div className="projects-list">

          {text.projects.map((project) => (
            <article
              className={`project-case ${
                project.featured
                  ? 'project-featured'
                  : ''
              }`}
              key={project.id}
            >

              <div className="project-case-meta">
                <span className="project-case-number">
                  {project.number}
                </span>

                <span className="project-case-type">
                  {project.type}
                </span>
              </div>

              <div className="project-case-main">

                <div className="project-case-title-row">
                  <h3>
                    {project.title}
                  </h3>

                  <span
                    className={`project-case-status ${
                      project.active
                        ? 'status-active'
                        : ''
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="project-case-description">
                  {project.description}
                </p>

                <div className="project-case-technologies">
                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>

                {project.progress.length > 0 && (
                  <div className="project-progress">

                    {project.progress.map((item) => (
                      <div
                        className="project-progress-item"
                        key={item}
                      >
                        <span></span>

                        {item}
                      </div>
                    ))}

                  </div>
                )}

              </div>

              <div className="project-case-actions">

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                ) : (
                  <span className="project-action-disabled">
                    {text.githubPending}
                  </span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {text.viewProject} ↗
                  </a>
                ) : (
                  <span className="project-action-disabled">
                    {text.demoPending}
                  </span>
                )}

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects