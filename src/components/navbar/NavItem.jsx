import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
const NavItem = ({ navLink, navItem, onclick }) => {
  const location = useLocation();
  return (
    <NavLink
      onClick={onclick}
      to={navLink}
      className={` ${location.pathname=== navLink && 'active-nav'} navitem hover:border-b-[3px] rounded-3xl bg-light-purple md:bg-opacity-0 md:text-black text-white md:rounded-none hover:outline-4 hover:outline-light-purple hover:text-deep-purple  '
      transition-all  md:shadow-none md:w-fit shadow-light-black shadow-lg w-1/2 text-center whitespace-nowrap duration-75 navitem p-2 font-semibold`}
    >
      {navItem}
    </NavLink>
  );
};

export default NavItem;
