import { gql } from '@urql/core';

export const FRAGMENT_ARTICLE = gql`
  fragment ArticleDetails on Article {
    id
    title
    slug
    date
    coverImage {
      url(
        transformation: {
          image: { resize: { width: 1200, height: 800, fit: clip } }
        }
      )
    }
    youtubeVideoId
    summary
    content {
      html
      markdown
    }
  }
`;

export const QUERY_ALL_ARTICLES = gql`
  query AllArticles($first: Int, $skip: Int) {
    articles(orderBy: date_DESC, first: $first, skip: $skip) {
      ...ArticleDetails
    }
  }

  ${FRAGMENT_ARTICLE}
`;

export const QUERY_ONE_ARTICLE_BY_SLUG = gql`
  query OneArticleBySlug($articleSlug: String!) {
    article(where: { slug: $articleSlug }) {
      ...ArticleDetails
    }
  }

  ${FRAGMENT_ARTICLE}
`;
