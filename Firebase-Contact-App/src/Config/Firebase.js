import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDHgU6Jz0pF6mV0lavVZ09KuZhdYn33MQg",
  authDomain: "vite-contact-28bda.firebaseapp.com",
  projectId: "vite-contact-28bda",
  storageBucket: "vite-contact-28bda.appspot.com",
  messagingSenderId: "890732307786",
  appId: "1:890732307786:web:7b23c9f6d7c623f4f14db3"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)