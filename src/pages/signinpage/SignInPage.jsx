import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputCard from '../../components/cards/InputCard';
import SinginLayout from '../../layout/SinginLayout';
import useManageUser from '../../components/hooks/useManageUser';

const SignInPage = ({ role = null }) => {
  const userInitialValues = { email: '', password: '' };
  const [userInfo, setUserInfo] = useState(userInitialValues);
  const [inputType, setInputType] = useState('password');

  const handleShowPassword = (e) => {
    e.preventDefault();
    // console.log();
    inputType === 'text' ? setInputType('password') : setInputType('text');
  };
  const handleUserInput = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const { postRequest } = useManageUser({
    endpoint: role === 'admin' ? `auth/login` : 'tenant/login',
    body: userInfo,
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    if (userInfo.email && userInfo.password) {
      // console.log(userInfo);
      postRequest();
      // handleSignInNavigation(responseData);
      // setUserInfo(userInitialValues);
    } else {
      alert('Please check Email and Password');
    }
  };

  return (
    <SinginLayout pageTitle="Signin" >
      <div className="w-full text-light-grey mt-[120px] md:mt-[80px] pl-10 flex flex-col md:items-center items-start justify-center gap-[10px]  mb-[20px]   ">
        <h1 className="font-extrabold text-2xl lg:text-[30px]">Sign in</h1>
        <p className="   md:text-[16px] text-[14px] font-bold">
          Welcome back! Please enter your valid details to sign in to your
          account
        </p>
      </div>
      <form className="w-full md:max-w-[558px] flex flex-col justify-center items-center ">
        <InputCard
          cardStyles="flex-col md:mb-[32px] mb-[20px] "
          labelStyles=" w-full font-semibold "
          label="Email Address"
          nameId="userEmail"
        >
          <input
            type="email"
            name="email"
            id="userEmail"
            value={userInfo.email}
            placeholder="Enter your email"
            className={` border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]`}
            onChange={handleUserInput}
          />
        </InputCard>

        <InputCard
          label="Password"
          cardStyles="flex-col"
          labelStyles=" w-full font-semibold "
          inputStyles=" border-[1px] border-grey rounded-[10px] w-full pl-[10px] "
          nameId="userPassword"
        >
          <input
            type={inputType}
            name="password"
            id="userPassword"
            value={userInfo.password}
            placeholder="Enter your password"
            className={` border-[1px] border-grey rounded-[10px] w-full pl-[10px] outline-none bg-light-grey h-[34px] md:h-[44px]`}
            onChange={handleUserInput}
            autoComplete="current-password"
          />
        </InputCard>
        <div className="hidden w-full md:flex items-center mt-2 justify-between mb-[32px]">
          <InputCard
            onClick={handleShowPassword}
            label="show my password"
            cardStyles="w-fit  flex-row-reverse items-center  "
            nameId="showPassword"
          >
            <input
              type="checkbox"
              name="showpassword"
              id="showPassword"
              checked={inputType === 'text' && true}
              onChange={() => {}}
            />
          </InputCard>
          <Link className=" text-light-purple" to="/forgot-password">
            FORGOT PASSWORD?
          </Link>
        </div>
        <button
          onClick={handleSignIn}
          className=" text-white mt-[45px] md:mt-0 hover:bg-deep-purple  px-[30px] py-[10px] w-[200px] rounded-[100px] font-bold text-[24px] bg-light-purple "
        >
          Log In
        </button>
        {!role && (
          <p className="mt-[20px] md:mb-[32px] mb-[6px]">
            Don't have an account?{' '}
            <Link className=" text-light-purple font-semibold" to="/register">
              Register
            </Link>
          </p>
        )}
        <Link
          className="w-full flex md:hidden mb-[37px] justify-center items-center text-center text-[14px] text-light-purple"
          to="/forgot-password"
        >
          FORGOT PASSWORD?
        </Link>
        {/* <div className=" w-full flex items-center justify-center gap-[5px] mb-[17px]">
          <hr className="bg-black flex-1 h-[1px]" />
          <p className="">or with</p>
          <hr className="bg-black flex-1 h-[1px]" />
        </div>
        <Link to="/">continue with Google</Link> */}
      </form>
    </SinginLayout>
  );
};

export default SignInPage;
