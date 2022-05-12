import type { FunctionComponent } from 'react';

interface VideoIntroProps {}

export const VideoIntro: FunctionComponent<VideoIntroProps> = () => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src="https://www.youtube.com/embed/08hXU_J1d-8"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Poinswap RetailFi"
      />
    </div>
  );
};
