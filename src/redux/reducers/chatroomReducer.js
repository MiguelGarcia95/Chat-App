import * as actionTypes from '../actions/types';

const initialState = {
  currentChatroom: null,
  currentChatroomId: null,
  chatroomError: null,
  categoryId: null,
  channelId: null,
  redirectToHome: false,
  redirectToChat: false,
  chatroomExists: false,
  chatroomCategories: [],
  chatrooms: [],
  chatroomChannels: [],
  newChatClicked: false,
  comments: [],
  channel: null
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
        ...state,
        categoyId: action.payload.categoyId,
        chatroomError: action.payload.chatroomError
      }
    case actionTypes.CREATE_CHATROOM_CATEGORY_ERROR:
      return {
        ...state,
        categoyId: action.payload.categoyId,
        chatroomError: action.payload.chatroomError
      }
    case actionTypes.CREATE_CATEGORY_CHANNEL:
      return {
        ...state,
        channelId: action.payload.channelId,
        chatroomError: action.payload.chatroomError
      }
    case actionTypes.CREATE_CATEGORY_CHANNEL_ERROR:
      return {
        ...state,
        channelId: action.payload.channelId,
        chatroomError: action.payload.chatroomError
      }
    case actionTypes.GET_CHANNEL_CHAT:
      return {
        ...state,
        channel: action.payload.channel,
        chatroomError: action.payload.chatroomError
      }
    case actionTypes.GET_CHANNEL_CHAT_ERROR:
      return {
        ...state,
        channel: action.payload.channel,
        chatroomError: action.payload.chatroomError
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
      //remove any array object if they have the same id
      let channels = state.chatroomChannels.concat(action.payload.chatroomChannels);
      return {
        ...state,
        chatroomError: action.payload.chatroomError,
        chatroomChannels: channels
      }
    case actionTypes.GET_CATEGORY_CHANNELS_ERROR:
      return {
        ...state,
        chatroomError: action.payload.chatroomError,
        chatroomChannels: action.payload.chatroomChannels
      }
    case actionTypes.GET_CHANNEL_COMMENTS:
      return {
        ...state,
        chatroomError: action.payload.chatroomError,
        comments: action.payload.comments
      }
    case actionTypes.GET_CHANNEL_COMMENTS_ERROR:
      return {
        ...state,
        chatroomError: action.payload.chatroomError,
        comments: action.payload.comments
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
