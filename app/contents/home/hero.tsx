import { RemixLink, useTheme, Image } from '~/components';

import type { FunctionComponent } from 'react';

interface HomeHeroProps {}

export const HomeHero: FunctionComponent<HomeHeroProps> = () => {
  const { isLight } = useTheme();

  return (
    <div
      id="home-hero-background"
      className="mb-20 flex h-[650px] items-start justify-center"
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
      <div id="home-hero-box-characters" className="px-4">
        <div className="comic-box mt-32 flex flex-col space-y-4 p-5">
          <h1 className="font-comic max-w-[36ch] text-center text-xl font-extrabold leading-normal md:text-3xl">
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
