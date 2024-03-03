import { NavLink, Outlet } from 'react-router-dom';
import { AppShell, Group, Burger, Button, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { getAuth } from 'firebase/auth';
import { PrivateRoute } from '../PrivateRoute';
import { ROUTE_PATH } from '@/router/routes/authenticated.routes';

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
          <AppShell.Section grow>
            <NavLink to={ROUTE_PATH.HOME}>Home</NavLink>
            <Space h="xs" />
            <NavLink to={ROUTE_PATH.TABLE}>Table</NavLink>
          </AppShell.Section>

          <AppShell.Section>
            <Button
              w="100%"
              onClick={() => {
                getAuth().signOut();
              }}
            >
              Logout
            </Button>
          </AppShell.Section>
        </AppShell.Navbar>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </PrivateRoute>
  );
};
