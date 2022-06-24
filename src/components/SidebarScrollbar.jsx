import React, { useEffect, useRef, memo } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import useRerenderOnMount from 'src/hooks/useRerenderOnMount';
import { sidebarScrollService } from 'src/services/scroll';
import useHeaderHeight from 'src/hooks/useHeaderHeight';
import useFooterHeight from 'src/hooks/useFooterHeight';

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
  useHeaderHeight();
  useFooterHeight();
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
      <div>
        {!isFirstRenderRef.current && children}
      </div>
    </Scrollbars>
  );
});

export default SidebarScrollbar;
