import { Helmet } from 'react-helmet'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import { FaCheck } from "react-icons/fa6";
import "./Pricing.css"
import "./Pricing.responsive.css"
import { Link } from 'react-router-dom';
import InnerLayout from '../../Layout/InnerLayout';

const Pricing = () => {
  return (
    <InnerLayout title="Pricing">

      <section className='pricing_breadcrum d-none d-lg-flex'>
        <div className="container">
          <Breadcrumb page1={"Home"} page2={"Pricing"} />
        </div>
      </section>

      <section className='price_plan'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className='text-center pb-md-5'>
                <h1 className='price_title'>Pricing plan</h1>
                <p className='price_paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className='card price_card_box mb-4 mb-lg-0'>
                    <div className="card-body d-flex justify-content-between flex-column">
                      <div>
                        <h6 className='price_card_title'>Hourly</h6>
                        <h1 className='price_card_rate'>$29<span className='price_card_time'>/hr</span></h1>
                        <div className='pt-3'>
                          <span className="price_feture"><FaCheck className='price_feture_icon' />Feature text goes here</span>
                          <span className="price_feture"><FaCheck className='price_feture_icon' />Feature text goes here</span>
                          <span className="price_feture"><FaCheck className='price_feture_icon' />Feature text goes here</span>
                        </div>
                      </div>
                      <Link to={""} className='price_btn'>Get Started</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className='card price_card_box'>
                    <div className="card-body d-flex justify-content-between flex-column">
                      <div>
                        <h6 className='price_card_title'>Hourly</h6>
                        <h1 className='price_card_rate'>$899<span className='price_card_time'>/</span><span className='price_per_project'>Per Project</span></h1>
                        <div className='pt-3'>
                          <span className="price_feture"><FaCheck className='price_feture_icon' />Feature text goes here</span>
                          <span className="price_feture"><FaCheck className='price_feture_icon' />Feature text goes here</span>
                          <span className="price_feture"><FaCheck className='price_feture_icon' />Feature text goes here</span>
                          <span className="price_feture"><FaCheck className='price_feture_icon' />Feature text goes here</span>
                          <span className="price_feture"><FaCheck className='price_feture_icon' />Feature text goes here</span>
                        </div>
                      </div>
                      <Link to={""} className='price_btn'>Get Started</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </InnerLayout>
  )
}

export default Pricing