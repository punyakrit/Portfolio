// import React from 'react'

import Github from "./project/Github"
import ProjectList from "./project/ProjectList"

function ProjectSection() {
  return (
    <div className="  flex  h-fit items-center flex-col" >
      <div className="text-4xl mb-6 mt-20">
        Project Section
        </div>
        <div>
          <ProjectList/>
        </div>
      <Github/>
    </div>
  )
}

export default ProjectSection
