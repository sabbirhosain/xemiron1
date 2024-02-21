import VBlogsCard from '../../Components/Blogs/Vertical/VBlogsCard'
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import BlogsCarousel from '../../Components/Blogs/BlogsCarousel/BlogsCarousel';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import { Helmet } from "react-helmet";
import "./Blogs.css"


const Blogs = () => {
  return (
    <>
      <Helmet title="Blogs" />

      <section className='breadcrumb_section'>
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
          <nav className='d-flex align-items-center justify-content-between'>
            <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
              <button className="nav-link filter_tab_link active border-0" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</button>
              <button className="nav-link filter_tab_link border-0" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Web Devopment</button>
              <button className="nav-link filter_tab_link border-0" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Web Devopment</button>
              <button className="nav-link filter_tab_link border-0" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Python Learning</button>
            </div>

            <div>
              <select class="form-select blogs_filter_select">
                <option selected>More Topic</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </nav>
          <div className="tab-content mt-5" id="nav-tabContent">
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

          <div className='d-flex align-items-center justify-content-between border-top pt-3 mt-4'>
            <button type="button" className='d-flex align-items-center'><GrLinkPrevious /> Previous</button>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item"><a class="page-link" aria-current="page" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">...</a></li>
                <li class="page-item"><a class="page-link" href="#">8</a></li>
                <li class="page-item"><a class="page-link" href="#">9</a></li>
                <li class="page-item"><a class="page-link" href="#">10</a></li>
              </ul>
            </nav>
            <button type="button" className='d-flex align-items-center'>Next <GrLinkNext /></button>
          </div>

        </div>
      </section>

    </>
  )
}

export default Blogs