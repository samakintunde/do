import firebase from "firebase"; // Initialize Firebase
const config = {
  apiKey: "AIzaSyDLFLOLmelh1FJszCRctcaeBIDNhpIsfzE",
  authDomain: "do-app-d0c84.firebaseapp.com",
  databaseURL: "https://do-app-d0c84.firebaseio.com",
  projectId: "do-app-d0c84",
  storageBucket: "do-app-d0c84.appspot.com",
  messagingSenderId: "509385137991"
};

const fire = firebase.initializeApp(config);
const db = fire.firestore();

export default db;
