import { Link } from "react-router-dom"
import "./Breadcrumb.css"

const Breadcrumb = () => {
  return (
    <>
      <nav className='breadcrumb_box'>
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item"><Link to={"/"}>Home</Link></li>
          <li class="breadcrumb-item">Library</li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb