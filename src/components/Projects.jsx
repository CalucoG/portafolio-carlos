import './Projects.css'

const projects = [
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
    featured: true,
  },
  {
    id: 2,
    number: '02',
    type: 'Frontend',
    title: 'Portafolio Profesional',
    description:
      'Portafolio web personal desarrollado con React y Vite para presentar experiencia, habilidades técnicas y proyectos. Incluye arquitectura basada en componentes, diseño responsive, navegación móvil, animaciones y formulario de contacto funcional.',
    technologies: [
      'React',
      'JavaScript',
      'Vite',
      'CSS3',
      'Formspree',
    ],
    progress: [
      'Responsive',
      'React Components',
      'Formulario funcional',
      'Animaciones',
    ],
    github: '',
    demo: '',
    status: 'En desarrollo',
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
    featured: false,
  },
]

function Projects() {
  return (
    <section className="projects" id="proyectos">
      <div className="projects-container">
        <div className="projects-heading">
          <div>
            <p className="projects-label">Selected Work</p>

            <h2>
              Proyectos que convierten
              <span> conocimiento en código.</span>
            </h2>
          </div>

          <p className="projects-description">
            Proyectos utilizados para aplicar desarrollo frontend, backend,
            APIs REST, gestión de datos y buenas prácticas de ingeniería
            de software.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className={`project-case ${
                project.featured ? 'project-featured' : ''
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
                  <h3>{project.title}</h3>

                  <span
                    className={`project-case-status ${
                      project.status === 'En desarrollo'
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
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
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
                    GitHub pendiente
                  </span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver proyecto ↗
                  </a>
                ) : (
                  <span className="project-action-disabled">
                    Demo pendiente
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