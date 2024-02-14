// import React from 'react'

import Github from "./project/Github";
import ProjectList from "./project/ProjectList";
import WebClonesDesign from "./project/WebClonesDesign";

function ProjectSection() {
  return (
    <div className="  flex  h-fit items-center flex-col">
      <div className="text-4xl mb-6 mt-20 font-bold">Project Section</div>
      <div>
        <ProjectList />
      </div>
      <div className="text-4xl mb-6 mt-10 font-bold">Website Designs</div>
      <div className="mb-28 md:mb-2">
        <WebClonesDesign />
      </div>
      <Github />
    </div>
  );
}

export default ProjectSection;
