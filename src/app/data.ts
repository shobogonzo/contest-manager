"use server";

import { listUsers } from "@/graphql/queries";
import { ListUsersQuery, User } from "@/graphql/types";
import { graphqlServerClient } from "@/utils/amplify-utils";
import { GraphQLResult } from "aws-amplify/api";

export async function getUsers(nextToken?: string): Promise<{
  users: User[];
  nextToken?: string;
  errorMessage?: string;
}> {
  try {
    const client = await graphqlServerClient();
    const { data, errors }: GraphQLResult<ListUsersQuery> =
      await client.graphql({
        query: listUsers,
        variables: { limit: 30, nextToken },
      });

    return {
      users: data.listUsers.users ?? [],
      errorMessage: errors?.join("\n"),
      nextToken: data.listUsers.nextToken ?? undefined,
    };
  } catch (err) {
    return { users: [], errorMessage: "Failed to fetch users" };
  }
}
