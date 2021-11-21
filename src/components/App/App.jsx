import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  EXPANDED_HEIGHT as HEADER_EXPANDED_HEIGHT,
  EXPAND_DIFF as HEADER_EXPAND_DIFF,
} from 'src/hooks/useHeaderHeight';
import {
  EXPANDED_HEIGHT as FOOTER_EXPANDED_HEIGHT,
} from 'src/hooks/useFooterHeight';
import AppHeader from './components/AppHeader';
import AppSwitch from './components/AppSwitch';
import AppFooter from './components/AppFooter';

const appMainStyles = {
  paddingTop: `${HEADER_EXPANDED_HEIGHT}px`,
  paddingBottom: `${FOOTER_EXPANDED_HEIGHT}px`,
  minHeight: `calc(100% + ${FOOTER_EXPANDED_HEIGHT + HEADER_EXPAND_DIFF}px)`,
};

const App = () => {
  const location = useLocation();
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      return;
    }

    document.documentElement.scrollTop = Math.min(document.documentElement.scrollTop, HEADER_EXPAND_DIFF);
  }, [location]);

  useEffect(() => {
    isFirstRenderRef.current = false;
  }, []);

  return (
    <div className="app">
      <AppHeader />
      <main className="app_main" style={appMainStyles}>
        <div className="app_main-inner">
          <AppSwitch />
        </div>
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
