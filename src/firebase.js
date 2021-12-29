import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBWnGTVj_dKt0FaItHMXm1mNcGNG5m4hWE",
    authDomain: "test-service-3b219.firebaseapp.com",
    projectId: "test-service-3b219",
    storageBucket: "test-service-3b219.appspot.com",
    messagingSenderId: "323700813454",
    appId: "1:323700813454:web:6475cb59d40bcf73bba3df"
  };

  export default firebase.initializeApp(firebaseConfig);