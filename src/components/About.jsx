import './About.css'

function About() {
  return (
    <section className="about section" id="sobre-mi">
      <div className="about-container">
        <div className="section-heading">
          <p className="section-label">Conóceme</p>

          <h2>
            Sobre <span>mí</span>
          </h2>

          <p className="section-description">
            Desarrollador de Software junior orientado al desarrollo web
            full stack, integración de servicios, bases de datos y despliegue
            de aplicaciones.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>
              Desarrollo aplicaciones web conectando
              <span> frontend, backend y datos.</span>
            </h3>

            <p>
              Soy Carlos Gavilanes, Desarrollador de Software junior con
              experiencia en proyectos web frontend y backend. Desarrollo
              interfaces responsivas y aplicaciones funcionales utilizando
              HTML5, CSS3, JavaScript y React, integrándolas con servicios
              backend y APIs REST.
            </p>

            <p>
              En backend trabajo con Node.js y Express para estructurar
              rutas, controladores, endpoints y operaciones CRUD. Utilizo
              SQL para consultas, relaciones y gestión de información en
              bases de datos relacionales, conectando las diferentes capas
              de una aplicación web.
            </p>

            <p>
              También cuento con conocimientos en despliegue y operación
              básica de aplicaciones en infraestructura cloud, con enfoque
              en entornos como AWS y servidores Linux. Me interesa continuar
              fortaleciendo áreas como configuración de servicios,
              administración de variables de entorno, acceso seguro,
              conectividad y publicación de aplicaciones.
            </p>

            <p>
              Trabajo con Git y GitHub para control de versiones y utilizo
              herramientas de desarrollo asistido por inteligencia artificial,
              incluyendo Claude Code, como apoyo para analizar código,
              localizar errores, generar documentación, refactorizar,
              automatizar tareas y acelerar el desarrollo.
            </p>

            <p>
              El código generado o modificado con asistencia de IA es revisado,
              probado y adaptado antes de incorporarlo a un proyecto. Además,
              continúo fortaleciendo conocimientos de desarrollo seguro,
              especialmente validación de entradas, protección de credenciales,
              variables de entorno, control de acceso y prevención básica de
              vulnerabilidades web.
            </p>
          </div>

          <div className="about-cards">
            <article className="about-card">
              <span className="about-card-number">01</span>

              <div>
                <h4>Frontend</h4>

                <p>
                  Desarrollo de interfaces responsivas con React, JavaScript,
                  HTML5 y CSS3, utilizando componentes reutilizables,
                  manejo de estados, eventos y consumo de APIs REST.
                </p>
              </div>
            </article>

            <article className="about-card">
              <span className="about-card-number">02</span>

              <div>
                <h4>Backend y APIs</h4>

                <p>
                  Desarrollo con Node.js y Express mediante rutas, controladores,
                  endpoints REST, métodos HTTP, validación de datos y operaciones
                  CRUD conectadas a bases de datos.
                </p>
              </div>
            </article>

            <article className="about-card">
              <span className="about-card-number">03</span>

              <div>
                <h4>SQL y datos</h4>

                <p>
                  Diseño y consulta de bases de datos relacionales mediante SQL,
                  trabajando con tablas, relaciones, claves, filtros, joins y
                  operaciones de inserción, consulta, actualización y eliminación.
                </p>
              </div>
            </article>

            <article className="about-card">
              <span className="about-card-number">04</span>

              <div>
                <h4>Cloud y despliegue</h4>

                <p>
                  Conocimientos en despliegue y operación básica de aplicaciones
                  en servidores cloud y entornos AWS, incluyendo conceptos de
                  cómputo, conectividad, configuración segura y administración
                  de aplicaciones.
                </p>
              </div>
            </article>

            <article className="about-card">
              <span className="about-card-number">05</span>

              <div>
                <h4>Claude Code e IA</h4>

                <p>
                  Uso de Claude Code y herramientas de inteligencia artificial
                  para análisis, depuración, documentación, refactorización y
                  optimización del flujo de desarrollo, manteniendo revisión y
                  validación humana del código.
                </p>
              </div>
            </article>

            <article className="about-card">
              <span className="about-card-number">06</span>

              <div>
                <h4>Desarrollo seguro</h4>

                <p>
                  Formación continua en validación de entradas, protección de
                  credenciales, variables de entorno, control de acceso y
                  prevención básica de vulnerabilidades en aplicaciones web.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About