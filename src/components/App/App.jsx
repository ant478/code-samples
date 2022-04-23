import React from 'react';
import AppScrollbar from './components/AppScrollbar';
import AppContent from './components/AppContent';

const App = () => (
  <div className="app">
    <AppScrollbar>
      <AppContent />
    </AppScrollbar>
  </div>
);

export default App;
