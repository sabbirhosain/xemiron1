import { Link } from "react-router-dom"
import dropdown1 from "../../assets/header/image1.png"
import dropdown2 from "../../assets/header/image2.png"
import dropdown3 from "../../assets/header/image3.png"
import dropdown4 from "../../assets/header/image4.png"
import dropdown5 from "../../assets/header/image5.png"
import dropdown6 from "../../assets/header/image6.png"
import "./Dropdown.css"

const Dropdown = () => {
  return (
    <>
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <h6>Product categories</h6>
          <button className="nav-link tabs_link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Management&emsp;&emsp;</button>
          <button className="nav-link tabs_link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Plugins&emsp;&emsp;</button>
          <button className="nav-link tabs_link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">API&emsp;&emsp;</button>
          <button className="nav-link tabs_link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Custome&emsp;&emsp;</button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="dropdown_menu">
                    <div className="dropdown_menu_img"><img src={dropdown1} className='img-fluid' alt="" /></div>
                    <div className='dropdown_menu_text'>
                      <Link to={"#"} className="m-0 fw-semibold text-dark">Finance Management System</Link>
                      <small className="my-1 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small>
                      <Link to={""} className="read_more_link">Read More</Link>
                    </div>
                  </div>
                  <div className="dropdown_menu">
                    <div className="dropdown_menu_img"><img src={dropdown2} className='img-fluid' alt="" /></div>
                    <div className='dropdown_menu_text'>
                      <h6 className="m-0 fw-semibold">Hospital Management System</h6>
                      <small className="my-1 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small>
                      <Link to={""} className="read_more_link">Read More</Link>
                    </div>
                  </div>
                  <div className="dropdown_menu">
                    <div className="dropdown_menu_img"><img src={dropdown3} className='img-fluid' alt="" /></div>
                    <div className='dropdown_menu_text'>
                      <h6 className="m-0 fw-semibold">School Management System</h6>
                      <small className="my-1 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small>
                      <Link to={""} className="read_more_link">Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="dropdown_menu">
                    <div className="dropdown_menu_img"><img src={dropdown4} className='img-fluid' alt="" /></div>
                    <div className='dropdown_menu_text'>
                      <h6 className="m-0 fw-semibold">Shopify Product Variation</h6>
                      <small className="my-1 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small>
                      <Link to={""} className="read_more_link">Read More</Link>
                    </div>
                  </div>
                  <div className="dropdown_menu">
                    <div className="dropdown_menu_img"><img src={dropdown5} className='img-fluid' alt="" /></div>
                    <div className='dropdown_menu_text'>
                      <h6 className="m-0 fw-semibold">Ecommerce Product adds</h6>
                      <small className="my-1 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small>
                      <Link to={""} className="read_more_link">Read More</Link>
                    </div>
                  </div>
                  <div className="dropdown_menu">
                    <div className="dropdown_menu_img"><img src={dropdown6} className='img-fluid' alt="" /></div>
                    <div className='dropdown_menu_text'>
                      <h6 className="m-0 fw-semibold">Meta Automation System</h6>
                      <small className="my-1 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small>
                      <Link to={""} className="read_more_link">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">Welcome</div>
          <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">Awsome</div>
          <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">Thank You</div>
        </div>
      </div>
    </>
  )
}

export default Dropdown