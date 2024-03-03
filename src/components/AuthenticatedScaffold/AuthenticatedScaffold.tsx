import { Outlet } from 'react-router-dom';
import { AppShell, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { PrivateRoute } from '../PrivateRoute';
import { Test } from './test';

// TODO: sidebar, etc
export const AuthenticatedScaffold = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <PrivateRoute>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <Test />
        </AppShell.Navbar>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </PrivateRoute>
  );
};
