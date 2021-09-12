import React from 'react';
import PropTypes from 'prop-types';

const SimplePage = ({
   title = '',
   children,
 }) => (
  <div className="page">
    <div className="page_content">
      {title && (
        <div className="page_title">
          {title}
        </div>
      )}
      <div className="page_children">
        {children}
      </div>
    </div>
  </div>
);

SimplePage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SimplePage;
