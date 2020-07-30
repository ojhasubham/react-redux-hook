import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useToasts } from 'react-toast-notifications'

import actions from '../../../redux/appState/action'

const ContactForm = ({ saveContactUs }) => {
  const { addToast } = useToasts()

  const addContactData = (values, resetForm) => {
    saveContactUs(values)
    resetForm({})
    addToast('Save ContactUs Data SuccessFully!', {
      appearance: 'success',
      autoDismiss: true
    })
  }

  return (
    <div className='p-3'>
      <h5 className='pb-2'>Contact Us Form</h5>
      <Formik
        initialValues={{ name: '', email: '', phoneNumber: '', comment: '' }}
        onSubmit={(values, { resetForm }) => {
          console.log(values)
          addContactData(values, resetForm)
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .max(20, 'Must be 15 characters or less')
            .required('Name is Required'),
          email: Yup.string()
            .email()
            .required('Email Address is Required'),
          phoneNumber: Yup.string()
            .min(10, 'Phone Number must at least 10 numbers')
            .max(10, 'Phone Number must at least 10 numbers')
            .required('Phone Number is Required')
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props
          return (
            <form onSubmit={handleSubmit} className='mb-3'>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  value={values.name}
                  placeholder='Enter Name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <div className='input-feedback'>{errors.name}</div>
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  className='form-control'
                  id='email'
                  name='email'
                  value={values.email}
                  placeholder='Enter Email Address'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <div className='input-feedback'>{errors.email}</div>
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='phone_number'>Phone Number</label>
                <input
                  type='number'
                  className='form-control'
                  id='phone_number'
                  name='phoneNumber'
                  value={values.phoneNumber}
                  placeholder='Enter Phone Number'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <div className='input-feedback'>{errors.phoneNumber}</div>
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='comment'>Comment</label>
                <textarea
                  className='form-control'
                  id='comment'
                  name='comment'
                  value={values.comment}
                  placeholder='Enter Comment...'
                  rows='3'
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
              </div>
              <button
                type='button'
                className='btn btn-secondary mr-1'
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type='submit' className='btn btn-primary ml-1'>
                Submit
              </button>
            </form>
          )
        }}
      </Formik>
      <h5></h5>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    contacts: state.appStateReducer.contactUs
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      saveContactUs: actions.addNewContactUs
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
