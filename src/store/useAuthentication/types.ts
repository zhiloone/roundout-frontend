import { StateCreator } from 'zustand';

// TODO
type User = {};

export type AuthenticationStates = {
  user?: User;
  isAuthenticated: boolean;
  firebaseToken: string;
};

export type AuthenticationActions = {
  login: (bearerToken: string) => void;
  logout: () => void;
  setUser: (user: User) => void;
};

export type AuthenticationSlice = AuthenticationStates & AuthenticationActions;

export type AuthenticationSliceCreator = StateCreator<
  AuthenticationSlice,
  [['zustand/persist', unknown]],
  [],
  AuthenticationSlice
>;
