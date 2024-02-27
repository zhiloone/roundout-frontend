import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@/pages/authenticated/Home';
import { LoginPage } from '@/pages/unauthenticated/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
