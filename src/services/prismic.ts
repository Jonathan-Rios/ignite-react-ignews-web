// node-fetch is used to make network requests to the Prismic Rest API.
// In Node.js Prismic projects, you must provide a fetch method to the
// Prismic client.
import fetch from 'node-fetch';
import * as Prismic from '@prismicio/client';

const repositoryName = process.env.PRISMIC_REPOSITORY;
const accessToken = process.env.PRISMIC_ACCESS_TOKEN; // If your repository is private, add an access token.

// The `routes` property is your Route Resolver. It defines how you will
// structure URLs in your project. Update the types to match the Custom
// Types in your project, and edit the paths to match the routing in your
// project.
const routes = [
  {
    type: 'my-custom-post',
    path: '/:uid',
  },
];

export function getPrismicClient(req?: unknown) {
  // q q eu vou aprontar com esse req ??
  const prismic = Prismic.createClient(repositoryName, {
    fetch,
    accessToken,
    routes,
  });

  return prismic;
}
