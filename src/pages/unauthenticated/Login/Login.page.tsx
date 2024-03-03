import { TextInput, Button, PasswordInput, Text, Paper, Space, Flex } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useLoginController } from './login.controller';
import { UNAUTHENTICATED_ROUTE_PATH } from '@/router/routes/unauthenticated.routes';

export const LoginPage = () => {
  const { loginForm, handleLogin, isLoading } = useLoginController();

  return (
    <Paper p="xl" shadow="xl" withBorder>
      <form onSubmit={handleLogin}>
        <Flex justify="center">
          <Text size="xl" fw="bold">
            Entre com sua conta
          </Text>
        </Flex>

        <Space h="sm" />

        <TextInput
          label="Email"
          placeholder="Insira seu email"
          {...loginForm.getInputProps('email')}
        />

        <Space h="sm" />

        <PasswordInput
          label="Senha"
          placeholder="Insira sua senha"
          {...loginForm.getInputProps('password')}
        />

        <Space h="sm" />

        <Flex justify="flex-end">
          <Text size="xs">
            <Link to={UNAUTHENTICATED_ROUTE_PATH.FORGOT_PASSWORD}>Esqueceu sua senha?</Link>
          </Text>
        </Flex>

        <Space h="sm" />

        <Button w="100%" type="submit" loading={isLoading}>
          Entrar
        </Button>

        <Space h="sm" />

        <Flex justify="center">
          <Text size="xs">
            Não tem uma conta? <Link to={UNAUTHENTICATED_ROUTE_PATH.REGISTER}>Cadastrar-se</Link>
          </Text>
        </Flex>
      </form>
    </Paper>
  );
};
