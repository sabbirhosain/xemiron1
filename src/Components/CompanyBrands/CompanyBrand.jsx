import company1 from "../../assets/company/company1.png"
import company2 from "../../assets/company/company2.png"
import company3 from "../../assets/company/company3.png"
import company4 from "../../assets/company/company4.png"
import company5 from "../../assets/company/company5.png"
import "./CompanyBrand.css"

const CompanyBrand = () => {
  return (
    <>
      <div className="company_brand_box shadow-sm py-4">

        <div className="col-lg-2 col-md-2">
          <div><img src={company1} className="img-fluid" alt="" /></div>
        </div>
        <div className="col-lg-2 col-md-2">
          <div><img src={company2} className="img-fluid" alt="" /></div>
        </div>
        <div className="col-lg-2 col-md-2">
          <div><img src={company3} className="img-fluid" alt="" /></div>
        </div>
        <div className="col-lg-2 col-md-2">
          <div><img src={company4} className="img-fluid" alt="" /></div>
        </div>
        <div className="col-lg-2 col-md-2">
          <div><img src={company5} className="img-fluid" alt="" /></div>
        </div>
      </div>
    </>
  )
}

export default CompanyBrand