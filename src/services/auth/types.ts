export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  // TODO: type user
  user: any;
  customToken: string;
}

export type RegisterParams = LoginParams;

export type RegisterResponse = LoginResponse;

export type ResetPasswordParams = Pick<LoginParams, 'email'>;
