import * as actionTypes from '../actions/types';


const initialState =  {
  authError: null,
  currentUser: null,
  isLoading: true
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        authError: action.payload,
        isLoading: false
      }
    case actionTypes.SIGNUP_ERROR:
      return {
        ...state,
        authError: action.payload,
        isLoading: false
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authError: action.payload,
        isLoading: false
      }
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        authError: action.payload,
        isLoading: false
      }
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        currentUser: action.payload.currentUser
      }
    case actionTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        isLoading: action.payload.isLoading
      }
    case actionTypes.UNSET_USER:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        currentUser: action.payload.currentUser
      }
    default:
      return state
  }
}

export default authReducer;
