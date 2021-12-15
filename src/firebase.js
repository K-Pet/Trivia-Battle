import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyApNhdN743OHFQHFnAr8D6oDTOIyolcuOs",
    authDomain: "trivia-app-daf1c.firebaseapp.com",
    projectId: "trivia-app-daf1c",
    storageBucket: "trivia-app-daf1c.appspot.com",
    messagingSenderId: "1075634964131",
    appId: "1:1075634964131:web:9e69f9780b12a71ab96116",
    measurementId: "G-LMFBL9ZRRF"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // firebase authentication object
export const firestore = firebase.firestore(); // firestore db
export const storage = firebase.storage();
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default firebase;