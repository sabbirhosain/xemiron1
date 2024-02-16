// components
import BlogsCard from '../../Components/Blogs/Horizontal/BlogsCard'
import image from "../../assets/home/image.png"
import review from "../../assets/home/Review.png"
import about from "../../assets/About-us.png"
import shareIdea from "../../assets/img1.png"
import discuss from "../../assets/duscuss.png"
import hospitalManagement from "../../assets/hospital-management.png"
import { Helmet } from 'react-helmet'
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Link } from 'react-router-dom'
import { servesOffer, works } from '../../Data/Data'
import "./Home.css"
import Work from '../../Components/Work/Work'
import Testimonial from '../../Components/Testimonial/Testimonial'
import CompanyBrand from '../../Components/CompanyBrands/CompanyBrand'
import Frequently from '../../Components/Frequently/Frequently'
import { MdArrowOutward } from 'react-icons/md'
import ServiceOffer from '../../Components/ServicesOffer/ServiceOffer'

const Home = () => {
  return (
    <>
      <Helmet title="Home" />

      <section className='hero_section'>
        <div className="hero_bg_img">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-8 col-md-6">
                <div className="hero_text_box">
                  <div className='hero_category'>
                    <Link to={"#"} className='hero_category_title'>Website design</Link>
                    <Link to={"#"} className='hero_category_title'>Custom Web Application</Link>
                    <Link to={"#"} className='hero_category_title'>Digital Marketing</Link>
                    <Link to={"#"} className='hero_category_title'>And much more</Link>
                  </div>
                  <div>
                    <h1 className='hero_title'>Need to build a website or Custom Web Application⁉️</h1>
                    <p className='hero_paragraph'>At Xemiron IT Solutions, we specialize in business digitalization. Whether you’re launching a new business or already own a company and need a website, mobile app, or custom management software, we can help. Our team comprises designers, developers, digital marketing experts, and specialists from various IT fields.</p>
                  </div>
                  <div>
                    <Link to={"#"} className='hero_getstart_btn'>Get Start Now</Link>
                    <Link to={"#"} className='hero_explore_btn'>Explore More</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hero_img_box">
                  <img src={image} className="img-fluid hero_img" alt="" />
                  <img src={review} className="img-fluid hero_review" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-6">
              <div>
                <h1 className="about_title">Xemiron IT Solutions your Trusted IT Solutions provider.</h1>
                <p className="about_paragraph">Welcome to Xemiron, where we turn ideas into reality. As a team of dedicated professionals, we specialize in creating digital solutions for businesses. Whether you’re looking for a website, mobile app, or custom software, we’ve got the expertise to bring your vision to life.</p>

                <p className="about_paragraph">What defines us is our commitment to simplicity and effectiveness. We understand the challenges of the digital landscape and work towards providing practical solutions that work for you. Our goal is to make technology work seamlessly for your business, without unnecessary complexities.</p>

                <p className="about_paragraph">At Xemiron, we value collaboration and transparency. From concept to execution, we keep you in the loop, ensuring that the end result aligns perfectly with your goals.</p>

                <p className="about_paragraph">Thank you for considering Xemiron IT Solutions for your digital needs. We look forward to the opportunity of working together.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div>
                <img src={about} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="share_idea">
        <div className="container">
          <div className="row align-items-center justify-content-between py-5">
            <div className="col-md-6 col-lg-7">
              <div>
                <h1 className="share_idea_title">Just share your idea! Let us take it from there for you until the finish line, and you can simply relax and observe 🙂</h1>

                <p className="share_idea_paragraph">We dont promise it we do it! Start with us with a simple project and you will start realizing our experience, creativity, capibility, concestency and honesty! We are not what we say we are what we do!</p>

                <div className="mt-4 d-flex">
                  <Link to={"#"} className="share_idea_estimate_btn">Get Free Estimate</Link>
                  <Link to={"#"} className="share_idea_whatsapp_btn">WhatsApp Now &emsp;<span><IoLogoWhatsapp /></span></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="share_img_box">
                <img src={shareIdea} className="share_img" height={"300px"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='service_offering'>
        <div className="container">
          <div className="service_offer_box">
            <h1 className='service_offer_text'>Check out the service we're offering.</h1>
            <p className='service_offer_paragraph'>Our service provides a wide range of solutions to meet your needs. Whether you're looking for Software Development, Web development, Web Design, UI UX Design, Graphic Design, Digital Marketing, we have you covered.</p>
          </div>
          <div className="row">
            {
              servesOffer.map((item, index) => (
                <div className="col-6 col-sm-6 col-md-6 col-lg-3" key={index}>
                  <ServiceOffer serviceOfferList={item} />
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className='discuss'>
        <div className="container">
          <div>
            <img src={discuss} className='discuss_img' alt="" />
          </div>
        </div>
      </section>

      <section className='we_works'>
        <div className="container">
          <div className='works_text_box'>
            <h1 className='works_title'>How We works</h1>
            <p className='works_paragaraph'>Our service provides a wide range of solutions to meet your needs. Whether you're looking for Software Development, Web development, Web Design, UI UX Design, Graphic Design, Digital Marketing, we have you covered.</p>
          </div>
          <div className="row">
            {
              works.map((item, index) => (
                <div className="col-md-4 col-lg-4" key={index}>
                  <Work workList={item} />
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="hospital_management">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className='hospital_text_box'>
                <h5 className='hospital_mini_title'>Check out our</h5>
                <h1 className='hospital_title'>Hospital Management System</h1>
                <p className='hospital_paragraph'>The Hospital Management System is a comprehensive and intuitive software solution designed to empower healthcare institutions with efficient, streamlined, and intelligent management of their operations. This user-friendly dashboard serves as the central command center, providing real-time insights, analytics.</p>

                <div className='d-flex align-items-center'>
                  <span className='hospital_icon_box'><HiOutlineUserGroup /></span>
                  <span className='hospital_count'>345+</span>
                  <span className='hospital_count_title'>Active User</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div>
                <img src={hospitalManagement} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='client_testimonial'>
        <div className="container">
          <div>
            <h1 className='testimonial_title'>This is what our honurable <br /> clients say about us</h1>
            <p className='testimonial_paragaraph'>Our service provides a wide range of solutions to meet your needs. Whether you're looking for Software Development, <br /> Web development, Web Design, UI UX Design, Graphic Design, Digital Marketing, we have you covered.</p>
          </div>
          <div><Testimonial /></div>
        </div>
      </section>

      <section className='company_brand'>
        <div className="container">
          <CompanyBrand />
        </div>
      </section>

      <section className='frequently'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div>
                <h1 className='frequently_title'>Frequently</h1>
                <p className='frequently_paragraph'>We have compiled a list of frequently asked questions to help you quickly find the information you need.</p>
                <Link to={"#"} className='blogs_card_btn'>Contact Us</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Frequently />
            </div>
          </div>
        </div>
      </section>

      <section className='explore_blogs'>
        <div className="container">
          <div className='pb-4 text-center'>
            <h1 className='explore_blogs_title'>Explore Our Blogs</h1>
            <p className='explore_blogs_paragraph'>Read our Insightful blogs posted everyday</p>
          </div>
          <div className="row">
            <BlogsCard />
            <BlogsCard />
            <BlogsCard />
            <BlogsCard />
          </div>
          <div className='text-center mt-5'>
            <Link to={"#"} className='blogs_card_btn'>Read More &ensp; <MdArrowOutward /></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home