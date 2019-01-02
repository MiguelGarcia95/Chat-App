import * as actionTypes from '../actions/types';


const initialState =  {
  authError: null,
  currentUser: null,
  isLoading: true
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCCESS:
      console.log('User Created!');
      return {
        ...state,
        authError: action.payload,
        isLoading: false
      }
    case actionTypes.SIGNUP_ERROR:
      console.log('User Could Not BE Created!');
      return {
        ...state,
        authError: action.payload,
        isLoading: false
      }
    case actionTypes.LOGIN_SUCCESS:
      console.log('User logged in!');
      return {
        ...state,
        authError: action.payload,
        isLoading: false
      }
    case actionTypes.LOGIN_ERROR:
      console.log('User could not log in!');
      return {
        ...state,
        authError: action.payload,
        isLoading: false
      }
    case actionTypes.LOGOUT_SUCCESS:
      console.log('User was logged out!');
      return {
        ...state,
        isLoading: false
      }
    case actionTypes.SET_USER:
      console.log('User set!');
      return {
        ...state,
        currentUser: action.payload.currentUser,
        isLoading: action.payload.isLoading
      }
    case actionTypes.UNSET_USER:
      console.log('User unset!');
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    default:
      return state
  }
}

export default authReducer;
