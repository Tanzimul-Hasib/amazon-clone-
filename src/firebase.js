import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxPyrPEAGvo1syxJcCAK9I60U8JfEa9DE",
  authDomain: "hasib-2.firebaseapp.com",
  projectId: "hasib-2",
  storageBucket: "hasib-2.appspot.com",
  messagingSenderId: "234748695242",
  appId: "1:234748695242:web:025b5c98bb69ca20c75a33",
  measurementId: "G-L2LE7GWHVL",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
