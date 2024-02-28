import "./ProjectCard.css"

const ProjectCard = ({ projectList }) => {
  return (
    <>
      <div class="card border-0 mb-lg-4" style={{ backgroundColor: "transparent" }}>
        <div class="card-body">
          <img src={projectList.projectImg} className='project_card_img' alt="" />
          <h4 class="project_card_title">{projectList.projectTitle}</h4>
          <p class="project_card_paragraph">{projectList.projectDescription}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard