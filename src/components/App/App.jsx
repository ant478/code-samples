import React from 'react';
import AppScrollbar from './components/AppScrollbar';
import AppContent from './components/AppContent';

const App = () => (
  <div id="app" className="app app__theme-hue">
    <AppScrollbar>
      <AppContent />
    </AppScrollbar>
  </div>
);

export default App;
