// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC3IRLN46_9P-sT_DzCvJTT4LVch75BO4s",
  authDomain: "netflix-react-yt-aea4e.firebaseapp.com",
  projectId: "netflix-react-yt-aea4e",
  storageBucket: "netflix-react-yt-aea4e.appspot.com",
  messagingSenderId: "2848899610",
  appId: "1:2848899610:web:1cbe561d0ed32958e8c7a3",
  measurementId: "G-T58SNLD370"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
