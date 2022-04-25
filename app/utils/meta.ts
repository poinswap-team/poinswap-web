import { metaDefault } from '~/data'

type CreateMeta = {
  title: string
  description: string
  name?: string
  color?: string
  ogImageAlt?: string
  ogImageUrl?: string
  twiterImageUrl?: string
  url?: string
  route?: string
  locale?: string
}

export const createMeta = ({
  title,
  description,
  name,
  color,
  ogImageAlt,
  ogImageUrl,
  twiterImageUrl,
  url,
  route,
  locale,
}: CreateMeta) => ({
  title: title || name || metaDefault.title,
  description: description || metaDefault.description,

  'application-name': name || title || metaDefault.name,
  'apple-mobile-web-app-title': title || name || metaDefault.title,
  'theme-color': color || metaDefault.color,
  'msapplication-TileColor': color || metaDefault.color,
  'msapplication-config': url || `${metaDefault.url}browserconfig.xml`,

  'og:site_name': name || title || metaDefault.name,
  'og:title': title || name || metaDefault.title,
  'og:description': description || metaDefault.description,
  'og:locale': locale || metaDefault.locale,
  'og:url': route ? `${metaDefault.url}${route}` : url || metaDefault.url,
  'og:image': ogImageUrl
    ? metaDefault.url + ogImageUrl
    : metaDefault.url + metaDefault.ogImageUrl,
  'og:image:type': metaDefault.ogImageType || 'image/jpeg',
  'og:image:alt': ogImageAlt || title || metaDefault.ogImageAlt,

  'twitter:card': 'summary_large_image',
  'twitter:site': '@poinswap',
  'twitter:creator': '@poinswap',
  'twitter:title': title || name || metaDefault.title,
  'twitter:description': description || metaDefault.description,
  'twitter:image': twiterImageUrl
    ? metaDefault.url + twiterImageUrl
    : metaDefault.url + metaDefault.twiterImageUrl,

  'fb:app_id': metaDefault.fbAppId,
})
