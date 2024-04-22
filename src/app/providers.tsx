import { ResourcesConfig } from 'aws-amplify';
import { AuthProvider } from '@/providers/auth-provider';
import { NavProvider } from '@/providers/nav-provider';

interface ProvidersProps {
  amplifyConfig: ResourcesConfig;
  children: React.ReactNode;
}

export function Providers({ amplifyConfig, children }: ProvidersProps) {
  return (
    <AuthProvider amplifyConfig={amplifyConfig}>
      <NavProvider>{children}</NavProvider>
    </AuthProvider>
  );
}

export default Providers;
