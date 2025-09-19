import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Firebase web configuration (public)
const firebaseConfig = {
  apiKey: "AIzaSyCybUqPaJrYnl9OInmmXlYxiErJQeMHnec",
  authDomain: "social-media-app-da6d7.firebaseapp.com",
  databaseURL: "https://social-media-app-da6d7-default-rtdb.firebaseio.com",
  projectId: "social-media-app-da6d7",
  storageBucket: "social-media-app-da6d7.firebasestorage.app",
  messagingSenderId: "1091688897074",
  appId: "1:1091688897074:web:89c96e4264663a8d603a2b",
  measurementId: "G-6YVN39XYVX",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Optional analytics in supported browsers only
if (typeof window !== "undefined") {
  isSupported().then((ok) => {
    if (ok) getAnalytics(app);
  });
}

export const db = getFirestore(app);
export { app };
