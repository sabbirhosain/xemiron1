import { Helmet } from 'react-helmet'
import "./Contact.css"
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'

const Contact = () => {
  return (
    <>
      <Helmet title="Contact" />

      <section className='breadcrumb_section'>
        <div className="container">
          <Breadcrumb page1={"Home"} page2={"Contact"} />
        </div>
      </section>
    </>
  )
}

export default Contact