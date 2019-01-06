import * as actionTypes from '../actions/types';

const initialState = {
  currentChatroom: null,
  currentChatroomId: null,
  chatroomError: null,
  redirect: false,
  chatrooms: []
}

const chatroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHATROOM_CREATED:
      return {
        ...state,
        currentChatroomId: action.payload.currentChatroomID,
        chatroomError: action.payload.chatroomError,
        redirect: action.payload.redirect
      }
    case actionTypes.CHATROOM_CREATED_ERROR:
      return {
        ...state,
        currentChatroomId: action.payload.currentChatroomID,
        chatroomError: action.payload.chatroomError,
        redirect: action.payload.redirect
      }
    case actionTypes.GET_CHATROOMS:
      return {
        ...state,
        chatroomError: action.payload.chatroomError,
        chatrooms: action.payload.chatrooms
      }
    case actionTypes.GET_CHATROOMS_ERROR:
      return {
        ...state,
        chatroomError: action.payload.chatroomError,
        chatrooms: action.payload.chatrooms
      }
    default:
      return state;
  }
}

export default chatroomReducer;
