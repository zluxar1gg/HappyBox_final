import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserProfile } from '../types';
import { 
  subscribeToAuth, 
  loginUser, 
  registerUser, 
  logoutUser, 
  resetUserPassword,
  getUserProfile 
} from '../services/authService';

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  isAdmin: boolean;
  login: (email: string, pass: string) => Promise<UserProfile>;
  register: (email: string, pass: string, name?: string, phone?: string, address?: string) => Promise<UserProfile>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToAuth((profile) => {
      setUser(profile);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, pass: string) => {
    const profile = await loginUser(email, pass);
    setUser(profile);
    return profile;
  };

  const register = async (email: string, pass: string, name = '', phone = '', address = '') => {
    const profile = await registerUser(email, pass, name, phone, address);
    setUser(profile);
    return profile;
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  const resetPassword = async (email: string) => {
    await resetUserPassword(email);
  };

  const refreshProfile = async () => {
    if (user?.uid) {
      const updated = await getUserProfile(user.uid);
      if (updated) setUser(updated);
    }
  };

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAdmin,
        login,
        register,
        logout,
        resetPassword,
        refreshProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
