import React ,{useEffect}from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const BookedTenants = () => {
  const {responseData,getResources} = useOutletContext();
   
  useEffect(()=>{
  getResources()
  },[])
  let bookedTenants = responseData.tenants?.filter((tenant)=>tenant.status === true)
  return  ( <>
    <h1 className='dashboard-headings w-full text-center'>Confirmed Bookings</h1>
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
        bookedTenants?.length===0? <tr className='dashboard-headings text-center w-full'> <td colSpan="9">No List Available </td></tr>:
  bookedTenants&&bookedTenants.map((tenant,index)=>(
    <tr key={index}>

    <td className='border border-slate-300 pl-1 text-center'>{index+1}</td>
    <td className='border border-slate-300 pl-1  text-center'>{tenant.firstName}</td>
      <td className='border border-slate-300 pl-1  text-center '>{tenant.lastName}</td>
      <td className='border border-slate-300 pl-1  text-center'>{tenant.email}</td>
      <td className='border border-slate-300 pl-1 text-center'>{tenant.phone}</td>
      <td className='border border-slate-300 pl-1 text-center '>{tenant.gender}</td>
      <td className='border border-slate-300 pl-1 text-center'>{tenant.occupancy}</td>
      <td className={`border border-slate-300 pl-1 text-light-grey text-center ${tenant.status===false?'bg-red':'bg-deep-purple'}`}>{tenant.status===false?'pending':'booked'}</td>
      <td className='border border-slate-300 p-1 text-center '><Link to={tenant._id} className='w-full h-full hover:bg-black  px-1 font-semibold bg-grey rounded-[5px]'>View</Link></td>
    </tr>
  )) 
  
      }
    
    </tbody>
  
  </table>
    </div>
    </>);
};

export default BookedTenants;
