import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { ResourcesConfig } from 'aws-amplify';
import { cookies } from 'next/headers';
import { columns } from './columns';
import { DataTable } from './data-table';

import config from '@/amplifyconfiguration.json';
import * as queries from '@/graphql/queries';
import { User } from '@/API';

const serverClient = generateServerClientUsingCookies({
  config: config as ResourcesConfig,
  cookies
});

async function getData(): Promise<User[]> {
  'use server';
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
