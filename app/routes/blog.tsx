import { json, useLoaderData } from 'remix';

import { QUERY_ALL_ARTICLES } from '~/graphql';
import { graphcmsClient } from '~/lib';

import type { LoaderFunction, MetaFunction } from 'remix';
import type { SEOHandle } from '~/components';

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/blog`, priority: 0.9 }];
  },
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: 'Poinswap - Blog articles',
    description: 'Resources and readings from Poinswap community.',
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pageQuery = Number(url.searchParams.get('page'));
  const itemsPerPage = 10;
  const first = itemsPerPage;
  const skip = pageQuery > 1 ? itemsPerPage * pageQuery - itemsPerPage : 0;

  const response = await graphcmsClient
    .query(QUERY_ALL_ARTICLES, { first, skip })
    .toPromise();

  const { articles } = response.data;

  return json({
    articles,
  });
};

type LoaderData = {
  articles: any[];
};

export default function BlogRoute() {
  const { articles } = useLoaderData<LoaderData>();

  return (
    <div className="prose dark:prose-invert">
      <h1>Blog</h1>
      <pre>{JSON.stringify(articles, null, 2)}</pre>
    </div>
  );
}
