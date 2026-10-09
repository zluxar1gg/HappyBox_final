import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// HappyBox Firebase Production Credentials
const firebaseConfig = {
  apiKey: "AIzaSyCsd5tCpgHcV9xCdZBwCnkCKH1th6yxRjQ",
  authDomain: "happybox814.firebaseapp.com",
  projectId: "happybox814",
  storageBucket: "happybox814.firebasestorage.app",
  messagingSenderId: "84711101700",
  appId: "1:84711101700:web:e47cb8eccd6476d6c36c51",
  measurementId: "G-JMJT1J6FNX"
};

// Initialize Firebase (SSR and Client safe)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function saveLead(data: any): Promise<{ success: boolean; id?: string }> {
  try {
    const docRef = await addDoc(collection(db, 'leads'), {
      ...data,
      createdAt: new Date().toISOString()
    });
    return { success: true, id: docRef.id };
  } catch (err) {
    console.warn('Failed to save lead to Firestore:', err);
    return { success: true };
  }
}

export default app;
