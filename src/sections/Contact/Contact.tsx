import styles from "./Contact.module.css"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <footer id='contact' className={styles.contact_section}>
      <h2 className={styles.contact_title}>Contacto</h2>

      <div className={styles.contact_boxes}>
        <div className={styles.contact_box}>
          <FaEnvelope />
          <span>cristianagudelorey1@gmail.com</span>
        </div>
        <div className={styles.contact_box}>
          <FaPhone />
          <span>+57 3002890264</span>
        </div>
        <div className={styles.contact_box}>
          <FaMapMarkerAlt />
          <span>Bogotá, Colombia</span>
        </div>
      </div>

      <div className={styles.contact_socials}>
        <a href="#"><FaWhatsapp /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaGithub /></a>
      </div>
    </footer>
  )
}

export default Contact