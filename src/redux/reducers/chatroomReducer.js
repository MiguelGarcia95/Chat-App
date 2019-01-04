import * as actionTypes from '../actions/types';

const initialState = {
  currentChatroom: null,
  currentChatroomRef: null,
  chatroomError: null,
  isLoading: false,
  chatrooms: null
}

const chatroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHATROOM_CREATED:
      return {
        ...state,
        currentChatroomRef: action.payload.currentChatroomRef,
        chatroomError: action.payload.chatroomError
      }
    case actionTypes.CHATROOM_CREATED_ERROR:
      return {
        ...state,
        currentChatroomRef: action.payload.currentChatroomRef,
        chatroomError: action.payload.chatroomError
      }
    default:
      return state;
  }
}

export default chatroomReducer;
