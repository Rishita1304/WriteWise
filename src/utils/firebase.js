// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-3875f.firebaseapp.com",
  projectId: "blog-3875f",
  storageBucket: "blog-3875f.appspot.com",
  messagingSenderId: "673651896607",
  appId: "1:673651896607:web:e9813239c34be7286fc02a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);