import { FaHtml5, FaCss3, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import type { Skill } from "../interfaces/interfaces";

export const skills:Skill[] = [
  {
    name: 'HTML',
    icon: FaHtml5,
    color: '#E54C21',
  },
    {
    name: 'Css',
    icon: FaCss3,
    color: '#1775BB',
  },
    {
    name: 'JavaScript',
    icon: IoLogoJavascript,
    color: '#F0DB4F',
  },
    {
    name: 'React',
    icon: FaReact,
    color: '#00D8FF',
  },
    {
    name: 'Scss',
    icon: FaCss3,
    color: '#CD669A',
  },
    {
    name: 'Redux Toolkit',
    icon: SiRedux,
    color: '#7755BA',
  },
    {
    name: 'Git y Github',
    icon: FaGitAlt,
    color: '#F05133',
  },
]