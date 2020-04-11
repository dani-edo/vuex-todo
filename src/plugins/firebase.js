import * as firebase from "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDNwh4oz7wReAxWy_up6RThDXOWfJhLlUA",
    authDomain: "vuex-todo-list.firebaseapp.com",
    databaseURL: "https://vuex-todo-list.firebaseio.com",
    projectId: "vuex-todo-list",
    storageBucket: "vuex-todo-list.appspot.com",
    messagingSenderId: "377697994856",
    appId: "1:377697994856:web:eebd35d8be7cfd57fa13dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
