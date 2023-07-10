import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../coreComponents/helper/auth';
import { isAdminAuthenticated } from '../coreComponents/helper/adminAuth.';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return isAuthenticated() ? <Component /> : <Navigate to='/' />;
};
export const AdminPrivateRoute = ({ component: Component, ...rest }) => {
  return isAdminAuthenticated() ? <Component /> : <Navigate to='/admin' />;
};
