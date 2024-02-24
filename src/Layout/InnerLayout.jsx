import { Helmet } from 'react-helmet'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

const InnerLayout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <header>
        <Header />
      </header>

      <main style={{ paddingTop: "75px" }}>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default InnerLayout