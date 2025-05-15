import styles from './Navbar.module.css'
import reactLogo from '../../assets/react.svg'

function Navbar() {
  return (
    <nav>
      <img src={reactLogo} alt="logo" />

      <ul className={styles.navbar_list_desktop}>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/about">Sobre mi</a>
        </li>
        <li>
          <a href="/contact">Habilidades</a>
        </li>
        <li>
          <a href="/contact">Proyectos</a>
        </li>
        <li>
          <a href="/contact">Experiencia</a>
        </li>
        <li>
          <a href="/contact">Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar