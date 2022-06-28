// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7KW3h_Hkv6moOXzZRmqGVlW1VwlbXnZY",
  authDomain: "ar-photography-de1bd.firebaseapp.com",
  projectId: "ar-photography-de1bd",
  storageBucket: "ar-photography-de1bd.appspot.com",
  messagingSenderId: "1050800208843",
  appId: "1:1050800208843:web:1adc17d13d98f71312944e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const auth = getAuth(app);
export default auth;