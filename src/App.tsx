import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import { initializeApp } from 'firebase/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './router';
import { theme } from './theme';
import firebaseConfig from '../roundout-web-firebase-config.json';
import { useHandleLoggedInUser } from './hooks/useHandleLoggedInUser';
import 'mantine-react-table/styles.css';

// Initialize Firebase
initializeApp(firebaseConfig);

const queryClient = new QueryClient();

export default function App() {
  useHandleLoggedInUser();

  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <QueryClientProvider client={queryClient}>
        <Notifications />
        <Router />
      </QueryClientProvider>
    </MantineProvider>
  );
}
