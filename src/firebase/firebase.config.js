// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcpi6g-Y-tuCA7Osfqrnby6p6rnt3tlsY",
  authDomain: "coffee-auth-630a4.firebaseapp.com",
  projectId: "coffee-auth-630a4",
  storageBucket: "coffee-auth-630a4.firebasestorage.app",
  messagingSenderId: "195147135097",
  appId: "1:195147135097:web:6384540629c885c3f47ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;