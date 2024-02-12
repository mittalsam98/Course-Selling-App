import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router';
import NavbarAdmin from './Navbar/AdminNavbar';
import AdminSideBar from './SideBar/AdminSideBar';
import UserSideBar from './SideBar/UserSideBar';

export default function Layout(props) {
  return (
    <div className='h-screen'>
      {props.keys === 'adminLayout' ? <NavbarAdmin /> : <Navbar />}
      <aside
        id='separator-sidebar'
        className='w-64 fixed h-screen hidden lg:block'
        aria-label='Sidebar'
      >
        {props.keys === 'adminLayout' ? <AdminSideBar /> : <UserSideBar />}
      </aside>
      <div class='lg:ml-64  mx-auto text-center'>
        <Outlet />
      </div>
    </div>
  );
}
