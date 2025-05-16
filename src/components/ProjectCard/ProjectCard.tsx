import styles from "./ProjectCard.module.css"
import type { Project } from "../../interfaces/interfaces"
import { projects } from "../../data/projects"
import image from "../../assets/Ideando_image.webp"

function ProjectCard() {
  return (
    <>
      {projects.map((project: Project, index: number) => (
        <div key={index} className={styles.project_card}>
          <div className={styles.project_card_content}>
            <div className={styles.project_card_front}>
              <h3>{project.name}</h3>
              
              <img src={image} alt={project.name} />

              <div className={styles.technologies_container}>
                {project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>

              Ver más...
            </div>

            <div className={styles.project_card_back}>
              <p>{project.description}</p>

              <div className={styles.links_container}>
                {project.repository && (
                  <a 
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver repositorio de ${project.name}`}
                  >
                    Ver repositorio
                  </a>
                )}

                {project.url && (
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver demo de ${project.name}`}
                  >
                    Ver proyecto
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectCard