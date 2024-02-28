import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import { Router } from './router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <Notifications />
      <Router />
    </MantineProvider>
  );
}
