import React from 'react'

const ProjectCard = ({ projectList }) => {
  return (
    <>
      <div class="card mb-4">
        <div class="card-body">
          <img src={projectList.projectImg} className='img-fluid' alt="" />
          <h5 class="card-title">{projectList.projectTitle}</h5>
          <p class="card-text">{projectList.projectDescription}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard