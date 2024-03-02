import { StateCreator } from 'zustand';
import { User } from 'firebase/auth';

// TODO

export type FirebaseStates = {
  user?: User;
};

export type FirebaseActions = {
  setUser: (user: User) => void;
  resetUser: () => void;
};

export type FirebaseSlice = FirebaseStates & FirebaseActions;

export type FirebaseSliceCreator = StateCreator<
  FirebaseSlice,
  [['zustand/persist', unknown]],
  [],
  FirebaseSlice
>;
