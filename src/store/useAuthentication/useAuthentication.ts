import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { StoreName } from '../types';
import { AuthenticationSliceCreator, AuthenticationStates } from './types';

const AUTHENTICATION_SLICE_INITIAL_STATE: AuthenticationStates = {
  user: undefined,
  firebaseToken: '',
  isAuthenticated: false,
};

const initializer: AuthenticationSliceCreator = (set) => ({
  ...AUTHENTICATION_SLICE_INITIAL_STATE,
  login: (firebaseToken) => {
    set((state) => ({
      ...state,
      isAuthenticated: true,
      firebaseToken,
    }));
  },
  logout: () => set(AUTHENTICATION_SLICE_INITIAL_STATE),
  setUser: (user) => {
    set((state) => ({
      ...state,
      user,
    }));
  },
});

export const useAuthentication = create(persist(initializer, { name: StoreName.AUTH }));
