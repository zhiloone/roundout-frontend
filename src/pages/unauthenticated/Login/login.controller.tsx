import { useState } from 'react';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '@/services/auth/auth.service';
import { useLoginForm } from './login.form';
import { Icon } from '@/components/Icon/Icon';
import { ROUTE_PATH } from '@/router/router.consts';

export const useLoginController = () => {
  const loginForm = useLoginForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = loginForm.onSubmit(async (values) => {
    setIsLoading(true);
    try {
      await AuthService.login(values);

      notifications.show({
        title: 'Sucesso',
        message: 'Autenticado com sucesso!',
        color: 'green',
        icon: <Icon name="check" />,
      });

      navigate(ROUTE_PATH.HOME);
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
