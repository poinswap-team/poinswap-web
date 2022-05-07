import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface ComicBoxProps {
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

export const ComicBox: FunctionComponent<ComicBoxProps> = ({
  children,
  className,
}) => {
  return <div className={classx('comic-box', className)}>{children}</div>;
};

interface ComicSpeechProps {
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

export const ComicSpeech: FunctionComponent<ComicSpeechProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classx(
        'comic-box p-4 text-center text-xl font-bold',
        className
      )}
    >
      <p>{children}</p>
    </div>
  );
};
