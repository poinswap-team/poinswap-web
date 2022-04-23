import { useTheme } from '~/components';

import type { FunctionComponent } from 'react';

interface HomeHeroProps {}

export const HomeHero: FunctionComponent<HomeHeroProps> = () => {
  const { isLight } = useTheme();

  return (
    <div
      className="mb-12 flex h-[750px] items-center justify-center"
      style={{
        overflow: 'hidden',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: 'transparent',
        backgroundImage: `url("${
          isLight
            ? '/assets/backgrounds/hero-background-light.png'
            : '/assets/backgrounds/hero-background-dark.png'
        }")`,
      }}
    >
      <div>
        <h1>
          Pioneering RetailFi with user friendly and curated decentralized
          exchange (DEX)
        </h1>
      </div>
    </div>
  );
};
