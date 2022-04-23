import { RemixLink, useTheme } from '~/components';

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
      <div>
        <div className="comic-box my-32 flex flex-col space-y-4">
          <h1 className="font-comic max-w-[35ch] text-center text-3xl font-extrabold leading-normal">
            Pioneering RetailFi with user friendly and curated Crypto
            Decentralized Exchange (DEX)
          </h1>
          <section className="flex-section justify-center space-x-4">
            <RemixLink
              to="/blog"
              className="btn btn-lg btn-solid rounded-base"
              data-color="primary"
            >
              Read Updates
            </RemixLink>
            <RemixLink
              to="/whitepaper"
              className="btn-outline btn btn-lg rounded-base"
              data-color="primary"
            >
              Read Whitepaper
            </RemixLink>
          </section>
        </div>

        <div>Character</div>
      </div>
    </div>
  );
};
