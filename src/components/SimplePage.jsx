import React from 'react';
import PropTypes from 'prop-types';

const SimplePage = ({
  title = '',
  children,
}) => (
  <div className="page page__simple">
    {title && (
      <div>
        {title}
      </div>
    )}
    {children}
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
