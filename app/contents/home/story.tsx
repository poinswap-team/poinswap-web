import { Image } from '~/components';

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
    <div className="font-comic">
      <div className="comic-box flex flex-col items-center justify-center gap-1 space-y-4 pt-8">
        <h2 className="text-2xl">For now, subscribe for updates</h2>
        <Image
          className="h-[300px]"
          alt="Multiple Slimes"
          src="/assets/characters/slime-5-a.png"
        />
      </div>
    </div>
  );
};
