import './Experience.css'

import { useLanguage } from '../context/LanguageContext'

const experienceText = {
  es: {
    label: 'Trayectoria',

    titleFirst: 'Experiencia y',
    titleAccent: ' formación',

    description:
      'Experiencia profesional, proyectos de desarrollo de software, soporte tecnológico y formación técnica.',

    introTitleFirst:
      'Construyendo soluciones como',

    introTitleAccent:
      ' desarrollador de software.',

    introDescription:
      'Mi experiencia combina desarrollo web, soporte técnico, redes, bases de datos y creación de soluciones de software orientadas a resolver necesidades reales.',

    journey: [
      {
        id: 1,
        number: '01',
        type: 'Experiencia',
        title: 'Desarrollador Web Freelance',
        period: 'Por proyectos',

        description:
          'Desarrollo de sitios y aplicaciones web responsivas para distintos proyectos, trabajando en la construcción de interfaces, lógica del frontend, integración con servicios backend, consumo de APIs REST, formularios, operaciones CRUD y gestión de datos según los requerimientos de cada solución.',

        tags: [
          'React',
          'JavaScript',
          'Node.js',
          'REST API',
          'SQL',
        ],
      },

      {
        id: 2,
        number: '02',
        type: 'Experiencia',
        title: 'Desarrollador de Software',
        period: '2025 - 2026',

        description:
          'Participación en actividades de desarrollo de software para el GADM del cantón Riobamba, apoyando en la creación, mantenimiento y mejora de soluciones tecnológicas, organización de lógica de aplicaciones y gestión de información mediante herramientas de desarrollo web y bases de datos.',

        tags: [
          'Software',
          'Desarrollo Web',
          'Bases de Datos',
        ],
      },

      {
        id: 3,
        number: '03',
        type: 'Experiencia',
        title: 'Soporte Técnico y Desarrollo de Sistemas',
        period: '2024',

        description:
          'Experiencia en APRODVICH brindando soporte técnico en infraestructura de red, diagnóstico de problemas de conectividad, configuración básica de dispositivos y apoyo en el desarrollo, mantenimiento y mejora de sistemas utilizados para la gestión de información.',

        tags: [
          'Redes',
          'Soporte Técnico',
          'Sistemas',
        ],
      },

      {
        id: 4,
        number: '04',
        type: 'Formación',
        title: 'Desarrollador de Software',
        period: 'Graduado',

        description:
          'Formación orientada al desarrollo de software, con conocimientos en backend, frontend, bases de datos y construcción de aplicaciones web.',

        tags: [
          'Desarrollo de Software',
          'Graduado',
        ],
      },

      {
        id: 5,
        number: '05',
        type: 'Certificaciones',
        title: 'Cursos y certificaciones',
        period: 'En actualización',

        description:
          'Espacio destinado a cursos, certificaciones técnicas y formación complementaria que se agregará conforme avance mi desarrollo profesional.',

        tags: [
          'Cursos',
          'Certificaciones',
        ],
      },
    ],
  },

  en: {
    label: 'Career',

    titleFirst: 'Experience and',
    titleAccent: ' education',

    description:
      'Professional experience, software development projects, technical support and professional training.',

    introTitleFirst:
      'Building solutions as a',

    introTitleAccent:
      ' software developer.',

    introDescription:
      'My experience combines web development, technical support, networking, databases and the development of software solutions focused on solving real-world needs.',

    journey: [
      {
        id: 1,
        number: '01',
        type: 'Experience',
        title: 'Freelance Web Developer',
        period: 'Project-based',

        description:
          'Development of responsive websites and web applications for different projects, working on interface development, frontend logic, backend service integration, REST API consumption, forms, CRUD operations and data management according to each solution’s requirements.',

        tags: [
          'React',
          'JavaScript',
          'Node.js',
          'REST API',
          'SQL',
        ],
      },

      {
        id: 2,
        number: '02',
        type: 'Experience',
        title: 'Software Developer',
        period: '2025 - 2026',

        description:
          'Participation in software development activities for the GADM of Riobamba, supporting the creation, maintenance and improvement of technological solutions, application logic organization and information management using web development and database technologies.',

        tags: [
          'Software',
          'Web Development',
          'Databases',
        ],
      },

      {
        id: 3,
        number: '03',
        type: 'Experience',
        title: 'Technical Support & Systems Development',
        period: '2024',

        description:
          'Experience at APRODVICH providing technical support for network infrastructure, diagnosing connectivity issues, performing basic device configuration and supporting the development, maintenance and improvement of information management systems.',

        tags: [
          'Networking',
          'Technical Support',
          'Systems',
        ],
      },

      {
        id: 4,
        number: '04',
        type: 'Education',
        title: 'Software Developer',
        period: 'Graduated',

        description:
          'Training focused on software development, including backend, frontend, databases and web application development.',

        tags: [
          'Software Development',
          'Graduated',
        ],
      },

      {
        id: 5,
        number: '05',
        type: 'Certifications',
        title: 'Courses & Certifications',
        period: 'Being updated',

        description:
          'Section dedicated to courses, technical certifications and complementary training that will be added as my professional development continues.',

        tags: [
          'Courses',
          'Certifications',
        ],
      },
    ],
  },
}

function Experience() {
  const { language } = useLanguage()

  const text = experienceText[language]

  return (
    <section
      className="experience"
      id="experiencia"
    >
      <div className="experience-container">

        <div className="experience-heading">
          <p className="experience-label">
            {text.label}
          </p>

          <h2>
            {text.titleFirst}
            <span>
              {text.titleAccent}
            </span>
          </h2>

          <p className="experience-description">
            {text.description}
          </p>
        </div>

        <div className="experience-layout">

          <div className="experience-intro">
            <span className="experience-code">
              &lt;/journey&gt;
            </span>

            <h3>
              {text.introTitleFirst}
              <span>
                {text.introTitleAccent}
              </span>
            </h3>

            <p>
              {text.introDescription}
            </p>
          </div>

          <div className="timeline">

            {text.journey.map((item) => (
              <article
                className="timeline-item"
                key={item.id}
              >
                <div className="timeline-marker">
                  <span>
                    {item.number}
                  </span>
                </div>

                <div className="timeline-content">

                  <div className="timeline-top">
                    <span className="timeline-type">
                      {item.type}
                    </span>

                    <span className="timeline-period">
                      {item.period}
                    </span>
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
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