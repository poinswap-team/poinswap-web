/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import { useState } from 'react';

import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface ImageProps {
  alt: string;
  src?: string;
  height?: number | string;
  width?: number | string;
  className?: string;
}

export const Image: FunctionComponent<ImageProps> = ({
  alt,
  src,
  height,
  width,
  className,
}) => {
  return (
    <img
      alt={alt}
      src={src}
      height={height}
      width={width}
      className={classx('rounded-md object-contain', className)}
    />
  );
};

interface ImageInteractiveProps extends ImageProps {
  srcNormal?: string;
  srcHover?: string;
}

export const ImageInteractive: FunctionComponent<ImageInteractiveProps> = ({
  alt,
  height,
  width,
  src,
  srcNormal,
  srcHover,
}) => {
  const [source, setSource] = useState(src || srcNormal);

  const onMouseEnter = () => {
    if (srcHover) {
      setSource(srcHover);
    }
  };

  const onMouseLeave = () => {
    if (srcNormal) {
      setSource(srcNormal);
    }
  };

  return (
    <img
      className="cursor-pointer"
      alt={alt}
      src={source}
      height={height}
      width={width}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};
