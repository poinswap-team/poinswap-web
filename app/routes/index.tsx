import { LayoutSpecial } from '~/components';
import { HomeHero, HomeStory } from '~/contents';

import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/`, priority: 1 }];
  },
};

export default function IndexRoute() {
  return (
    <LayoutSpecial>
      <HomeHero />
      <HomeStory />
    </LayoutSpecial>
  );
}
