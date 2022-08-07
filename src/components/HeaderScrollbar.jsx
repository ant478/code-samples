import React, { memo, useRef, useEffect } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { headerScrollService } from 'src/services/scroll';
import useRerenderOnMount from 'src/hooks/useRerenderOnMount';

const VIEW_ID = 'header-scrollbar-view';

const renderView = (props) => (
  <div
    id={VIEW_ID}
    {...props}
  />
);

const renderThumbHorizontal = (props) => (
  <div
    className="header_scrollbar-thumb-horizontal"
    {...props}
  />
);

const renderTrackHorizontal = (props) => (
  <div
    className="header_scrollbar-track-horizontal"
    {...props}
  />
);

const SCROLL_DELTA = 25;

const HeaderScrollbar = memo(({ children, ...props }) => {
  useRerenderOnMount();

  const isFirstRenderRef = useRef(true);

  useEffect(() => { isFirstRenderRef.current = false; }, []);

  useEffect(() => {
    headerScrollService.init(VIEW_ID);
    return () => headerScrollService.flush();
  }, []);

  useEffect(() => {
    const element = document.getElementById(VIEW_ID);

    const callback = (event) => {
      if (event.deltaY) {
        event.preventDefault();

        const delta = (event.deltaY > 0 ? SCROLL_DELTA : -SCROLL_DELTA);
        headerScrollService.scrollToPosition(element.scrollLeft + delta);
      }
    };

    element.addEventListener('wheel', callback);

    return () => element.removeEventListener('wheel', callback);
  }, []);

  return (
    <Scrollbars
      renderView={renderView}
      renderThumbHorizontal={renderThumbHorizontal}
      renderTrackHorizontal={renderTrackHorizontal}
      {...props}
    >
      <div>
        {!isFirstRenderRef.current && children}
      </div>
    </Scrollbars>
  );
});

export default HeaderScrollbar;
