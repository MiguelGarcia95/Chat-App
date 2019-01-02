import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import authReducer from './authReducer';
import chatroomReducer from './chatroomReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  chatroom: chatroomReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
