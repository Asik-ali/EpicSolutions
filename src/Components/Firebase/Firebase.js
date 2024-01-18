

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD9dyVd210iIPnGetr60BRZdV47TqgXJS4",
  authDomain: "zero-ads.firebaseapp.com",
  projectId: "zero-ads",
  storageBucket: "zero-ads.appspot.com",
  messagingSenderId: "864218699256",
  appId: "1:864218699256:web:38a5ac70d975233b74b20d",
  measurementId: "G-V3KBVCSKNQ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}


