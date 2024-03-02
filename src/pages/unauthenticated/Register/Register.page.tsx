import { Paper, Text, TextInput, Space, PasswordInput, Flex, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@/router';
import { UnauthenticatedScaffold } from '@/components/UnauthenticatedScaffold/UnauthenticatedScaffold';
import { useRegisterController } from './register.controller';

export const RegisterPage = () => {
  const { registerForm, handleRegister, isPasswordVisible, togglePasswordVisibility, isLoading } =
    useRegisterController();

  return (
    <UnauthenticatedScaffold>
      <Paper p="xl" shadow="xl" withBorder>
        <form onSubmit={handleRegister}>
          <Flex justify="center">
            <Text size="xl" fw="bold">
              Cadastre uma nova conta
            </Text>
          </Flex>

          <Space h="sm" />

          <TextInput
            label="Email"
            placeholder="Insira seu email"
            {...registerForm.getInputProps('email')}
          />

          <Space h="sm" />

          <PasswordInput
            label="Senha"
            placeholder="Insira sua senha"
            visible={isPasswordVisible}
            onVisibilityChange={togglePasswordVisibility}
            {...registerForm.getInputProps('password')}
          />

          <Space h="sm" />

          <PasswordInput
            label="Confirme sua senha"
            placeholder="Confirme sua senha"
            visible={isPasswordVisible}
            onVisibilityChange={togglePasswordVisibility}
            {...registerForm.getInputProps('confirmPassword')}
          />

          <Space h="sm" />

          <Button w="100%" type="submit" loading={isLoading}>
            Cadastrar
          </Button>

          <Space h="sm" />

          <Flex justify="center">
            <Text size="xs">
              Tem uma conta? <Link to={ROUTE_PATH.LOGIN}>Entrar</Link>
            </Text>
          </Flex>
        </form>
      </Paper>
    </UnauthenticatedScaffold>
  );
};
