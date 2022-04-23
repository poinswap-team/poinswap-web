import { useTheme } from '~/components';

import type { FunctionComponent } from 'react';

interface HomeHeroProps {}

export const HomeHero: FunctionComponent<HomeHeroProps> = () => {
  const { isLight } = useTheme();

  return (
    <div
      className="flex h-[650px] items-start justify-center"
      style={{
        // overflow: 'hidden',
        // backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'transparent',
        backgroundImage: `url("${
          isLight
            ? '/assets/backgrounds/hero-background-light.png'
            : '/assets/backgrounds/hero-background-dark.png'
        }")`,
      }}
    >
      <div className="comic-box my-32">
        <h1 className="font-comic max-w-[35ch] text-center text-3xl font-extrabold leading-normal">
          Pioneering RetailFi with user friendly and curated Crypto
          Decentralized Exchange (DEX)
        </h1>
      </div>
    </div>
  );
};
