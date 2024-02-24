import { Helmet } from "react-helmet"
import Footer from "../Components/Footer/Footer"
import HomeNavbar from "../Components/Header/HomeNavbar"


const HomeLayout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <header>
        <HomeNavbar />
      </header>

      <main>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default HomeLayout