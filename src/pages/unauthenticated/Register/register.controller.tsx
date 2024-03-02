import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '@/store';
import { AuthService } from '@/services/auth/auth.service';
import { ROUTE_PATH } from '@/router';
import { Icon } from '@/components/Icon/Icon';
import { useRegisterForm } from './register.form';

export const useRegisterController = () => {
  const registerForm = useRegisterForm();
  const [isPasswordVisible, { toggle: togglePasswordVisibility }] = useDisclosure(false);
  const [isLoading, setIsLoading] = useState(false);
  const authStore = useAuthentication();
  const navigate = useNavigate();

  const handleRegister = registerForm.onSubmit(async (values) => {
    setIsLoading(true);
    try {
      const { confirmPassword, ...registerParams } = values;

      const { user } = await AuthService.register(registerParams);
      authStore.setUser(user);

      const firebaseToken = await getAuth().currentUser!.getIdToken(true);
      authStore.login(firebaseToken);

      notifications.show({
        title: 'Sucesso',
        message: 'Conta cadastrada com sucesso! Redirecionando...',
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
