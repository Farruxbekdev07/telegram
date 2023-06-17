// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdqy66WMrDCNKBl3StFcu52cSvkmiRU1Q",
  authDomain: "telegram-c4499.firebaseapp.com",
  projectId: "telegram-c4499",
  storageBucket: "telegram-c4499.appspot.com",
  messagingSenderId: "134274082019",
  appId: "1:134274082019:web:c24ad010a5567e0d3891d6",
  measurementId: "G-ZSFFNJQCSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);