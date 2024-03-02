import { Button } from '@mantine/core';
import { getAuth } from 'firebase/auth';

export const HomePage = () => (
  <>
    <Button
      onClick={() => {
        getAuth().signOut();
      }}
    >
      Logout
    </Button>
  </>
);
