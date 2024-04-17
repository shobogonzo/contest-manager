import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import config from '@/amplifyconfiguration.json';
import { ResourcesConfig } from 'aws-amplify';

export const { runWithAmplifyServerContext } = createServerRunner({
  config: config as ResourcesConfig
});
