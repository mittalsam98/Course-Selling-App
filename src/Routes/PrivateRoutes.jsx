import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../coreComponents/helper/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return isAuthenticated() ? <Component /> : <Navigate to='/' />;
};

export default PrivateRoute;
