import { json } from 'remix';

import { LayoutSpecial } from '~/components';
import {
  PrivateSaleHero,
  StoryFAQ,
  StoryOurPartners,
  StoryPoweredPlatforms,
  StoryPressReleases,
  StoryPrivateSaleForm,
  StoryRoadmap,
  CommonTokenomics,
} from '~/contents';
import { dataFAQsPrivateSale } from '~/data';
import { actionSubscribe } from '~/features';

import type { SEOHandle } from '@balavishnuvj/remix-seo';
import type { ActionFunction, LoaderFunction } from 'remix';

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/privatesale`, priority: 0.9 }];
  },
};

export const action: ActionFunction = actionSubscribe;

export const loader: LoaderFunction = async () => {
  return json({
    faqs: dataFAQsPrivateSale,
  });
};

export default function PrivateSaleRoute() {
  return (
    <LayoutSpecial>
      <PrivateSaleHero />
      <div className="flex flex-col items-center gap-20 px-4 md:px-8">
        <StoryPrivateSaleForm />
        <CommonTokenomics />
        <StoryRoadmap />
        <StoryOurPartners />
        <StoryPoweredPlatforms />
        <StoryPressReleases />
        <StoryFAQ />
        <StoryPrivateSaleForm />
      </div>
    </LayoutSpecial>
  );
}
