import get from 'lodash/get';
import noop from 'lodash/noop';
import React, { memo, useLayoutEffect } from 'react';
import { useLocation, NavLink, matchPath } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { sidebarScrollService } from 'src/services/scroll';

const getLinkIdByHash = (hash) => `${hash}-link`;

const NavigationSidebar = memo(({
  links,
}) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const hash = get(window, 'location.hash', '');

    if (hash) {
      const elementId = getLinkIdByHash(hash);
      const element = document.getElementById(elementId);

      if (element) {
        sidebarScrollService.scrollToElement(element);
      }
    }
  }, []);

  return (
    <aside className="navigation-sidebar">
      <nav>
        <ul>
          {links.map(({
            to, title, exact, hashLinks = [],
          }) => (
            <li
              key={to}
              className="navigation-sidebar_item"
            >
              <NavLink
                className="navigation-sidebar_item-link"
                activeClassName="navigation-sidebar_item-link__active"
                exact={exact}
                to={to}
              >
                {title}
              </NavLink>
              {hashLinks.length > 0 && matchPath(pathname, to) && (
              <ul>
                {hashLinks.map(({ hash, title: subTitle, exact: subExact }) => (
                  <li
                    key={hash}
                    className="navigation-sidebar_sub-item"
                  >
                    <NavHashLink
                      id={getLinkIdByHash(hash)}
                      className="navigation-sidebar_item-sub-link"
                      activeClassName="navigation-sidebar_item-sub-link__active"
                      exact={subExact}
                      to={`${to}${hash}`}
                      scroll={noop}
                    >
                      {subTitle}
                    </NavHashLink>
                  </li>
                ))}
              </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
});

export default NavigationSidebar;
