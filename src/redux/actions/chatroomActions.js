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

export const joinChatroom = (user, chatroom) => {
  //get user, and chatroom data, and get permission to join chatroom
}

export const getChatrooms = () => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    //Should get chatrooms user is a part of, not yet implemented
    firestore.collection('chatrooms').get().then(data => {
      let chatrooms = [];
      data.forEach(doc => {
        chatrooms.push({id: doc.id, chatroom: doc.data()})
      })
      dispatch({
        type: actionTypes.GET_CHATROOMS,
        payload: {
          chatrooms: chatrooms,
          chatroomError:  null,
          isLoading: false
        }
      })
    }).catch((err) => {
      dispatch({
        type: actionTypes.GET_CHATROOMS_ERROR,
        payload: {
          chatroomError: err.message,
          chatrooms: [],
          isLoading: false
        }
      })
    })
  }
}

export const getChatroom = (chatroomID) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    console.log(chatroomID);
  }
}
