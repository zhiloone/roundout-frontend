import axios, { AxiosHeaders } from 'axios';

import { getAuth } from 'firebase/auth';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const firebaseToken = await getAuth().currentUser?.getIdToken();

  if (firebaseToken) {
    (config.headers as AxiosHeaders).set('Authorization', `Bearer ${firebaseToken}`);
  }

  return config;
});
