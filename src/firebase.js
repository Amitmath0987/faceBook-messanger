import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
//   **********
apiKey: "AIzaSyBazMy7EqcRWgM76byy723upWHBSybrbm0",
  authDomain: "facebook-messenger-clone-9157d.firebaseapp.com",
//   databaseURL:"https://facebook-messenger-clone-9157d.firebaseio.com",
  projectId: "facebook-messenger-clone-9157d",
  storageBucket: "facebook-messenger-clone-9157d.appspot.com",
  messagingSenderId: "717613314880",
  appId: "1:717613314880:web:f0353ca4072022ec6980a5",
  measurementId: "G-K00M8JJ9NC"
});

const db = firebaseApp.firestore();
export default db;