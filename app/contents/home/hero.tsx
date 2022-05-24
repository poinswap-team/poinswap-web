import { RemixLink, useTheme, Image } from '~/components';
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface HomeHeroProps {}

export const HomeHero: FunctionComponent<HomeHeroProps> = () => {
  const { isLight } = useTheme();

  return (
    <div
      id="home-hero"
      className={classx(
        'mb-14 flex h-[650px] items-start justify-center',
        'bg-cover',
        'bg-home-light-small dark:bg-home-dark-small',
        'sm:bg-home-light sm:dark:bg-home-dark'
      )}
    >
      <div
        id="home-hero-box-characters"
        className="flex flex-col gap-10 px-4 lg:h-[580px] lg:flex-row"
      >
        <div className="mt-20 flex flex-col space-y-5 p-5 lg:mt-32">
          <header className="stack gap-5">
            <h1 className="max-w-[36ch] text-2xl font-bold leading-normal  md:text-4xl ">
              The first DeFi hub for retail
            </h1>
            <h2 className="max-w-[36ch] text-lg md:text-2xl">
              Poinswap is building the RetailFi ecosystem on Avalanche with
              user-friendly and curated Decentralized Exchange (DEX)
            </h2>
          </header>

          <section className="flex-section gap-2 sm:gap-4">
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

        <div className="flex justify-center pt-20 sm:pt-5 md:pt-0 lg:pt-80">
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
