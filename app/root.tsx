import { useEffect, useState } from 'react';
import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useTransition,
} from 'remix';

import { H1, Layout, NProgress, ThemeProvider } from '~/components';
import { configApp } from '~/configs';
import { commitSession, getSession } from '~/sessions';
import { createMetaData, getEnv } from '~/utils';

import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  HeadersFunction,
} from 'remix';

import styles from '~/styles/out.css';

type LoaderData = {
  user: any;
  theme: any;
  error: any;
  ENV: ReturnType<typeof getEnv>;
};

export const headers: HeadersFunction = () => {
  return {
    'Accept-CH': 'Sec-CH-Prefers-Color-Scheme',
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: 'shortcut icon',
      href: '/favicons/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicons/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicons/apple-touch-icon.png',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#0081f1',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      href: 'https://fontbit.io',
      rel: 'preconnect',
    },
    {
      href: 'https://fonts.gstatic.com',
      rel: 'preconnect',
    },
    {
      href: 'https://fontbit.io/css2?family=Lato&display=swap',
      rel: 'stylesheet',
    },
    {
      href: 'https://fontbit.io/css2?family=Gluten:wght@900&display=swap&text=POINSWAP',
      rel: 'stylesheet',
    },
    {
      href: 'https://fontbit.io/css2?family=Fuzzy+Bubbles:wght@700&display=swap',
      rel: 'stylesheet',
    },
    {
      href: 'https://fontbit.io/css2?family=Short+Stack&display=swap',
      rel: 'stylesheet',
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export const meta: MetaFunction = () => {
  return createMetaData();
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const themeFromSession = await session.get('theme');

  // Only parse if theme string exist
  const themeParsed = themeFromSession
    ? JSON.parse(themeFromSession)
    : configApp?.theme;

  const data: LoaderData = {
    user: await session.get('user'),
    theme: themeParsed,
    error: await session.get('error'),
    ENV: getEnv(),
  };

  return json(data, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

interface DocumentProps {
  children: React.ReactNode;
}

export function Document({ children }: DocumentProps) {
  const data = useLoaderData<LoaderData>();

  const transition = useTransition();

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (transition.state === 'idle') setIsTransitioning(false);
    else setIsTransitioning(true);
  }, [transition.state]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className="scroll-smooth">
        <ThemeProvider specifiedTheme={data?.theme}>
          <NProgress isAnimating={isTransitioning} />
          {children}
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        {data?.ENV && (
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(data?.ENV)};`,
            }}
          />
        )}
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document>
      <Layout className="prose dark:prose-invert">
        <H1>Caught</H1>
        <div>
          <p>Status: {caught.status}</p>
          <pre>
            <code>{JSON.stringify(caught.data, null, 2)}</code>
          </pre>
        </div>
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <Layout className="prose dark:prose-invert">
        <H1>Error</H1>
        <div>
          <p>{error.message}</p>
          <p>The stack trace is:</p>
          <pre>{error.stack}</pre>
        </div>
      </Layout>
    </Document>
  );
}
