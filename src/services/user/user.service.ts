import { api } from '@/api/client';

export class UserService {
  static BASE_PATH = 'users';

  static async getMe() {
    const { data } = await api.get<string>(`${this.BASE_PATH}/me`);
    console.log({ data });
  }
}
