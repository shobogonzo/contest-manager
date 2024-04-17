'use client';

import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';

const AppRoot = () => {
  const router = useRouter();
  router.push('/users');
  return <>Redirecting...</>;
};

const App = () => {
  const { route } = useAuthenticator((context) => [context.route]);

  return (
    <>
      {route === 'transition' && 'Loading...'}
      {route === 'authenticated' && <AppRoot />}
    </>
  );
};

export default withAuthenticator(App, {
  loginMechanisms: ['email'],
  signUpAttributes: ['given_name', 'family_name', 'phone_number'],
  formFields: {
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
  }
});
