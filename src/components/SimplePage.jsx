import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SimplePage = memo(({
  title,
  children,
}) => (
  <div className="simple-page">
    <div className="simple-page_inner">
      {title && (
        <div className="simple-page_title">
          {title}
        </div>
      )}
      <div className="simple-page_children">
        {children}
      </div>
    </div>
  </div>
));

SimplePage.defaultProps = {
  title: '',
};

SimplePage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SimplePage;
