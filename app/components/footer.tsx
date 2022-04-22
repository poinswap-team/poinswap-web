import { Anchor, ExternalLinks } from '~/components';

import type { FunctionComponent } from 'react';

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="mt-16">
      <div className="flex flex-col items-center space-y-4 py-4">
        <div>
          <ExternalLinks />
        </div>
        <p className="flex space-x-2">
          <span>&copy;</span>
          <span>{year}</span>
          <Anchor href="https://poinswap.com">Poinswap</Anchor>
        </p>
      </div>
    </footer>
  );
};
