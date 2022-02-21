import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDnQnWdIK-RPAqRDFGbR1EbLrdBLuaZgo0",
    authDomain: "rede-social-47329.firebaseapp.com",
    projectId: "rede-social-47329",
    storageBucket: "rede-social-47329.appspot.com",
    messagingSenderId: "894048483176",
    appId: "1:894048483176:web:772072d6eb5b8ffb1908dd",
    measurementId: "G-DT6KJK7Z4V"
  };

  const app = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth();

export {firebase, app, auth};