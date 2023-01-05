import React,{ useContext } from 'react';
import { StepperContext } from '../contexts/StepperContext';
import InputCard from '../../components/cards/InputCard';
export default function AuthDetails() {
  const { userData, setUserData} =
    useContext(StepperContext);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  // const handleConfirm = (e) => {
  //   setConfirmPassword({ confirm_password: e.target.value });
  // };
  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1 font-Raleway font-extrabold ">
        <div className="text-md w-full text-center ">
          <h3 className="font-bold">Complete your registration</h3>
        </div>
        <div className="text-[#FFFFFF] text-center text-sm mb-2">
          <p className="invisible">
            Let’s get you set up so that you can start trading. Let's get you
            set up.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <InputCard
            label="Email Address"
            nameId="userEmail"
            cardStyles="flex-col md:mb-[32px] mb-[20px] col-span-1 md:col-span-2 "
            labelStyles="w-full font-semibold"
          >
            <input
              type="email"
              name="email"
              id="userEmail"
              onChange={handleChange}
              value={userData['email']}
              placeholder="Enter your email"
              className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
            />
          </InputCard>
          {/* <InputCard
            nameId="userPassword"
            label="Password"
            cardStyles="flex-col md:mb-[32px] mb-[20px] "
            labelStyles="w-full font-semibold "
          >
            <input
              type="password"
              name="password"
              id="userPassword"
              onChange={handleChange}
              value={userData['password']}
              placeholder="Enter your password"
              className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
            />
          </InputCard>
          <InputCard
            label="Confirm Password"
            nameId="verifyPassword"
            cardStyles="flex-col md:mb-[32px] mb-[20px] "
            labelStyles=" w-full font-semibold "
          >
            <input
              type="password"
              name="confirmPassword"
              id="verifyPassword"
              onChange={handleConfirm}
              value={confirmPassword['confirm_password']}
              placeholder="Confirm password"
              className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
            />
          </InputCard> */}
        </div>
      </div>
    </div>
  );
}
