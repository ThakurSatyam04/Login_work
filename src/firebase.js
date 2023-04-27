import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBAGxGQNzFDyzpPqwobJXc4WKiDqqVTorE",
  authDomain: "case-login-firebase.firebaseapp.com",
  projectId: "case-login-firebase",
  storageBucket: "case-login-firebase.appspot.com",
  messagingSenderId: "647417153174",
  appId: "1:647417153174:web:f5f6001a74c60654f724b7",
  measurementId: "G-VQ3P6ZB588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth}