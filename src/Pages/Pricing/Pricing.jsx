import React from 'react'
import { Helmet } from 'react-helmet'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'

const Pricing = () => {
  return (
    <>
      <Helmet title="Pricing" />

      <section className='breadcrumb_section'>
        <div className="container">
          <Breadcrumb page1={"Home"} page2={"Pricing"} />
        </div>
      </section>
    </>
  )
}

export default Pricing