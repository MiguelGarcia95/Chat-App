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
        authError: action.payload
      }
      break;
    default:
      return state
  }
}

export default authReducer;
