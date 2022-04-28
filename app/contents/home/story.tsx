import {
  Anchor,
  ComicBox,
  ComicSpeech,
  Image,
  ImageInteractive,
  LogoSpan,
  RemixLink,
  useTheme,
} from '~/components';
import { dataMainFeatures } from '~/data';

import type { FunctionComponent } from 'react';

interface HomeStoryProps {}

export const HomeStory: FunctionComponent<HomeStoryProps> = () => {
  return (
    <div className="flex flex-col space-y-4 px-4 md:px-8">
      {/* <StoryIntro /> */}
      <StoryStart />
      <StoryFeatures />
      <StoryReasons />
      <StoryTokenomics />
      <StoryRoadmap />
      <StorySubscribe />
    </div>
  );
};

export const StoryIntro = () => {
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
export const StoryStart = () => {
  const { isLight } = useTheme();

  return (
    <div
      id="home-story-start"
      className="flex w-full flex-col gap-4 lg:flex-row"
    >
      <div
        className="comic-box flex min-h-[500px] flex-1 flex-col items-center justify-center gap-1 space-y-4 bg-cover bg-center p-8"
        style={{
          backgroundImage: `url("${
            isLight
              ? '/assets/backgrounds/panel-1.png'
              : '/assets/backgrounds/panel-1.png'
          }")`,
        }}
      >
        <ComicSpeech>
          Welcome to <LogoSpan />
        </ComicSpeech>
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
        <ComicSpeech>
          We are a tech enabler for retailers to join the blockchain revolution
        </ComicSpeech>
        <ImageInteractive
          alt="Gary Vee Slime"
          srcNormal="/assets/characters/slime-2-a.png"
          srcHover="/assets/characters/slime-2-b.png"
          width={200}
        />
        <ComicSpeech>
          by tokenizing point rewards through <LogoSpan /> DeFi protocols
        </ComicSpeech>
      </div>
    </div>
  );
};

/**
 * Story Features
 */
const StoryFeatures = () => {
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
                <h3 className="font-comic text-2xl font-bold">
                  {feature.name}
                </h3>
                <p className="max-w-[25ch] text-center text-lg ">
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
        className="comic-box flex min-h-[500px] flex-1 flex-col items-start justify-center gap-1 space-y-4 bg-cover bg-center p-8"
        style={{
          backgroundImage: `url("${
            isLight
              ? '/assets/backgrounds/panel-3-light.png'
              : '/assets/backgrounds/panel-3-dark.png'
          }")`,
        }}
      >
        <ComicSpeech className="text-center">
          Let’s join the fun in our{' '}
          <Anchor className="inline" href="https://poinswap.com/discord">
            <Image
              className="inherit h-[40px]"
              alt="Discord"
              src="/assets/logos/discord.svg"
            />
          </Anchor>
        </ComicSpeech>
        <ImageInteractive
          alt="Snoop Dogg Slime"
          srcNormal="/assets/characters/slime-3-a.png"
          srcHover="/assets/characters/slime-3-b.png"
          width={200}
        />
        <ComicSpeech>
          Currently we are preparing the opening of the{' '}
          <RemixLink to="/privatesale">private sale</RemixLink>
        </ComicSpeech>
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
        <Image alt="Tokenomics Chart" src="/assets/images/tokenomics.svg" />
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
        className="flex min-h-[720px] flex-[2] flex-col items-center justify-center gap-1 space-y-4 bg-cover bg-center bg-no-repeat p-8"
        style={{
          backgroundImage: `url("${
            isLight
              ? '/assets/backgrounds/roadmap.jpg'
              : '/assets/backgrounds/roadmap-dark.jpg'
          }")`,
        }}
      >
        <h2 className="font-comic hidden text-center text-3xl">Roadmap</h2>
        <div className="flex flex-col gap-8 md:flex-row">
          <ComicBox className="flex w-full max-w-[320px] flex-col gap-4 p-4">
            <h3 className="font-comic text-4xl font-bold">Q2 2022</h3>
            <ul className="list-items text-xl">
              <li>
                Launch <b>$POIN</b> and smart contract
              </li>
              <li>VC Funding</li>
              <li>Private Sale</li>
              <li>Demo Account</li>
              <li>Launch Alpha</li>
            </ul>
          </ComicBox>
          <ComicBox className="flex w-full max-w-[320px] flex-col gap-4 p-4">
            <h3 className="font-comic text-4xl font-bold">Q3 2022</h3>
            <ul className="list-items text-xl">
              <li>Launch Beta</li>
              <li>Launch Airdrop</li>
              <li>Genesis NFT</li>
              <li>Launch Mini Games</li>
              <li>Launch Token Category</li>
            </ul>
          </ComicBox>
          <ComicBox className="flex w-full max-w-[320px] flex-col gap-4 p-4">
            <h3 className="font-comic text-4xl font-bold">Q4 2022</h3>
            <ul className="list-items text-xl">
              <li>Public Sale</li>
              <li>Poinswap Launch</li>
              <li>Airdrop Distribution</li>
              <li>Launch Premium Account</li>
            </ul>
          </ComicBox>
        </div>
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
