import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import useHeaderHeight from 'src/hooks/useHeaderHeight';
import useFooterHeight from 'src/hooks/useFooterHeight';
import useAnotherRenderOnMount from 'src/hooks/useAnotherRenderOnMount';
import SidebarScrollbar from 'src/components/SidebarScrollbar';

const PageWithSidebar = memo(({
  title,
  children,
  sidebar,
}) => {
  useAnotherRenderOnMount();
  const headerHeight = useHeaderHeight();
  const footerHeight = useFooterHeight();

  const sidebarStyles = useMemo(() => ({
    '--header-height': `${headerHeight}px`,
    '--footer-height': `${footerHeight}px`,
  }), [headerHeight, footerHeight]);

  return (
    <div className="page-with-sidebar">
      <div className="page-with-sidebar_inner">
        <div className="page-with-sidebar_sidebar-wrapper">
          <div
            className="page-with-sidebar_sidebar"
            style={sidebarStyles}
          >
            <SidebarScrollbar>
              {sidebar}
            </SidebarScrollbar>
          </div>
        </div>
        <div className="page-with-sidebar_content">
          {title && (
            <div className="page-with-sidebar_title">
              {title}
            </div>
          )}
          <div className="page-with-sidebar_children">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
});

PageWithSidebar.defaultProps = {
  title: '',
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
