import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebse.config";

const initializeFirebase = ()=>initializeApp(firebaseConfig);
export default initializeFirebase;