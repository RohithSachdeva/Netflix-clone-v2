import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCyn0bZ0fyF2AJ07dc17SlZE7wayM8AsRo",
  authDomain: "netflix-clone-5205e.firebaseapp.com",
  projectId: "netflix-clone-5205e",
  storageBucket: "netflix-clone-5205e.appspot.com",
  messagingSenderId: "876608980302",
  appId: "1:876608980302:web:b9a1e12b2fca81343c4a1f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
