import React, {
  memo, useRef, useLayoutEffect, useEffect,
} from 'react';
import noop from 'lodash/noop';
import { useLocation, NavLink, matchPath } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { sidebarScrollService } from 'src/services/scroll';

const NavigationSidebar = memo(({
  links,
}) => {
  const { pathname } = useLocation();
  const isFirstRenderRef = useRef(true);

  useLayoutEffect(() => {
    const id = (window.location.pathname + window.location.hash);
    const element = document.getElementById(id);

    if (element) {
      sidebarScrollService.scrollToElement(element);
    }
  }, []);

  useEffect(() => { isFirstRenderRef.current = false; }, []);

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
                title={title}
                id={to}
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
                      title={subTitle}
                      id={to + hash}
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
