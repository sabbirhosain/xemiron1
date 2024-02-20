import { Helmet } from "react-helmet"
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb"

const BlogDetails = () => {
  return (
    <>
      <Helmet title="Blog Details" />
      
      <section className='breadcrumb_section'>
        <div className="container">
          <Breadcrumb page1={"Home"} page2={"Blog Details"} />
        </div>
      </section>
    </>
  )
}

export default BlogDetails