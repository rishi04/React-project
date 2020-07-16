import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB0KqVlU-f215lezR-CrrSIha2kvn3WQ-U",
  authDomain: "crwn-db-3dc0b.firebaseapp.com",
  databaseURL: "https://crwn-db-3dc0b.firebaseio.com",
  projectId: "crwn-db-3dc0b",
  storageBucket: "crwn-db-3dc0b.appspot.com",
  messagingSenderId: "1057397277043",
  appId: "1:1057397277043:web:2040af0b52106506b78506",
  measurementId: "G-XRK9BTJCW5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
