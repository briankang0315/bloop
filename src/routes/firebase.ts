
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBqmNJV6ib-LoGJLF4S4erWjVbY1t0wBcQ",
    authDomain: "social-media-ts-fb.firebaseapp.com",
    projectId: "social-media-ts-fb",
    storageBucket: "social-media-ts-fb.appspot.com",
    messagingSenderId: "829684146577",
    appId: "1:829684146577:web:7fbfb4d1ed25b9a72c3a30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db= getFirestore(app);