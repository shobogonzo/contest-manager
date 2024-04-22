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

  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};
