import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import firebase from 'firebase';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';

import fbConfig from './firebase';

const initialState = {}

const middleware = [thunk.withExtraArgument({getFirebase, getFirestore})];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    reduxFirestore(fbConfig),
    reactReduxFirebase(firebase),
    composeWithDevTools()
  )
);

export default store;
