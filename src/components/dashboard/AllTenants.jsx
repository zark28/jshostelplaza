import React, { useState,useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {FaUserPlus} from 'react-icons/fa'
import useManageUser from '../hooks/useManageUser';

const AllTenants = () => {
  const {responseData,getResources} = useOutletContext();
  const [tenantId,setTenantId]=useState()
const {removeResource}=useManageUser({
  endpoint:`tenant/${tenantId}`
})


useEffect(()=>{
getResources()
},[])

  let userInfo = JSON.parse(localStorage.getItem("user"));


const handleDelete=(id)=>{
  setTenantId(id)
  removeResource()
  console.log(tenantId)
  
  
}
  return   ( <>
  <h1 className='dashboard-headings'>All Tenants</h1>
  
 <div className='w-full flex items-center justify-end'> 
   <Link 
   to='/admin/dashboard/tenants/addtenant' 
   className="flex items-center gap-2 w-fit  px-3 font-semibold py-2 rounded-[40px] md:rounded-[32px]  text-light-grey text-lg  hover:bg-deep-purple transition-all duration-75 bg-light-purple ">
      <FaUserPlus className='text-light-grey'/> 
      Add Tenant
      </Link>
</div>
 
  <div className="w-full flex items-center justify-center mt-[10vh] px-2">
<table  className='w-full bg-white border-collapes border-spacing-2 border border-slate-400 table-auto'>
  <thead>
    <tr >
      <th className='border border-slate-400' >No.</th>
      <th className='border border-slate-400' >Fisrt Name</th>
      <th className='border border-slate-400'>Last Name</th>
      <th className='border border-slate-400'>Email Address</th>
      <th className='border border-slate-400'>Phone Number</th>
      <th className='border border-slate-400'>Gender</th>
      <th className='border border-slate-400'>Occupancy</th>
      <th className='border border-slate-400'>Status</th>
      <th className='border border-slate-400'>Action</th>
    </tr>
  </thead>
  <tbody >
    {
responseData?.tenants?.map((tenant,index)=>(
  <tr key={index}>
  <td className='border border-slate-300 pl-1 text-center'>{index+1}</td>
  <td className='border border-slate-300 pl-1  text-center'>{tenant.firstName}</td>
    <td className='border border-slate-300 pl-1  text-center '>{tenant.lastName}</td>
    <td className='border border-slate-300 pl-1  text-center'>{tenant.email}</td>
    <td className='border border-slate-300 pl-1 text-center'>{tenant.phone}</td>
    <td className='border border-slate-300 pl-1 text-center '>{tenant.gender}</td>
    <td className='border border-slate-300 pl-1 text-center'>{tenant.occupancy}</td>
    <td className={`border border-slate-300 pl-1 text-light-grey text-center ${tenant.status===false?'bg-red':'bg-deep-purple'}`}>{tenant.status===false?'pending':'booked'}</td>
    <td className='border border-slate-300 p-1 text-center flex items-center gap-1 '>
      <Link to={tenant._id} className='w-full h-full hover:bg-black  px-1 font-semibold bg-grey rounded-[5px]'>View</Link>
  { userInfo.role==='superadmin'
  &&  
  <button 
  onClick={()=> handleDelete(tenant._id)} 
  className='w-full h-full hover:bg-black hover:text-red  px-1 font-semibold bg-red text-grey bg-opacity-90 rounded-[5px]'>
    Delete
    </button>}
    </td>
  </tr>
))

    }
   
  </tbody>

</table>
  </div>
  </>)
};

export default AllTenants;
