import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// TODO: Replace the following with your app's Firebase project configuration
  // See: https://support.google.com/firebase/answer/7015592
  const firebaseConfig = {
    apiKey: "AIzaSyBmrmA-KZPngs_rfIk_6xZQXl4WBcnoKpo",
    authDomain: "spotify-piano-sessions.firebaseapp.com",
    databaseURL: "https://spotify-piano-sessions-default-rtdb.firebaseio.com",
    projectId: "spotify-piano-sessions",
    storageBucket: "spotify-piano-sessions.appspot.com",
    messagingSenderId: "377869811144",
    appId: "1:377869811144:web:e14fdb870999eb0c4dd4fd",
    measurementId: "G-08T4MMSJFB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Cloud Firestore and get a reference to the service
  export const db = getFirestore(app);