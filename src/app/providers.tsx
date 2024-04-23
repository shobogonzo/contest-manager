import { AuthProvider } from '@/providers/auth-provider';
import { NavProvider } from '@/providers/nav-provider';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <NavProvider>{children}</NavProvider>
    </AuthProvider>
  );
}

export default Providers;
