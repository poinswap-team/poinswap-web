import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

const headingStyles = {
  h1: 'text-5xl font-extrabold',
  h2: 'text-4xl font-bold',
  h3: 'text-2xl font-semibold',
  h4: 'text-lg font-semibold',
  h5: 'text-md font-medium',
  h6: 'text-md',
};

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const H1: FunctionComponent<HeadingProps> = ({
  children,
  className,
}) => {
  return <h1 className={classx(headingStyles.h1, className)}>{children}</h1>;
};

export const H2: FunctionComponent<HeadingProps> = ({
  children,
  className,
}) => {
  return <h2 className={classx(headingStyles.h2, className)}>{children}</h2>;
};

export const H3: FunctionComponent<HeadingProps> = ({
  children,
  className,
}) => {
  return <h3 className={classx(headingStyles.h3, className)}>{children}</h3>;
};

export const H4: FunctionComponent<HeadingProps> = ({
  children,
  className,
}) => {
  return <h4 className={classx(headingStyles.h4, className)}>{children}</h4>;
};

export const H5: FunctionComponent<HeadingProps> = ({
  children,
  className,
}) => {
  return <h5 className={classx(headingStyles.h5, className)}>{children}</h5>;
};

export const H6: FunctionComponent<HeadingProps> = ({
  children,
  className,
}) => {
  return <h6 className={classx(headingStyles.h6, className)}>{children}</h6>;
};
