import { useState } from 'react';
import { notifications } from '@mantine/notifications';
import { getAuth } from 'firebase/auth';
import { AuthService } from '@/services/auth/auth.service';
import { useAuthentication } from '@/store';
import { useLoginForm } from './login.form';
import { Icon } from '@/components/Icon/Icon';

export const useLoginController = () => {
  const loginForm = useLoginForm();

  const authStore = useAuthentication();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = loginForm.onSubmit(async (values) => {
    setIsLoading(true);
    try {
      const { user } = await AuthService.login(values);
      authStore.setUser(user);

      const firebaseToken = await getAuth().currentUser!.getIdToken(true);
      authStore.login(firebaseToken);

      notifications.show({
        title: 'Sucesso',
        message: 'Autenticado com sucesso! Redirecionando...',
        color: 'green',
        icon: <Icon name="check" />,
      });

      // TODO: redirect to login
    } catch (error: any) {
      notifications.show({
        title: 'Erro',
        message: error.response?.data?.message || 'Erro desconhecido.',
        color: 'red',
        icon: <Icon name="x" />,
      });
    } finally {
      setIsLoading(false);
    }
  });

  return {
    loginForm,
    handleLogin,
    isLoading,
  };
};
