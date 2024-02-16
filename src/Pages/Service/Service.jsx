import { Helmet } from 'react-helmet'
import "./Service.css"
import ServiceCard from '../../Components/Service/ServiceCard'
import { project, serviceProvide } from '../../Data/Data'
import ProjectCard from '../../Components/Project/ProjectCard'

const Service = () => {
  return (
    <>
      <Helmet title="Service" />
      <h1>Service Page</h1>


      <section className='service_provide'>
        <div className="container">
          <div className="row align-items-center">
            {
              serviceProvide.map((item, index) => (
                <div className="col-lg-4" key={index}><ServiceCard serviceProviceList={item} /></div>
              ))
            }
          </div>
        </div>
      </section>

      <section className='project'>
        <div className="container">
          <div className="row">
            {
              project.map((item, index) => (
                <div className="col-md-6" key={index}><ProjectCard projectList={item} /></div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Service