import * as actionTypes from '../actions/types';
import md5 from 'md5';

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // Firebase for auth user, firestore for user info
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(createdUser => {
        return firestore.add('users', {
          username: newUser.username,
          avatar: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
        })
      }).then(() => {
        dispatch({type: actionTypes.SIGNUP_SUCCESS, payload: null});
      }).catch(err => {
        dispatch({type: actionTypes.SIGNUP_ERROR, payload: err.message});
      });
  }
}

export const login = (userData) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
      .then(() => {
        dispatch({type: actionTypes.LOGIN_SUCCESS, payload: null});
      }).catch(err => {
        dispatch({type: actionTypes.LOGIN_ERROR, payload: err.message});
      });
  }
}

export const setUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_USER,
      payload: {
        currentUser: user
      }
    })
  }
}
