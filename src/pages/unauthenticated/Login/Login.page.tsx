import {
  TextInput,
  Group,
  Button,
  PasswordInput,
  Text,
  Paper,
  Space,
  Box,
  Flex,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';
import { UnauthenticatedScaffold } from '@/components/UnauthenticatedScaffold/UnauthenticatedScaffold';

export const LoginPage = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <UnauthenticatedScaffold>
      <Paper p="xl" shadow="xl" withBorder>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            label="Email"
            placeholder="Insira seu email"
            {...form.getInputProps('email')}
          />

          <Space h="sm" />

          <PasswordInput
            label="Senha"
            placeholder="Insira sua senha"
            {...form.getInputProps('password')}
          />

          <Space h="sm" />

          <Flex justify="flex-end">
            <Text size="xs">
              <Link to="/forgot-password">Esqueceu sua senha?</Link>
            </Text>
          </Flex>

          <Space h="sm" />

          <Button w="100%" type="submit">
            Entrar
          </Button>

          <Space h="sm" />

          <Flex justify="center">
            <Text size="xs">
              Não tem uma conta? <Link to="/register">Cadastrar-se</Link>
            </Text>
          </Flex>
        </form>
      </Paper>
    </UnauthenticatedScaffold>
  );
};
