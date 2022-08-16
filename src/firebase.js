// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHHJ3rvknUlkTL0zNqh0Ikp_zc63-O8BU",
  authDomain: "app-disney-clone.firebaseapp.com",
  projectId: "app-disney-clone",
  storageBucket: "app-disney-clone.appspot.com",
  messagingSenderId: "7763754819",
  appId: "1:7763754819:web:8981a8e6a1f544c4a479f6",
  measurementId: "G-5NR3YDX2X4"
};

// Initialize Firebase
// const analytics = getAnalytics(firebaseapp);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;