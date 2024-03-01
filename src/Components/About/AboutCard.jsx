import "./AboutCard.css"
const AboutCard = ({ xemironApartList }) => {
  return (
    <>
      <div className="col-sm-6">
        <div className="card mb-4 xemiron_apart_card">
          <div className="card-body d-lg-flex align-items-start">
            <img src={xemironApartList.xemironIcon} className="xemiron_apart_icon" alt="" />
            <div className="ps-lg-3">
              <h5 className="about_card_title">{xemironApartList.xemironTitle}</h5>
              <p className="about_card_paragraph">{xemironApartList.xemironDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard