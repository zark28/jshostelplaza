import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputCard from '../../components/cards/InputCard';
import SinginLayout from '../../layout/SinginLayout';

const PassReset = () => {
  const navigate = useNavigate();
  const handleResetPass = () => {
    navigate('/login');
  };
  return (
    <SinginLayout pageTitle="Password reset">
      <div className="w-full mt-[250px] md:mt-[100px] pl-10 flex flex-col md:items-center items-start justify-center gap-[10px] mb-[50px]">
        <h1 className="font-extrabold text-2xl lg:text-[30px]">
          Create a New Password
        </h1>
        <p className=" text-light-black md:max-w-[558px] flex   text-[16px] font-bold">
          choose a new password
        </p>
      </div>
      <form className="w-full md:max-w-[558px] flex flex-col justify-center items-center ">
        <InputCard
          type="password"
          label="New Password"
          name="password"
          placeholder="Enter new password"
          cardStyles="flex-col mb-[32px]"
          labelStyles=" w-full font-semibold "
          inputStyles=" border-[1px] border-grey rounded-[10px] w-full pl-[10px] "
        />
        <InputCard
          type="password"
          label="Confirm Password"
          name="password"
          placeholder="Confirm Password"
          cardStyles="flex-col mb-[32px]"
          labelStyles=" w-full font-semibold "
          inputStyles=" border-[1px] border-grey rounded-[10px] w-full pl-[10px] "
        />

        <button
          onClick={handleResetPass}
          className=" text-white hover:bg-deep-purple  px-[50px] py-[10px] w-[296px] rounded-[100px] font-bold text-[24px] bg-light-purple "
        >
          Next
        </button>
      </form>
    </SinginLayout>
  );
};

export default PassReset;
