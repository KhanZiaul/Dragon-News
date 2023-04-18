// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfeWBy8UL95shDd64f09djEw-hZTu-BWU",
  authDomain: "react-dreagon-news.firebaseapp.com",
  projectId: "react-dreagon-news",
  storageBucket: "react-dreagon-news.appspot.com",
  messagingSenderId: "349886088229",
  appId: "1:349886088229:web:a8bca3ce4a774c94b5ebcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;