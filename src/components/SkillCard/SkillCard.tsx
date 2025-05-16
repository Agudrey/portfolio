import styles from './SkillCard.module.css'
import { skills } from '../../data/skills'
import type { Skill } from '../../interfaces/interfaces'


function SkillCard() {
  return (
    <>
      {skills.map((skill:Skill, index) => 
        <div key={index} style={{ '--color': skill.color } as React.CSSProperties} className={styles.skill_card}>
          <span className={styles.base}></span>
          <span className={styles.title}>{skill.name}</span>
          <span className={styles.icon}><skill.icon /></span>
        </div>
      )}
    </>
  )
}

export default SkillCard