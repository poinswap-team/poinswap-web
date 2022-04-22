import { Anchor, Icon } from '~/components';
import { configExternalLinks } from '~/configs';

import type { FunctionComponent } from 'react';

interface ExternalLinksProps {}

export const ExternalLinks: FunctionComponent<ExternalLinksProps> = () => {
  return (
    <div className="flex gap-3 text-2xl">
      {configExternalLinks.map((item) => {
        return (
          <Anchor
            key={item.name}
            href={item.url}
            className="transition-colors hover:text-primary-500"
          >
            <Icon name={item.name.toLowerCase()} />
          </Anchor>
        );
      })}
    </div>
  );
};
