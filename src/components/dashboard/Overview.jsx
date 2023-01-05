import React ,{useEffect}from 'react';
import { useOutletContext } from 'react-router-dom';
import DashboardStatsCard from '../cards/DashboardStatsCard';
import {FaUsers,FaUserCheck,FaRedhat} from 'react-icons/fa'
import {RiUserSettingsFill} from 'react-icons/ri'
import {MdBedroomChild,MdKingBed} from 'react-icons/md'
import {GiChessKing} from 'react-icons/gi'
const Overview = ({role=null}) => {
  const {responseData,getResources}= useOutletContext({endpoint:"data"})
   
  
  useEffect(()=>{
  getResources()
  },[])
 
  
    console.log(responseData);
    let allTenants =responseData.tenants?.length
    let bookedTenants = responseData.tenants?.filter((tenant)=>tenant.status === true)
    let pendingTenants = responseData.tenants?.filter((tenant)=>tenant.status === false)
    let singleOccupancy = responseData.tenants?.filter((tenant)=>tenant.occupancy === 'single')
    let doubleOccupancy = responseData.tenants?.filter((tenant)=>tenant.occupancy === 'double')
    let standardRoom = responseData.tenants?.filter((tenant)=>tenant.roomType === 'standard')
    let luxuryRoom = responseData.tenants?.filter((tenant)=>tenant.roomType === 'luxury')
  
 


  const  dashboardStats={
    admin:[
        {title:'Total Tenants', icon:<FaUsers size='1.5em'/>,color:'bg-grey',stats:allTenants?allTenants:0},
        {title:'Booked Tenants', icon:<FaUserCheck size='1.5em'/>,color:'bg-gold',stats:bookedTenants?bookedTenants.length:0},
        {title:'Pending Tenants', icon:<RiUserSettingsFill size='1.5em'/>,color:'bg-red',stats:pendingTenants?pendingTenants.length:0},
        {title:'Single Occupancy', icon:<MdBedroomChild size='1.5em'/>,color:'bg-light-purple',stats:singleOccupancy?singleOccupancy.length:0},
        {title:'Double Occupancy', icon:<MdKingBed size='1.5em'/>,color:'bg-grey',stats:doubleOccupancy?doubleOccupancy.length:0},
        {title:'Luxury Rooms', icon:<GiChessKing size='1.5em'/>,color:'bg-gold',stats:`${luxuryRoom?luxuryRoom.length:0}  / 400`},
        {title:'Standard', icon:<FaRedhat size='1.5em'/>,color:'bg-grey',stats:`${standardRoom?standardRoom.length:0}  / 400` },
      
        
    ],
    user:[
      {title:'Welcome ', icon:'heloo',color:'bg-grey',stats:89},

    ]
}

  return (
    <div className="flex items-center justify-center">
      {
        role!=="admin" ?
        <div>
 <h2>Welcome to Your account </h2>
        </div> 
        :
        <div className='w-full flex flex-col items-center justify-center'>
          <h2 className='dashboard-headings'>Dashboard</h2>
          <div className='w-full mt-10 grid grid-cols-2 md:grid-cols-3  gap-4'>
            {
              dashboardStats.admin.map((stat,index)=>(

                <DashboardStatsCard key={index} title={stat.title} icon={stat.icon} stat={stat.stats} bgColor={stat.color}   />
              ))
            }
        
          </div>

        </div>

}
     
     
    </div>
  );
};

export default Overview;
