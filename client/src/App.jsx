import React from 'react';

// Providers
import Providers from './Providers';
// Router
import Router from './Router';

// I18n
import './i18n';

const App = () => {
  return (
    <>
      <Providers>
        <Router />
      </Providers>
    </>
  );
};

export default App;
