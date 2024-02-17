import { Link } from 'react-router-dom'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import Faq from '../../Components/Faq/Faq'
import "./Frequently.css"

const Frequently = () => {
  return (
    <>
      <section className='breadcrum_section'>
        <div className="container">
          <Breadcrumb />
        </div>
      </section>

      <section className='frequently_section'>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <h1>Frequently</h1>
                <p>We have compiled a list of frequently asked questions to help you quickly find the information you need.</p>
                <Link to={"/"} className='contact_us_btn'>Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Faq />
            </div>
          </div>
        </div>
      </section>

      <section className='contact_from'>
        <div className="container">
          <div>
            <h1>Couldn't find the answer you were looking for</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, obcaecati?</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Frequently