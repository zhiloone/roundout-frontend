import { Navigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../router/router.consts';
import { useFirebase } from '@/store';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useFirebase();

  if (!user?.uid) return <Navigate to={ROUTE_PATH.LOGIN} replace />;

  return children;
};
