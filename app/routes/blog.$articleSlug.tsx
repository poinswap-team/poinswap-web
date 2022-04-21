import parse from 'html-react-parser';
import { json, useLoaderData } from 'remix';

import { QUERY_ALL_ARTICLES, QUERY_ONE_ARTICLE_BY_SLUG } from '~/graphql';
import { graphcmsClient } from '~/lib';

import type { SEOHandle } from '@balavishnuvj/remix-seo';
import type { LoaderFunction, MetaFunction } from 'remix';

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    const response = await graphcmsClient.query(QUERY_ALL_ARTICLES).toPromise();
    const { articles } = response.data;

    return articles.map((article: any) => {
      return { route: `/blog/${article.slug}`, priority: 0.8 };
    });
  },
};

// @ts-ignore
export const meta: MetaFunction = ({ data }) => {
  const { article } = data;

  if (!article) {
    return {
      title: `Blog article not found - Poinswap`,
      description: 'Sorry this is not the article you are looking for.',
    };
  }

  return {
    title: `${article.title} - Blog - Poinswap`,
    description: article.summary,
    'og:image': article.coverImage.url,
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  const { articleSlug } = params;

  const response = await graphcmsClient
    .query(QUERY_ONE_ARTICLE_BY_SLUG, { articleSlug })
    .toPromise();

  const { article } = response.data;

  return json({ article });
};

type LoaderData = {
  article: any;
};

export default function BlogArticlePage() {
  const { article } = useLoaderData<LoaderData>();

  return (
    <div>
      <pre>{JSON.stringify(article, null, 2)}</pre>
      <div> {parse(String(article?.content?.html))}</div>
    </div>
  );
}
