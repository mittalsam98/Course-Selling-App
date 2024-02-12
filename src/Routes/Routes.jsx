import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Purchases from '../pages/Purchases';
import { AdminPrivateRoute, PrivateRoute } from './PrivateRoutes';
import CourseDetails from '../pages/CourseDetails';
import Logout from '../coreComponents/Logout';
import CreateCourse from '../pages/CreateCourse';
import { Toaster } from 'react-hot-toast';
import { isAdminAuthenticated } from '../coreComponents/helper/adminAuth.';
import { isAuthenticated } from '../coreComponents/helper/auth';
import { isAdmin } from '../coreComponents/helper/utils';
import LoggedInWarning from '../components/LoggedInWarning';
import Setting from '../pages/Setting';

const MyRoutes = () => {
  if ((isAuthenticated() && isAdmin()) || (isAdminAuthenticated() && !isAdmin())) {
    return <LoggedInWarning />;
  }

  return (
    <BrowserRouter>
      <div>
        <Toaster position='bottom-center' />
      </div>

      <div className='content'>
        <Routes>
          {/* User Routes */}
          <Route element={<Layout keys='userLayout' />}>
            <Route
              index
              element={isAdminAuthenticated() ? <Navigate to='/admin' replace /> : <Home />}
            />
            <Route path='/home' element={<Navigate to='/' replace />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/course/:id' element={<CourseDetails />} />
            <Route path='/purchases' element={<PrivateRoute component={Purchases} />} />
            <Route path='/settings' element={<PrivateRoute component={Setting} />} />
            <Route path='/logout' element={<Logout />} />
          </Route>
          {/* Admin Routes */}
          <Route path='/admin' element={<Layout keys='adminLayout' />}>
            <Route index element={<Home />} />
            <Route path='courses' element={<Courses />} />
            <Route path='course/:id' element={<CourseDetails />} />
            <Route path='create' element={<AdminPrivateRoute component={CreateCourse} />} />
            <Route path='logout' element={<Logout />} />
          </Route>
          <Route
            path='*'
            element={
              isAdminAuthenticated() ? (
                <Navigate to='/admin' replace />
              ) : (
                <Navigate to='/' replace />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MyRoutes;
