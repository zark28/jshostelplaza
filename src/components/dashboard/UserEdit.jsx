
import React,{ useState,useCallback } from 'react'
import { useNavigate, useOutletContext ,useParams} from 'react-router-dom';
import InputCard from '../cards/InputCard';
import useManageUser from '../hooks/useManageUser';
const UserEdit = () => {

    const { responseData,userInfo } = useOutletContext();
    const navigate=useNavigate()
    const {userId }=useParams()
    const newUser = responseData?.users.find((user)=>user._id===userId)
    const [newUserInfo,setNewUserInfo]=useState(newUser)

    const handleChange = (e) => {
      setNewUserInfo({...newUserInfo, [e.target.name]: e.target.value });
    };
  
   
    const {getResources}=useManageUser({
      endpoint:'data',
    })
    const {removeResource,updateResources}=useManageUser({
      endpoint:`auth/${userId}`,
      body:newUserInfo
    })
    
      const handleUpdate = useCallback(()=>{
       
      updateResources()
      getResources()
    
      },[getResources,updateResources])
    
      const handleDelete=useCallback(()=>{
        removeResource()
     
        navigate("/admin/dashboard/users")
      },[getResources, navigate, removeResource])
  return (
    <>
    <h1 className='dashboard-headings'>User Profile</h1>
    <div className='flex items-center justify-end w-full'>
      

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
          value={newUserInfo.firstName}
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
          value={newUserInfo.otherNames && newUserInfo.otherNames}
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
          value={newUserInfo.lastName}
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
          value={newUserInfo.email}
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
          value={newUserInfo.phone}
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
                  value={newUserInfo.gender}
                  className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
                >
                  <option value={null} className="text-grey"></option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
      </InputCard>
      <InputCard
        label="Role"
        nameId="role"
        cardStyles="flex-col md:mb-[32px] mb-[20px] "
        labelStyles=" w-full font-semibold "
      >
        <select
            type="text"
                  id="role"
                  name="role"
                  onChange={handleChange}
                  value={newUserInfo.role}
                  className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
                >
                  <option value={null} className="text-grey">--select--</option>
                  <option value="admin">admin</option>
                  <option value="superadmin">superadmin</option>
                </select>
      </InputCard>

     
    </div>
    <div className="w-full flex items-center justify-center gap-5" >
    {userInfo.role==='superadmin' &&     <button onClick={handleUpdate} className=" w-fit  px-10 font-semibold py-3 rounded-[40px] md:rounded-[32px]  text-white text-lg  hover:bg-deep-purple transition-all duration-75 bg-light-purple">
              Update
            </button>}
            {  userInfo.role==='superadmin' && <button onClick={handleDelete} className=" w-fit  px-10 font-semibold py-3 rounded-[40px] md:rounded-[32px]  text-white text-lg  hover:bg-opacity-[100%] transition-all duration-75 bg-red bg-opacity-[90%]">
              Delete
            </button>}
          </div>
  </>
  )
}

export default UserEdit