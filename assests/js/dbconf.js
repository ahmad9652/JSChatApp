// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-NOOvedtfkzTUczeahoIgKo03NsaDwEI",
  authDomain: "sma-chat-app.firebaseapp.com",
  projectId: "sma-chat-app",
  storageBucket: "sma-chat-app.appspot.com",
  messagingSenderId: "136294876443",
  appId: "1:136294876443:web:ce2387293d52ebc43abfbe",
  measurementId: "G-NTJ2FFW2SV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);