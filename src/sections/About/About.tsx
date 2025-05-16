import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about_section}>
      <div className={styles.about_container}>
        <h2 className={styles.about_title}>Sobre mí</h2>
        <p className={styles.about_text}>
          Soy un desarrollador Frontend con experiencia en la creación de interfaces web modernas y optimizadas, utilizando tecnologías
          como ReactJS, Redux, TypeScript y Node.js. Soy un profesional autodidacta, proactivo y apasionado por la programación, el
          desarrollo web y la inteligencia artificial. Destaco por mi capacidad de comunicación, colaboración en equipo y adaptabilidad
          al cambio. Mi enfoque está en la mejora continua, aprendiendo nuevas herramientas y prácticas para crear soluciones
          innovadoras y funcionales. Disfruto enseñar, explicar y debatir ideas, promoviendo un ambiente de aprendizaje mutuo y
          crecimiento.
        </p>
      </div>
    </section>
  )
}

export default About