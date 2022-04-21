import { redirect } from 'remix';

import type { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async () => {
  return redirect('https://a.poinswap.com/github');
};
