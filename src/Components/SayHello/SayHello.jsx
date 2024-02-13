import "./SayHello.css"
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'

const SayHello = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-8">
          <div className='sayhello_box_left'>
            <h3 className='sayhello_mini_title'>Got a project in mind?</h3>
            <h1 className='sayhello_title'>Say Hello,<Link to={""} className='sayhello_email'>sayhello@xemiron.com</Link></h1>
          </div>
        </div>
        <div className="col-lg-4">
          <div className='sayhello_box_right'>
            <h3 className='sayhello_right_mini_title'>Innovative Product <MdArrowOutward /></h3>
            <h1 className="sayhello_right_title">Get Some Idea</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default SayHello