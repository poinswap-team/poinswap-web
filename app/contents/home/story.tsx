import { Image, RemixLink } from '~/components';

import type { FunctionComponent } from 'react';

interface HomeStoryProps {}

export const HomeStory: FunctionComponent<HomeStoryProps> = () => {
  return (
    <div className="px-4 md:px-8">
      <StorySubscribe />
    </div>
  );
};

const StorySubscribe = () => {
  return (
    <div>
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
