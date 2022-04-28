/* eslint-disable react/require-default-props */
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface AnchorProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  'data-color'?: string;
}

export const Anchor: FunctionComponent<AnchorProps> = ({
  href,
  children,
  className,
  'data-color': dataColor,
}) => {
  return (
    <a
      className={classx(className)}
      href={href}
      target="_blank"
      rel="noreferrer"
      data-color={dataColor}
    >
      {children}
    </a>
  );
};
