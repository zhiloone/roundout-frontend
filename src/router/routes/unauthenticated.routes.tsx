import { RouteObject } from 'react-router-dom';
import { UnauthenticatedScaffold } from '@/components/UnauthenticatedScaffold/UnauthenticatedScaffold';
import { ForgotPasswordPage } from '@/pages/unauthenticated/ForgotPassword';
import { LoginPage } from '@/pages/unauthenticated/Login';
import { RegisterPage } from '@/pages/unauthenticated/Register';

export const UNAUTHENTICATED_ROUTE_PATH = {
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
};

export const unauthenticatedRoutes: RouteObject = {
  element: <UnauthenticatedScaffold />,
  children: [
    {
      index: true,
      path: UNAUTHENTICATED_ROUTE_PATH.LOGIN,
      element: <LoginPage />,
    },
    {
      path: UNAUTHENTICATED_ROUTE_PATH.REGISTER,
      element: <RegisterPage />,
    },
    {
      path: UNAUTHENTICATED_ROUTE_PATH.FORGOT_PASSWORD,
      element: <ForgotPasswordPage />,
    },
  ],
};
