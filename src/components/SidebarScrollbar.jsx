import React from 'react';
import Scrollbars from 'react-custom-scrollbars';

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

const SidebarScrollbar = (props) => (
  <Scrollbars
    renderThumbVertical={renderThumbVertical}
    renderTrackVertical={renderTrackVertical}
    {...props}
  />
);

export default SidebarScrollbar;
