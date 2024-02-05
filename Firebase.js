// import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
// import { getFirestore } from "firebase/firestore";
import firebase  from "firebase/compat/app";
import "firebase/compat/firestore";

// import {getDatabase} from 'firebase/database'

//import { config } from "./Firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAty9SnkP3yfGJSDWchFO9OmJOS66WanOE",
  authDomain: "electricianapp-46c1c.firebaseapp.com",
  projectId: "electricianapp-46c1c",
  storageBucket: "electricianapp-46c1c.appspot.com",
  messagingSenderId: "407281396963",
  appId: "1:407281396963:web:5b880a46b60563828c69d6",
  measurementId: "G-ZZC1Z8JPWD"
};

// const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// export const auth = getAuth(app);
// export const dbAuth = getFirestore(app);

if(firebaseConfig.apps.length===0){
  const db = firebaseConfig.initializeApp(firebaseConfig);
}

export { firebase };
// const db=getDatabase()

// export default { db }