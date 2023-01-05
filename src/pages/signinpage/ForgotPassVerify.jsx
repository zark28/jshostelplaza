import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputCard from '../../components/cards/InputCard';
import SinginLayout from '../../layout/SinginLayout';

const Fogotpassword = ({ useremail = `dammy@gmail.com` }) => {
  const navigate = useNavigate();
  const handleVerify = () => {
    navigate('/reset-password');
  };
  return (
    <SinginLayout pageTitle="Password verify">
      <div className="w-full mt-[250px] md:mt-[100px] pl-10 flex flex-col md:items-center items-start justify-center gap-[10px]  mb-[50px] ">
        <h1 className="font-extrabold text-2xl lg:text-[30px]">
          Password verification code
        </h1>
        <p className=" text-light-black md:max-w-[558px] flex gap-[8px]  text-[16px] font-bold">
          Enter 6 digit code sent to your email{' '}
          <span className="text-light-purple flex">{useremail}</span>
        </p>
      </div>
      <form className="w-full md:max-w-[558px] flex flex-col justify-center items-center ">
        <InputCard
          type="email"
          label="Email Address"
          name="email"
          placeholder="Enter your email"
          cardStyles="flex-col mb-[32px] "
          labelStyles=" w-full font-semibold "
          inputStyles="border-[1px] border-grey rounded-[10px] w-full pl-[10px] "
        />

        <button
          onClick={handleVerify}
          className=" text-white hover:bg-deep-purple  px-[50px] py-[10px] w-[296px] rounded-[100px] font-bold text-[24px] bg-light-purple "
        >
          Next
        </button>
      </form>
    </SinginLayout>
  );
};

export default Fogotpassword;
