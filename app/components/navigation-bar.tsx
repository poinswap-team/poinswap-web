import {
  MenuNavigation,
  ExternalLinks,
  Logo,
  RemixLink,
  RemixNavLink,
  ThemeSwitcher,
  Badge,
} from '~/components';
import { configNavigationLinks } from '~/configs';
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface NavigationBarProps {}

export const NavigationBar: FunctionComponent<NavigationBarProps> = () => {
  return (
    <nav
      id="navigation-bar"
      className="fixed z-50 w-full select-none border-b-2 border-primary-900 bg-neutral-50 p-2 dark:bg-neutral-800 md:p-4"
    >
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex space-x-4">
          <div className="flex items-center gap-2">
            <RemixLink
              to="/"
              className="text-2xl font-black tracking-wide hover:text-primary-500"
            >
              <Logo />
            </RemixLink>
            <Badge color="primary" variant="solid" className="hidden sm:block">
              Alpha
            </Badge>
          </div>

          <div className="hidden w-auto items-center justify-between xl:flex">
            <ul className="text-md flex flex-row font-medium">
              {configNavigationLinks.map((navItem) => {
                return (
                  <li key={navItem.text}>
                    <RemixNavLink
                      end
                      to={navItem.to}
                      className={({ isActive }) => {
                        return classx(
                          isActive &&
                            'bg-neutral-100 text-primary-500 dark:bg-neutral-900',
                          'rounded-base p-2 font-bold',
                          'hover:bg-primary-100 dark:hover:bg-primary-800'
                        );
                      }}
                    >
                      {navItem.text}
                    </RemixNavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <ExternalLinks className="hidden text-xl sm:flex" />
          <ThemeSwitcher />
          <NavigationBarMenu />
        </div>
      </div>
    </nav>
  );
};

interface NavigationBarAuthProps {}

export const NavigationBarAuth: FunctionComponent<
  NavigationBarAuthProps
> = () => {
  return (
    <div id="navigation-bar-auth" className="hidden space-x-2 lg:flex">
      <RemixLink
        to="/signin"
        className="btn btn-md btn-ghost"
        data-color="primary"
      >
        Sign in
      </RemixLink>
      <RemixLink
        to="/signup"
        className="btn-solid btn btn-md"
        data-color="primary"
      >
        Sign up
      </RemixLink>
    </div>
  );
};

interface NavigationBarMenuProps {}

export const NavigationBarMenu: FunctionComponent<
  NavigationBarMenuProps
> = () => {
  return <MenuNavigation />;
};
