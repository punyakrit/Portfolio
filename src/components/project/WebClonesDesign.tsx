import { clonedData } from "./LiveProjectData"
import ProjectCard from "./ProjectCard"

function WebClonesDesign() {
  return (
    <div className="flex flex-wrap justify-center">
          {clonedData.map((project, index) => (
            <ProjectCard
              key={index}
              img={project.img} 
              title={project.title}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
            />
          ))}
        </div>
  )
}

export default WebClonesDesign
