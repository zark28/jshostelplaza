import React from 'react';
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useManageUser from '../components/hooks/useManageUser';

const AccountLayout = ({ pagetitle, children }) => {
  document.title = `J's Hostel Plaza -${pagetitle && pagetitle} `;
  const{getResources}=useManageUser({endpoint:"data"})
  const token =localStorage.getItem("token")
const location=useLocation()


useEffect(()=>{
getResources()
},[])

  if(token){

    return <div className="w-full static  h-full bg-white">{children}</div>;
  }
  else{
    return  <Navigate to="/admin" state={{from:location}} replace/>;
  }

};

export default AccountLayout;
