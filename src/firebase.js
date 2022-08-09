// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQd8IwyfoMTGNiIk601_omxHpIdv9pmGE",
  authDomain: "ryugakupedia-801d4.firebaseapp.com",
  projectId: "ryugakupedia-801d4",
  storageBucket: "ryugakupedia-801d4.appspot.com",
  messagingSenderId: "943369657633",
  appId: "1:943369657633:web:c2feba7059ac465ec27260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };