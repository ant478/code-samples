import React, {
  useEffect, useLayoutEffect, memo, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { appScrollbarService } from 'src/services/scroll';
import {
  getScrollPositionDataFromSessionStorage,
  saveScrollPositionDataToSessionStorage,
} from 'src/helpers/scroll';
import AppHeader from './AppHeader';
import AppSwitch from './AppSwitch';
import AppFooter from './AppFooter';

const SCROLL_POSITION_STORAGE_KEY = 'app-scroll-position';

function saveScrollPositionData({ target: { scrollTop } }) {
  saveScrollPositionDataToSessionStorage(SCROLL_POSITION_STORAGE_KEY, scrollTop);
}

function getScrollPositionData() {
  return getScrollPositionDataFromSessionStorage(SCROLL_POSITION_STORAGE_KEY);
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
    const scrollData = getScrollPositionData();

    if (scrollData.pathname === pathname) {
      appScrollbarService.scrollToPosition(scrollData.scrollTop, { clamp: false });
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
    const timeoutId = setTimeout(() => updateScrollPosition(true), 10);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const scrollElement = appScrollbarService.scrollElement;

    scrollElement.addEventListener('scroll', saveScrollPositionData);
    return () => scrollElement.removeEventListener('scroll', saveScrollPositionData);
  }, []);

  useEffect(() => { isFirstRenderRef.current = false; }, []);

  return (
    <>
      <AppHeader />
      <main className="app_main">
        <div className="app_main-inner">
          <AppSwitch />
        </div>
      </main>
      <AppFooter />
    </>
  );
});

export default AppContent;
