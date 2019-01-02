import * as actionTypes from '../actions/types';

const initialState = {
  currentChatroom: null,
  chatroomError: null,
  isLoading: false,
  chatrooms: null
}

const chatroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHATROOM_CREATED:
      return state
    default:
      return state;
  }
}

export default chatroomReducer;
