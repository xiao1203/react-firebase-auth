import { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();
const auth = getAuth();
export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  const value = {
    user,
    loading,
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      // if (user) {
      //   console.log('onAuthStateChanged内でuserの確認');
      //   console.log(user);
      //   setUser(user);
      //   setLoading(false);
      // } else {
      //   // User is signed out
      //   // ...
      // }
    });
    return () => {
      unsubscribed();
    };
  }, []);

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    );
  }
}
