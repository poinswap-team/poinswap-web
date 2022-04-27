import type { FunctionComponent } from 'react';

interface ComicBoxProps {
  children: React.ReactNode;
}

export const ComicBox: FunctionComponent<ComicBoxProps> = ({ children }) => {
  return <div className="comic-box">{children}</div>;
};

interface ComicSpeechProps {
  children: React.ReactNode;
}

export const ComicSpeech: FunctionComponent<ComicSpeechProps> = ({
  children,
}) => {
  return (
    <div className="comic-box font-comic p-4 text-center text-xl">
      <p>{children}</p>
    </div>
  );
};
