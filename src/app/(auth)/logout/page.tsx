'use client';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useEffect } from 'react';

const Logout = () => {
  const { signOut } = useAuthenticator((context) => [context.authStatus]);

  useEffect(() => {
    signOut();
    window.location.reload();
  }, [signOut]);

  return <>Logging out...</>;
};

export default Logout;
