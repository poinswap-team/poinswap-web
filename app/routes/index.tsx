import { LayoutSpecial } from '~/components';
import { HomeHero, HomeStory } from '~/contents';

export default function IndexRoute() {
  return (
    <LayoutSpecial>
      <HomeHero />
      <HomeStory />
    </LayoutSpecial>
  );
}
