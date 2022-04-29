/* eslint-disable no-console */
import { useParams } from '@remix-run/react';

import { H1, Layout, RemixLink } from '~/components';

import type { LoaderFunction, ActionFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ params }) => {
  console.info(params['*']);
  return null;
};

export const action: ActionFunction = async ({ params }) => {
  console.info(params['*']);
  return null;
};

export default function SplatRoute() {
  const params = useParams();
  console.info(params['*']);

  return (
    <Layout>
      <H1>Sorry, page not found</H1>
      <RemixLink
        to="/"
        className="btn btn-lg btn-solid rounded-base"
        data-color="primary"
      >
        Back to home page
      </RemixLink>
    </Layout>
  );
}
