import React from 'react';

import { BrowserRouter } from 'react-router-dom';

// Components
import AuthPublicRouter from '@modules/auth/publicRouter';

export default function AppRouter({}) {
  return (
    <BrowserRouter>
      <AuthPublicRouter />
    </BrowserRouter>
  );
}
