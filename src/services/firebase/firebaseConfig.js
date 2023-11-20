// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9XKwb-fMVUSbQ0ikSkhCBSWiTpLsFubo",
  authDomain: "mx-keyboards.firebaseapp.com",
  projectId: "mx-keyboards",
  storageBucket: "mx-keyboards.appspot.com",
  messagingSenderId: "316167264434",
  appId: "1:316167264434:web:cc502b50961028c13a91ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);