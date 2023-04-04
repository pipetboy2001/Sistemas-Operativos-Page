import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyDkX06uFJlrjBZZFTXqu60UpIQD7leeYf4",
    authDomain: "sistope-9ef68.firebaseapp.com",
    databaseURL: "https://sistope-9ef68-default-rtdb.firebaseio.com",
    projectId: "sistope-9ef68",
    storageBucket: "sistope-9ef68.appspot.com",
    messagingSenderId: "963421790550",
    appId: "1:963421790550:web:53d72493f49d5e8ab536f7",
    measurementId: "G-6ZE3C8CVCY"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    firebase,
    db
};

