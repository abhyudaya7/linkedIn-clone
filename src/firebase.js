import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCF4aefqV-jevHvaEESUq74Thp0jtXPAuk",
    authDomain: "linkedin-clone-5851e.firebaseapp.com",
    projectId: "linkedin-clone-5851e",
    storageBucket: "linkedin-clone-5851e.appspot.com",
    messagingSenderId: "338058079429",
    appId: "1:338058079429:web:0bddad0c8229fa8fd8d4ac"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };