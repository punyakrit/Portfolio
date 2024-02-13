// import React from 'react'

import Github from "./project/Github"
import ProjectList from "./project/ProjectList"

function ProjectSection() {
  return (
    <div className="  flex justify-center h-screen items-center flex-col" >
      <div className="text-2xl">
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
