import { api } from '@/api/client';
import { UserEntity } from '@/entities/user.entity';

export class UserService {
  static BASE_PATH = 'users';

  static async getMe() {
    const { data } = await api.get<UserEntity>(`${this.BASE_PATH}/me`);
    return data;
  }
}
