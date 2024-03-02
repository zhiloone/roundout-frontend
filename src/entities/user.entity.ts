import { BaseDateEntity } from './baseDate.entity';

export interface UserEntity extends BaseDateEntity {
  id: string;
  email: string;
}
