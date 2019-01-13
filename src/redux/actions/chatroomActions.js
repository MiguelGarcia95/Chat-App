import * as actionTypes from '../actions/types';

export const createChatroom = (newChatroom) => {
  return (dispatch, getState, {getFirestore}) => {
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
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    console.log(category.chatroomID)
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

export const createChannelComment = (chatroomId, categoryId, channelId) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
  }
}

export const createCategoryChannel = (channel) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.add(`chatrooms/${channel.chatroomID}/categories/${channel.categoryId}/channels`, {
      channelName: channel.channelName,
      channelDescription: channel.channelDescription,
      chatroomId: channel.chatroomID,
      categoryId: channel.categoryId
    }).then(channel => {
      const channelId = channel._key.path.segments[5];
      dispatch({
        type: actionTypes.CREATE_CATEGORY_CHANNEL,
        payload: {
          channelId: channelId,
          chatroomError: null
        }
      })
    }).catch(err => {
      dispatch({
        type: actionTypes.CREATE_CATEGORY_CHANNEL,
        payload: {
          channelId: '',
          chatroomError: err.message
        }
      })
    });
  }
}

export const getChannelChat = (chatroomId, categoryId, channelId) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore.collection(`chatrooms/${chatroomId}/categories/${categoryId}/channels/`).doc(channelId).get().then(channel => {
      if (channel.exists) {
        const newChannel = {id: channel.id, channel: channel.data()}
        dispatch({
          type: actionTypes.GET_CHANNEL_CHAT,
          payload: {
            channel: newChannel,
            chatroomError: null
          }
        })
      } else {
        console.log('doesnt exist')
        dispatch({
          type: actionTypes.GET_CHANNEL_CHAT_ERROR,
          payload: {
            channel: null,
            chatroomError: 'Channel Does not exist.'
          }
        })
      }
    }).catch(err => {
      dispatch({
        type: actionTypes.GET_CHANNEL_CHAT_ERROR,
          payload: {
            channel: null,
            chatroomError: err.message
          }
      })
    })
  }
}

// Get categories 

export const getChatroomCategories = (chatroomId) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore.collection(`chatrooms/${chatroomId}/categories`).get().then(categories => {
      let allCategories = [];
      categories.forEach(doc => {
        allCategories.push({id: doc.id, category: doc.data()})
      });
      dispatch({
        type: actionTypes.GET_CHATROOM_CATEGORIES,
        payload: {
          chatroomError: null,
          chatroomCategories: allCategories
        }
      })
    }).catch(err => {
      dispatch({
        type: actionTypes.GET_CHATROOM_CATEGORIES_ERROR,
        payload: {
          chatroomError: err.message,
          chatroomCategories: []
        }
      })
    })
  }
}

export const getCategoryChannels = (chatroomId, categoryId) => {
  return(dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection(`chatrooms/${chatroomId}/categories/${categoryId}/channels`).get().then(channels => {
      let allChannels = [];
      channels.forEach(channel => {
          allChannels.push({id: channel.id, channelData: channel.data()})
      })
      // console.log({id: categoryId, channels: allChannels})
      let channelArray = [];
      channelArray.push({id: categoryId, channels: allChannels});
      dispatch({
        type: actionTypes.GET_CATEGORY_CHANNELS,
        payload: {
          chatroomError: null,
          chatroomChannels: channelArray
        }
      })
    }).catch(err => {
      dispatch({
        type: actionTypes.GET_CATEGORY_CHANNELS_ERROR,
        payload: {
          chatroomError: err.message,
          chatroomChannels: []
        }
      })
    })
  }
}


// Get Chatroom actions 

export const getChatrooms = () => {
  return (dispatch, getState, {getFirestore}) => {
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
  return (dispatch, getState, {getFirestore}) => {
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
