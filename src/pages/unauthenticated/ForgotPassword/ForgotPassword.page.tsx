import { Paper, Text, TextInput, Space, Flex, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useForgotPasswordController } from './forgotPassword.controller';
import { ROUTE_PATH } from '@/router/router.consts';

export const ForgotPasswordPage = () => {
  const { forgotPasswordForm, handleResetPassword, isLoading } = useForgotPasswordController();

  return (
    <Paper p="xl" shadow="xl" withBorder>
      <form onSubmit={handleResetPassword}>
        <Flex justify="center">
          <Text size="xl" fw="bold">
            Esqueceu sua senha?
          </Text>
        </Flex>

        <Space h="sm" />

        <TextInput
          label="Email"
          placeholder="Insira seu email"
          {...forgotPasswordForm.getInputProps('email')}
        />

        <Space h="sm" />

        <Flex justify="flex-end">
          <Text size="xs">
            Tem uma conta? <Link to={ROUTE_PATH.LOGIN}>Entrar</Link>
          </Text>
        </Flex>

        <Space h="sm" />

        <Button w="100%" type="submit" loading={isLoading}>
          Recuperar senha
        </Button>
      </form>
    </Paper>
  );
};
