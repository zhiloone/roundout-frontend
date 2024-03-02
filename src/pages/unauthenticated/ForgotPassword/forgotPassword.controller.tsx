import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@/components/Icon/Icon';
import { useForgotPasswordForm } from './forgotPassword.form';
import { AuthService } from '@/services/auth/auth.service';
import { ROUTE_PATH } from '@/router/router.consts';

export const useForgotPasswordController = () => {
  const forgotPasswordForm = useForgotPasswordForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = forgotPasswordForm.onSubmit(async (values) => {
    setIsLoading(true);
    try {
      // TODO: https://firebase.google.com/docs/auth/admin/email-action-links#generate_password_reset_email_link
      await AuthService.resetPassword(values);

      notifications.show({
        title: 'Sucesso',
        message:
          'Em alguns instantes você receberá um email com instruções para escolher uma nova senha.',
        color: 'green',
        icon: <Icon name="check" />,
      });

      navigate(ROUTE_PATH.LOGIN);
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
    forgotPasswordForm,
    handleResetPassword,
    isLoading,
  };
};
