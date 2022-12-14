// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_UvpqH0HMYIZqBdTMqjFeRI-wmYaF27U",
  authDomain: "linkedin-clone-yt-869ab.firebaseapp.com",
  projectId: "linkedin-clone-yt-869ab",
  storageBucket: "linkedin-clone-yt-869ab.appspot.com",
  messagingSenderId: "334803510527",
  appId: "1:334803510527:web:17cd7f69452430acb598ca",
  measurementId: "G-YPQZNYVT2P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
