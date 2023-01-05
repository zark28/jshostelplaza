import React,{useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import useManageUser from '../hooks/useManageUser';
const AdminCrm = () => {
  const{getResources}=useManageUser({endpoint:"data"})
 
useEffect(()=>{
getResources()
},[])

  return (
    
    <div className="w-full flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AdminCrm;
