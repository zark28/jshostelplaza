import React, { useContext,useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import AccountLayout from '../layout/AccountLayout';
import { RespondsDataContext} from '../components/contexts/SignupSigninContext';
import useManageUser from '../components/hooks/useManageUser';

const Dashboard = () => {
  // const { userData } = useContext(UserDataContext);
  let userInfo =JSON.parse(localStorage.getItem("user"));

  const { getResources} = useManageUser({
    endpoint: 'data',
  });
  
  useEffect(()=>{
    const handleGetResource=()=>{
      
      getResources()
    
    }
    handleGetResource()
    // continues refresh api data
  //   const id = setInterval(handleGetResource, 60000);
  //  return () => clearInterval(id);
  
  },[getResources])
  
  const {responseData }=useContext(RespondsDataContext)



  return (
    <AccountLayout pagetitle="dashboard">
      
      <div className="container flex flex-col items-center justify-center">
        <Topbar userName={userInfo.firstName} />
        <Sidebar role="admin" />

        <div className="flex w-full flex-1 flex-col mt-[10vh] ml-[10vw] p-4 text-deep-purple">
          <Outlet context={{ responseData,getResources,userInfo }} />
        </div> 
      </div>
    </AccountLayout>
  );
};

export default Dashboard;
