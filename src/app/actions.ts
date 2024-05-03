'use server';

import { ListUsersQuery, User } from '@/API';
import { listUsers } from '@/graphql/queries';
import { getServerClient } from '@/utils/amplifyServerUtils';
import { GraphQLResult } from 'aws-amplify/api';
import { cookies } from 'next/headers';

export async function getUsers(nextToken?: string): Promise<{
  users: User[];
  nextToken?: string;
  errorMessage?: string;
}> {
  const serverClient = await getServerClient('default', cookies);
  try {
    const { data, errors }: GraphQLResult<ListUsersQuery> =
      await serverClient.graphql({
        query: listUsers,
        variables: { limit: 30, nextToken }
      });
    return {
      users: data.listUsers.users ?? [],
      errorMessage: errors?.join('\n'),
      nextToken: data.listUsers.nextToken ?? undefined
    };
  } catch (err) {
    return { users: [], errorMessage: 'Failed to fetch users' };
  }
}
