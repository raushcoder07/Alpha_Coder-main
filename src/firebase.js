// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;