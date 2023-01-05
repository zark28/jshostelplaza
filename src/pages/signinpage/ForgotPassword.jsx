import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputCard from '../../components/cards/InputCard';
import SinginLayout from '../../layout/SinginLayout';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleSendEmail = () => {
    navigate('/forgot-password-verify');
  };
  return (
    <SinginLayout pageTitle="Forgot password">
      <div className="w-full mt-[250px] md:mt-[100px] pl-10 flex flex-col md:items-center items-start justify-center gap-[10px] mb-[50px]">
        <h1 className="font-extrabold text-2xl lg:text-[30px]">
          Forgot your Password?
        </h1>
        <p className=" text-light-black md:max-w-[558px]  text-[16px] font-bold">
          Enter your email address to generate a new password
        </p>
      </div>
      <form className="w-full md:max-w-[558px] flex flex-col justify-center items-center ">
        <InputCard
          label="Email Address"
          cardStyles="flex-col mb-[32px] "
          labelStyles=" w-full font-semibold "
          nameId="forgotEmail"
        >
          <input
            type="email"
            id="forgotEmail"
            name="email"
            placeholder="Enter your email"
            className="border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]"
          />
        </InputCard>

        <button
          onClick={handleSendEmail}
          className=" text-white hover:bg-deep-purple  px-[50px] py-[10px] w-[200px] rounded-[100px] font-bold text-[24px] bg-light-purple "
        >
          Submit
        </button>
      </form>
    </SinginLayout>
  );
};

export default ForgotPassword;
