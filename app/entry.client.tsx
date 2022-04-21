/* global ENV */

import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';

import { splitbee, ReactGA } from '~/lib';

hydrate(<RemixBrowser />, document);

if (ENV.NODE_ENV !== 'development') {
  splitbee.init();
  ReactGA.initialize(String(ENV.GA_MEASUREMENT_ID));
}
