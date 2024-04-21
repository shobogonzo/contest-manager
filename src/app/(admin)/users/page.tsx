import { cookies } from 'next/headers';
import { DataTable } from './data-table';
import { columns } from './columns';

import * as queries from '@/graphql/queries';
import { User } from '@/API';
import { getServerClient } from '@/utils/amplifyServerUtils';

async function getData(): Promise<User[]> {
  'use server';
  const serverClient = await getServerClient('default', cookies);
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
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Users
      </h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
