import React from 'react'
import { useState } from 'react';
import InputCard from '../cards/InputCard';
import useManageUser from '../hooks/useManageUser';
import {FaUserPlus} from 'react-icons/fa'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import { useCallback } from 'react';

const UserAdd = () => {
// eslint-disable-next-line react-hooks/exhaustive-deps
const initialState ={
  firstName: '',
  lastName: '',
  otherNames: 'n/a',
  gender: '',
  phone: '',
  email: '',
  password: '',
  role: ''
}
  const [newUserInfo,setNewUserInfo]=useState(initialState)
  const [showPassword,setShowPassword]=useState(false)

const {postRequest}=useManageUser({
  endpoint:'auth/register',
  body:newUserInfo
})
const {getResources}=useManageUser({
  endpoint:'data'
})
 

  const handleChange = (e) => {
    setNewUserInfo({...newUserInfo, [e.target.name]: e.target.value });
  };

  const handleAddUser=useCallback(()=>{
    postRequest()
    getResources()
    setNewUserInfo(initialState)
  },[getResources,initialState, postRequest])

  return (
    <>
    <h1 className='dashboard-headings'>Add User</h1>

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
          placeholder='John'
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
          placeholder='other names'
       onChange={handleChange}
          value={newUserInfo.otherNames}
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
          placeholder='Doe'
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
          placeholder='johndoe@email.come'
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
          placeholder='0602789956'
       onChange={handleChange}
          value={newUserInfo.phone}
          className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
        />
      </InputCard>
      <InputCard
        label="Password"
        nameId="password"
        cardStyles="flex-col md:mb-[32px] mb-[20px] relative"
        labelStyles=" w-full font-semibold "
      >
        <input
          type={showPassword?'text':'password'}
          name="password"
          id="password"
          placeholder='password'
       onChange={handleChange}
          value={newUserInfo.password}
          className=" border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
        />
          <span className='absolute h-1/2 text-xl flex justify-center items-center bottom-0 right-1' onClick={()=>setShowPassword(!showPassword)}>
            {showPassword?<AiFillEyeInvisible/>:<AiFillEye/>
            }
          </span>
     
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
                  <option value={null} className="text-grey">--select--</option>
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
    <div className="w-full flex items-center justify-center" >
            <button onClick={handleAddUser} className=" flex items-center gap-2 w-fit  px-10 font-semibold py-3 rounded-[40px] md:rounded-[32px]  text-white text-lg  hover:bg-deep-purple transition-all duration-75 bg-light-purple">
            <FaUserPlus className='text-light-grey'/> Add User
            </button>
           
          </div>
  </>
    
  )
}

export default UserAdd