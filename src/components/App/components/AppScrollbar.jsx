import React, {
  useState, useEffect, useCallback, useRef, memo, useLayoutEffect,
} from 'react';
import { useLocation } from 'react-router-dom';
import get from 'lodash/get';
import Scrollbars from 'react-custom-scrollbars';
import { appScrollbarService } from 'src/services/scroll';
import useRerenderOnMount from 'src/hooks/useRerenderOnMount';
import {
  EXPAND_DIFF as HEADER_EXPAND_DIFF,
  EXPANDED_HEIGHT as HEADER_EXPANDED_HEIGHT,
} from 'src/hooks/useHeaderHeight';
import { EXPANDED_HEIGHT as FOOTER_EXPANDED_HEIGHT } from 'src/hooks/useFooterHeight';

const VIEW_ID = 'app-scrollbar-view';
const appMainStyles = {
  paddingTop: `${HEADER_EXPANDED_HEIGHT}px`,
  paddingBottom: `${FOOTER_EXPANDED_HEIGHT}px`,
  minHeight: `calc(100% + ${FOOTER_EXPANDED_HEIGHT + HEADER_EXPAND_DIFF}px)`,
};

const renderThumbVertical = (props) => (
  <div
    className="app_scrollbar-thumb-vertical"
    {...props}
  />
);

const renderTrackVertical = (props) => (
  <div
    className="app_scrollbar-track-vertical"
    {...props}
  />
);

const renderView = (props) => (
  <div
    id={VIEW_ID}
    {...props}
  />
);

const AppScrollbar = memo(({ children, ...props }) => {
  const scrollElement = appScrollbarService.scrollElement;
  const [, setScrollHeight] = useState(get(scrollElement, 'scrollHeight', 0));

  const updateScrollHeight = useCallback(
    () => setScrollHeight(get(scrollElement, 'scrollHeight', 0)),
    [scrollElement],
  );

  const { pathname } = useLocation();

  useLayoutEffect(
    () => updateScrollHeight(),
    [updateScrollHeight, pathname],
  );

  useEffect(() => {
    appScrollbarService.addScrollHeightChangeListener(updateScrollHeight);
    return () => appScrollbarService.removeScrollHeightChangeListener(updateScrollHeight);
  }, [updateScrollHeight]);

  useRerenderOnMount();
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    appScrollbarService.init(VIEW_ID);
    return () => appScrollbarService.flush();
  }, []);

  useEffect(() => { isFirstRenderRef.current = false; }, []);

  return (
    <Scrollbars
      renderView={renderView}
      renderThumbVertical={renderThumbVertical}
      renderTrackVertical={renderTrackVertical}
      {...props}
    >
      <div className="app_scrollbar-content" style={appMainStyles}>
        {!isFirstRenderRef.current && children}
      </div>
    </Scrollbars>
  );
});

export default AppScrollbar;
