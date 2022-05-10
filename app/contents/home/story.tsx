import {
  Anchor,
  ComicBox,
  ComicSpeech,
  H2,
  Image,
  ImageInteractive,
  LogoSpan,
  RemixLink,
  useTheme,
} from '~/components';
import {
  dataMainFeatures,
  dataOurPartners,
  dataPoweredPlatforms,
  dataPressReleases,
} from '~/data';

import type { FunctionComponent } from 'react';

interface HomeStoryProps {}

export const HomeStory: FunctionComponent<HomeStoryProps> = () => {
  return (
    <div className="flex flex-col space-y-8 px-4 md:px-8">
      {/* <StoryIntro /> */}
      <StoryStart />
      <StoryFeatures />
      <StoryReasons />
      <StoryTokenomics />
      <StoryRoadmap />
      <StoryOurPartners />
      <StoryPoweredPlatforms />
      <StoryPressReleases />
      <StorySubscribe />
    </div>
  );
};

export const StoryIntro = () => {
  return (
    <div id="home-story-intro">
      <div className="flex justify-center">
        <h2 className="font-accent text-center text-3xl">
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
          We are tech enablers for retailers to join the blockchain revolution
        </ComicSpeech>
        <ImageInteractive
          alt="Gary Vee Slime"
          srcNormal="/assets/characters/slime-2-a.png"
          srcHover="/assets/characters/slime-2-b.png"
          width={200}
        />
        <ComicSpeech>
          By tokenizing point rewards and whitelisting subnets, powered by{' '}
          <Anchor className="text-primary-500" href="https://avax.network/">
            Avalance (AVAX)
          </Anchor>
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
      <div className="flex flex-col items-center gap-8 p-12">
        <h2 className="font-accent text-center text-3xl">Main Features</h2>
        <div className="flex flex-col flex-wrap justify-center gap-8 sm:flex-row">
          {dataMainFeatures.map((feature) => {
            return (
              <div
                key={feature.name}
                className="flex flex-col items-center gap-2"
              >
                <Image src={feature.imageUrl} alt={feature.name} width={150} />
                <h3 className="font-accent text-2xl font-bold">
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
          Currently we are preparing to open{' '}
          <RemixLink className="font-bold text-primary-500" to="/privatesale">
            the private sale
          </RemixLink>
        </ComicSpeech>
      </div>
    </div>
  );
};

/**
 * Story Tokenomics
 */
const StoryTokenomics = () => {
  const { isLight } = useTheme();

  return (
    <div id="home-story-tokenomics">
      <div className="flex flex-col items-center justify-center gap-1 space-y-4 p-8">
        <h2 className="font-accent text-center text-3xl">Tokenomics</h2>
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <Image
            className="max-h-[400px]"
            alt="Tokenomics Chart"
            src={
              isLight
                ? '/assets/images/tokenomics-light.png'
                : '/assets/images/tokenomics-dark.png'
            }
          />
          <ul className="list-items space-y-2 text-xl">
            <li>
              Staking and Ecosystem: <b>40%</b>
            </li>
            <li>
              Team and Future Team: <b>20%</b>
            </li>
            <li>
              VC and Advisors: <b>21%</b>
            </li>
            <li>
              Private Sale, IDO, Airdrop: <b>10%</b>
            </li>
            <li>
              Inflation and Reserve: <b>9%</b>
            </li>
          </ul>
        </div>
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
        className="flex min-h-[720px] flex-[2] flex-col items-center justify-center gap-1 space-y-4 bg-cover bg-center bg-no-repeat p-12"
        style={{
          backgroundImage: `url("${
            isLight
              ? '/assets/backgrounds/roadmap-light.png'
              : '/assets/backgrounds/roadmap-dark.png'
          }")`,
        }}
      >
        <h2 className="font-accent hidden text-center text-3xl">Roadmap</h2>
        <div className="flex flex-col gap-8 md:flex-row">
          <ComicBox className="flex w-full max-w-[320px] flex-col gap-4 p-4">
            <h3 className="font-accent text-4xl font-bold">Q2 2022</h3>
            <ul className="list-items text-xl">
              <li>Launch $POIN and smart contract</li>
              <li>VC Funding</li>
              <li>Private Sale</li>
              <li>Demo Account</li>
              <li>Launch Alpha</li>
              <li>Staking Event</li>
              <li>Pre-sale</li>
            </ul>
          </ComicBox>
          <ComicBox className="flex w-full max-w-[320px] flex-col gap-4 p-4">
            <h3 className="font-accent text-4xl font-bold">Q3 2022</h3>
            <ul className="list-items text-xl">
              <li>Public Sale</li>
              <li>Launch Beta</li>
              <li>Airdrop Campaign</li>
              <li>Genesis NFT</li>
              <li>Launch Mini Games</li>
              <li>Community Building</li>
            </ul>
          </ComicBox>
          <ComicBox className="flex w-full max-w-[320px] flex-col gap-4 p-4">
            <h3 className="font-accent text-4xl font-bold">Q4 2022</h3>
            <ul className="list-items text-xl">
              <li>Poinswap v1 Launch</li>
              <li>Token Category</li>
              <li>Airdrop Distribution</li>
              <li>Retail Launchpad</li>
              <li>Retail Profile</li>
              <li>Community Fund</li>
            </ul>
          </ComicBox>
        </div>
      </div>
    </div>
  );
};

/**
 * Story Our Partners
 */
export const StoryOurPartners = () => {
  const { isLight } = useTheme();

  return (
    <div id="home-story-our-partners">
      <div className="box-story">
        <H2>Our Partners</H2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {dataOurPartners.map((partner) => {
            const partnerImageUrl = isLight
              ? partner.imageLightUrl || partner.imageUrl
              : partner.imageDarkUrl || partner.imageUrl;

            return (
              <div key={partner.name}>
                <Image
                  className="max-h-[100px] max-w-[200px]"
                  alt={partner.name}
                  src={partnerImageUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/**
 * Story Powered Platforms
 */
export const StoryPoweredPlatforms = () => {
  const { isLight } = useTheme();

  return (
    <div id="home-story-powered-platforms">
      <div className="box-story">
        <H2>Powered By</H2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {dataPoweredPlatforms.map((platform) => {
            const platformImageUrl = isLight
              ? platform.imageLightUrl
              : platform.imageDarkUrl;

            return (
              <Anchor href={platform.url} key={platform.name}>
                <Image
                  className="max-h-[100px] max-w-[250px]"
                  alt={platform.name}
                  src={platformImageUrl}
                />
              </Anchor>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/**
 * Story Press Releases
 */
export const StoryPressReleases = () => {
  // const { isLight } = useTheme();

  return (
    <div id="home-story-powered-platforms">
      <div className="box-story">
        <H2>As Seen On</H2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {dataPressReleases.map((item) => {
            return (
              <Anchor key={item.name} href={item.url}>
                <Image
                  className="max-h-[100px] max-w-[250px]"
                  alt={item.name}
                  src={item.imageUrl}
                />
              </Anchor>
            );
          })}
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
      <div className="flex flex-col items-center justify-center gap-1 space-y-4 p-8">
        <H2>Subscribe for updates</H2>
        <Image
          height={300}
          className="max-h-[300px]"
          alt="Multiple Slimes"
          src="/assets/characters/slime-5-a.png"
        />
        <section className="flex-section justify-center space-x-2">
          <Anchor
            href="https://poinswap.com/discord"
            className="btn btn-lg btn-solid rounded-base"
            data-color="primary"
          >
            Join our Discord server
          </Anchor>
          <Anchor
            href="https://poinswap.com/twitter"
            className="btn-outline btn btn-lg rounded-base"
            data-color="primary"
          >
            Follow us on Twitter
          </Anchor>
        </section>
      </div>
    </div>
  );
};
