'use client';

import { AuthProvider } from '@/providers/auth-provider';
import { NavProvider } from '@/providers/nav-provider';

export function Providers({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <NavProvider>{children}</NavProvider>
    </AuthProvider>
  );
}

export default Providers;
