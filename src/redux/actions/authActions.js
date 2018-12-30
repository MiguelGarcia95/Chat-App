import * as actionTypes from '../actions/types';

export const signUp = (newUser) => {
  return(dispatch, state, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    console.log('firebase: ', firebase);
    console.log('firestore: ', firestore);
  }
}
