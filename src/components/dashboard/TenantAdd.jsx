
import React,{useState} from 'react';
import { useCallback } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import InputCard from '../cards/InputCard';
import useManageUser from '../hooks/useManageUser';

const TenantAdd = () => {
  const { getResources} = useOutletContext();
  // const navigate=useNavigate()

    const newTenantInfo = {
      firstName: '',
      lastName: '',
      otherNames: 'N/A',
      gender: '',
      phone: '',
      email: '',
      roomType: '',
      occupancy:'',
      rentPeriod: undefined,
    }
  const [newTenant,setNewTenant]=useState(newTenantInfo)


  const handleChange = (e) => {
    setNewTenant({...newTenant, [e.target.name]: e.target.value });
  };


const {postRequest}=useManageUser({
  endpoint:`tenant/register`,
  body:newTenant
})

  const handleAddTenant = useCallback(()=>{
  postRequest()
  getResources()
  setNewTenant(newTenantInfo)
// navigate("/admin/dashboard/tenants")
  },[getResources, newTenantInfo, postRequest])

 

  return (
    <div className="flex flex-col items-center justify-between w-full h-full flex-1 text-light-purple">
      <h1 className='dashboard-headings'>Add New Tenant</h1>
      <div className='flex items-center justify-between w-full'>
       {/* <span className='flex items-center justify-center'>
       <p>Status: </p>
        <p className={` text-white px-2 py-1 font-semibold rounded-sm ${newUserInfo.status===false?'bg-red':'bg-deep-purple'}`} > {newUserInfo.status===false?'pending':'confirmed'}</p>
       </span> */}
       
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-4   gap-4 content-center items-center justify-center">
        <InputCard
          label="First Name"
          nameId="firstName"
          cardStyles="flex-col md:mb-[32px] mb-[20px] "
          labelStyles=" w-full font-semibold "
        >
          <input
            type="text"
            name="firstName"
            id="firstName"
        onChange={handleChange}
            value={newTenant.firstName}
            className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
          />
        </InputCard>

        <InputCard
          label="Other Names"
          nameId="otherNames"
          cardStyles="flex-col md:mb-[32px] mb-[20px] "
          labelStyles=" w-full font-semibold "
        >
          <input
            type="text"
            name="otherNames"
            id="otherNames"
         onChange={handleChange}
            value={newTenant.otherNames && newTenant.otherNames}
            className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
          />
        </InputCard>

        <InputCard
          label="Last Name"
          nameId="lastName"
          cardStyles="flex-col md:mb-[32px] mb-[20px] "
          labelStyles=" w-full font-semibold "
        >
          <input
            type="text"
            name="lastName"
            id="lastName"
         onChange={handleChange}
            value={newTenant.lastName}
            className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
          />
        </InputCard>

        <InputCard
          label="Email"
          nameId="email"
          cardStyles="flex-col md:mb-[32px] mb-[20px] "
          labelStyles=" w-full font-semibold "
        >
          <input
            type="email"
            name="email"
            id="email"
         onChange={handleChange}
            value={newTenant.email}
            className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
          />
        </InputCard>

        <InputCard
          label="Phone"
          nameId="phone"
          cardStyles="flex-col md:mb-[32px] mb-[20px] "
          labelStyles=" w-full font-semibold "
        >
          <input
            type="tel"
            name="phone"
            id="phone"
         onChange={handleChange}
            value={newTenant.phone}
            className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
          />
        </InputCard>

        <InputCard
          label="Gender"
          nameId="gender"
          cardStyles="flex-col md:mb-[32px] mb-[20px] "
          labelStyles=" w-full font-semibold "
        >
        
           <select
            type="text"
                  id="gender"
                  name="gender"
                  onChange={handleChange}
                  value={newTenant.gender}
                  className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
                >
                  <option value={null} className="text-grey"></option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
        </InputCard>

        <InputCard
          label="Room Type"
          nameId="roomType"
          cardStyles="flex-col md:mb-[32px] mb-[20px] "
          labelStyles=" w-full font-semibold "
        >
           <select
           type="text"
           id='roomType'
                name="roomType"
                value={newTenant.roomType}
                onChange={handleChange}
                className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
              >
                <option>--select--</option>
                <option value="standard">Standard</option>
                <option value="luxury">Luxury</option>
              </select>
         
        </InputCard>
        <InputCard
          label="Rent Period"
          nameId="rentPeriod"
          cardStyles="flex-col md:mb-[32px] mb-[20px] "
          labelStyles=" w-full font-semibold "
        >
           <select
           type="text"
           id='rentPeriod'
                name="rentPeriod"
                value={newTenant.rentPeriod}
                onChange={handleChange}
                className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
              >
                <option>--select--</option>
                <option value={1}>1 academic year</option>
                <option value={2}>2 academic years</option>
                <option value={3}>3 acedemic years</option>
              </select>

        
        </InputCard>

        <InputCard
          label="Occupancy"
          nameId="occupancy"
          cardStyles="flex-col md:mb-[32px] mb-[20px] "
          labelStyles=" w-full font-semibold "
        >

              <select
              type="text"
              name="occupancy"
              id="occupancy"              
              onChange={handleChange}
              value={newTenant.occupancy}
              className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
              >
             
                <option value={0}>--select--</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
              </select>          
         
        </InputCard>
      </div>
      <div className="w-full flex items-center justify-center gap-5" >
            <button onClick={handleAddTenant} className=" w-fit  px-10 font-semibold py-3 rounded-[40px] md:rounded-[32px]  text-white text-lg  hover:bg-deep-purple transition-all duration-75 bg-light-purple">
              Add Tenant
            </button>
          
          </div>
    </div>
  );
};

export default TenantAdd;
