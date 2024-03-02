import { Outlet } from 'react-router-dom';
import { PrivateRoute } from '../PrivateRoute';

// TODO: sidebar, etc
export const AuthenticatedScaffold = () => (
  <PrivateRoute>
    <Outlet />
  </PrivateRoute>
);
