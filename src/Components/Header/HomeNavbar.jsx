import { Link, NavLink } from "react-router-dom"
import { FaRegClock } from "react-icons/fa";
import logo from "../../assets/header/logo.png"
import logo1 from "../../assets/header/logo1.png"
import Dropdown from "./Dropdown";
import "./HomeNavbar.css"
import { useEffect, useState } from "react";

const HomeNavbar = () => {

  const [isSticky, setSticky] = useState(false);
  const [navBg, setNavBg] = useState(false)

  // navbar sticky
  useEffect(() => {
    const handelScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 50)
    };

    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll)
    }
  }, []);

  // page scroll top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth', })
  };

  // home navbar transprant background
  const navbarBG = () => {
    setNavBg(!navBg)
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg home_navbar ${isSticky ? "home_navbar_sticky" : ""} ${navBg ? "home_navbar_sticky" : ""}`}>
        <div className="container">
          <Link to={"/"} onClick={scrollToTop} className="navbar-brand">
            <img src={logo} className="img-fluid" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" onClick={navbarBG}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/home"} onClick={scrollToTop} className="nav-link nav_link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/pricing"} onClick={scrollToTop} className="nav-link nav_link">Pricing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/service"} onClick={scrollToTop} className="nav-link nav_link">Service</NavLink>
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
                <NavLink to={"/contact"} onClick={scrollToTop} className="nav-link nav_link">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about"} onClick={scrollToTop} className="nav-link nav_link">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/blogs"} onClick={scrollToTop} className="nav-link nav_link">Blog</NavLink>
              </li>
            </ul>
            <div>
              <Link to={"/schedule"} onClick={scrollToTop} className="nav_btn ms-lg-3"><FaRegClock />&emsp;Schedule Meeting</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HomeNavbar