import { getAuth, signInWithCustomToken } from 'firebase/auth';
import { api } from '@/api/client';
import { LoginParams, LoginResponse, RegisterParams, RegisterResponse } from './types';

export class AuthService {
  static BASE_PATH = 'auth';

  static async login(params: LoginParams) {
    // Pega um custom token gerado pelo backend
    const loginResponse = await api.post<LoginResponse>(`${this.BASE_PATH}/login`, params);
    const { customToken, user } = loginResponse.data;

    // Utiliza o custom token p/ se autenticar com o firebase
    await signInWithCustomToken(getAuth(), customToken);

    return { user };
  }

  static async register(params: RegisterParams) {
    const { data } = await api.post<RegisterResponse>(`${this.BASE_PATH}/register`, params);
    console.log({ data });

    const res = await signInWithCustomToken(getAuth(), data.customToken);
    console.log({ res });

    return data;
  }

  // static async recoverPassword(body: PasswordRecoveryBody) {
  //   const token = await api.post(`${this.BASE_PATH}/forgot-password`, body);
  //   return token;
  // }
}
