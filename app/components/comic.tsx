import type { FunctionComponent } from 'react';

interface ComicBoxProps {
  children: React.ReactNode;
}

export const ComicBox: FunctionComponent<ComicBoxProps> = ({ children }) => {
  return (
    <div className="comic-box font-comic p-4 text-center text-xl">
      {children}
    </div>
  );
};
