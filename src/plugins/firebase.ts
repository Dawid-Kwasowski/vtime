// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkJz0VyWjvq4J1hlSpjq4eIxD7EDBSGnY",
  authDomain: "vtime-71abb.firebaseapp.com",
  databaseURL:
    "https://vtime-71abb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vtime-71abb",
  storageBucket: "vtime-71abb.appspot.com",
  messagingSenderId: "811478413902",
  appId: "1:811478413902:web:6cb08b152a501f9110c91f",
};

// Initialize Firebase
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
