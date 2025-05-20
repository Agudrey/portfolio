import styles from './Hero.module.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub, FaWhatsapp  } from "react-icons/fa6";
import { clickScroll } from '../../utils/clickScroll';
import hero_image from '../../assets/hero_image.webp';

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
        <a 
          href="https://www.linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp"
        >
          <FaWhatsapp />
        </a>
        <a    
          href="https://www.linkedin.com/in/cristian-agudelo-b2217b1b4/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a 
          href="https://www.linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  )
}

export default Hero