import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyADo3QAK7pm9rNv133tTE9GBZcxunS6LAc",
    authDomain: "crwn-db-56778.firebaseapp.com",
    projectId: "crwn-db-56778",
    storageBucket: "crwn-db-56778.appspot.com",
    messagingSenderId: "1039994107375",
    appId: "1:1039994107375:web:a6a722878964b09227721a",
    measurementId: "G-9L8ZKLYN0D"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;