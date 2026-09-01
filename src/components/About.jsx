import './About.css'

import { useLanguage } from '../context/LanguageContext'

const aboutText = {
  es: {
    label: 'Conóceme',
    titleFirst: 'Sobre',
    titleAccent: 'mí',

    description:
      'Desarrollador de Software junior orientado al desarrollo web full stack, integración de servicios, bases de datos y despliegue de aplicaciones.',

    headingFirst:
      'Desarrollo aplicaciones web conectando',
    headingAccent:
      ' frontend, backend y datos.',

    paragraphs: [
      'Soy Carlos Gavilanes, Desarrollador de Software junior con experiencia en proyectos web frontend y backend. Desarrollo interfaces responsivas y aplicaciones funcionales utilizando HTML5, CSS3, JavaScript y React, integrándolas con servicios backend y APIs REST.',

      'En backend trabajo con Node.js y Express para estructurar rutas, controladores, endpoints y operaciones CRUD. Utilizo SQL para consultas, relaciones y gestión de información en bases de datos relacionales, conectando las diferentes capas de una aplicación web.',

      'También cuento con conocimientos en despliegue y operación básica de aplicaciones en infraestructura cloud, con enfoque en entornos como AWS y servidores Linux. Me interesa continuar fortaleciendo áreas como configuración de servicios, administración de variables de entorno, acceso seguro, conectividad y publicación de aplicaciones.',

      'Trabajo con Git y GitHub para control de versiones y utilizo herramientas de desarrollo asistido por inteligencia artificial, incluyendo Claude Code, como apoyo para analizar código, localizar errores, generar documentación, refactorizar, automatizar tareas y acelerar el desarrollo.',

      'El código generado o modificado con asistencia de IA es revisado, probado y adaptado antes de incorporarlo a un proyecto. Además, continúo fortaleciendo conocimientos de desarrollo seguro, especialmente validación de entradas, protección de credenciales, variables de entorno, control de acceso y prevención básica de vulnerabilidades web.',
    ],

    cards: [
      {
        number: '01',
        title: 'Frontend',
        description:
          'Desarrollo de interfaces responsivas con React, JavaScript, HTML5 y CSS3, utilizando componentes reutilizables, manejo de estados, eventos y consumo de APIs REST.',
      },
      {
        number: '02',
        title: 'Backend y APIs',
        description:
          'Desarrollo con Node.js y Express mediante rutas, controladores, endpoints REST, métodos HTTP, validación de datos y operaciones CRUD conectadas a bases de datos.',
      },
      {
        number: '03',
        title: 'SQL y datos',
        description:
          'Diseño y consulta de bases de datos relacionales mediante SQL, trabajando con tablas, relaciones, claves, filtros, joins y operaciones de inserción, consulta, actualización y eliminación.',
      },
      {
        number: '04',
        title: 'Cloud y despliegue',
        description:
          'Conocimientos en despliegue y operación básica de aplicaciones en servidores cloud y entornos AWS, incluyendo conceptos de cómputo, conectividad, configuración segura y administración de aplicaciones.',
      },
      {
        number: '05',
        title: 'Claude Code e IA',
        description:
          'Uso de Claude Code y herramientas de inteligencia artificial para análisis, depuración, documentación, refactorización y optimización del flujo de desarrollo, manteniendo revisión y validación humana del código.',
      },
      {
        number: '06',
        title: 'Desarrollo seguro',
        description:
          'Formación continua en validación de entradas, protección de credenciales, variables de entorno, control de acceso y prevención básica de vulnerabilidades en aplicaciones web.',
      },
    ],
  },

  en: {
    label: 'Get to know me',
    titleFirst: 'About',
    titleAccent: 'me',

    description:
      'Junior Software Developer focused on full stack web development, service integration, databases and application deployment.',

    headingFirst:
      'I build web applications connecting',
    headingAccent:
      ' frontend, backend and data.',

    paragraphs: [
      'I am Carlos Gavilanes, a Junior Software Developer with experience in frontend and backend web projects. I build responsive interfaces and functional applications using HTML5, CSS3, JavaScript and React, integrating them with backend services and REST APIs.',

      'On the backend, I work with Node.js and Express to structure routes, controllers, endpoints and CRUD operations. I use SQL for queries, relationships and information management in relational databases, connecting the different layers of a web application.',

      'I also have knowledge of application deployment and basic operation in cloud infrastructure, with experience in environments such as AWS and Linux servers. I continue strengthening my skills in service configuration, environment variable management, secure access, connectivity and application deployment.',

      'I use Git and GitHub for version control and AI-assisted development tools, including Claude Code, to support code analysis, debugging, documentation, refactoring, task automation and development efficiency.',

      'Code generated or modified with AI assistance is reviewed, tested and adapted before being integrated into a project. I also continue strengthening my secure development knowledge, especially input validation, credential protection, environment variables, access control and basic web vulnerability prevention.',
    ],

    cards: [
      {
        number: '01',
        title: 'Frontend',
        description:
          'Development of responsive interfaces with React, JavaScript, HTML5 and CSS3 using reusable components, state management, events and REST API consumption.',
      },
      {
        number: '02',
        title: 'Backend & APIs',
        description:
          'Development with Node.js and Express using routes, controllers, REST endpoints, HTTP methods, data validation and CRUD operations connected to databases.',
      },
      {
        number: '03',
        title: 'SQL & Data',
        description:
          'Design and querying of relational databases using SQL, working with tables, relationships, keys, filters, joins and create, read, update and delete operations.',
      },
      {
        number: '04',
        title: 'Cloud & Deployment',
        description:
          'Knowledge of application deployment and basic operation on cloud servers and AWS environments, including computing, connectivity, secure configuration and application management.',
      },
      {
        number: '05',
        title: 'Claude Code & AI',
        description:
          'Use of Claude Code and artificial intelligence tools for analysis, debugging, documentation, refactoring and development workflow optimization while maintaining human review and validation of the code.',
      },
      {
        number: '06',
        title: 'Secure Development',
        description:
          'Continuous learning in input validation, credential protection, environment variables, access control and basic vulnerability prevention in web applications.',
      },
    ],
  },
}

function About() {
  const { language } = useLanguage()

  const text = aboutText[language]

  return (
    <section className="about section" id="sobre-mi">
      <div className="about-container">

        <div className="section-heading">
          <p className="section-label">
            {text.label}
          </p>

          <h2>
            {text.titleFirst}{' '}
            <span>
              {text.titleAccent}
            </span>
          </h2>

          <p className="section-description">
            {text.description}
          </p>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>
              {text.headingFirst}
              <span>
                {text.headingAccent}
              </span>
            </h3>

            {text.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-cards">
            {text.cards.map((card) => (
              <article
                className="about-card"
                key={card.number}
              >
                <span className="about-card-number">
                  {card.number}
                </span>

                <div>
                  <h4>
                    {card.title}
                  </h4>

                  <p>
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About