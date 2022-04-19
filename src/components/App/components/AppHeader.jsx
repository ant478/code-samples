import React, { memo, useMemo } from 'react';
import Header from 'src/components/Header';
import useHeaderHeight from 'src/hooks/useHeaderHeight';

const AppHeader = memo(() => {
  const height = useHeaderHeight();
  const styles = useMemo(() => ({ transform: `translateY(${height}px)` }), [height]);

  return (
    <div
      className="app_header"
      style={styles}
    >
      <Header />
    </div>
  );
});

export default AppHeader;
