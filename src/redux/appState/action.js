const ADD_CONTACT_US_DATA = 'ADD_CONTACT_US_DATA'

function addNewContactUs (data) {
  return {
    type: ADD_CONTACT_US_DATA,
    data
  }
}

export { ADD_CONTACT_US_DATA }

export default {
  addNewContactUs
}
