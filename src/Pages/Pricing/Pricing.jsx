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

      <section className='price_plan'>
        <div className="container">
          <div className="row">
            <div className="col-lg-11">
              <h1>Pricing plan</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing