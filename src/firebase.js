import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXsGTCEzeR36TrXLwAjSeeONqSUqK71Js",
  authDomain: "netflix-clone-65c5a.firebaseapp.com",
  projectId: "netflix-clone-65c5a",
  storageBucket: "netflix-clone-65c5a.appspot.com",
  messagingSenderId: "779925641292",
  appId: "1:779925641292:web:a9a20f680aceb6d633bce9",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)