import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut as fbSignOut, 
  sendPasswordResetEmail, 
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  runTransaction
} from 'firebase/firestore';
import { auth, db } from './firebase';
import { UserProfile, UserRole } from '../types';
import { ADMIN_EMAILS, CLIENT_ID_BASE, extractInitials, formatRecipientCode, getClientCodeNumber } from '../constants';

// Helper: Check if email has admin privileges
export const checkIsAdmin = (email: string | null | undefined): boolean => {
  if (!email) return false;
  return ADMIN_EMAILS.map(e => e.toLowerCase()).includes(email.trim().toLowerCase());
};

// Helper: Generate next client code using atomic Firestore transaction (e.g. DK-8140, II-8141, etc.)
async function generateNextClientCode(fullName?: string): Promise<string> {
  const counterRef = doc(db, 'counters', 'clients');
  const initials = extractInitials(fullName); // e.g. "DK", "II", or "HB"
  try {
    const nextCode = await runTransaction(db, async (transaction) => {
      const counterSnap = await transaction.get(counterRef);
      let nextNumber = CLIENT_ID_BASE; // 8140
      
      if (counterSnap.exists()) {
        const current = counterSnap.data().currentNumber;
        if (typeof current === 'number' && current >= CLIENT_ID_BASE) {
          nextNumber = current;
        }
      }
      
      // Save next number for subsequent registrations
      transaction.set(counterRef, { currentNumber: nextNumber + 1 }, { merge: true });
      return `${initials}-${nextNumber}`;
    });

    return nextCode;
  } catch (err) {
    console.warn('Failed to run atomic transaction on counter, fallback:', err);
    return `${initials}-${CLIENT_ID_BASE + Math.floor(Math.random() * 500) + 1}`;
  }
}

// Fetch user profile from Firestore
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  try {
    const userDocRef = doc(db, 'users', uid);
    const snap = await getDoc(userDocRef);
    if (snap.exists()) {
      const data = snap.data() as UserProfile;
      // Re-verify admin role and assign HB-ADMIN badge
      if (checkIsAdmin(data.email)) {
        let hasChanges = false;
        if (data.role !== 'admin') {
          data.role = 'admin';
          hasChanges = true;
        }
        if (data.clientCode !== 'HB-ADMIN') {
          data.clientCode = 'HB-ADMIN';
          hasChanges = true;
        }
        if (hasChanges) {
          await updateDoc(userDocRef, { role: 'admin', clientCode: 'HB-ADMIN' });
        }
        return data;
      }

      // Auto-migrate clientCode from HB-814X to initials if user has a real fullName
      const isRealName = Boolean(
        data.fullName && 
        data.fullName.trim() && 
        data.fullName.trim().toLowerCase() !== 'клиент' && 
        data.fullName.trim().toLowerCase() !== 'client'
      );
      if (isRealName && data.clientCode && data.clientCode.startsWith('HB-')) {
        const correctCode = formatRecipientCode(data.fullName, data.clientCode);
        if (correctCode && correctCode !== data.clientCode && !correctCode.startsWith('HB-')) {
          data.clientCode = correctCode;
          try {
            await updateDoc(userDocRef, { clientCode: correctCode });
          } catch (e) {
            console.warn('Could not auto-migrate clientCode in Firestore:', e);
          }
        }
      }

      return data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

// Register new user with Email + Password
export async function registerUser(
  email: string,
  password: string,
  fullName: string = '',
  phone: string = '',
  shippingAddress: string = ''
): Promise<UserProfile> {
  const trimmedName = fullName.trim();
  const isAdmin = checkIsAdmin(email);
  if (!trimmedName && !isAdmin) {
    throw new Error('Имя обязательно для регистрации (для формирования персонального кода)');
  }

  const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
  const fbUser = cred.user;

  const role: UserRole = isAdmin ? 'admin' : 'customer';
  const clientCode = isAdmin ? 'HB-ADMIN' : await generateNextClientCode(trimmedName);

  const profile: UserProfile = {
    uid: fbUser.uid,
    email: fbUser.email || email.trim(),
    clientCode,
    fullName: trimmedName || (isAdmin ? 'HappyBox Admin' : ''),
    phone: phone.trim(),
    shippingAddress: shippingAddress.trim(),
    role,
    createdAt: new Date().toISOString()
  };

  await setDoc(doc(db, 'users', fbUser.uid), profile);
  return profile;
}

// Sign in with Email + Password
export async function loginUser(email: string, password: string): Promise<UserProfile> {
  const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
  const fbUser = cred.user;
  
  let profile = await getUserProfile(fbUser.uid);
  
  // If user exists in Auth but document was missing (e.g. created in console)
  if (!profile) {
    const isAdmin = checkIsAdmin(fbUser.email);
    profile = {
      uid: fbUser.uid,
      email: fbUser.email || email.trim(),
      clientCode: isAdmin ? 'HB-ADMIN' : await generateNextClientCode(fbUser.displayName || ''),
      fullName: fbUser.displayName || (isAdmin ? 'HappyBox Admin' : 'Клиент'),
      phone: '',
      shippingAddress: '',
      role: isAdmin ? 'admin' : 'customer',
      createdAt: new Date().toISOString()
    };
    await setDoc(doc(db, 'users', fbUser.uid), profile);
  }

  return profile;
}

// Sign out
export async function logoutUser(): Promise<void> {
  await fbSignOut(auth);
}

// Send password reset email
export async function resetUserPassword(email: string): Promise<void> {
  await sendPasswordResetEmail(auth, email.trim());
}

// Update profile details (address, phone, name)
export async function updateUserProfile(
  uid: string, 
  updates: Partial<Pick<UserProfile, 'fullName' | 'phone' | 'shippingAddress'>>
): Promise<void> {
  const userDocRef = doc(db, 'users', uid);
  const finalUpdates: any = { ...updates };

  if (updates.fullName && updates.fullName.trim()) {
    try {
      const snap = await getDoc(userDocRef);
      if (snap.exists()) {
        const currentData = snap.data() as UserProfile;
        if (!checkIsAdmin(currentData.email)) {
          const newCode = formatRecipientCode(updates.fullName, currentData.clientCode);
          if (newCode && newCode !== currentData.clientCode) {
            finalUpdates.clientCode = newCode;
          }
        }
      }
    } catch (e) {
      console.warn('Could not recalculate clientCode during profile update:', e);
    }
  }

  await updateDoc(userDocRef, finalUpdates);
}

// Subscribe to auth state changes
export function subscribeToAuth(
  callback: (profile: UserProfile | null, rawUser: FirebaseUser | null) => void
): () => void {
  return onAuthStateChanged(auth, async (fbUser) => {
    if (fbUser) {
      const profile = await getUserProfile(fbUser.uid);
      callback(profile, fbUser);
    } else {
      callback(null, null);
    }
  });
}
