import { Helmet } from 'react-helmet'
import "./Contact.css"
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebookF, FaRegHeart } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";

import InnerLayout from '../../Layout/InnerLayout';

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
          <div className="row">
            <div className="col-md-8">
              <div className='pb-3'>
                <h1 className='contact_title'>Contact us</h1>
                <p className='contact_paragraph'>Please contact us using any of these methods. We are waiting for your message or call. Lets schedule a meeting for brief discussion. </p>
              </div>
              <div className="contact_box">
                <div className="contact_box_body">

                  <div className="col-6">
                    <div className='location_box'>
                      <div className='location_icon_box'><IoLocationOutline className='location_icon' /></div>
                      <div className='location_map'>
                        <h6 className='location_name'>Rajshahi, Bangladesh</h6>
                        <Link to={""} className='location_view_map'>view map <GoArrowUpRight /></Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className='location_box'>
                      <div className='location_icon_box'><FiUser className='location_icon' /></div>
                      <div className='location_map'>
                        <h6 className='location_name'>Available 24/7</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className='location_box'>
                      <div className='location_icon_box'><FiUser className='location_icon' /></div>
                      <div className='location_map'>
                        <Link to={""} className='location_view_map'>your-email@gmail.com</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className='location_box'>
                      <div className='location_icon_box'><FiUser className='location_icon' /></div>
                      <div className='location_map'>
                        <h6 className='location_name'>+88 01329 399250</h6>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="follow_us">
                <h4 className='follow_us_text'>Follow Us</h4>
                <div className="social_follow_box">
                  <div className="follow_icon_box">
                    <span className='facebook_icon_box'><FaFacebookF className='facebook_icon' /> Facebook</span>
                  </div>
                  <div className="follow_icon_box">
                    <span><FaTwitter /> Twitter</span>
                  </div>
                  <div className="follow_icon_box">
                    <span><FaLinkedin /> Linkedin</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='border'>
                hello world
              </div>
            </div>
          </div>
        </div>
      </section>

    </InnerLayout>
  )
}

export default Contact