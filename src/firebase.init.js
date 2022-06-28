import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA7KW3h_Hkv6moOXzZRmqGVlW1VwlbXnZY",
  authDomain: "ar-photography-de1bd.firebaseapp.com",
  projectId: "ar-photography-de1bd",
  storageBucket: "ar-photography-de1bd.appspot.com",
  messagingSenderId: "1050800208843",
  appId: "1:1050800208843:web:1adc17d13d98f71312944e"
};


const app = initializeApp(firebaseConfig);
 
export const auth = getAuth(app);

export default app;