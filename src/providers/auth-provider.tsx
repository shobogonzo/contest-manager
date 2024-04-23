'use client';

import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { getTenantContext } from '@/utils/amplifyServerUtils';

interface ProvidersProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: ProvidersProps) => {
  const tenantId = 'default';
  getTenantContext(tenantId).then(({ config }) => {
    Amplify.configure(config, { ssr: true });
  });

  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};
