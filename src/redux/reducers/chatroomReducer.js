import * as actionTypes from '../actions/types';

const initialState = {
  currentChatroom: null,
  currentChatroomId: null,
  chatroomError: null,
  isLoading: false,
  chatrooms: null
}

const chatroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHATROOM_CREATED:
      return {
        ...state,
        currentChatroomId: action.payload.currentChatroomId,
        chatroomError: action.payload.chatroomError
      }
    case actionTypes.CHATROOM_CREATED_ERROR:
      return {
        ...state,
        currentChatroomId: action.payload.currentChatroomId,
        chatroomError: action.payload.chatroomError
      }
    default:
      return state;
  }
}

export default chatroomReducer;
