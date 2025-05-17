
import styles from "./Projects.module.css"
import ProjectCard from "../../components/ProjectCard/ProjectCard"

function Projects() {
  return (
    <section id='projects' className={styles.projects_section}>
      <h2 className={styles.projects_title}>Proyectos</h2>
      <div className={styles.projects_grid}>
        <ProjectCard />
      </div>
    </section>
  )
}

export default Projects