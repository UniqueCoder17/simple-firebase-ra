

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAl856T07XNq8AwvEGaZFwYPz_fD5a9aU",
  authDomain: "simple-firebase-ra.firebaseapp.com",
  projectId: "simple-firebase-ra",
  storageBucket: "simple-firebase-ra.firebasestorage.app",
  messagingSenderId: "968459615014",
  appId: "1:968459615014:web:d61204ea743edf4f4b9fe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;