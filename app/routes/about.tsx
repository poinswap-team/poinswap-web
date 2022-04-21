import { json, useLoaderData } from 'remix';

import { Anchor, Image } from '~/components';
import { dataStacks } from '~/data';

import type { LoaderFunction } from 'remix';
import type { StackItem } from '~/types';

type LoaderData = {
  stacks: StackItem[];
};

export const loader: LoaderFunction = async () => {
  return json({ stacks: dataStacks });
};

export default function AboutRoute() {
  const data = useLoaderData<LoaderData>();
  console.log(data);

  return (
    <div className="prose dark:prose-invert">
      <h1>About Poinswap</h1>

      <p>Your friendly neighborhood DEX.</p>

      <Image src="/assets/opengraph/poinswap-og.jpg" alt="Screenshot" />

      <h2>Links</h2>
      <ul>
        <li>
          GitHub: <Anchor href="https://github.com/poinswap">@poinswap</Anchor>
        </li>
      </ul>

      <h2>Features</h2>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>
    </div>
  );
}
