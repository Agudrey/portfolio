import styles from "./Experience.module.css"
import type { ExperienceInfo } from "../../interfaces/interfaces"
import { experience } from "../../data/experience"

function Experience() {
  return (
    <section id='experience' className={styles.experience_section}>
      <h2 className={styles.experience_title}>Experiencia</h2>

      <div className={styles.timeline}>
        {experience.map((exp: ExperienceInfo, index: number) => (
          <div key={index} className={styles.timeline_item}>
            <div className={styles.timeline_date}>
              <span>{exp.date}</span>
            </div>

            <div className={styles.timeline_marker} />

            <div className={styles.timeline_content}>
              <h3 className={styles.timeline_title}>{exp.position}</h3>

              <p className={styles.timeline_company}>{exp.company}</p>

              <ul className={styles.timeline_description_list}>
                {exp.description.map((desc, index) => (
                  <li key={index} className={styles.timeline_description_item}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience