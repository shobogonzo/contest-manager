import { cookies } from "next/headers";

import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { ResourcesConfig } from "@aws-amplify/core";
import {
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
} from "aws-amplify/auth/server";
import { jwtDecode } from "jwt-decode";

const config: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID!,
      identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID!,
    },
  },
  API: {
    GraphQL: {
      endpoint: process.env.NEXT_PUBLIC_API_URL!,
      region: process.env.NEXT_PUBLIC_REGION,
      defaultAuthMode: "userPool",
    },
  },
};

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
});

export const graphqlServerClient = async () => {
  const idToken = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: async (contextSpec) => {
      const user = await fetchAuthSession(contextSpec);
      return user.tokens?.idToken?.toString();
    },
  });

  if (!idToken || idToken.length === 0) {
    throw new Error("Current user not found");
  }

  return generateServerClientUsingCookies({
    config,
    cookies,
    authToken: idToken,
  });
};

export const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
});

export async function getCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: async (contextSpec) => {
        const user = await getCurrentUser(contextSpec);
        const claims = await fetchUserAttributes(contextSpec);
        return { ...user, ...claims };
      },
    });
    return currentUser;
  } catch (error) {
    console.error(error);
  }
}
