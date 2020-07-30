import React from 'react'

import { Items } from './components'
import { AboutUsContainer } from './aboutUs.style'
import { Header } from '../Header'

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='jumbotron'>
              <h1 className='display-4'>ABOUT TATE</h1>
              <hr className='my-4' />
              <p className='lead'>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='w-100 d-flex align-items-center justify-content-center'>
              <h5>WHO WE ARE</h5>
            </div>
            <Items />
          </div>
        </div>
      </div>
    </AboutUsContainer>
  )
}

export default AboutUs
