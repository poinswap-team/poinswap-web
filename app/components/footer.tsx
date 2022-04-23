import { Anchor, ExternalLinks, useTheme } from '~/components';

import type { FunctionComponent } from 'react';

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  const date = new Date();
  const year = date.getFullYear();
  const { isLight } = useTheme();

  return (
    <footer
      className="mt-16 flex h-[500px] flex-col items-center gap-1 bg-cover pb-2"
      style={{
        backgroundImage: `url("${
          isLight
            ? '/assets/backgrounds/footer-light.png'
            : '/assets/backgrounds/footer-dark.png'
        }")`,
      }}
    >
      <div className="flex flex-col items-center space-y-4 py-4">
        <div>
          <ExternalLinks />
        </div>
        <p className="flex gap-1">
          <span>&copy;</span>
          <span>{year}</span>
          <Anchor href="https://poinswap.com">Poinswap</Anchor>
        </p>
      </div>
    </footer>
  );
};
