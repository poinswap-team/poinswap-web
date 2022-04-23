import { Image, ImageInteractive, RemixLink, useTheme } from '~/components';

import type { FunctionComponent } from 'react';

interface HomeStoryProps {}

export const HomeStory: FunctionComponent<HomeStoryProps> = () => {
  return (
    <div className="flex flex-col space-y-4 px-4 md:px-8">
      <StoryStart />
      <StorySubscribe />
    </div>
  );
};

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

const StorySubscribe = () => {
  return (
    <div id="home-story-subscribe">
      <div className="comic-box flex flex-col items-center justify-center gap-1 space-y-4 p-8">
        <h2 className="font-comic text-center text-2xl">
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
