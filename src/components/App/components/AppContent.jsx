import React, {
  useEffect, useLayoutEffect, memo, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import {
  EXPAND_DIFF as HEADER_EXPAND_DIFF,
  EXPANDED_HEIGHT as HEADER_EXPANDED_HEIGHT,
} from 'src/hooks/useHeaderHeight';
import { EXPANDED_HEIGHT as FOOTER_EXPANDED_HEIGHT } from 'src/hooks/useFooterHeight';
import { appScrollbarService } from 'src/services/scroll';
import AppHeader from './AppHeader';
import AppSwitch from './AppSwitch';
import AppFooter from './AppFooter';

const appMainStyles = {
  paddingTop: `${HEADER_EXPANDED_HEIGHT}px`,
  paddingBottom: `${FOOTER_EXPANDED_HEIGHT}px`,
  minHeight: `calc(100% + ${FOOTER_EXPANDED_HEIGHT + HEADER_EXPAND_DIFF}px)`,
};

const SCROLL_POSITION_STORAGE_KEY = 'app-scroll-position';

function saveScrollPositionToLS({ target: { scrollTop } }) {
  const { location: { pathname } } = window;

  sessionStorage.setItem(SCROLL_POSITION_STORAGE_KEY, JSON.stringify({ pathname, scrollTop }));
}

function getScrollPositionFromLS() {
  const { location: { pathname } } = window;
  const data = (sessionStorage.getItem(SCROLL_POSITION_STORAGE_KEY) || JSON.stringify({ pathname, scrollTop: 0 }));

  return JSON.parse(data);
}

const updateScrollPosition = (isFirstRender) => {
  const { pathname, hash } = window.location;

  if (hash) {
    const elementId = hash.replace('#', '');
    const element = document.getElementById(elementId);

    if (element) {
      appScrollbarService.scrollToElement(element);
      return;
    }
  }

  if (isFirstRender) {
    const lsData = getScrollPositionFromLS();

    if (lsData.pathname === pathname) {
      appScrollbarService.scrollToPosition(lsData.scrollTop, { clamp: false });
      return;
    }
  }

  appScrollbarService.updateScrollPositionAfterLocationChange();
};

const AppContent = memo(() => {
  const location = useLocation();
  const isFirstRenderRef = useRef(true);

  useLayoutEffect(() => {
    updateScrollPosition(isFirstRenderRef.current);
  }, [location]);

  useEffect(() => {
    if (isFirstRenderRef.current) updateScrollPosition(isFirstRenderRef.current);
  }, []);

  useEffect(() => {
    const scrollElement = appScrollbarService.getScrollElement();

    scrollElement.addEventListener('scroll', saveScrollPositionToLS);
    return () => scrollElement.removeEventListener('scroll', saveScrollPositionToLS);
  }, []);

  useEffect(() => { isFirstRenderRef.current = false; }, []);

  return (
    <>
      <AppHeader />
      <main className="app_main" style={appMainStyles}>
        <div className="app_main-inner">
          <AppSwitch />
        </div>
      </main>
      <AppFooter />
    </>
  );
});

export default AppContent;
