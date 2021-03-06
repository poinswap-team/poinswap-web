import { Image } from '~/components';

import type { FunctionComponent } from 'react';

interface LogoProps {}

export const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <div className="hover:opacity flex items-center gap-1">
      <Image
        alt="PON"
        src="/assets/logos/poinswap-logo-slime.png"
        className="h-[20px] sm:h-[25px] md:h-[35px]"
      />
      <LogoSpan />
    </div>
  );
};

export const LogoSpan = () => {
  return (
    <span
      className="text-2xl uppercase tracking-tighter text-brand-500 sm:text-3xl"
      style={{
        fontFamily: 'Gluten, sans-serif',
        WebkitTextStroke: '1px #0078A1',
        textShadow: `1px 1px 0 #0078A1`,
      }}
    >
      Poinswap
    </span>
  );
};
