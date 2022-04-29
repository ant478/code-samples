import React, { useEffect, useRef, memo } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import useRerenderOnMount from 'src/hooks/useRerenderOnMount';
import { sidebarScrollService } from 'src/services/scroll';

const VIEW_ID = 'page-with-sidebar-scrollbar-view';

const renderThumbVertical = (props) => (
  <div
    className="page-with-sidebar_scrollbar-thumb-vertical"
    {...props}
  />
);

const renderTrackVertical = (props) => (
  <div
    className="page-with-sidebar_scrollbar-track-vertical"
    {...props}
  />
);

const renderView = (props) => (
  <div
    id={VIEW_ID}
    {...props}
  />
);

const SidebarScrollbar = memo(({ children, ...props }) => {
  useRerenderOnMount();
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    sidebarScrollService.init(VIEW_ID);
    return () => sidebarScrollService.flush();
  }, []);

  useEffect(() => { isFirstRenderRef.current = false; }, []);

  return (
    <Scrollbars
      autoHide={false}
      renderView={renderView}
      renderThumbVertical={renderThumbVertical}
      renderTrackVertical={renderTrackVertical}
      {...props}
    >
      {!isFirstRenderRef.current && children}
    </Scrollbars>
  );
});

export default SidebarScrollbar;
