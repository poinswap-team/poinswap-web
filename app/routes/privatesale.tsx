import { useActionData, useTransition } from 'remix';

import { Anchor, Layout } from '~/components';
import { PrivateSaleForm } from '~/contents';
import { actionSubscribe } from '~/features';

import type { ActionFunction } from 'remix';

export const action: ActionFunction = actionSubscribe;

export default function PrivateSaleRoute() {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <Layout className="prose dark:prose-invert">
      <h1 className="font-comic text-primary-500">Private Sale</h1>
      <p>
        The token private sale is opening soon. For now, please subscribe here
        for updates. As you will be invited through email. You can also{' '}
        <Anchor href="https://poinswap.com/discord">join our Discord</Anchor> to
        get the updates, but we'll prioritize the ones who subscribe their email
        first.
      </p>

      <PrivateSaleForm transition={transition} actionData={actionData} />
    </Layout>
  );
}
