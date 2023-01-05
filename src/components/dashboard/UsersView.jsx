import React,{useEffect} from 'react';

import { Link, useOutletContext } from 'react-router-dom';


const Users = () => {
const {responseData,getResources} =useOutletContext()
useEffect(()=>{
  getResources()
},[])

  return (<>
  <h1 className='dashboard-headings'>Users</h1>
  <div className="w-full flex items-center justify-center mt-[10vh] px-2">
<table  className='w-full bg-white border-collapes border-spacing-2 border border-slate-400 table-auto'>
  <thead className='bg-grey'>
    <tr >
      <th className='border border-slate-400' >No.</th>
      <th className='border border-slate-400' >Fisrt Name</th>
      <th className='border border-slate-400'>Last Name</th>
      <th className='border border-slate-400'>Email Address</th>
      <th className='border border-slate-400'>Phone Number</th>
      <th className='border border-slate-400'>Gender</th>
      <th className='border border-slate-400'>Role</th>
      <th className='border border-slate-400'>Action</th>
    </tr>
  </thead>
  <tbody >
    {
responseData?.users?.map((user,index)=>(
  <tr key={index}>
  <td className='border border-slate-300 pl-1 text-center'>{index+1}</td>
  <td className='border border-slate-300 pl-1  text-center'>{user.firstName}</td>
    <td className='border border-slate-300 pl-1  text-center '>{user.lastName}</td>
    <td className='border border-slate-300 pl-1  text-center'>{user.email}</td>
    <td className='border border-slate-300 pl-1 text-center'>{user.phone}</td>
    <td className='border border-slate-300 pl-1 text-center '>{user.gender}</td>
    <td className='border border-slate-300 pl-1 text-center '>{user.role}</td>
    <td className='border border-slate-300 p-1 text-center '><Link to={user._id} className='w-full h-full hover:bg-black  px-1 font-semibold bg-grey rounded-[5px]'>View</Link></td>

   
  </tr>
))

    }
   
  </tbody>

</table>
  </div>
  </>);
};

export default Users;
