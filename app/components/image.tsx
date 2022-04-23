/* eslint-disable react/require-default-props */
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

export const Image: FunctionComponent<ImageProps> = ({
  src,
  alt,
  height,
  width,
  className,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={classx('rounded-md object-contain', className)}
    />
  );
};
