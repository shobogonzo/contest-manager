'use client';

import { Amplify, ResourcesConfig } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import config from '@/amplifyconfiguration.json';

Amplify.configure(config as ResourcesConfig, { ssr: true });

export const AuthProvider = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};
