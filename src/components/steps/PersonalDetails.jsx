import React, { useContext } from 'react';
import { StepperContext } from '../contexts/StepperContext';
import { UserIcon } from '@heroicons/react/outline';
import InputCard from '../../components/cards/InputCard';

export default function PersonalDetails() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1 font-Raleway font-extrabold ">
        <div className="text-[#FFFFFF] text-center text-sm mb-2">
          <p className="invisible">
            Let’s get you set up so that you can start trading. Let's get you
            set up.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
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
              value={userData.firstName}
              placeholder="First name"
              className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
            />
          </InputCard>
          <InputCard
            label="Last Name"
            nameId="lastname"
            placeholder="Last name"
            cardStyles="flex-col md:mb-[32px] mb-[20px] "
            labelStyles=" w-full font-semibold "
          >
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleChange}
              value={userData.lastName}
              placeholder="Last name"
              className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
            />
          </InputCard>
          <InputCard
            label="Other Names"
            nameId="otherNames"
            cardStyles="flex-col md:mb-[32px] mb-[20px] "
            labelStyles=" w-full font-semibold "
            inputStyles="font-normal border-[1px] border-grey rounded-[10px] w-full pl-[10px]"
          >
            <input
              type="text"
              name="otherNames"
              id="otherNames"
              onChange={handleChange}
              value={userData.otherNames}
              placeholder="Enter other names"
              className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
            />
          </InputCard>
          <div className=" w-full flex flex-col md:flex-row items-center justify-between  md:col-span-2 lg:col-span-3">
            <InputCard
              label="Gender"
              nameId="gender"
              labelStyles="w-full font-semibold"
              cardStyles="flex-col md:mb-[32px] mb-[20px] "
            >
              <span className="flex  border-[1px] border-grey bg-light-grey rounded-[10px] px-[5px] md:px-[10px]">
                <span className="flex items-center">
                  <UserIcon className="w-5 h-4 md:w-6 md:h-5" />
                </span>
                <select
                  id="gender"
                  name="gender"
                  value={userData.gender}
                  onChange={handleChange}
                  className="border-[1px] border-none w-full pr-[10px] outline-none bg-light-grey h-[34px] md:h-[44px"
                >
                  <option value={null} className="text-grey"></option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </span>
            </InputCard>

            <InputCard
              pattern="[0-9]*"
              label="Phone Number"
              nameId="phone"
              labelStyles="w-full font-semibold"
              cardStyles="flex-col  md:mb-[32px] mb-[20px] "
            >
              <input
                type="tel"
                name="phone"
                id="phone"
                value={userData.phone}
                onChange={handleChange}
                placeholder="0507755443"
                className="border-[1px] border-grey rounded-[10px]  pl-[10px] outline-none bg-light-grey  h-[34px] md:h-[44px]"
              />
            </InputCard>
          </div>
        </div>
      </div>
    </div>
  );
}
