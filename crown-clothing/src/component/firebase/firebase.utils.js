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

  export const createUserProfileDocument = async (userAuth, addditionalData)=>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot =  await userRef.get();
    if(!snapShot.exists){
      const {displayName, email}= userAuth;
      const createAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...addditionalData
        })
      }catch(error){
          console.log('error creating user', error.message)
      }
    }
      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;