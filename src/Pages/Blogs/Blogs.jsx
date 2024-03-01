import VBlogsCard from '../../Components/Blogs/Vertical/VBlogsCard'
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import BlogsCarousel from '../../Components/Blogs/BlogsCarousel/BlogsCarousel';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import "./Blogs.css"
import "./Blogs.responsive.css"
import { Link } from 'react-router-dom';
import InnerLayout from '../../Layout/InnerLayout';


const Blogs = () => {
  return (
    <InnerLayout title="Blogs">

      <section className='blogs_breadcrumb'>
        <div className="container">
          <Breadcrumb page1={"Home"} page2={"Blogs"} />
        </div>
      </section>

      <section className='blogs_banner'>
        <div className="container">
          <BlogsCarousel />
        </div>
      </section>

      <section className='our_blogs'>
        <div className="container">
          <h1 className="our_blogs_title">Discover Our Insights</h1>
          <nav className='d-flex align-items-center justify-content-end justify-content-lg-between'>
            <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">

              <button className="nav-link filter_tab_link active border-0" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</button>

              <button className="d-none d-md-block nav-link filter_tab_link border-0" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Web Devopment</button>

              <button className="d-none d-md-block nav-link filter_tab_link border-0" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Web Devopment</button>

              <button className="d-none d-md-block nav-link filter_tab_link border-0" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Python Learning</button>
            </div>

            <div className=''>
              <select className="form-select blogs_filter_select">
                <option>icon</option>
                <option value={"one"}>One</option>
                <option value={"one"}>One</option>
                <option value={"one"}>One</option>
                <option value={"one"}>One</option>
                <option value={"one"}>One</option>
              </select>
            </div>
          </nav>
          <div className="tab-content mt-3 mt-lg-5" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
              <div className="row">
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
              <div className="row">
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
              <div className="row">
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex="0">
              <div className="row">
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
                <div className="col-lg-4"><VBlogsCard /></div>
              </div>
            </div>
          </div>

          <div className='d-lg-none d-flex align-items-center justify-content-between border-top pt-3 mt-4'>
            <button type="button" className='d-flex align-items-center'><GrLinkPrevious /></button>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><Link to={""} className="page-link active">1</Link></li>
                <li className="page-item"><Link to={""} className="page-link">2</Link></li>
                <li className="page-item"><Link to={""} className="page-link">3</Link></li>
                <li className="page-item"><Link to={""} className="page-link">...</Link></li>
                <li className="page-item"><Link to={""} className="page-link">8</Link></li>
              </ul>
            </nav>
            <button type="button" className='d-flex align-items-center'><GrLinkNext /></button>
          </div>

          <div className='d-none d-lg-flex align-items-center justify-content-between border-top pt-3 mt-4'>
            <button type="button" className='d-flex align-items-center'><GrLinkPrevious /> Previous</button>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><Link to={""} className="page-link active">1</Link></li>
                <li className="page-item"><Link to={""} className="page-link">2</Link></li>
                <li className="page-item"><Link to={""} className="page-link">3</Link></li>
                <li className="page-item"><Link to={""} className="page-link">...</Link></li>
                <li className="page-item"><Link to={""} className="page-link">8</Link></li>
                <li className="page-item"><Link to={""} className="page-link">9</Link></li>
                <li className="page-item"><Link to={""} className="page-link">10</Link></li>
              </ul>
            </nav>
            <button type="button" className='d-flex align-items-center'>Next <GrLinkNext /></button>
          </div>

        </div>
      </section>

    </InnerLayout>
  )
}

export default Blogs