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

  const closeMenuToScroll = (id: string) => {
    clickScroll(id);
    setIsOpen(false);
  }

  return (
    <nav>
      <img src={reactLogo} alt="logo" />

      <ul className={!isOpen? styles.navbar_disable : styles.navbar_list}>
        <li onClick={() => closeMenuToScroll("hero")}>Inicio</li>
        <li onClick={() => closeMenuToScroll("about")}>Sobre mi</li>
        <li onClick={() => closeMenuToScroll("skills")}>Habilidades</li>
        <li onClick={() => closeMenuToScroll("projects")}>Proyectos</li>
        <li onClick={() => closeMenuToScroll("experience")}>Experiencia</li>
        <li onClick={() => closeMenuToScroll("contact")}>Contacto</li>
      </ul>

      <HiMenuAlt3 onClick={clickMenuBurger} className={isOpen? styles.disable : styles.burguer_icon}/>
      <MdOutlineClose onClick={clickMenuBurger} className={!isOpen? styles.disable : styles.burguer_icon}/>
    </nav>
  )
}

export default Navbar