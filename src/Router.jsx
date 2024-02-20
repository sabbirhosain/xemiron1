import Layout from "./Layout/Layout.jsx"
import { About, BlogDetails, Blogs, Contact, Frequently, Home, NotFound, Pricing, Service } from "./Pages/Pages.jsx"
import { createBrowserRouter } from "react-router-dom"

const Router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "service",
      element: <Service />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "blogs",
      element: <Blogs />,
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
    {
      path: "frequently",
      element: <Frequently />,
    },
    {
      path: "blog-details/:id",
      element: <BlogDetails />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]
}])

export default Router