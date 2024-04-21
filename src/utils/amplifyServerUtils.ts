import { NextServer, createServerRunner } from '@aws-amplify/adapter-nextjs';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { ResourcesConfig } from 'aws-amplify';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

export type AmplifyServerContext = {
  tenantId: string;
  config: ResourcesConfig;
  runWithAmplifyServerContext: NextServer.RunOperationWithContext;
};

const amplifyServerContexts: AmplifyServerContext[] = [];

export const getTenantContext = async (tenantId: string) => {
  let context: AmplifyServerContext | undefined = amplifyServerContexts?.find(
    (context: AmplifyServerContext) => context.tenantId === tenantId
  );
  if (context) {
    return context;
  }

  const config = await fetch(
    `${process.env.NEXT_PUBLIC_CONFIG_URL}/${tenantId}/amplifyconfiguration.json`
  ).then((res) => res.json() as ResourcesConfig);

  const { runWithAmplifyServerContext } = createServerRunner({
    config
  });

  context = {
    tenantId,
    config,
    runWithAmplifyServerContext
  };

  amplifyServerContexts.push(context);
  return context;
};

export const getServerClient = async (
  tenantId: string,
  cookies: () => ReadonlyRequestCookies
) => {
  const context = await getTenantContext(tenantId);
  const serverClient = generateServerClientUsingCookies({
    config: context.config,
    cookies
  });
  return serverClient;
};
