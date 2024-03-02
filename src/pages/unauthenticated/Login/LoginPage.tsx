import { TextInput, Button, PasswordInput, Text, Paper, Space, Flex } from '@mantine/core';
import { Link } from 'react-router-dom';
import { UnauthenticatedScaffold } from '@/components/UnauthenticatedScaffold/UnauthenticatedScaffold';
import { useLoginController } from './login.controller';

export const LoginPage = () => {
  const { loginForm, handleLogin, isLoading } = useLoginController();

  return (
    <UnauthenticatedScaffold>
      <Paper p="xl" shadow="xl" withBorder>
        <form onSubmit={handleLogin}>
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
              <Link to="/forgot-password">Esqueceu sua senha?</Link>
            </Text>
          </Flex>

          <Space h="sm" />

          <Button w="100%" type="submit" loading={isLoading}>
            Entrar
          </Button>

          <Space h="sm" />

          <Flex justify="center">
            <Text size="xs">
              Não tem uma conta? <Link to={ROUTE_PATH.REGISTER}>Cadastrar-se</Link>
            </Text>
          </Flex>
        </form>
      </Paper>
    </UnauthenticatedScaffold>
  );
};
