import './Skills.css'

import { useLanguage } from '../context/LanguageContext'

const skillsText = {
  es: {
    label: 'Stack tecnológico',

    titleFirst: 'Tecnologías que utilizo para',
    titleAccent: ' construir software.',

    description:
      'Mi stack está orientado al desarrollo web Full Stack, integrando frontend, backend, APIs, bases de datos y herramientas modernas de desarrollo.',

    groups: [
      {
        id: '01',
        category: 'Frontend',
        title: 'Interfaces modernas y responsivas',
        description:
          'Construcción de interfaces web mediante componentes reutilizables, diseño adaptable, interacción con el usuario y consumo de servicios externos.',
        technologies: [
          'React',
          'JavaScript',
          'HTML5',
          'CSS3',
        ],
      },

      {
        id: '02',
        category: 'Backend & Data',
        title: 'APIs, lógica y gestión de información',
        description:
          'Desarrollo de servicios backend, endpoints REST, operaciones CRUD, validación de datos y trabajo con bases de datos relacionales.',
        technologies: [
          'Node.js',
          'Express',
          'REST API',
          'SQL',
        ],
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
          'Desarrollo con IA',
          'Validación',
          'Credenciales',
          'Seguridad básica',
        ],
      },
    ],
  },

  en: {
    label: 'Technology stack',

    titleFirst: 'Technologies I use to',
    titleAccent: ' build software.',

    description:
      'My stack is focused on Full Stack web development, integrating frontend, backend, APIs, databases and modern development tools.',

    groups: [
      {
        id: '01',
        category: 'Frontend',
        title: 'Modern and responsive interfaces',
        description:
          'Development of web interfaces using reusable components, responsive design, user interaction and integration with external services.',
        technologies: [
          'React',
          'JavaScript',
          'HTML5',
          'CSS3',
        ],
      },

      {
        id: '02',
        category: 'Backend & Data',
        title: 'APIs, logic and data management',
        description:
          'Development of backend services, REST endpoints, CRUD operations, data validation and relational database integration.',
        technologies: [
          'Node.js',
          'Express',
          'REST API',
          'SQL',
        ],
      },

      {
        id: '03',
        category: 'Tools & Cloud',
        title: 'Development, testing and infrastructure',
        description:
          'Tools for version control, API testing, server environments and application deployment in cloud infrastructure.',
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
        title: 'Applied AI and secure development',
        description:
          'Use of AI tools to support software analysis and development, combined with continuous learning in web security best practices.',
        technologies: [
          'Claude Code',
          'AI Assisted Dev',
          'Validation',
          'Credentials',
          'Security Basics',
        ],
      },
    ],
  },
}

function Skills() {
  const { language } = useLanguage()

  const text = skillsText[language]

  return (
    <section
      className="skills"
      id="habilidades"
    >
      <div className="skills-container">

        <div className="skills-heading">
          <div>
            <p className="skills-label">
              {text.label}
            </p>

            <h2>
              {text.titleFirst}

              <span>
                {text.titleAccent}
              </span>
            </h2>
          </div>

          <p className="skills-description">
            {text.description}
          </p>
        </div>

        <div className="skills-list">

          {text.groups.map((group) => (
            <article
              className="skill-group"
              key={group.id}
            >

              <div className="skill-group-number">
                {group.id}
              </div>

              <div className="skill-group-category">
                <span>
                  {group.category}
                </span>
              </div>

              <div className="skill-group-content">
                <h3>
                  {group.title}
                </h3>

                <p>
                  {group.description}
                </p>

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