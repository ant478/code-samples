import React, { memo, useMemo } from 'react';
import useHeaderHeight from 'src/hooks/useHeaderHeight';
import useFooterHeight from 'src/hooks/useFooterHeight';
import useAnotherRenderOnMount from 'src/hooks/useAnotherRenderOnMount';
import SidebarScrollbar from 'src/components/SidebarScrollbar';

const parseDescription = (string) => string
  .replace(/\[(.+?)\]\((.+?)\)/g, '<a target="_blank" href="$2">$1</a>');

const PageWithSidebar = memo(({
  title = '',
  description = '',
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

  const descriptionHtml = useMemo(() => ({
    __html: parseDescription(description),
  }), [description]);

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
            <h2 className="page-with-sidebar_title">
              {title}
            </h2>
          )}
          {description && (
            <p
              dangerouslySetInnerHTML={descriptionHtml} // eslint-disable-line react/no-danger
              className="page-with-sidebar_description"
            />
          )}
          <div className="page-with-sidebar_children">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
});

export default PageWithSidebar;
