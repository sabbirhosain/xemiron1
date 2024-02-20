import { Link } from "react-router-dom"
import "./BreadcrumbBG.css"

const BreadcrumbBG = ({ page1, page2 }) => {
  return (
    <>
      <nav className='breadcrumb_box'>
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item breadcrumb_bg_item"><Link to={"/"} className="text-white">{page1}</Link></li>
          <li class="breadcrumb-item breadcrumb_bg_item text-white">{page2}</li>
        </ol>
      </nav>
    </>
  )
}

export default BreadcrumbBG