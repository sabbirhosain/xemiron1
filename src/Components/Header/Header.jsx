import { Link, NavLink } from "react-router-dom"
import { FaRegClock } from "react-icons/fa";
import logo from "../../assets/header/logo.png"
import "./Header.css"
import Dropdown from "./Dropdown";

const Header = () => {

  return (
    <>
      <nav className={`navbar navbar-expand-lg inner_navbar_sticky`}>
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <img src={logo} className="img-fluid" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/home"} className="nav-link nav_link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/pricing"} className="nav-link nav_link">Pricing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/service"} className="nav-link nav_link">Service</NavLink>
              </li>
              <li className="nav-item dropdown position-static">
                <NavLink to={"/product"} className="nav-link nav_link dropdown-toggle" data-bs-auto-close="false" data-bs-toggle="dropdown" aria-expanded="false">Product</NavLink>
                <ul className="dropdown-menu dropdown_mega_menu w-100">
                  <div className="d-lg-none">
                    <li><NavLink to={"/"} className="dropdown-item ps-0">Management</NavLink></li>
                    <li><NavLink to={"/"} className="dropdown-item ps-0">Plugins</NavLink></li>
                    <li><NavLink to={"/"} className="dropdown-item ps-0">API</NavLink></li>
                    <li><NavLink to={"/"} className="dropdown-item ps-0">Custome</NavLink></li>
                  </div>
                  <div className="container d-none d-lg-block">
                    <Dropdown />
                  </div>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to={"/contact"} className="nav-link nav_link">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about"} className="nav-link nav_link">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/blogs"} className="nav-link nav_link">Blog</NavLink>
              </li>
            </ul>
            <div>
              <Link to={"/schedule"} className="nav_btn ms-lg-3"><FaRegClock />&emsp;Schedule Meeting</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header