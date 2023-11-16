// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxIwqTb5XaqyErKaC4VYEcDt830eHb2AQ",
  authDomain: "homebound-pets.firebaseapp.com",
  projectId: "homebound-pets",
  storageBucket: "homebound-pets.appspot.com",
  messagingSenderId: "888632027186",
  appId: "1:888632027186:web:aae0268ceb8add1aedb42b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics();
