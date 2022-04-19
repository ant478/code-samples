import React, { useState, useEffect, useCallback } from 'react';
import get from 'lodash/get';
import Scrollbars from 'react-custom-scrollbars';
import { getAppScrollElement } from 'src/helpers/scroll';

export const VIEW_ID = 'app-scrollbar-view';

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

const AppScrollbar = (props) => {
  const scrollElement = getAppScrollElement();
  const [, setScrollHeight] = useState(get(scrollElement, 'scrollHeight', 0));

  const updateScrollHeight = useCallback(() => {
    setScrollHeight(get(scrollElement, 'scrollHeight', 0));
  }, [scrollElement]);

  useEffect(() => {
    window.addEventListener('scroll-height-change-custom', updateScrollHeight);
    return () => window.removeEventListener('scroll-height-change-custom', updateScrollHeight);
  }, [updateScrollHeight]);

  return (
    <Scrollbars
      renderView={renderView}
      renderThumbVertical={renderThumbVertical}
      renderTrackVertical={renderTrackVertical}
      {...props}
    />
  );
};

export default AppScrollbar;
