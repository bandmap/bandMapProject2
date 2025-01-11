// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// 匯入firebase
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgHv60pAiLFZrTcsMJj7BnV2-dSWobyX4",
  authDomain: "bandmap-1c2fb.firebaseapp.com",
  projectId: "bandmap-1c2fb",
  storageBucket: "bandmap-1c2fb.firebasestorage.app",
  messagingSenderId: "474782473175",
  appId: "1:474782473175:web:00bd6b414717a0b7100992",
  measurementId: "G-2PM37ME170"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 匯出
export const auth = getAuth(app);
export const provide = new GoogleAuthProvider();