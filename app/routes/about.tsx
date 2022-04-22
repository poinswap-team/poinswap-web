import { json, useLoaderData } from 'remix';

import { Anchor, Image } from '~/components';

import type { LoaderFunction } from 'remix';

type LoaderData = {};

export const loader: LoaderFunction = async () => {
  return json({});
};

export default function AboutRoute() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = useLoaderData<LoaderData>();

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
          GitHub:{' '}
          <Anchor href="https://github.com/poinswap">
            github.com/poinswap
          </Anchor>
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
