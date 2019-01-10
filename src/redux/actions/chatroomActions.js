import * as actionTypes from '../actions/types';

export const createChatroom = (newChatroom) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore.add('chatrooms', {
      avatar: newChatroom.avatar,
      name: newChatroom.chatroomName,
      creatorId: newChatroom.user.uid 
    }).then(docRef => {
      dispatch({
        type: actionTypes.CHATROOM_CREATED,
        payload: {
          currentChatroomID: docRef._key.path.segments[1],
          chatroomError: null,
          redirectToChat: true
        }
      })
    }).catch((err) => {
      dispatch({
        type: actionTypes.CHATROOM_CREATED_ERROR,
        payload: {
          currentChatroomID: null,
          chatroomError: err.message,
          redirectToChat: false
        }
      })
    })

  }
}

export const createChatroomCategory = (category) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore.add(`chatrooms/${category.chatroomID}/categories`, {
      chatroomID: category.chatroomID,
      categoryName: category.categoryName
    }).then(doc => {
      const categoryID = doc._key.path.segments[3];
      firestore.add(`chatrooms/${category.chatroomID}/categories/${categoryID}/channels`, {
        channelName: category.channelName,
        channelDescription: category.channelDescription,
        chatroomId: category.chatroomID,
        categoryName: category.categoryName,
        categoryId: categoryID
      }).then(channel => {
        dispatch({
          type: actionTypes.CREATE_CHATROOM_CATEGORY,
          payload: {
            categoyId: categoryID,
            chatroomError: null
          }
        })
      }).catch(err => {
        dispatch({
          type: actionTypes.CREATE_CHATROOM_CATEGORY_ERROR,
          payload: {
            categoyId: null,
            chatroomError: err.message
          }
        })
      })
    }).catch(err => {
      dispatch({
        type: actionTypes.CREATE_CHATROOM_CATEGORY_ERROR,
        payload: {
          categoyId: null,
          chatroomError: err.message
        }
      })
    })

  }
}

export const createCategoryChannel = (channel) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // CREATE_CATEGORY_CHANNEL
  }
}

// Get categories 

export const getChatroomCategories = (chatroomId) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // GET_CHATROOM_CATEGORIES
    const firestore = getFirestore();

    firestore.collection(`chatrooms/${chatroomId}/categories`).get().then(categories => {
      let allCategories = [];
      let allChannels = [];
      categories.forEach(doc => {
        allCategories.push({id: doc.id, category: doc.data()})
      });
      allCategories.forEach(category => {
        firestore.collection(`chatrooms/${chatroomId}/categories/${category.id}/channels`).get().then(channels => {
          category.category.channels = [];
          channels.forEach(channel => {
            allChannels.push({id: channel.id, channelData: channel.data()})
          })
        }).catch(err => {
          dispatch({
            type: actionTypes.GET_CHATROOM_CATEGORIES_ERROR,
            payload: {
              chatroomError: err.message,
              chatroomCategories: [],
              chatroomChannels: []
            }
          })
        })
      })
      dispatch({
        type: actionTypes.GET_CHATROOM_CATEGORIES,
        payload: {
          chatroomError: null,
          chatroomCategories: allCategories,
          chatroomChannels: allChannels
        }
      })
    }).catch(err => {
      dispatch({
        type: actionTypes.GET_CHATROOM_CATEGORIES_ERROR,
        payload: {
          chatroomError: err.message,
          chatroomCategories: [],
          chatroomChannels: []
        }
      })
    })
  }
}

// Get Chatroom actions 

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
        }
      })
    }).catch((err) => {
      dispatch({
        type: actionTypes.GET_CHATROOMS_ERROR,
        payload: {
          chatroomError: err.message,
          chatrooms: [],
        }
      })
    })
  }
}

export const getChatroom = (chatroomID) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const chatRef = firestore.collection(`chatrooms`).doc(chatroomID);
    chatRef.get().then(doc => {
      if (doc.exists) {
        const chatroom = {id: doc.id, chatroom: doc.data()};
        dispatch({
          type: actionTypes.GET_CHATROOM,
          payload: {
            currentChatroom: chatroom,
            chatroomExists: true,
            chatroomError: null,
            redirectToHome: false
          }
        })
      } else {
        dispatch({
          type: actionTypes.GET_CHATROOM_ERROR,
          payload: {
            currentChatroom: null,
            chatroomExists: false,
            chatroomError: 'Chatroom does not exist',
            redirectToHome: true
          }
        })
      }
    }).catch(err => {
      dispatch({
        type: actionTypes.GET_CHATROOM_ERROR,
        payload: {
          currentChatroom: null,
          chatroomExists: false,
          chatroomError: err.message,
          redirectToHome: true
        }
      })
    })
  }
}

// Features

export const joinChatroom = (user, chatroom) => {
  //get user, and chatroom data, and get permission to join chatroom
}

export const chatClicked = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.NEW_CHAT_CLICKED
    })
  }
}

export const redirectToChat = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.REDIRECT_TO_CHAT,
      payload: {
        redirectToChat: false
      }
    })
  }
}

export const redirectToHome = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.REDIRECT_TO_HOME,
      payload: {
        redirectToHome: false
      }
    })
  }
}
