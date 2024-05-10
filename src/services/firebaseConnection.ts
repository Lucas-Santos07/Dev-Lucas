import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDDG5s7E47ECZxjDKK3bP88vHnfj37Zgt0",
  authDomain: "reactlinks-a070c.firebaseapp.com",
  projectId: "reactlinks-a070c",
  storageBucket: "reactlinks-a070c.appspot.com",
  messagingSenderId: "842794271090",
  appId: "1:842794271090:web:f883dbcf929dab36c8ddeb"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db}