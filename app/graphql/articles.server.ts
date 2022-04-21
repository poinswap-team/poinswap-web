import { gql } from '@urql/core'

export const FRAGMENT_ARTICLE = gql`
  fragment ArticleDetails on Article {
    id
    title
    slug
    date
    coverImage {
      url
    }
    youtubeVideoId
    summary
    content {
      html
      markdown
    }
  }
`

export const QUERY_ALL_ARTICLES = gql`
  query AllArticles($first: Int, $skip: Int) {
    articles(orderBy: updatedAt_DESC, first: $first, skip: $skip) {
      ...ArticleDetails
    }
  }

  ${FRAGMENT_ARTICLE}
`

export const QUERY_ONE_ARTICLE_BY_SLUG = gql`
  query OneArticleBySlug($articleSlug: String!) {
    article(where: { slug: $articleSlug }) {
      ...ArticleDetails
    }
  }

  ${FRAGMENT_ARTICLE}
`
