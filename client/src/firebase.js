// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOi1iWgPO_WJk5nKskt88Ei3_Ca2SLauE  ",
  authDomain: "blog-app-630e8.firebaseapp.com",
  projectId: "blog-app-630e8",
  storageBucket: "blog-app-630e8.appspot.com",
  messagingSenderId: "919874665821",
  appId: "1:919874665821:web:73d606856f52f077033cb4",
  measurementId: "G-Z7M2F8174N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
