import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDJW3gHxs-qn7ORnHAi7ssoMMfZoTSyK0c",
  authDomain: "ecommerce-747e9.firebaseapp.com",
  projectId: "ecommerce-747e9",
  storageBucket: "ecommerce-747e9.appspot.com",
  messagingSenderId: "476946448741",      
  appId: "1:476946448741:web:250aa6bad43a33f9a2218c",
  measurementId: "G-4L0G8FVQ6D"
};


export default firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();
export const storage=firebase.storage();



