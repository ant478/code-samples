import React, { memo } from 'react';
import Scrollbars from 'react-custom-scrollbars';

const renderThumbHorizontal = (props) => (
  <div
    className="highlight-scrollbar_thumb-horisontal"
    {...props}
  />
);

const renderTrackHorizontal = (props) => (
  <div
    className="highlight-scrollbar_track-horisontal"
    {...props}
  />
);

const renderView = (props) => (
  <div
    className="highlight-scrollbar_view"
    {...props}
  />
);

const HighlightScrollbar = memo((props) => (
  <Scrollbars
    renderView={renderView}
    renderTrackHorizontal={renderTrackHorizontal}
    renderThumbHorizontal={renderThumbHorizontal}
    {...props}
  />
));

export default HighlightScrollbar;
