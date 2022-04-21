import { Anchor, RemixLink } from '~/components';

import type { FunctionComponent } from 'react';

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="mt-16">
      <div className="flex justify-center py-4">
        <p className="space-x-1 text-center">
          <span>&copy;</span>
          <span>{year}</span>
          <Anchor href="https://poinswap.com">Poinswap</Anchor>
          <span>•</span>
          <RemixLink to="/twitter">Twitter</RemixLink>
          <span>•</span>
          <RemixLink to="/discord">Discord</RemixLink>
        </p>
      </div>
    </footer>
  );
};
