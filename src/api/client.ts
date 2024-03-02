import axios, { AxiosHeaders } from 'axios';

import { useAuthentication } from '../store';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const { firebaseToken } = useAuthentication.getState();

  if (firebaseToken) {
    (config.headers as AxiosHeaders).set('Authorization', `Bearer ${firebaseToken}`);
  }

  return config;
});
