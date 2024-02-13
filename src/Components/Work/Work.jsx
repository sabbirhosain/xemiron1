import "./Work.css"

const Work = ({ workList }) => {
  return (
    <>
      <div className="work_box" style={{ backgroundColor: `${workList.bgColor}` }}>
        <h1 className="work_count">{workList.workCount}</h1>
        <div className="work_overlay">
          <div className="work_icon"><img src={workList.workIcon} className="img-fluid" alt="" /></div>
          <h5 className="work_title">{workList.workTitle}</h5>
          <p className="work_description">{workList.workDescription}</p>
        </div>
      </div>
    </>
  )
}

export default Work