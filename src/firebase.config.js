// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA57V4DbSmup3nWlCIIjOZNvXb8YdBMc6o",
  authDomain: "house-marketplace-6c81f.firebaseapp.com",
  projectId: "house-marketplace-6c81f",
  storageBucket: "house-marketplace-6c81f.appspot.com",
  messagingSenderId: "740660333858",
  appId: "1:740660333858:web:ef69681b33537bfbab297b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()