import React from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router';
import NavbarAdmin from './Navbar/AdminNavbar';
import { isAdmin } from '../coreComponents/helper/utils';

export default function Layout() {
  return (
    <div className='h-screen'>
      {isAdmin() ? <NavbarAdmin /> : <Navbar />}
      <SideBar />
      <div class='sm:ml-64 mx-auto text-center'>
        <Outlet />
      </div>
    </div>
  );
}
