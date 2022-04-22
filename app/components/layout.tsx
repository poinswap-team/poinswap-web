import { Footer, NavigationBar } from '~/components';

import type { FunctionComponent } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col scroll-smooth ">
      <NavigationBar />

      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <main className="mt-32 min-h-[240px] w-full max-w-[65ch]">
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};
