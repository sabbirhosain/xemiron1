import { Link } from 'react-router-dom'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import Faq from '../../Components/Faq/Faq'
import { GoQuestion } from "react-icons/go";
import "./Frequently.css"
import InnerLayout from '../../Layout/InnerLayout'

const Frequently = () => {
  return (
    <InnerLayout title={"Frequently"}>
      <section className='frequently_breadcrum'>
        <div className="container">
          <Breadcrumb page1={"Home"} page2={"Frequently"} />
        </div>
      </section>

      <section className='frequently_section'>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <h1 className="frequently_title">Frequently</h1>
                <p className='frequently_pragraph'>We have compiled a list of frequently asked questions to help you quickly find the information you need.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <Faq />
            </div>
          </div>
        </div>
      </section>

      <section className='frequently_contact_from'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className='text-center'>
                <h1 className='frequently_contact_title'>Couldn't find the answer you were looking for</h1>
                <p className='frequently_contact_paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, obcaecati?</p>
              </div>

              <div>
                <form action="" method="post">
                  <div className="mb-3 position-relative">
                    <label for="yourName" className="form-label">Name</label>
                    <input type="email" className="form-control position-relative" id="yourName" placeholder="Sabbir Hosain" />
                    <GoQuestion className='frequently_qurstion_icon' />
                  </div>
                  <div className="mb-3 position-relative">
                    <label for="emailAddress" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailAddress" placeholder="name@example.com" />
                    <GoQuestion className='frequently_qurstion_icon' />
                  </div>
                  <div className="mb-4">
                    <label for="text_area" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="text_area" placeholder="A little about the company and the team that you ll be working with." rows="5"></textarea>
                  </div>
                  <div className='form-check mb-4 d-flex justify-content-center'>
                    <input type="checkbox" className='form-check-input' id="chack_box" />
                    <label className='form-check-label' for="chack_box">I accept the <Link to={""} className='text-decoration-underline'>Terms</Link></label>
                  </div>
                  <div className='text-center'>
                    <button type="button" className="frequently_submit_btn">Submit Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  )
}

export default Frequently