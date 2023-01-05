import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputCard from '../../components/cards/InputCard';
import SinginLayout from '../../layout/SinginLayout';

const SignInVerificationPage = ({ countdown = 1 + 'min' }) => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/dashboard');
  };
  return (
    <SinginLayout pageTitle="Signin verify">
      <div className="w-full mt-[250px] md:mt-[100px] pl-10 flex flex-col md:items-center items-start justify-center gap-[10px] md:gap-[32px] mb-[48px] ">
        <h1 className="font-extrabold text-2xl lg:text-[30px]">Sign in</h1>
        <p className=" text-light-black w-full md:max-w-[558px]  md:text-[16px] text-[14px] font-bold">
          We want to know that you are the one trying to log in. A six digit
          code has been sent to your registration email
          *********nonso45@gmail.com
        </p>
      </div>
      <form className="w-full md:max-w-[558px] flex flex-col justify-center items-center ">
        <InputCard
          type="text"
          label="verification code"
          name="email"
          placeholder="Enter the OTP  sent your email"
          cardStyles="flex-col mb-[2px] "
          labelStyles="text-[20px] w-full font-semibold "
          inputStyles=" border-[1px] border-grey rounded-[10px] w-full pl-[10px] "
        />
        <div className=" w-full flex items-center  justify-end mb-[64px] md:mb-[97px]">
          <Link className="text-[16px] text-light-purple" to="/resetpass">
            Resend OTP in <span>{countdown}</span>
          </Link>
        </div>

        <button
          onClick={handleSignIn}
          className=" text-white hover:bg-deep-purple mb-[64px] px-[50px] py-[10px] w-[296px] rounded-[100px] font-bold text-[24px] bg-light-purple "
        >
          Log In
        </button>
        {/* <p className="mt-20px md:mt-[17px] mb-[64px]">
          Don't have an account?{' '}
          <Link className=" text-light-purple" to="/register">
            Register
          </Link>
        </p> */}
        <div className=" w-full flex items-center justify-center gap-[5px] mb-[17px]">
          <hr className="bg-black flex-1 h-[1px]" />
          <p className="">or with</p>
          <hr className="bg-black flex-1 h-[1px]" />
        </div>
        <Link to="/">continue with Google</Link>
      </form>
    </SinginLayout>
  );
};

export default SignInVerificationPage;
