import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Validate essential Firebase config environment variables
if (!firebaseConfig.apiKey) {
  throw new Error("Firebase config error: NEXT_PUBLIC_FIREBASE_API_KEY is not defined. Please check your environment variables.");
}
if (!firebaseConfig.authDomain) {
  throw new Error("Firebase config error: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN is not defined. Please check your environment variables.");
}
if (!firebaseConfig.projectId) {
  throw new Error("Firebase config error: NEXT_PUBLIC_FIREBASE_PROJECT_ID is not defined. Please check your environment variables.");
}
if (!firebaseConfig.storageBucket) {
  throw new Error("Firebase config error: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET is not defined. Please check your environment variables.");
}
if (!firebaseConfig.messagingSenderId) {
  throw new Error("Firebase config error: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID is not defined. Please check your environment variables.");
}
if (!firebaseConfig.appId) {
  throw new Error("Firebase config error: NEXT_PUBLIC_FIREBASE_APP_ID is not defined. Please check your environment variables.");
}

// 确保只初始化一次
let app;
try {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
} catch (error) {
  console.error('Firebase initialization error:', error);
  throw error;
}

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 