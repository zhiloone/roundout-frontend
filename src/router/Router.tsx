import {
  createBrowserRouter,
  Outlet,
  redirect,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { HomePage } from '@/pages/authenticated/Home';
import { LoginPage } from '@/pages/unauthenticated/Login';
import { RegisterPage } from '@/pages/unauthenticated/Register';
import { ForgotPasswordPage } from '@/pages/unauthenticated/ForgotPassword';
import { UnauthenticatedScaffold } from '@/components/UnauthenticatedScaffold/UnauthenticatedScaffold';
import { ROUTE_PATH } from './router.consts';
import { AuthenticatedScaffold } from '@/components/AuthenticatedScaffold';

export const authenticatedRoutes: RouteObject = {
  element: <AuthenticatedScaffold />,
  children: [
    {
      index: true,
      path: ROUTE_PATH.HOME,
      element: <HomePage />,
    },
  ],
};

const unauthenticatedRoutes: RouteObject = {
  element: <UnauthenticatedScaffold />,
  children: [
    {
      index: true,
      path: ROUTE_PATH.LOGIN,
      element: <LoginPage />,
    },
    {
      path: ROUTE_PATH.REGISTER,
      element: <RegisterPage />,
    },
    {
      path: ROUTE_PATH.FORGOT_PASSWORD,
      element: <ForgotPasswordPage />,
    },
  ],
};

const router = createBrowserRouter([authenticatedRoutes, unauthenticatedRoutes]);

export function Router() {
  return <RouterProvider router={router} />;
}
