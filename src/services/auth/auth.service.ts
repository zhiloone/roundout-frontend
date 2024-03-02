import { getAuth, signInWithCustomToken } from 'firebase/auth';
import { api } from '@/api/client';
import { LoginParams, LoginResponse, RegisterParams, RegisterResponse } from './types';

export class AuthService {
  static BASE_PATH = 'auth';

  static async login(params: LoginParams) {
    const loginResponse = await api.post<LoginResponse>(`${this.BASE_PATH}/login`, params);
    const { customToken, user } = loginResponse.data;

    await signInWithCustomToken(getAuth(), customToken);

    return { user };
  }

  static async register(params: RegisterParams) {
    const registerResponse = await api.post<RegisterResponse>(`${this.BASE_PATH}/register`, params);
    const { customToken, user } = registerResponse.data;

    await signInWithCustomToken(getAuth(), customToken);

    return { user };
  }

  // static async recoverPassword(body: PasswordRecoveryBody) {
  //   const token = await api.post(`${this.BASE_PATH}/forgot-password`, body);
  //   return token;
  // }
}
