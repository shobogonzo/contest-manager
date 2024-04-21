import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { getTenantContext } from '@/utils/amplifyServerUtils';
import { Providers } from './providers';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Contest Manager 42',
  description: 'The ultimate band and orchestra contest management system'
};

const RootLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const tenantId = 'default';
  const context = await getTenantContext(tenantId);

  return (
    <html lang="en" className="h-full bg-white">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers amplifyConfig={context.config}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
