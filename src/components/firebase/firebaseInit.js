// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfuhhbFI4pI7tWcJTuRX8v4c5UEaC5Jds",
    authDomain: "stockapp-a2ed1.firebaseapp.com",
    projectId: "stockapp-a2ed1",
    storageBucket: "stockapp-a2ed1.appspot.com",
    messagingSenderId: "432690071583",
    appId: "1:432690071583:web:7adb0ddec80253c0b3ed2a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export const auth = getAuth();
export const authProvider = new GoogleAuthProvider();

export const storage = getStorage(app);
export const db = database;