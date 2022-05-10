import { json, useLoaderData } from 'remix';

import { Image, Layout, RemixLink } from '~/components';
import { QUERY_ALL_ARTICLES } from '~/graphql';
import { graphcmsClient } from '~/lib';

import type { LoaderFunction, MetaFunction } from 'remix';
import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/blog`, priority: 0.9 }];
  },
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: 'Poinswap Blog',
    description: 'Articles, resources, and readings from Poinswap community.',
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pageQuery = Number(url.searchParams.get('page'));
  const itemsPerPage = 100;
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
    <Layout>
      <h1 className="font-accent mb-8 text-4xl text-primary-500">
        Blog Articles
      </h1>

      <div className="prose-config flex flex-col space-y-8 prose-a:no-underline">
        {articles.map((article) => {
          return (
            <RemixLink key={article?.id} to={article?.slug}>
              <div className="flex flex-col">
                {article?.coverImage && (
                  <Image
                    className="rounded-md"
                    src={article?.coverImage?.url}
                    alt={article?.title}
                  />
                )}
                <h2 className="mt-0 text-2xl font-bold md:text-3xl">
                  {article?.title}
                </h2>
                <p className="text-md">{article?.summary}</p>
              </div>
            </RemixLink>
          );
        })}
      </div>
    </Layout>
  );
}
