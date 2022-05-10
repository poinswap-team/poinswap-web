import { H1, P } from '~/components';

import type { FunctionComponent } from 'react';

interface PrivateSaleHeroProps {}

export const PrivateSaleHero: FunctionComponent<PrivateSaleHeroProps> = () => {
  return (
    <article className="mb-10 flex flex-col gap-12 px-4 pt-40 pb-20 md:px-8 lg:flex-row">
      <section className="w-full max-w-[600px]">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/08hXU_J1d-8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Poinswap RetailFi"
          />
        </div>
      </section>

      <section className="w-full max-w-[50ch] space-y-8 text-2xl">
        <H1 className="font-accent text-primary-500">Private Sale</H1>
        <P>
          Poinswap is pioneering RetailFi by building an ecosystem for retailers
          with user friendly and curated DEX. Poinswap is bootstraping and
          expected to launch IDO on Q3 2022.{' '}
        </P>
        <P>
          Poinswap is a tech enabler for retailers to join the blockchain
          revolution by tokenizing the point rewards and develop retail subnets
          in Avalanche network
        </P>
      </section>
    </article>
  );
};
