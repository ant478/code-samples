import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import useHeaderHeight from 'src/hooks/useHeaderHeight';
import useFooterHeight from 'src/hooks/useFooterHeight';
import useAnotherRenderOnMount from 'src/hooks/useAnotherRenderOnMount';

const PageWithSidebar = ({
  title = '',
  children,
  sidebar,
}) => {
  useAnotherRenderOnMount();
  const headerHeight = useHeaderHeight();
  const footerHeight = useFooterHeight();
  const sidebarStyles = useMemo(() => ({
    top: headerHeight,
    bottom: footerHeight,
  }), [headerHeight, footerHeight]);

  return (
    <div className="page">
      <div className="page_sidebar-wrapper">
        <div
          className="page_sidebar"
          style={sidebarStyles}
        >
          {sidebar}
        </div>
      </div>
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
};

PageWithSidebar.propTypes = {
  title: PropTypes.string,
  sidebar: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageWithSidebar;
