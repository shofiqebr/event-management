// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHjo6ISvqJhbDRKoNNtUSKSGgwIAuETDc",
  authDomain: "training-event-management.firebaseapp.com",
  projectId: "training-event-management",
  storageBucket: "training-event-management.appspot.com",
  messagingSenderId: "638366608662",
  appId: "1:638366608662:web:4decca70f0bd7609cf3437"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;