import * as actionTypes from '../actions/types';

export const createChatroom = (newChatroom) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    console.log('This triggered chat creation page');
  }
}
