import React from 'react';
import Scrollbars from 'react-custom-scrollbars';

export const VIEW_ID = 'app-scrollbar-view';

const renderThumbVecrital = (props) => (
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

const AppScrollbar = (props) => (
  <Scrollbars
    renderView={renderView}
    renderThumbVertical={renderThumbVecrital}
    renderTrackVertical={renderTrackVertical}
    {...props}
  />
);

export default AppScrollbar;
