/* eslint-disable react/require-default-props */
import { clsx } from '~/utils';

import type { FunctionComponent } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Image: FunctionComponent<ImageProps> = ({
  src,
  alt,
  className,
}) => {
  return <img src={src} alt={alt} className={clsx('rounded-md', className)} />;
};
