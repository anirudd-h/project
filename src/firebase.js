// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDxITj8rws0P190DpgrRybHLc3DbCdj9d8",
    authDomain: "fir-b64df.firebaseapp.com",
    projectId: "fir-b64df",
    storageBucket: "fir-b64df.appspot.com",
    messagingSenderId: "787154031627",
    appId: "1:787154031627:web:f7dd8137d0ac9a5f66630e",
    measurementId: "G-W7K4LMR93C"
  }; 


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };