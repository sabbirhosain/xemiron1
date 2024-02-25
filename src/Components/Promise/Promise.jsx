import { Link } from 'react-router-dom'
import "./Promise.css"

const Promise = () => {
  return (
    <>
      <div className="promise_bg_img">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className='promise_title'>We dont just promise, we do it!</h1>
              <p className='promise_paragaraph'>We believe in building long term business relationships. As your business grows, and we continue to support you, our business also flourishes. Entrust our team with your ideas, and we will implement them in a professional manner, allowing you to rest peacefully.</p>
              <div className='text-center'>
                <Link to={""} className='promise_btn'>Get Start Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Promise