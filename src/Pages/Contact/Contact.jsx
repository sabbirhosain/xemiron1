import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import whatsapp from "../../assets/whatsapp.svg"
import { Link } from 'react-router-dom';
import { FaLinkedin, FaRegEnvelopeOpen, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import "./Contact.css"

import InnerLayout from '../../Layout/InnerLayout';
import Promise from '../../Components/Promise/Promise';

const Contact = () => {
  return (
    <InnerLayout title="Contact">

      <section className='contact_bg_us'>
        <div className="container">
          <div className="contact_bg_img">
            <div className='contact_breadcrumb'>
              <Breadcrumb page1={"Home"} page2={"Contact us"} color={"text-white"} />
            </div>
            <div className='contact_bd_textbox'>
              <h1 className='xemiron_contact_title'>Contact with us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='contact_us'>
        <div className="container">
          <div className="row justify-content-lg-between">
            <div className="col-md-7">
              <div className='pb-3'>
                <h1 className='contact_title'>Contact us</h1>
                <p className='contact_paragraph'>Please contact us using any of these methods. We are waiting for your message or call. Lets schedule a meeting for brief discussion. </p>
              </div>
              <div className="contact_box">
                <div className="contact_box_body">

                  <div className="col-6">
                    <div className='location_box mb-4'>
                      <div className='location_icon_box'><IoLocationOutline className='location_icon' /></div>
                      <div className='location_map'>
                        <h6 className='location_name '>Rajshahi, Bangladesh</h6>
                        <Link to={""} className='location_view_map'>view map <GoArrowUpRight /></Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className='location_box mb-4'>
                      <div className='location_icon_box'><FaRegClock className='location_icon' /></div>
                      <div className='location_map'>
                        <h6 className='location_name m-0'>Available 24/7</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className='location_box'>
                      <div className='location_icon_box'><FaRegEnvelopeOpen className='location_icon' /></div>
                      <div className='location_map'>
                        <Link to={""} className='contact_email'>toufic064@gmail.com</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className='location_box'>
                      <div className='location_icon_box'><LuPhone className='location_icon' /></div>
                      <div className='location_map'>
                        <h6 className='location_name m-0'>+88 01329 399250</h6>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="follow_us">
                <h4 className='follow_us_text'>Follow Us</h4>

                <div className="social_follow_box">
                  <div className="follow_icon_box">
                    <span className='socail_icon_box'><FaFacebookSquare className='socail_icon' /> Facebook</span>
                  </div>
                  <div className="follow_icon_box mx-3">
                    <span className='socail_icon_box'><FaTwitterSquare className='socail_icon' /> Twitter</span>
                  </div>
                  <div className="follow_icon_box">
                    <span className='socail_icon_box'><FaLinkedin className='socail_icon' /> Linkedin</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='contact_from'>
                <form action="" method="post">
                  <div class="mb-3">
                    <label for="yourName" class="form-label">Name</label>
                    <input type="email" class="form-control" id="yourName" placeholder="Sabbir Hosain" />
                  </div>
                  <div class="mb-3">
                    <label for="emailAddress" class="form-label">Email</label>
                    <input type="email" class="form-control" id="emailAddress" placeholder="name@example.com" />
                  </div>
                  <div class="mb-3">
                    <label for="phoneNumber" class="form-label">Phone</label>
                    <input type="email" class="form-control" id="phoneNumber" placeholder="+880 123 456 789" />
                  </div>
                  <div className='mb-3'>
                    <label for="phoneNumber" class="form-label">I want to</label>
                    <select class="form-select">
                      <option selected>Build a website</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <button type="button" class="form_submit_btn">Submit Now</button>
                  <h6 className='py-4 text-center'>or</h6>
                  <Link to={"#"} className="form_whatsapp_btn">WhatsApp Now &emsp;<img src={whatsapp} alt="" width={"25px"} /></Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='promise'>
        <Promise />
      </section>

    </InnerLayout>
  )
}

export default Contact