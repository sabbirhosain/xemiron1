import logo from "../../assets/xemiron-logo.png"
import aws from "../../assets/aws.png"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";
import "./Footer.css"
import { Link } from "react-router-dom";
import SayHello from "../SayHello/SayHello";

const Footer = () => {
  return (
    <>
      <section className="say_hello">
        <div className="container">
          <SayHello />
        </div>
      </section>

      <div className='footer_section'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-6">
              <div className="footer_logo">
                <img src={logo} className="footer_img" alt="footer logo" />
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="newsletter mt-md-4 mt-lg-0">
                <div>
                  <h6 className="newsletter_title">Get our Newsletter</h6>
                  <form className="newletter_form">
                    <input type="text" className="newsletter_input" placeholder="youremail@email.com" name="" id="" />
                    <input type="button" className="newsletter_btn" value="Subscribe Us" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-6">
              <div>
                <p className="footer_paragraph">Xemiron IT Solutions, your trusted IT solution provider, is here to assist you as always. No matter how complex and big your project is, we have got your back. Let us arrange a call and discuss in detail.</p>
                <ul>
                  <li className="contact_list"><FaWhatsapp />&ensp;<span>WhatsApp:</span>&ensp;+880 1329-399250</li>
                  <li className="contact_list"><LuPhoneCall />&ensp;<span>Phone:</span>&ensp;+880 1329-399250</li>
                  <li className="contact_list"><FaRegEnvelope />&ensp;<span>Email:</span>&ensp;toufic064@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row my-4 my-lg-0">
                <div className="col-6 col-md-4">
                  <div>
                    <h5 className="navigation_title">Main Navigation</h5>
                    <ul>
                      <li><Link to={""} className="footer_link">Home</Link></li>
                      <li><Link to={""} className="footer_link">Pricing</Link></li>
                      <li><Link to={""} className="footer_link">Service</Link></li>
                      <li><Link to={""} className="footer_link">Contact</Link></li>
                      <li><Link to={""} className="footer_link">About us</Link></li>
                      <li><Link to={""} className="footer_link">Blog</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div>
                    <h5 className="navigation_title">Legal</h5>
                    <ul>
                      <li><Link to={""} className="footer_link">Refund Policy</Link></li>
                      <li><Link to={""} className="footer_link">Terms and Conditions</Link></li>
                      <li><Link to={""} className="footer_link">Cookie Policy</Link></li>
                      <li><Link to={""} className="footer_link">Privacy Policy</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center text-sm-start pt-3 pt-sm-0">
                    <img src={aws} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center py-4 mt-4">
              <div className="col-lg-8">
                <ul className="text-center text-lg-start">
                  <li className="footer_category"><Link to={"#"} className="footer_category_link">Xemiron elements</Link></li>
                  <li className="footer_category"><Link to={"#"} className="footer_category_link">Xemiron Product</Link></li>
                  <li className="footer_category"><Link to={"#"} className="footer_category_link">Xemiron Tuts+</Link></li>
                  <li className="footer_category"><Link to={"#"} className="footer_category_link">Xemiron Plug in</Link></li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="d-flex align-items-center justify-content-center justify-content-lg-end mt-3 mt-lg-0">
                  <strong>Follow Us</strong>
                  <Link to={"#"} className="socail_link"><FaFacebook /></Link>
                  <Link to={"#"} className="socail_link"><FaTwitter /></Link>
                  <Link to={"#"} className="socail_link"><FaInstagram /></Link>
                  <Link to={"#"} className="socail_link"><FaLinkedin /></Link>
                  <Link to={"#"} className="socail_link"><FaGithub /></Link>
                  <Link to={"#"} className="socail_link"><FaPinterest /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_copyright">
          <div className="container">
            <div className="row py-2">
              <span className="text-center copyright_text">Copyright © 2024 Xemiron</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer