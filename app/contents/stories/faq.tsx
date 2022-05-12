import { useLoaderData } from 'remix';

import { H2, H3 } from '~/components';

import type { FunctionComponent } from 'react';

interface StoryFAQProps {}

export const StoryFAQ: FunctionComponent<StoryFAQProps> = () => {
  const { faqs } = useLoaderData();

  return (
    <article id="story-faq" className="prose-config">
      <H2>FAQs</H2>
      {faqs.map((item: any) => {
        return (
          <div key={item.q.substring(0, 10)}>
            <H3>{item.q}</H3>
            <p>{item.a}</p>
          </div>
        );
      })}
    </article>
  );
};
