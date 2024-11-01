import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID
};

const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });

const db = getFirestore();

export {auth, db};
