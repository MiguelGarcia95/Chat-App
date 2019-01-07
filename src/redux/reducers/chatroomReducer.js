import * as actionTypes from '../actions/types';

const initialState = {
  currentChatroom: null,
  currentChatroomId: null,
  chatroomError: null,
  redirect: false,
  redirectToHome: false,
  redirectToChat: false,
  chatroomExists: false,
  chatrooms: []
}

const chatroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHATROOM_CREATED:
      return {
        ...state,
        currentChatroomID: action.payload.currentChatroomID,
        chatroomError: action.payload.chatroomError,
        redirectToChat: action.payload.redirectToChat
      }
    case actionTypes.CHATROOM_CREATED_ERROR:
      return {
        ...state,
        currentChatroomID: action.payload.currentChatroomID,
        chatroomError: action.payload.chatroomError,
        redirectToChat: action.payload.redirectToChat
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
    case actionTypes.REDIRECT_TO_CHAT:
      return {
        ...state,
        redirectToChat: action.payload.redirectToChat
      }
    case actionTypes.REDIRECT_TO_HOME:
      return {
        ...state,
        redirectToHome: action.payload.redirectToHome
      }
    case actionTypes.GET_CHATROOM:
      return {
        ...state,
        currentChatroom: action.payload.currentChatroom,
        chatroomError: action.payload.chatroomError,
        redirectToHome: action.payload.redirectToHome,
        chatroomExists: action.payload.chatroomExists
      }
      case actionTypes.GET_CHATROOM_ERROR:
        return {
          ...state,
          currentChatroom: action.payload.currentChatroom,
          chatroomError: action.payload.chatroomError,
          chatroomExists: action.payload.chatroomExists,
          redirectToHome: action.payload.redirectToHome
        }
    default:
      return state;
  }
}

export default chatroomReducer;
