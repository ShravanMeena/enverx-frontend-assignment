// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlelRR56CZQAUEpwghvnk9UYfGv94_Aks",
  authDomain: "enverx-5318b.firebaseapp.com",
  projectId: "enverx-5318b",
  storageBucket: "enverx-5318b.appspot.com",
  messagingSenderId: "547370457256",
  appId: "1:547370457256:web:6d567a606cc2a185884a9d",
  measurementId: "G-FCEYVZMTS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)