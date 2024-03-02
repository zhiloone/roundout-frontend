import { getAuth, signInWithCustomToken } from 'firebase/auth';
import { api } from '@/api/client';
import {
  LoginParams,
  LoginResponse,
  ResetPasswordParams,
  RegisterParams,
  RegisterResponse,
} from './types';

export class AuthService {
  static BASE_PATH = 'auth';

  static async login(params: LoginParams) {
    const loginResponse = await api.post<LoginResponse>(`${this.BASE_PATH}/login`, params);
    const { customToken } = loginResponse.data;

    await signInWithCustomToken(getAuth(), customToken);
  }

  static async register(params: RegisterParams) {
    const registerResponse = await api.post<RegisterResponse>(`${this.BASE_PATH}/register`, params);
    const { customToken } = registerResponse.data;

    await signInWithCustomToken(getAuth(), customToken);
  }

  static async resetPassword(params: ResetPasswordParams) {
    const response = await api.post(`${this.BASE_PATH}/reset-password`, params);
    return response;
  }
}
