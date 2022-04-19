import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import useRerenderOnEvent from 'src/hooks/useRerenderOnEvent';

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
  useRerenderOnEvent('scroll-height-change-custom');

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
