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
      {props.keys === 'adminLayout' ? <AdminSideBar /> : <UserSideBar />}
      <div class='sm:ml-64 mx-auto text-center'>
        <Outlet />
      </div>
    </div>
  );
}
