import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQhX0eiiKhrvvdjj2BUEDPurv_7Qjz3pQ",
  authDomain: "foodify-bea2d.firebaseapp.com",
  projectId: "foodify-bea2d",
  storageBucket: "foodify-bea2d.appspot.com",
  messagingSenderId: "574925077035",
  appId: "1:574925077035:web:430f7a783f6575a552486e",
  dbURL: "https://foodify-bea2d-default-rtdb.firebaseio.com",
  measurementId: "G-CNBC59CN92",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
