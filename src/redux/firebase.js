import {FIREBASE_API_KEY} from '../apiKeys';

var config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "orbit-chat-d5c8e.firebaseapp.com",
    databaseURL: "https://orbit-chat-d5c8e.firebaseio.com",
    projectId: "orbit-chat-d5c8e",
    storageBucket: "",
    messagingSenderId: "851177566958"
  };
  firebase.initializeApp(config);
