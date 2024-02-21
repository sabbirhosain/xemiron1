import { Link } from "react-router-dom"
import "./Breadcrumb.css"
import { MdArrowForwardIos } from "react-icons/md"

const Breadcrumb = ({ page1, page2, color }) => {
  return (
    <>
      <ul className="breadcrumb_list">
        <li className="breadcrumb_items"><Link to={"#"} className={`breadcrumb_link ${color}`}>{page1}</Link></li>
        <li className="breadcrumb_items"><MdArrowForwardIos className="breadcrumb_arrow" /></li>
        <li className="breadcrumb_items"><Link to={"#"} className={`breadcrumb_link ${color}`}>{page2}</Link></li>
      </ul>
    </>
  )
}

export default Breadcrumb