import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAhV54rR97_4pSLLM2CZJ_fW6Pbwd0QE8",
    authDomain: "crown-db-2350a.firebaseapp.com",
    databaseURL: "https://crown-db-2350a.firebaseio.com",
    projectId: "crown-db-2350a",
    storageBucket: "crown-db-2350a.appspot.com",
    messagingSenderId: "590834834404",
    appId: "1:590834834404:web:934ac2b3c1c47448c805f1",
    measurementId: "G-3D52BRPF1X"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GithubAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;