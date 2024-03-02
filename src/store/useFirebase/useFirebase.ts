import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { StoreName } from '../types';
import { FirebaseSliceCreator, FirebaseStates } from './types';

const FIREBASE_SLICE_INITIAL_STATE: FirebaseStates = {
  user: undefined,
};

const initializer: FirebaseSliceCreator = (set) => ({
  ...FIREBASE_SLICE_INITIAL_STATE,
  setUser: (user) => {
    set({ user });
  },
  resetUser: () => {
    set(FIREBASE_SLICE_INITIAL_STATE);
  },
});

export const useFirebase = create(persist(initializer, { name: StoreName.FIREBASE }));
