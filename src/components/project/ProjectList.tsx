import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectData";

function ProjectList() {
    return (
        <div className="flex flex-wrap justify-center">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              img={project.img} 
              title={project.title}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
            />
          ))}
        </div>
      );
}

export default ProjectList;