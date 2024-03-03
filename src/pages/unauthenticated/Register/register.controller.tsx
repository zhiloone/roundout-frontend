import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '@/services/auth/auth.service';
import { Icon } from '@/components/Icon/Icon';
import { useRegisterForm } from './register.form';
import { ROUTE_PATH } from '@/router/routes/authenticated.routes';

export const useRegisterController = () => {
  const registerForm = useRegisterForm();
  const [isPasswordVisible, { toggle: togglePasswordVisibility }] = useDisclosure(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = registerForm.onSubmit(async (values) => {
    setIsLoading(true);
    try {
      const { confirmPassword, ...registerParams } = values;

      await AuthService.register(registerParams);

      notifications.show({
        title: 'Sucesso',
        message: 'Conta cadastrada com sucesso!',
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
    registerForm,
    handleRegister,
    isPasswordVisible,
    togglePasswordVisibility,
    isLoading,
  };
};
