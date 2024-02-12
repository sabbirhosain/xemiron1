import { Link } from "react-router-dom"
import navimg from "../../assets/header/Image.png"
import "./Dropdown.css"

const Dropdown = () => {
  return (
    <>
      <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <h6>Product categories</h6>
          <button class="nav-link tabs_link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Management&emsp;&emsp;</button>
          <button class="nav-link tabs_link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Plugins&emsp;&emsp;</button>
          <button class="nav-link tabs_link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">API&emsp;&emsp;</button>
          <button class="nav-link tabs_link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Custome&emsp;&emsp;</button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="dropdown_menu">
                    <div className="dropdown_menu_img"><img src={navimg} className='img-fluid' alt="" /></div>
                    <div className='dropdown_menu_text'>
                      <h6 className="m-0">Finance Management System</h6>
                      <small className="my-1 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small>
                      <Link to={""} className="read_more_link">Read More</Link>
                    </div>
                  </div>
                  <div className="dropdown_menu">
                    <div className="dropdown_menu_img"><img src={navimg} className='img-fluid' alt="" /></div>
                    <div className='dropdown_menu_text'>
                      <h6 className="m-0">Finance Management System</h6>
                      <small className="my-1 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small>
                      <Link to={""} className="read_more_link">Read More</Link>
                    </div>
                  </div>
                  <div className="dropdown_menu">
                    <div className="dropdown_menu_img"><img src={navimg} className='img-fluid' alt="" /></div>
                    <div className='dropdown_menu_text'>
                      <h6 className="m-0">Finance Management System</h6>
                      <small className="my-1 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small>
                      <Link to={""} className="read_more_link">Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="dropdown_menu">
                    <div className="dropdown_menu_img"><img src={navimg} className='img-fluid' alt="" /></div>
                    <div className='dropdown_menu_text'>
                      <h6 className="m-0">Finance Management System</h6>
                      <small className="my-1 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small>
                      <Link to={""} className="read_more_link">Read More</Link>
                    </div>
                  </div>
                  <div className="dropdown_menu">
                    <div className="dropdown_menu_img"><img src={navimg} className='img-fluid' alt="" /></div>
                    <div className='dropdown_menu_text'>
                      <h6 className="m-0">Finance Management System</h6>
                      <small className="my-1 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small>
                      <Link to={""} className="read_more_link">Read More</Link>
                    </div>
                  </div>
                  <div className="dropdown_menu">
                    <div className="dropdown_menu_img"><img src={navimg} className='img-fluid' alt="" /></div>
                    <div className='dropdown_menu_text'>
                      <h6 className="m-0">Finance Management System</h6>
                      <small className="my-1 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small>
                      <Link to={""} className="read_more_link">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">Welcome</div>
          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">Awsome</div>
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">Thank You</div>
        </div>
      </div>
    </>
  )
}

export default Dropdown