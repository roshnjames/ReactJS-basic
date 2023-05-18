import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDB-XHXI-egorgKUi1Gd82wcn-MQI-siFc",
  authDomain: "test-c7fd4.firebaseapp.com",
  projectId: "test-c7fd4",
  storageBucket: "test-c7fd4.appspot.com",
  messagingSenderId: "163657195337",
  appId: "1:163657195337:web:74307f36adfacc65f6c498",
  measurementId: "G-NLN9PKV448"
};
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
