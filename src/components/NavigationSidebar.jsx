import React, { memo } from 'react';
import { useLocation, NavLink, matchPath } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { scrollAppToElement } from 'src/helpers/scroll';

const NavigationSidebar = memo(({
  links,
}) => {
  const { pathname } = useLocation();

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
                {hashLinks.map(({ to: subTo, title: subTitle, exact: subExact }) => (
                  <li
                    key={subTo}
                    className="navigation-sidebar_sub-item"
                  >
                    <NavHashLink
                      className="navigation-sidebar_item-sub-link"
                      activeClassName="navigation-sidebar_item-sub-link__active"
                      exact={subExact}
                      to={subTo}
                      scroll={scrollAppToElement}
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
