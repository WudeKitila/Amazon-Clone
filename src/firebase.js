
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFYt3HK11ymyLme0x1oZSaal6Sw6vAdts",
  authDomain: "clone-e1320.firebaseapp.com",
  projectId: "clone-e1320",
  storageBucket: "clone-e1320.appspot.com",
  messagingSenderId: "97041977204",
  appId: "1:97041977204:web:51f080801af1ab7a86a621",
  measurementId: "G-7NMKTE9Q8E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };

