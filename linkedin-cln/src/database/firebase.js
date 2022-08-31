import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdczbeZFwzOjR0pkj4UCCpNEnaKzcETP0",
  authDomain: "linkedin-react-cln-25c20.firebaseapp.com",
  projectId: "linkedin-react-cln-25c20",
  storageBucket: "linkedin-react-cln-25c20.appspot.com",
  messagingSenderId: "481256167525",
  appId: "1:481256167525:web:757054ff24692dfe608e8c",
  measurementId: "G-CJYWY7TWWF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
