import { Navigate } from 'react-router-dom';
import { useFirebase } from '@/store';
import { UNAUTHENTICATED_ROUTE_PATH } from '@/router/routes/unauthenticated.routes';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useFirebase();

  if (!user?.uid) return <Navigate to={UNAUTHENTICATED_ROUTE_PATH.LOGIN} replace />;

  return children;
};
