import { Image } from '~/components';

import type { FunctionComponent } from 'react';

interface LogoProps {}

export const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <div className="hover:opacity flex items-center gap-1">
      <Image
        alt="PON"
        src="/assets/logos/poinswap-logo-slime.png"
        className="h-[25px] md:h-[35px]"
      />
      <LogoSpan />
    </div>
  );
};

export const LogoSpan = () => {
  return (
    <span
      className="text-3xl tracking-tighter text-brand-500"
      style={{
        fontFamily: 'Gluten, sans-serif',
        WebkitTextStroke: '1px #0078A1',
        textShadow: `1px 1px 0 #0078A1`,
      }}
    >
      POINSWAP
    </span>
  );
};
