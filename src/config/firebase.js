import { initializeApp, getApps } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  query,
  startAfter,
  limit,
  deleteDoc,
  runTransaction,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBVaCdrNgfDCK-LdAlb7wx9WcN2UDYbvO8',
  authDomain: 'shopify-62bce.firebaseapp.com',
  projectId: 'shopify-62bce',
  storageBucket: 'shopify-62bce.appspot.com',
  messagingSenderId: '45681530433',
  appId: '1:45681530433:web:da35e4fb8566c801b658c0',
  measurementId: 'G-8T8F8YLCPQ',
};

const initializeDB = () => {
  initializeApp(firebaseConfig);
};

export {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  setDoc,
  doc,
  query,
  startAfter,
  limit,
  initializeDB,
  deleteDoc,
  runTransaction,
};
