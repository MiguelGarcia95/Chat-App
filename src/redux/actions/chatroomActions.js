import * as actionTypes from '../actions/types';

export const createChatroom = (newChatroom) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore.add('chatrooms', {
      avatar: newChatroom.avatar,
      name: newChatroom.chatroomName,
      user: firebase.firestore().doc(`users/${newChatroom.user.uid}`)
    }).then(docRef => {
      // newChatroom ID
      dispatch({
        type: actionTypes.CHATROOM_CREATED,
        payload: {
          currentChatroomID: docRef._key.path.segments[1],
          chatroomError: null
        }
      })
    }).catch((err) => {
      dispatch({
        type: actionTypes.CHATROOM_CREATED_ERROR,
        payload: {
          currentChatroomID: null,
          chatroomError: err.message
        }
      })
    })

  }
}
