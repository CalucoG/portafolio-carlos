import './Skills.css'

const skillGroups = [
  {
    id: '01',
    category: 'Frontend',
    title: 'Interfaces modernas y responsivas',
    description:
      'Construcción de interfaces web mediante componentes reutilizables, diseño adaptable, interacción con el usuario y consumo de servicios externos.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    id: '02',
    category: 'Backend & Data',
    title: 'APIs, lógica y gestión de información',
    description:
      'Desarrollo de servicios backend, endpoints REST, operaciones CRUD, validación de datos y trabajo con bases de datos relacionales.',
    technologies: ['Node.js', 'Express', 'REST API', 'SQL'],
  },
  {
    id: '03',
    category: 'Tools & Cloud',
    title: 'Desarrollo, pruebas e infraestructura',
    description:
      'Herramientas para control de versiones, pruebas de APIs, trabajo con servidores y conocimientos de despliegue de aplicaciones en infraestructura cloud.',
    technologies: [
      'Git',
      'GitHub',
      'Postman',
      'Linux',
      'AWS / Cloud',
    ],
  },
  {
    id: '04',
    category: 'AI & Security',
    title: 'IA aplicada y desarrollo seguro',
    description:
      'Uso de herramientas de IA para apoyar el análisis y desarrollo de software, junto con formación continua en buenas prácticas de seguridad web.',
    technologies: [
      'Claude Code',
      'AI Assisted Dev',
      'Validación',
      'Credenciales',
      'Security Basics',
    ],
  },
]

function Skills() {
  return (
    <section className="skills" id="habilidades">
      <div className="skills-container">
        <div className="skills-heading">
          <div>
            <p className="skills-label">Stack tecnológico</p>

            <h2>
              Tecnologías que utilizo para
              <span> construir software.</span>
            </h2>
          </div>

          <p className="skills-description">
            Mi stack está orientado al desarrollo web Full Stack, integrando
            frontend, backend, APIs, bases de datos y herramientas modernas de
            desarrollo.
          </p>
        </div>

        <div className="skills-list">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.id}>
              <div className="skill-group-number">
                {group.id}
              </div>

              <div className="skill-group-category">
                <span>{group.category}</span>
              </div>

              <div className="skill-group-content">
                <h3>{group.title}</h3>

                <p>{group.description}</p>

                <div className="skill-technologies">
                  {group.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="skill-group-arrow"
                aria-hidden="true"
              >
                ↗
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills