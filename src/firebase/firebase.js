import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ ADD THIS
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGZ-G3poJMRjyvlMSeGRhD7gYYmFdVI6A",
  authDomain: "fir-4cfdb.firebaseapp.com",
  projectId: "fir-4cfdb",
  storageBucket: "fir-4cfdb.firebasestorage.app",
  messagingSenderId: "48013360194",
  appId: "1:48013360194:web:fa666d76cdff56f5c941db",
  measurementId: "G-98QTL96TXN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);   // ✅ UNCOMMENT THIS
export const db = getFirestore(app);