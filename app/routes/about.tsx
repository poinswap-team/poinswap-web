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
      <h1 className="text-primary-500">About Poinswap</h1>

      <p>Your friendly neighborhood DEX.</p>

      <Image src="/assets/opengraph/poinswap-og.jpg" alt="Screenshot" />

      <h2>Links</h2>
      <ul>
        <li>
          Website: <Anchor href="https://poinswap.com">poinswap.com</Anchor>
        </li>
        <li>
          Telegram:{' '}
          <Anchor href="https://t.me/PoinswapDEX">t.me/PoinswapDEX</Anchor>{' '}
        </li>
        <li>
          Discord:{' '}
          <Anchor href="https://poinswap.com/discord">
            poinswap.com/discord
          </Anchor>
        </li>
        <li>
          Twitter:{' '}
          <Anchor href="https://twitter.com/Poinswap">
            twitter.com/Poinswap
          </Anchor>
        </li>
        <li>
          Medium:{' '}
          <Anchor href="https://medium.com/@poinswap">
            medium.com/@poinswap
          </Anchor>
        </li>
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
