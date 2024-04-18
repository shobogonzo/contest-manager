import { cookies } from 'next/headers';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { DataTable } from './data-table';
import { columns } from './columns';

import * as queries from '@/graphql/queries';
import { User } from '@/API';
import { getTenantContext } from '@/utils/amplifyServerUtils';

const serverClients: any[] = [];

async function getData(): Promise<User[]> {
  'use server';
  let serverClient = serverClients.find(
    (c) => c.cookies === cookies
  )?.serverClient;

  if (!serverClient) {
    // TODO get tenantId from cookies
    const tenantId = 'default';
    const context = await getTenantContext(tenantId);
    serverClient = generateServerClientUsingCookies({
      config: context.config,
      cookies
    });

    serverClients.push({ cookies, serverClient });
  }

  const { data }: any = await serverClient.graphql({
    query: queries.listUsers,
    variables: { limit: 10 }
  });
  return data.listUsers;
}

export default async function Users() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <h1>Users</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
