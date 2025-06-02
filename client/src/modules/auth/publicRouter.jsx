import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Login from '@modules/auth/pages/login';
import Loged from '@modules/auth/pages/loged';
import Recovery from '@modules/auth/pages/recovery';

export default function AuthPublicRouter() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="loged" element={<Loged />} />
      <Route path="recovery" element={<Recovery />} />
      <Route path="*" element={<Navigate to="./login" />} />
    </Routes>
  );
}
