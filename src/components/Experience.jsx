import './Experience.css'

const journey = [
  {
    id: 1,
    number: '01',
    type: 'Experiencia',
    title: 'Desarrollador Web Freelance',
    period: 'Por proyectos',
    description:
      'Desarrollo de sitios y aplicaciones web responsivas para distintos proyectos, trabajando en la construcción de interfaces, lógica del frontend, integración con servicios backend, consumo de APIs REST, formularios, operaciones CRUD y gestión de datos según los requerimientos de cada solución.',
    tags: ['React', 'JavaScript', 'Node.js', 'REST API', 'SQL'],
  },
  {
    id: 2,
    number: '02',
    type: 'Experiencia',
    title: 'Desarrollador de Software',
    period: '2025 - 2026',
    description:
      'Participación en actividades de desarrollo de software para el GADM del cantón Riobamba, apoyando en la creación, mantenimiento y mejora de soluciones tecnológicas, organización de lógica de aplicaciones y gestión de información mediante herramientas de desarrollo web y bases de datos.',
    tags: ['Software', 'Desarrollo Web', 'Bases de Datos'],
  },
  {
    id: 3,
    number: '03',
    type: 'Experiencia',
    title: 'Soporte Técnico y Desarrollo de Sistemas',
    period: '2024',
    description:
      'Experiencia en APRODVICH brindando soporte técnico en infraestructura de red, diagnóstico de problemas de conectividad, configuración básica de dispositivos y apoyo en el desarrollo, mantenimiento y mejora de sistemas utilizados para la gestión de información.',
    tags: ['Redes', 'Soporte Técnico', 'Sistemas'],
  },
  {
    id: 4,
    number: '04',
    type: 'Formación',
    title: 'Desarrollador de Software',
    period: 'Graduado',
    description:
      'Formación orientada al desarrollo de software, con conocimientos en backend, frontend, bases de datos y construcción de aplicaciones web.',
    tags: ['Desarrollo de Software', 'Graduado'],
  },
  {
    id: 5,
    number: '05',
    type: 'Certificaciones',
    title: 'Cursos y certificaciones',
    period: 'En actualización',
    description:
      'Espacio destinado a cursos, certificaciones técnicas y formación complementaria que se agregará conforme avance mi desarrollo profesional.',
    tags: ['Cursos', 'Certificaciones'],
  },
]

function Experience() {
  return (
    <section className="experience" id="experiencia">
      <div className="experience-container">
        <div className="experience-heading">
          <p className="experience-label">Trayectoria</p>

          <h2>
            Experiencia y <span>formación</span>
          </h2>

          <p className="experience-description">
            Experiencia profesional, proyectos de desarrollo de software,
            soporte tecnológico y formación técnica.
          </p>
        </div>

        <div className="experience-layout">
          <div className="experience-intro">
            <span className="experience-code">&lt;/journey&gt;</span>

            <h3>
              Construyendo soluciones como
              <span> desarrollador de software.</span>
            </h3>

            <p>
              Mi experiencia combina desarrollo web, soporte técnico,
              redes, bases de datos y creación de soluciones de software
              orientadas a resolver necesidades reales.
            </p>
          </div>

          <div className="timeline">
            {journey.map((item) => (
              <article className="timeline-item" key={item.id}>
                <div className="timeline-marker">
                  <span>{item.number}</span>
                </div>

                <div className="timeline-content">
                  <div className="timeline-top">
                    <span className="timeline-type">{item.type}</span>
                    <span className="timeline-period">{item.period}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience