import { Helmet } from "react-helmet"
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb"
import VBlogsCard from "../../Components/Blogs/Vertical/VBlogsCard"

import BlogsDetailsBG from "../../assets/blog-details/blogs-details-bg.jpg"
import BlogsDetails1 from "../../assets/blog-details/blog-details1.png"
import BlogsDetails2 from "../../assets/blog-details/blog-details2.jpg"

import { Link } from "react-router-dom"
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { BiComment } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";
import { FaLinkedin, FaTwitter, FaFacebookF, FaRegHeart } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import "./BlogDetails.css"

const BlogDetails = () => {
  return (
    <>
      <Helmet title="Blog Details" />

      <section className='blogs_details_breadcrumb'>
        <div className="container">
          <Breadcrumb page1={"Home"} page2={"Blogs Details"} />
        </div>
      </section>

      <section className="blogs_details">
        <div className="blogs_details_banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center">
                  <h6 className="blogs_details_sm_title">Web Design</h6>
                  <h1 className="blogs_details_title">Reflecting on Your Python mastery journey.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs_description">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex align-items-center justify-content-between">
                <ul className="breadcrumb_list">
                  <li className="breadcrumb_items"><Link to={""} className="breadcrumb_link">Home</Link></li>
                  <li className="breadcrumb_items"><MdArrowForwardIos /></li>
                  <li className="breadcrumb_items"><Link to={""} className="breadcrumb_link">Web Design</Link></li>
                </ul>
                <ul className="social_list">
                  <li className="socail_item">
                    <Link to={""} className="social_link"><AiOutlineLink className="social_icon" /></Link>
                  </li>
                  <li className="socail_item">
                    <Link to={""} className="social_link"><FaLinkedin className="social_icon" /></Link>
                  </li>
                  <li className="socail_item">
                    <Link to={""} className="social_link"><FaTwitter className="social_icon" /></Link>
                  </li>
                  <li className="socail_item">
                    <Link to={""} className="social_link"><FaFacebookF className="social_icon" /></Link>
                  </li>
                </ul>
              </div>


              <div className="mt-5">
                <h1>Introduction</h1>

                <p>Welcome to the final installment of Xemiron's Python tutorial series! As we conclude this enriching journey together, take a moment to reflect on your progress and celebrate your achievements. In this segment, we'll discuss valuable insights gained, provide guidance for continued learning, and chart a path forward in your Python mastery journey.</p>

                <h1>Reflections on Your Python Journey</h1>
                <p>Pause and acknowledge the milestones you've achieved throughout this Python tutorial series. From mastering the basics to delving into advanced concepts, each step has contributed to your growth as a Python programmer.</p>

                <img src={BlogsDetails1} className="img-fluid" alt="" />

                <span>Celebrating Your Achievements</span>

                <h6>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</h6>

                <p>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.</p>

                <img src={BlogsDetails2} className="img-fluid" alt="" />

                <span>Image caption goes here</span>

                <h6>"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."</h6>

                <p>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.</p>

                <h1>Conclusion</h1>

                <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>

                <p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>

                <p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>

                <div className="d-flex align-items-center justify-content-between my-5">
                  <ul className="category_list">
                    <li className="category_item">
                      <Link to={""} className="category_link">UI</Link>
                    </li>
                    <li className="category_item">
                      <Link to={""} className="category_link">UX</Link>
                    </li>
                    <li className="category_item">
                      <Link to={""} className="category_link">Design</Link>
                    </li>
                    <li className="category_item">
                      <Link to={""} className="category_link">Web Design</Link>
                    </li>
                  </ul>

                  <ul className="social_list">
                    <li className="socail_item">
                      <Link to={""} className="social_link"><AiOutlineLink className="social_icon" /></Link>
                    </li>
                    <li className="socail_item">
                      <Link to={""} className="social_link"><FaLinkedin className="social_icon" /></Link>
                    </li>
                    <li className="socail_item">
                      <Link to={""} className="social_link"><FaTwitter className="social_icon" /></Link>
                    </li>
                    <li className="socail_item">
                      <Link to={""} className="social_link"><FaFacebookF className="social_icon" /></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs_comments">
        <div className="container">
          <h4 className="comment_counts">88 Responds</h4>
          <div className="d-flex align-items-center">
            <span className="user_icon_box"><FiUser className="blogs_user_icon" /></span>
            <span className="blogs_user_name">Muntasir Mahmud</span>
          </div>

          <form action="" method="get">
            <textarea className="blogs_comments_textarea" name="" id="" cols="30" rows="8"></textarea>
            <div className="d-flex align-items-center justify-content-end">
              <input type="button" className="comment_submit_btn" value="Respond" />
            </div>
          </form>

          <div className="massage_box mt-4">
            <div className="d-flex align-items-center">
              <span className="massage_user_icon_box"><FiUser className="massage_blogs_user_icon" /></span>
              <div>
                <h6 className="massage_name">Abul Kalam</h6>
                <small className="disabled">2 Days ago</small>
              </div>
            </div>
            <p className="massage_paragraph">WhatsApp is a widely used messaging application. However, there is a decrease in rating due to user difficulties in using some of the features.The best Users</p>
            <div className="d-flex align-items-center justify-content-between">
            
              <FaRegHeart className="massage_acction_icon"/>
              <span className="massage_acction_icon">Reply <BiComment /></span>
            </div>
          </div>
          <div className="massage_box mt-4">
            <div className="d-flex align-items-center">
              <span className="massage_user_icon_box"><FiUser className="massage_blogs_user_icon" /></span>
              <div>
                <h6 className="massage_name">Abul Kalam</h6>
                <small className="disabled">2 Days ago</small>
              </div>
            </div>
            <p className="massage_paragraph">WhatsApp is a widely used messaging application. However, there is a decrease in rating due to user difficulties in using some of the features.The best Users</p>
            <div className="d-flex align-items-center justify-content-between">
            
              <FaRegHeart className="massage_acction_icon"/>
              <span className="massage_acction_icon">Reply <BiComment /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="recent_blogs">
        <div className="container">
          <div className="pb-5">
            <h1 className="recent_blogs_title">Recent News</h1>
            <p className="recent_blogs_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className="row">
            <div className="col-lg-4"><VBlogsCard /></div>
            <div className="col-lg-4"><VBlogsCard /></div>
            <div className="col-lg-4"><VBlogsCard /></div>
          </div>
          <div className="text-center mt-4">
            <Link to={""} className="blogs_card_btn">View All</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetails