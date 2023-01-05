import React from 'react'
import {Link, Outlet, useOutletContext} from 'react-router-dom';
import {FaUserPlus} from 'react-icons/fa'


const Users = () => {
  const {responseData,getResources} =useOutletContext()
  const userInfo =JSON.parse(localStorage.getItem("user"))

  return (
    <div className="flex flex-col items-center justify-between w-full h-full flex-1 text-light-purple">
       {
  userInfo.role==='superadmin' 
  &&  
  <div className='w-full flex items-center justify-end'> 
    <Link 
    to='/admin/dashboard/users/adduser' 
    className="flex items-center gap-2 w-fit  px-3 font-semibold py-2 rounded-[40px] md:rounded-[32px]  text-light-grey text-lg  hover:bg-deep-purple transition-all duration-75 bg-light-purple ">
       <FaUserPlus className='text-light-grey'/> 
       Add User
       </Link>
 </div>
 }
      <Outlet context={{responseData,getResources,userInfo}} />
    </div>
  )
}

export default Users