import * as actionTypes from '../actions/types';


const initialState =  {
  authError: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCCESS:
    console.log('User Created!');
      return {
        ...state,
        authError: null
      }
    case actionTypes.SIGNUP_ERROR:
    console.log('User Could Not BE Created!');
      return {
        ...state,
        authError: action.payload
      }
    default:
      return state
  }
}

export default authReducer;
