'use client';

import '@aws-amplify/ui-react/styles.css';
import { useEffect } from 'react';
import { Amplify, ResourcesConfig } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';

interface ProvidersProps {
  amplifyConfig: ResourcesConfig;
  children: React.ReactNode;
}

export const AuthProvider = ({ amplifyConfig, children }: ProvidersProps) => {
  useEffect(() => {
    try {
      Amplify.configure(amplifyConfig, { ssr: true });
    } catch (e) {
      console.log(e);
    }
  }, [amplifyConfig]);

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
    >
      <Authenticator.Provider>{children}</Authenticator.Provider>
    </Authenticator>
  );
};
