'use client';

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';

const Loading = () => {
  return <>Loading...</>;
};

const Redirecting = () => {
  const router = useRouter();
  router.push('/home');
  return <>Redirecting...</>;
};

const Login = () => {
  // https://ui.docs.amplify.aws/react/connected-components/authenticator/advanced#access-auth-state
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  switch (authStatus) {
    case 'configuring':
      return <Loading />;
    case 'authenticated':
      return <Redirecting />;
    default:
      return (
        <Authenticator
          loginMechanisms={['email']}
          signUpAttributes={['given_name', 'family_name', 'phone_number']}
          formFields={{
            signUp: {
              given_name: {
                label: 'First Name',
                placeholder: 'Enter your First Name',
                order: 1
              },
              family_name: {
                label: 'Last Name',
                placeholder: 'Enter your Last Name',
                order: 2
              },
              email: {
                order: 3
              },
              phone_number: {
                order: 4
              }
            }
          }}
          variation="modal"
        />
      );
  }
};

export default Login;
