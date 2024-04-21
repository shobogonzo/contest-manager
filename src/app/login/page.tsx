'use client';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';

const Loading = () => {
  return <>Loading...</>;
};

const Redirecting = () => {
  const router = useRouter();
  router.push('/home');
  return <>Redirecting...</>;
};

const Logout = () => {
  // https://ui.docs.amplify.aws/react/connected-components/authenticator/advanced#access-auth-state
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  console.log(authStatus);

  return (
    <>
      {(authStatus === 'configuring' || authStatus === 'unauthenticated') && (
        <Loading />
      )}
      {authStatus === 'authenticated' && <Redirecting />}
    </>
  );
};

export default Logout;
