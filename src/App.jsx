import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'react-calendar/dist/Calendar.css';


import { About, BlogDetails, Blogs, Contact, Frequently, Home, NotFound, Pricing, Schedule, Service } from "./Pages/Pages.jsx"

import "./App.css"
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/frequently" element={<Frequently />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App