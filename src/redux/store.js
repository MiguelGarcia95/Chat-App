import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';

import firebaseConfig from './firebase';

const initialState = {}

const middleware = [thunk.withExtraArgument({getFirebase, getFirestore})];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    composeWithDevTools()
  )
);

export default store;
