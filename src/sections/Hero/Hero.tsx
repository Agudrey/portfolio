import styles from './Hero.module.css'
import { clickScroll } from '../../utils/clickScroll';
import hero_image from '../../assets/hero_image.webp';
import { contactLinks } from '../../data/contactLinks';
import type { ContactLinks } from '../../interfaces/interfaces';

function Hero() {
  return (
    <section id='hero' className={styles.hero_section}>
      <div className={styles.hero_text_container}>   
        <h1>Soy <span className={styles.name}>Cristian Agudelo</span></h1>

        <p>Desarrollador web enfocado en construir sitios responsivos, accesibles y atractivos.</p>

        <button onClick={() => clickScroll("contact")} className={styles.contact_button}>Contacto</button>
      </div>

      <div className={styles.hero_image_container}>
        <img className={styles.hero_image} src={hero_image} alt="Cristian Agudelo" />
      </div>

      <div className={styles.hero_contact_links}>
        {contactLinks.map((link:ContactLinks) => 
          <a 
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <link.icon />
          </a>
        )}
      </div>
    </section>
  )
}

export default Hero