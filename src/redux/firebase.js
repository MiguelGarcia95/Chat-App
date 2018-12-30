import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import {FIREBASE_API_KEY, STORAGE_BUCKET_LINK} from '../apiKeys';

var config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "orbit-chat-d5c8e.firebaseapp.com",
  databaseURL: "https://orbit-chat-d5c8e.firebaseio.com",
  projectId: "orbit-chat-d5c8e",
  storageBucket: STORAGE_BUCKET_LINK,
  messagingSenderId: "851177566958"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default config;
