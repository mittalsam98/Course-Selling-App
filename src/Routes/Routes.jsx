import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Purchases from '../pages/Purchases';
import { Toaster } from 'react-hot-toast';
import Logout from '../coreComponents/Logout';
import PrivateRoute from './PrivateRoutes';
import CourseDetails from '../pages/CourseDetails';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Toaster position='bottom-center' />
      </div>

      <div className='content'>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Navigate to='/' replace />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/course/:id' element={<CourseDetails />} />
            <Route path='/purchases' element={<PrivateRoute component={Purchases} />} />
            <Route path='/logout' element={<Logout />} />
            {/* Admin Routes */}
            <Route path='/admin' element={<Home />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MyRoutes;
