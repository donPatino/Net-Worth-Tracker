// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Asset } = initSchema(schema);

export {
  Asset
};