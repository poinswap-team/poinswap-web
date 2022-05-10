import { useActionData, useTransition } from '@remix-run/react';

import { PrivateSaleForm } from '../privatesale';

import { Anchor, H2 } from '~/components';

import type { FunctionComponent } from 'react';

interface StoryPrivateSaleFormProps {}

export const StoryPrivateSaleForm: FunctionComponent<
  StoryPrivateSaleFormProps
> = () => {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <article className="flex flex-col gap-8 text-xl lg:flex-row">
      <section className="max-w-[50ch] flex-[2] space-y-4">
        <H2>Subscribe for updates</H2>
        <p className="max-w-[65ch]">
          The token private sale is opening soon. For now, please subscribe here
          for updates. As you will be invited through email.
        </p>
        <p>
          You can also{' '}
          <Anchor href="https://poinswap.com/discord">join our Discord</Anchor>{' '}
          to get the updates, but we'll prioritize the ones who subscribe their
          email first.
        </p>
      </section>
      <PrivateSaleForm
        className="flex-[1]"
        transition={transition}
        actionData={actionData}
      />
    </article>
  );
};
