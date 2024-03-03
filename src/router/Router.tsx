import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { authenticatedRoutes, ROUTE_PATH } from './routes/authenticated.routes';
import { unauthenticatedRoutes } from './routes/unauthenticated.routes';

const router = createBrowserRouter([
  authenticatedRoutes,
  unauthenticatedRoutes,
  {
    path: '*',
    element: <Navigate to={ROUTE_PATH.HOME} />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
