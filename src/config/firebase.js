import firebase from 'firebase/app'
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCUtgzwBIrYdEjA-OGlwIWsCyBM-lOvi20",
    authDomain: "react-todo-202b6.firebaseapp.com",
    databaseURL: "https://react-todo-202b6.firebaseio.com",
    projectId: "react-todo-202b6",
    storageBucket: "react-todo-202b6.appspot.com",
    messagingSenderId: "244425532718",
    appId: "1:244425532718:web:7cf7191536df83a0a4c6bf"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);