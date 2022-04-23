import noop from 'lodash/noop';
import React, {
  memo, useRef, useLayoutEffect, useEffect,
} from 'react';
import { useLocation, NavLink, matchPath } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { sidebarScrollService } from 'src/services/scroll';
import {
  getScrollPositionDataFromSessionStorage,
  saveScrollPositionDataToSessionStorage,
} from 'src/helpers/scroll';

const SCROLL_POSITION_STORAGE_KEY = 'sidebar-scroll-position';

function saveScrollPositionData({ target: { scrollTop } }) {
  return saveScrollPositionDataToSessionStorage(SCROLL_POSITION_STORAGE_KEY, scrollTop);
}

function getScrollPositionData() {
  return getScrollPositionDataFromSessionStorage(SCROLL_POSITION_STORAGE_KEY);
}

const getLinkIdByHash = (hash) => `${hash.replace('#', '')}-link`;

const updateScrollPosition = (isFirstRender) => {
  const { pathname, hash } = window.location;

  if (hash) {
    const elementId = getLinkIdByHash(hash);
    const element = document.getElementById(elementId);

    if (element) {
      sidebarScrollService.scrollToElement(element);
      return;
    }
  }

  if (isFirstRender) {
    const scrollData = getScrollPositionData();

    if (scrollData.pathname === pathname) {
      sidebarScrollService.scrollToPosition(scrollData.scrollTop);
    }
  }
};

const NavigationSidebar = memo(({
  links,
}) => {
  const { pathname } = useLocation();
  const isFirstRenderRef = useRef(true);

  useLayoutEffect(() => {
    updateScrollPosition(isFirstRenderRef.current);
  }, []);

  useEffect(() => {
    const scrollElement = sidebarScrollService.getScrollElement();

    scrollElement.addEventListener('scroll', saveScrollPositionData);
    return () => scrollElement.removeEventListener('scroll', saveScrollPositionData);
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
