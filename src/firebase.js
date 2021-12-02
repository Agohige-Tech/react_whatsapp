import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3Ne9shcnAj3VEjx_xPpucKNzAxucx6sk",
  authDomain: "agohige-messaging.firebaseapp.com",
  projectId: "agohige-messaging",
  storageBucket: "agohige-messaging.appspot.com",
  messagingSenderId: "627100466185",
  appId: "1:627100466185:web:aaf44f0b8a64b51c400cd8",
  measurementId: "G-KK28GGR5JP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
