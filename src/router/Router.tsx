import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@/pages/authenticated/Home';
import { LoginPage } from '@/pages/unauthenticated/Login';
import { RegisterPage } from '@/pages/unauthenticated/Register';

export const ROUTE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: ROUTE_PATH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTE_PATH.REGISTER,
    element: <RegisterPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
