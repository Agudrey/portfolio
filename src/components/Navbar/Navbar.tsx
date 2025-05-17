import styles from './Navbar.module.css'
import reactLogo from '../../assets/react.svg'
import { useState } from 'react'
import { clickScroll } from '../../utils/clickScroll'
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from 'react-icons/md';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const clickMenuBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <img src={reactLogo} alt="logo" />

      <ul className={!isOpen? styles.navbar_disable : styles.navbar_list}>
        <li onClick={() => clickScroll("hero")}>Inicio</li>
        <li onClick={() => clickScroll("about")}>Sobre mi</li>
        <li onClick={() => clickScroll("skills")}>Habilidades</li>
        <li onClick={() => clickScroll("projects")}>Proyectos</li>
        <li onClick={() => clickScroll("experience")}>Experiencia</li>
        <li onClick={() => clickScroll("contact")}>Contacto</li>
      </ul>

      <HiMenuAlt3 onClick={clickMenuBurger} className={isOpen? styles.disable : styles.burguer_icon}/>
      <MdOutlineClose onClick={clickMenuBurger} className={!isOpen? styles.disable : styles.burguer_icon}/>
    </nav>
  )
}

export default Navbar