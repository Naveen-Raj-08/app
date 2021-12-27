import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSAgJG08zVhdu2odw8p7tTraIHrjKl-Qk",
  authDomain: "file-upload-f51c1.firebaseapp.com",
  projectId: "file-upload-f51c1",
  storageBucket: "file-upload-f51c1.appspot.com",
  messagingSenderId: "408286212866",
  appId: "1:408286212866:web:e4cb64321775620282081b",
};

firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
const appStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { appStorage, appStore, timestamp };
