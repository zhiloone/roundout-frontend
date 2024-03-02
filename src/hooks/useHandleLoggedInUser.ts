import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { useFirebase } from '@/store';

export const useHandleLoggedInUser = () => {
  const { resetUser, setUser } = useFirebase();

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        resetUser();
      }
    });

    return unsubscribe;
  }, []);
};
