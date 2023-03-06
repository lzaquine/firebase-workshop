import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const config = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: process.env.REACT_APP_GOOGLE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_GOOGLE_PROJECTID,
  storageBucket: process.env.REACT_APP_GOOGLE_STORAGE_BUCKERT,
  messagingSenderId: process.env.REACT_APP_GOOGLE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_GOOGLE_APPID,
  measurementId: process.env.REACT_APP_GOOGLE_MEASUREMENTID
};

if(!firebase.apps.length) { 
    firebase.initializeApp(config)
}

export default firebase;