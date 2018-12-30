import * as actionTypes from '../actions/types';

export const signUp = (newUser) => {
  return async (dispatch, getState, {getFirebase, getFirestore}) => {
    // Firebase for auth user, firestore for user info
    const firebase = getFirebase();
    const firestore = getFirestore();

    const createdUser = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
    console.log(createdUser)

  }
}
