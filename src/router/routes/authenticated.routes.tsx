import { RouteObject } from 'react-router-dom';
import { AuthenticatedScaffold } from '@/components/AuthenticatedScaffold';
import { HomePage } from '@/pages/authenticated/Home';
import { TablePage } from '@/pages/authenticated/Table';

export const ROUTE_PATH = {
  HOME: '/home',
  TABLE: '/table',
};

export const authenticatedRoutes: RouteObject = {
  element: <AuthenticatedScaffold />,
  children: [
    {
      index: true,
      path: ROUTE_PATH.HOME,
      element: <HomePage />,
    },
    {
      path: ROUTE_PATH.TABLE,
      element: <TablePage />,
    },
  ],
};
