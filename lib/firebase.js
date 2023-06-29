// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWOAvZXuieDPcIugaui32wurjKqf53Rj0",
    authDomain: "wrap-up-c243c.firebaseapp.com",
    projectId: "wrap-up-c243c",
    storageBucket: "wrap-up-c243c.appspot.com",
    messagingSenderId: "771421572123",
    appId: "1:771421572123:web:b98bf9b45a2f4e7e933cbe",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
