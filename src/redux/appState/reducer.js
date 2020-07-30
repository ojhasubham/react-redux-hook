import { ADD_CONTACT_US_DATA } from './action'

export const initialState = {
  contactUs: [],
  latest: null
}

const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT_US_DATA:
      return {
        ...state,
        contactUs: [
          ...state.contactUs,
          {
            id: Math.random()
              .toString(36)
              .substr(2, 9),
            ...action.data
          }
        ],
        latest: action.data
      }
    default:
      return state
  }
}

export default appStateReducer
