import { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();
const auth = getAuth();
export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState('');

  const value = {
    user,
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('onAuthStateChanged内でuserの確認');
        console.log(user);
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
