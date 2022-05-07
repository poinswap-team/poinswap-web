import parse from 'html-react-parser';
import { json, useLoaderData } from 'remix';

import { Image, Layout } from '~/components';
import { QUERY_ALL_ARTICLES, QUERY_ONE_ARTICLE_BY_SLUG } from '~/graphql';
import { graphcmsClient } from '~/lib';

import type { LoaderFunction, MetaFunction } from 'remix';
import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    const response = await graphcmsClient.query(QUERY_ALL_ARTICLES).toPromise();
    const { articles } = response.data;

    return articles.map((article: any) => {
      return { route: `/blog/${article.slug}`, priority: 0.8 };
    });
  },
};

export const meta: MetaFunction = ({ data }) => {
  const { article } = data;

  if (!article) {
    return {
      title: `Blog article not found — Poinswap`,
      description: 'Sorry this is not the article you are looking for.',
    };
  }

  return {
    title: `${article?.title} — Poinswap Blog`,
    description: article?.summary,
    'og:image': article?.coverImage?.url,
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
    <Layout className="prose dark:prose-invert">
      {article?.coverImage && (
        <Image src={article?.coverImage?.url} alt={article?.title} />
      )}
      <h1>{article?.title}</h1>
      <div>{parse(String(article?.content?.html))}</div>
    </Layout>
  );
}
