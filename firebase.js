import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAleor7u1kRf7g7bnQbI_bYsgE6yO6P0ak",
  authDomain: "booking-project-f6e39.firebaseapp.com",
  projectId: "booking-project-f6e39",
  storageBucket: "booking-project-f6e39.firebasestorage.app",
  messagingSenderId: "11992992365",
  appId: "1:11992992365:web:cf38f22d3e84df753d0d64"
};

const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });

const db = getFirestore();

export {auth, db};