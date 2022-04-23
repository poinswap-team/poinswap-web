import {
  MenuNavigation,
  ExternalLinks,
  Logo,
  RemixLink,
  RemixNavLink,
  ThemeSwitcher,
} from '~/components';
import { configNavigationLinks } from '~/configs';
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface NavigationBarProps {}

export const NavigationBar: FunctionComponent<NavigationBarProps> = () => {
  return (
    <nav
      id="navigation-bar"
      className="fixed w-full select-none border-b-2 border-primary-900 bg-neutral-50 p-2 dark:bg-neutral-800 md:p-4"
    >
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex space-x-4">
          <RemixLink
            to="/"
            className="text-2xl font-black tracking-wide hover:text-primary-500"
          >
            <Logo />
          </RemixLink>

          <div className="hidden w-auto items-center justify-between lg:flex">
            <ul className="flex flex-row text-sm font-medium">
              {configNavigationLinks.map((navItem) => {
                return (
                  <li key={navItem.text}>
                    <RemixNavLink
                      end
                      to={navItem.to}
                      className={({ isActive }) => {
                        return classx(
                          isActive && 'text-primary-500',
                          'p-2 font-bold'
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

        <div className="flex items-center space-x-2">
          <ExternalLinks className="hidden text-xl sm:flex" />
          <NavigationBarMenu />
          <ThemeSwitcher />
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
