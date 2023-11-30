// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoumoxIiPy-j-pc8dSXmeshaa7LRReW7A" ,
  authDomain: "netflix-clone-23967.firebaseapp.com",
  projectId: "netflix-clone-23967",
  storageBucket: "netflix-clone-23967.appspot.com",
  messagingSenderId: "818275154577",
  appId: "1:818275154577:web:c7f4ef92d70cf014b35d30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)