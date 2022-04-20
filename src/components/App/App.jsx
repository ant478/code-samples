import React, { useEffect, useRef } from 'react';
import get from 'lodash/get';
import { useLocation } from 'react-router-dom';
import {
  EXPANDED_HEIGHT as HEADER_EXPANDED_HEIGHT,
  EXPAND_DIFF as HEADER_EXPAND_DIFF,
} from 'src/hooks/useHeaderHeight';
import useRerenderOnMount from 'src/hooks/useRerenderOnMount';
import {
  EXPANDED_HEIGHT as FOOTER_EXPANDED_HEIGHT,
} from 'src/hooks/useFooterHeight';
import {
  updateAppScrollPositionAfterLocationChange,
  scrollAppToElement,
} from 'src/helpers/scroll';
import AppScrollbar from './components/AppScrollbar';
import AppHeader from './components/AppHeader';
import AppSwitch from './components/AppSwitch';
import AppFooter from './components/AppFooter';

const appMainStyles = {
  paddingTop: `${HEADER_EXPANDED_HEIGHT}px`,
  paddingBottom: `${FOOTER_EXPANDED_HEIGHT}px`,
  minHeight: `calc(100% + ${FOOTER_EXPANDED_HEIGHT + HEADER_EXPAND_DIFF}px)`,
};

const App = () => {
  useRerenderOnMount();
  const location = useLocation();
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      return;
    }

    updateAppScrollPositionAfterLocationChange();
  }, [location]);

  useEffect(() => {
    isFirstRenderRef.current = false;
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const id = get(window, 'location.hash', '').replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        scrollAppToElement(element);
      }
    });

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="app">
      <AppScrollbar>
        {!isFirstRenderRef.current && (
          <>
            <AppHeader />
            <main className="app_main" style={appMainStyles}>
              <div className="app_main-inner">
                <AppSwitch />
              </div>
            </main>
            <AppFooter />
          </>
        )}
      </AppScrollbar>
    </div>
  );
};

export default App;
