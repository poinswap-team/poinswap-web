import { Image, ImageInteractive, RemixLink, useTheme } from '~/components';

import type { FunctionComponent } from 'react';

interface HomeStoryProps {}

export const HomeStory: FunctionComponent<HomeStoryProps> = () => {
  return (
    <div className="flex flex-col space-y-4 px-4 md:px-8">
      <StoryIntro />
      <StoryStart />
      <StoryFeatures />
      <StoryReasons />
      <StoryTokenomics />
      <StoryRoadmap />
      <StorySubscribe />
    </div>
  );
};

const StoryIntro = () => {
  return (
    <div id="home-story-intro">
      <div className="flex justify-center">
        <h2 className="font-comic text-center text-3xl">
          (Stay tuned. We are revamping the homepage)
        </h2>
      </div>
    </div>
  );
};

/**
 * Story Start
 */
const StoryStart = () => {
  const { isLight } = useTheme();

  return (
    <div
      id="home-story-start"
      className="flex w-full flex-col gap-4 lg:flex-row"
    >
      <div
        className="comic-box flex min-h-[500px] flex-col items-center justify-center gap-1 space-y-4 bg-cover bg-center p-8"
        style={{
          backgroundImage: `url("${
            isLight
              ? '/assets/backgrounds/panel-1.png'
              : '/assets/backgrounds/panel-1.png'
          }")`,
        }}
      >
        <ImageInteractive
          alt="CZ Slime"
          srcNormal="/assets/characters/slime-1-a.png"
          srcHover="/assets/characters/slime-1-b.png"
          width={200}
          className="pt-8"
        />
      </div>

      <div
        className="comic-box flex min-h-[500px] flex-[2] flex-col items-center justify-center gap-1 space-y-4 bg-cover p-8"
        style={{
          backgroundImage: `url("${
            isLight
              ? '/assets/backgrounds/panel-2-light.png'
              : '/assets/backgrounds/panel-2-dark.png'
          }")`,
        }}
      >
        <ImageInteractive
          alt="Gary Vee Slime"
          srcNormal="/assets/characters/slime-2-a.png"
          srcHover="/assets/characters/slime-2-b.png"
          width={200}
        />
      </div>
    </div>
  );
};

/**
 * Story Features
 */
const StoryFeatures = () => {
  const dataMainFeatures = [
    {
      imageUrl: '/assets/icons/feature-swap.png',
      name: 'Swap Token',
      description: 'Description about this especially for metaverse.',
    },
    {
      imageUrl: '/assets/icons/feature-token-a.png',
      name: 'Curated Token',
      description: 'Worry-free because we curate or filter the tokens.',
    },
    {
      imageUrl: '/assets/icons/feature-retailmarket.png',
      name: 'Retail Go To Market',
      description: 'Some long description about this feature.',
    },
  ];

  return (
    <div id="home-story-features">
      <div className="comic-box flex flex-col items-center gap-8 p-12">
        <h2 className="font-comic text-center text-3xl">Main Features</h2>
        <div className="flex flex-col gap-8 sm:flex-row">
          {dataMainFeatures.map((feature) => {
            return (
              <div
                key={feature.name}
                className="flex flex-col items-center gap-2"
              >
                <Image src={feature.imageUrl} alt={feature.name} width={150} />
                <h3 className="text-2xl font-bold">{feature.name}</h3>
                <p className="max-w-[25ch] text-center text-xl">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/**
 * Story Reasons
 */
const StoryReasons = () => {
  const { isLight } = useTheme();

  return (
    <div
      id="home-story-reasons"
      className="flex w-full flex-col gap-4 lg:flex-row"
    >
      <div
        className="comic-box flex min-h-[500px] flex-col items-start justify-center gap-1 space-y-4 bg-cover bg-center p-8"
        style={{
          backgroundImage: `url("${
            isLight
              ? '/assets/backgrounds/panel-3-light.png'
              : '/assets/backgrounds/panel-3-dark.png'
          }")`,
        }}
      >
        <ImageInteractive
          alt="Snoop Dogg Slime"
          srcNormal="/assets/characters/slime-3-a.png"
          srcHover="/assets/characters/slime-3-b.png"
          width={200}
        />
      </div>
    </div>
  );
};

/**
 * Story Tokenomics
 */
const StoryTokenomics = () => {
  return (
    <div id="home-story-tokenomics">
      <div className="comic-box flex flex-col items-center justify-center gap-1 space-y-4 p-8">
        <h2 className="font-comic text-center text-3xl">Tokenomics</h2>
        <h3 className="font-comic text-center text-xl">
          (Stay tuned. We are revamping the Tokenomics)
        </h3>
      </div>
    </div>
  );
};

/**
 * Story Roadmap
 */
const StoryRoadmap = () => {
  const { isLight } = useTheme();

  return (
    <div id="home-story-roadmap">
      <div
        className="comic-box flex min-h-[720px] flex-[2] flex-col items-center justify-start gap-1 space-y-4 bg-cover bg-center bg-no-repeat p-8"
        style={{
          backgroundImage: `url("${
            isLight
              ? '/assets/backgrounds/roadmap.jpg'
              : '/assets/backgrounds/roadmap-dark.jpg'
          }")`,
        }}
      >
        <h2 className="font-comic text-center text-3xl">Roadmap</h2>
      </div>
    </div>
  );
};

/**
 * Story Subscribe
 */
const StorySubscribe = () => {
  return (
    <div id="home-story-subscribe">
      <div className="comic-box flex flex-col items-center justify-center gap-1 space-y-4 p-8">
        <h2 className="font-comic text-center text-3xl">
          Subscribe for updates
        </h2>
        <Image
          height={300}
          className="max-h-[300px]"
          alt="Multiple Slimes"
          src="/assets/characters/slime-5-a.png"
        />
        <section className="flex-section justify-center space-x-2">
          <RemixLink
            to="/discord"
            className="btn btn-lg btn-solid rounded-base"
            data-color="primary"
          >
            Join our Discord server
          </RemixLink>
          <RemixLink
            to="/twitter"
            className="btn-outline btn btn-lg rounded-base"
            data-color="primary"
          >
            Follow us on Twitter
          </RemixLink>
        </section>
      </div>
    </div>
  );
};
