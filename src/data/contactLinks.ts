import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa"
import type { ContactLinks } from "../interfaces/interfaces"

export const contactLinks:ContactLinks[] = [
  {
    name: "Whatsapp",
    url: "https://api.whatsapp.com/send?phone=573002890264&text=Hola%20Cristian%2C%20me%20interesa%20tu%20perfil",
    icon: FaWhatsapp,
  },
    {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/cristian-agudelo-b2217b1b4/",
    icon: FaLinkedinIn,
  },
    {
    name: "Github",
    url: "https://github.com/Agudrey",
    icon: FaGithub,
  },
]