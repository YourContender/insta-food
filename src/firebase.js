import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA3dJAlidx3GG13nhVxsi3b_7tgr9R3erM",
    authDomain: "insta-food-e7b1c.firebaseapp.com",
    databaseURL: "https://insta-food-e7b1c-default-rtdb.firebaseio.com",
    projectId: "insta-food-e7b1c",
    storageBucket: "insta-food-e7b1c.appspot.com",
    messagingSenderId: "361584925918",
    appId: "1:361584925918:web:3a96e0d43fdb1bc40f364f",
    measurementId: "G-BHFEE8WZRJ"
  };

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)
// const analytics = getAnalytics(app);