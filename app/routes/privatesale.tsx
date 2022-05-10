import { LayoutSpecial } from '~/components';
import {
  PrivateSaleHero,
  StoryOurPartners,
  StoryPoweredPlatforms,
  StoryPressReleases,
  StoryPrivateSaleForm,
  StoryRoadmap,
  StoryTokenomics,
} from '~/contents';
import { actionSubscribe } from '~/features';

import type { SEOHandle } from '@balavishnuvj/remix-seo';
import type { ActionFunction } from 'remix';

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/privatesale`, priority: 0.9 }];
  },
};

export const action: ActionFunction = actionSubscribe;

export default function PrivateSaleRoute() {
  return (
    <LayoutSpecial>
      <PrivateSaleHero />
      <div className="flex flex-col items-center gap-20 px-4 md:px-8">
        <StoryPrivateSaleForm />
        <StoryTokenomics />
        <StoryRoadmap />
        <StoryOurPartners />
        <StoryPoweredPlatforms />
        <StoryPressReleases />
        <StoryPrivateSaleForm />
      </div>
    </LayoutSpecial>
  );
}
