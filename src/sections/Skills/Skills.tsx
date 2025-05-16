import styles from './Skills.module.css'
import SkillCard from '../../components/SkillCard/SkillCard'

function Skills() {
  return (
    <section className={styles.skills_section}>
        <h2 className={styles.skills_title}>Habilidades</h2>
        <div className={styles.skills_grid}>
          <SkillCard />
        </div>
    </section>
  )
}

export default Skills