import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYZlY0I2pbUt52xyBOWFOXPTVR18QQI-M",
  authDomain: "email-password-varification.firebaseapp.com",
  projectId: "email-password-varification",
  storageBucket: "email-password-varification.appspot.com",
  messagingSenderId: "705686452129",
  appId: "1:705686452129:web:3a16197cfebd57256cbde0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
export default auth;
