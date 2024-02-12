// components
// import BlogsCard from '../../Components/Blogs/Horizontal/BlogsCard'
import image from "../../assets/home/image.png"
import review from "../../assets/home/Review.png"
import { Helmet } from 'react-helmet'
import "./Home.css"
import { Link } from 'react-router-dom'

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

      <section className='explore_blogs'>
        <div className="container">
          <div className="row">
            {/* <BlogsCard />
            <BlogsCard /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home