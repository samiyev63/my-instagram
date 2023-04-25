import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_835K8Is2Pe1Bugu5leUgSo5pAzE8H2E",
  authDomain: "inst-93f8b.firebaseapp.com",
  projectId: "inst-93f8b",
  storageBucket: "inst-93f8b.appspot.com",
  messagingSenderId: "1098589254284",
  appId: "1:1098589254284:web:25ff28a823d5b4160681a9",
  measurementId: "G-BDLRZ297G9"
  
  // apiKey: "AIzaSyDdIFOpsJi6fhWcIOn4YThBSUu4vyC204k",
  // authDomain: "instaaaaa-1c220.firebaseapp.com",
  // projectId: "instaaaaa-1c220",
  // storageBucket: "instaaaaa-1c220.appspot.com",
  // messagingSenderId: "30449098282",
  // appId: "1:30449098282:web:0bd1e23a2b98d5b22aad53",
  // measurementId: "G-0XNYBMRRH4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { auth };
export default db;
