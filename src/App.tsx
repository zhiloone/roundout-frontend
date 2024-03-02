import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import { initializeApp } from 'firebase/app';
import { Router } from './router';
import { theme } from './theme';
import firebaseConfig from '../roundout-web-firebase-config.json';

// Initialize Firebase
initializeApp(firebaseConfig);

export default function App() {
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <Notifications />
      <Router />
    </MantineProvider>
  );
}
