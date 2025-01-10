import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env'; // Ensure these are defined in your env.js or environment file

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
});


