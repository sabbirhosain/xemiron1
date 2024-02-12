import Layout from "./Layout/Layout.jsx"
import { About, Contact, Home, NotFound, Service } from "./Pages/Pages.jsx"
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
      path: "*",
      element: <NotFound />,
    },
  ]
}])

export default Router