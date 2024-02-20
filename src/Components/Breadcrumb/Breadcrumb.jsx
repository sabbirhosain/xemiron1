import { Link } from "react-router-dom"
import "./Breadcrumb.css"

const Breadcrumb = ({page1,page2}) => {
  return (
    <>
      <nav className='breadcrumb_box'>
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item"><Link to={"/"}>{page1}</Link></li>
          <li class="breadcrumb-item">{page2}</li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb