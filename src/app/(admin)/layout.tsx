import Header from '@/components/header';
import NavBar from '@/components/navbar';
import { getTenantContext } from '@/utils/amplifyServerUtils';
import { cookies } from 'next/headers';
import { getCurrentUser } from 'aws-amplify/auth/server';

const AdminLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const context = await getTenantContext('default');
  const currentUser = await context.runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => getCurrentUser(contextSpec)
  });

  return (
    <>
      <NavBar />
      <div className="lg:pl-72">
        <Header user={currentUser} />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
