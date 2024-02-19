const AboutCard = ({ xemironApartList }) => {
  return (
    <>
      <div className="col-sm-6">
        <div className="card mb-4">
          <div className="card-body d-flex align-items-start">
            <img src={xemironApartList.xemironIcon} className="" alt="" />
            <div>
              <h5 className="card-title">{xemironApartList.xemironTitle}</h5>
              <p className="card-text">{xemironApartList.xemironDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard