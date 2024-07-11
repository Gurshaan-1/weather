import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3WcFfizYjtkgeNE52gN3KN9riR55kSog",
  authDomain: "weather-auth-181a8.firebaseapp.com",
  projectId: "weather-auth-181a8",
  storageBucket: "weather-auth-181a8.appspot.com",
  messagingSenderId: "274707818067",
  appId: "1:274707818067:web:76707ed89cdff8debd08a6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth };
