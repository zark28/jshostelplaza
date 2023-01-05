import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdAdminPanelSettings } from 'react-icons/md';
import {FaUserCheck,FaHouseUser,FaUserClock } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { SigninAccountContext } from '../contexts/SignupSigninContext';
import './sidebar.css';

const Sidebar = ({ role = null }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLogedIn, setIsLogedIn } = useContext(SigninAccountContext);
  const handleLogout = () => {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
   
    setIsLogedIn({...isLogedIn,admin:false});
      localStorage.clear()
      navigate('/admin');
    
  };

  return (
    <div className="absolute left-0 top-[10vh] bottom-0  ">
     {
      role!=="admin" ?
      // tenant sidebar
      <ul className=" w-full h-full flex flex-col items-center gap-4 justify-start py-2 bg-light-purple rounded-tr-md rounded-br-md">
     No data found
    </ul>
    :



    // admin sidebar
    <ul className=" w-full h-full flex flex-col items-center gap-4 justify-start py-2 bg-light-purple rounded-tr-md rounded-br-md">
    <Link
      to="/admin/dashboard"
      className={` ${
        location.pathname === '/admin/dashboard' && 'active-sidebar'
      } dashboard-sidebar flex items-center justify-start  gap-4 w-full p-2 shadow-lg  before:rounded-r-[50%] before:z-0 before:h-full  before:bg-black`}
    >
      <AiFillHome className="text-light-grey z-10" />
      <li className="hidden md:flex z-10">Home</li>
    </Link>

    <Link
      to="tenants"
      className={` ${
        location.pathname === '/admin/dashboard/tenants' && 'active-sidebar'
      } dashboard-sidebar flex items-center justify-start  gap-4 w-full p-2 shadow-lg  before:rounded-r-[50%] before:z-0 before:h-full  before:bg-black`}
    >
      <FaHouseUser className="text-light-grey z-10" />
      <li className="hidden md:flex z-10">Tenants</li>
    </Link>
    <Link
      to="bookings"
      className={` ${
        location.pathname === '/admin/dashboard/bookings' && 'active-sidebar'
      } dashboard-sidebar flex items-center justify-start  gap-4 w-full p-2 shadow-lg  before:rounded-r-[50%] before:z-0 before:h-full  before:bg-black`}
    >
      <FaUserCheck className="text-light-grey z-10" />
      <li className="hidden md:flex z-10">Booked</li>
    </Link>
    <Link
      to="pending"
      className={` ${
        location.pathname === '/admin/dashboard/pending' && 'active-sidebar'
      } dashboard-sidebar flex items-center justify-start  gap-4 w-full p-2 shadow-lg  before:rounded-r-[50%] before:z-0 before:h-full  before:bg-black`}
    >
      <FaUserClock className="text-light-grey z-10" />
      <li className="hidden md:flex z-10">Pending</li>
    </Link>
    <Link
      to="users"
      className={` ${
        location.pathname === '/admin/dashboard/users' && 'active-sidebar'
      } dashboard-sidebar flex items-center justify-start  gap-4 w-full p-2 shadow-lg  before:rounded-r-[50%] before:z-0 before:h-full  before:bg-black`}
    >
      <MdAdminPanelSettings className="text-light-grey z-10" />
      <li className="hidden md:flex z-10">Users
      </li>
    </Link>

    <button
      onClick={handleLogout}
      className="flex items-center justify-start gap-2 w-full pl-2 text-light-grey hover:shadow-sm hover:shadow-black hover:text-light-black"
    >
      <BiLogOut className="text-light-grey" />
      <li className="hidden md:flex">Logout</li>
    </button>
  </ul>
     }
    </div>
  );
};

export default Sidebar;
