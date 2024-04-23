'use client';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';

const Loading = () => {
  return <>Loading...</>;
};

const Redirecting = () => {
  const router = useRouter();
  router.push('/login');
  return <>Redirecting...</>;
};

const AppRoot = () => {
  // https://ui.docs.amplify.aws/react/connected-components/authenticator/advanced#access-auth-state
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  console.log(authStatus);

  return (
    <>
      {authStatus === 'configuring' && <Loading />}
      {(authStatus === 'authenticated' || authStatus === 'unauthenticated') && (
        <Redirecting />
      )}
    </>
  );
};

export default AppRoot;
