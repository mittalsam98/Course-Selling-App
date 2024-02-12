import { ReactComponent as Courses } from '../../images/course.svg';
import { ReactComponent as Add } from '../../images/add.svg';
import { ReactComponent as Logout } from '../../images/logout.svg';
import { NavLink } from 'react-router-dom';
import { isAdminAuthenticated } from '../../coreComponents/helper/adminAuth.';
import { ReactComponent as Close } from '../../images/close.svg';

export default function AdminSideBar({ handleNavbar }) {
  const getMenuRow = (component, title, showOnlyInAdminLogin = false) => {
    if (showOnlyInAdminLogin) {
      if (!isAdminAuthenticated()) {
        return false;
      }
    }

    return (
      <NavLink
        to={title.toLowerCase()}
        className={({ isActive, isPending }) => (isActive ? 'text-blue-500 bg-red-950' : '')}
        onClick={handleNavbar}
      >
        <li class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 '>
          {component}
          <span class='flex-1 ml-3 whitespace-nowrap'>{title}</span>
          {/* <span class='inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                3
                </span>
              */}
        </li>
      </NavLink>
    );
  };
  return (
    <div class='px-3 py-4 overflow-y-auto bg-gray-50  h-full'>
      <Close
        onClick={handleNavbar}
        className='w-4 block lg:hidden border hover:cursor-pointer border-black rounded-full'
      />
      <div className='my-3 pl-2 font-semibold text-gray-800'>Main Menu</div>
      <ul class='space-y-2'>{getMenuRow(<Courses className='h-4 w-4' />, 'Courses', false)}</ul>
      <ul class='space-y-2'>{getMenuRow(<Add className='h-4 w-4' />, 'Create', true)}</ul>
      <ul class='pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700'>
        {getMenuRow(<Logout className='h-4 w-4' />, 'Logout', true)}
      </ul>
    </div>
  );
}
