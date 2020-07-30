import React from 'react'
import { connect } from 'react-redux'

import { ContactUsContainer } from './contactUs.style'
import { ContactForm } from './components'
import { Header } from '../Header'

const ContactUs = ({ contacts, latest }) => {
  return (
    <ContactUsContainer>
      <Header/>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <ContactForm />
          </div>
          <div className='col-md-6'>
            {contacts.length > 0 && (
              <div className='jumbotron jumbotron-fluid'>
                <div className='container'>
                  <h3>
                    Total Submitted New ContactUs Form : {contacts.length}
                  </h3>
                  <p className='lead'>PLease Check You ContactUs Detail</p>
                  <ul className='pl-4'>
                    <li className='pb-2'>
                      Name : {latest && latest.name ? latest.name : ''}
                    </li>
                    <li className='pb-2'>
                      Email Address :{' '}
                      {latest && latest.email ? latest.email : ''}
                    </li>
                    <li className='pb-2'>
                      Phone Number :{' '}
                      {latest && latest.phoneNumber ? latest.phoneNumber : ''}
                    </li>
                    <li className='pb-2'>
                      Comment : {latest && latest.comment ? latest.comment : ''}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ContactUsContainer>
  )
}

const mapStateToProps = state => {
  return {
    contacts: state.appStateReducer.contactUs,
    latest: state.appStateReducer.latest
  }
}

export default connect(mapStateToProps)(ContactUs)
