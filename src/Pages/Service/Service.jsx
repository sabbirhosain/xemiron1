import { Helmet } from 'react-helmet'
import ServiceCard from '../../Components/Service/ServiceCard'
import { project, serviceProvide } from '../../Data/Data'
import ProjectCard from '../../Components/Project/ProjectCard'
import service from "../../assets/service/service9.png"
import "./Service.css"
import { Link } from 'react-router-dom'
import CompanyBrand from '../../Components/CompanyBrands/CompanyBrand'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Faq from '../../Components/Faq/Faq'
import HBlogsCard from '../../Components/Blogs/Horizontal/HBlogsCard'
import VBlogsCard from '../../Components/Blogs/Vertical/VBlogsCard'
import { MdArrowOutward } from 'react-icons/md'

const Service = () => {
  return (
    <>
      <Helmet title="Service" />

      <section className='service'>
        <div className="service_bg_img">
          <div className="container">
            <nav className='bradcumb'>
              <ol>
                <li className='d-inline-block'><Link to={""}>Home</Link></li>
                <li className='d-inline-block'><Link to={""}> &#62; </Link></li>
                <li className='d-inline-block'><Link to={""}>Service</Link></li>
              </ol>
            </nav>
            <div className="row align-items-lg-center">
              <div className="col-lg-6">
                <div>
                  <h1 className='service_title'>Our Services</h1>
                  <p className='service_paragraph'>We simplify and enhance your business's digital transformation — from ideation and brand development to customer acquisition and scaling. Our expertise supports you at every step of your journey.
                  </p>
                  <Link to={""} className='service_btn'>Get Start Now</Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <img src={service} className='img-fluid' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='service_provide'>
        <div className="container">
          <div className='row'>
            <div className='col-md-7'>
              <h1 className='service_provide_title'>Services we provide</h1>
              <p className='service_provide_paragraph'>Lorem ipsum dolor sit amet consectetur. Sit quis viverra at fermentum commodo urna. Malesuada netus semper sagittis fermentum. Nisl neque tortor ultricies risus interdum.</p>
            </div>
          </div>
          <div className="row align-items-center">
            {
              serviceProvide.map((item, index) => (
                <div className="col-lg-4" key={index}><ServiceCard serviceProviceList={item} /></div>
              ))
            }
          </div>
        </div>
      </section>

      <section className='project'>
        <div className="container">
          <div className="row">
            <div className='col-lg-8'>
              <h1 className='project_title'>The Easiest Step we take to Make your Project Next Level </h1>
            </div>
          </div>
          <div className="row">
            {
              project.map((item, index) => (
                <div className="col-md-6" key={index}><ProjectCard projectList={item} /></div>
              ))
            }
          </div>
        </div>
      </section>

      <section className='company_brand'>
        <div className="container">
          <CompanyBrand />
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
              <Faq />
            </div>
          </div>
        </div>
      </section>

      <section className='explore_blogs'>
        <div className="container">
          <div className='pb-5 text-center'>
            <h1 className='explore_blogs_title'>Explore Our Blogs</h1>
            <p className='explore_blogs_paragraph'>Read our Insightful blogs posted everyday</p>
          </div>
          <div className="row d-none d-lg-flex">
            <HBlogsCard />
            <HBlogsCard />
            <HBlogsCard />
            <HBlogsCard />
          </div>
          <div className="row d-lg-none">
            <div className="col-md-6 col-sm-6">
              <VBlogsCard />
            </div>
            <div className="col-md-6 col-sm-6">
              <VBlogsCard />
            </div>
            <div className="col-md-6 col-sm-6">
              <VBlogsCard />
            </div>
            <div className="col-md-6 col-sm-6">
              <VBlogsCard />
            </div>
          </div>
          <div className='text-center mt-md-4'>
            <Link to={"#"} className='blogs_more_btn'>Read More &ensp; <MdArrowOutward /></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service