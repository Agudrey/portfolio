import styles from './Skills.module.css'
import { skills } from '../../data/skills'


function Skills() {
  return (
    <section className={styles.skills_section}>
        <h2 className={styles.skills_title}>Habilidades</h2>
        <div className={styles.skills_grid}>
          {skills.map((skill, index) => 
            <div key={index} style={{ '--color': skill.color } as React.CSSProperties} className={styles.skill_card}>
              <span className={styles.base}></span>
              <span className={styles.title}>{skill.name}</span>
              <span className={styles.icon}><skill.icon /></span>
            </div>
          )}
        </div>
    </section>
  )
}

export default Skills