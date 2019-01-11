import * as actionTypes from '../actions/types';

const initialState = {
  currentChatroom: null,
  currentChatroomId: null,
  chatroomError: null,
  categoryId: null,
  redirectToHome: false,
  redirectToChat: false,
  chatroomExists: false,
  chatroomCategories: [],
  chatrooms: [],
  chatroomChannels: {},
  chatroomChannels: [],
  newChatClicked: false
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
    case actionTypes.CREATE_CHATROOM_CATEGORY:
      return {
        ...state
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
    case actionTypes.GET_CHATROOM_CATEGORIES:
      return {
        ...state,
        chatroomError: action.payload.chatroomError,
        chatroomCategories: action.payload.chatroomCategories
      }
    case actionTypes.GET_CHATROOM_CATEGORIES_ERROR:
      return {
        ...state,
        chatroomError: action.payload.chatroomError,
        chatroomCategories: action.payload.chatroomCategories
      }
    case actionTypes.GET_CATEGORY_CHANNELS:
      return {
        ...state,
        chatroomError: action.payload.chatroomError,
        chatroomChannels: state.chatroomChannels.concat(action.payload.chatroomChannels)
        // chatroomChannels: action.payload.chatroomChannels
      }
    case actionTypes.GET_CATEGORY_CHANNELS_ERROR:
      return {
        ...state,
        chatroomError: action.payload.chatroomError,
        chatroomChannels: action.payload.chatroomChannels
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
    case actionTypes.NEW_CHAT_CLICKED:
      return {
        ...state,
        newChatClicked: !state.newChatClicked
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
