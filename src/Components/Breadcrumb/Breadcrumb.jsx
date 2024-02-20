import { Link } from "react-router-dom"
import "./Breadcrumb.css"

const Breadcrumb = ({ page1, page2 }) => {
  return (
    <>
      <nav className='breadcrumb_box'>
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item"><Link to={"/"} className="breadcrumb_item_link">{page1}</Link></li>
          <li class="breadcrumb-item"><Link to={"/service"} className="breadcrumb_item_link">{page2}</Link></li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb