import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero_section}>
      <h1>Hola, soy <span className={styles.nombre}>Cristian Agudelo</span></h1>
      <p>Desarrollador web enfocado en construir sitios responsivos, accesibles y atractivos.</p>
    </section>
  )
}

export default Hero