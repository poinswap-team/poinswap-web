import { RemixLink, useTheme, Image } from '~/components';

import type { FunctionComponent } from 'react';

interface HomeHeroProps {}

export const HomeHero: FunctionComponent<HomeHeroProps> = () => {
  const { isLight } = useTheme();

  return (
    <div
      id="home-hero-background"
      className="mb-32 flex h-[650px] items-start justify-center bg-cover"
      style={{
        backgroundImage: `url("${
          isLight
            ? '/assets/backgrounds/hero-background-light.png'
            : '/assets/backgrounds/hero-background-dark.png'
        }")`,
      }}
    >
      <div id="home-hero-box-characters" className="px-4">
        <div className="comic-box-transparent mt-32 flex flex-col space-y-4 p-5 sm:mt-28">
          <h1 className="max-w-[36ch] text-2xl font-bold leading-normal sm:text-center md:text-4xl md:leading-normal">
            Poinswap is building an ecosystem for retailers on Avalanche with
            user-friendly and curated Decentralized Exchange (DEX)
          </h1>

          <section className="flex-section gap-2 sm:justify-center sm:gap-4">
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

        <div className="flex justify-center pt-20 md:pt-10">
          <div className="flex space-x-2 self-end">
            <Image
              alt="Slime Outfit"
              className="mb-20 h-[160px] self-end md:h-[200px]"
              src={
                isLight
                  ? '/assets/characters/hero-slime-outfit-light.png'
                  : '/assets/characters/hero-slime-outfit-dark.png'
              }
            />
            <Image
              alt="Slime Plain"
              className="mb-1 h-[115px] self-end md:h-[144px]"
              src={
                isLight
                  ? '/assets/characters/hero-slime-plain-light.png'
                  : '/assets/characters/hero-slime-plain-dark.png'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
