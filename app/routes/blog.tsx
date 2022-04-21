import { json, useLoaderData } from 'remix';

import type { LoaderFunction } from 'remix';

type LoaderData = {};

export const loader: LoaderFunction = async () => {
  return json({});
};

export default function BlogRoute() {
  const data = useLoaderData<LoaderData>();
  console.log(data);

  return (
    <div className="prose dark:prose-invert">
      <h1>Blog</h1>
    </div>
  );
}
