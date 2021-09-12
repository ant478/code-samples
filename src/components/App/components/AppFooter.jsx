import React, { memo, useMemo } from 'react';
import Footer from 'src/components/Footer';
import useFooterHeight from 'src/hooks/useFooterHeight';
import useAnotherRenderOnMount from 'src/hooks/useAnotherRenderOnMount';

const AppFooter = memo(() => {
  useAnotherRenderOnMount();
  const height = useFooterHeight();
  const styles = useMemo(() => ({ transform: `translateY(-${height}px)` }), [height]);

  return (
    <div
      className="app_footer"
      style={styles}
    >
      <Footer />
    </div>
  );
});

export default AppFooter;
