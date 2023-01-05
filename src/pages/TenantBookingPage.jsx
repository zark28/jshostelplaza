import React from 'react';
import { useState } from 'react';
import { StepperContext } from '../components/contexts/StepperContext';
import Stepper from '../components/Stepper';
import BackStepperControl from '../components/BackStepperControl';
import PersonalDetails from '../components/steps/PersonalDetails';
import AuthDetails from '../components/steps/AuthDetails';
import VerifyEmail from '../components/steps/VerifyEmail';
import NextStepperControl from '../components/NextStepperControl';
import useManageUser from '../components/hooks/useManageUser';
import { useNavigate } from 'react-router-dom';
import SinginLayout from '../layout/SinginLayout';
import OtherDetails from '../components/steps/OtherDetails';

const TenantBookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    otherNames: 'N/A',
    gender: '',
    phone: '',
    email: '',
    roomType: '',
    occupancy:'',
    rentPeriod: undefined,
  });

  // const [confirmPassword, setConfirmPassword] = useState({
  //   confirm_password: '',
  // });

  const navigate = useNavigate();

  const { responseData, postRequest } = useManageUser({
    endpoint: 'tenant/register',
    body: userData,
  });

  const steps = [
    'Personal Information',
    'Other Details',
    'Auth Info',
    'Verify Email',
  ];
  const displayStep = (step) => {
    switch (step) {
      default:
        return <PersonalDetails />;
      case 2:
        return <AuthDetails />;
      case 3:
        return <OtherDetails />;
      case 4:
        return <VerifyEmail />;
    }
  };

  const handleSignUp = (userData, nextpage) => {
    if (userData) {
      postRequest(nextpage);
    } else {
      alert('Error! check credentials');
      return;
    }
  };

  const handleNextForm = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const handlePreviousForm = (direction) => {
    handleNextForm(direction);
  };

  const handleInputValidation = (
    obj,
    direction,
    currentStep,
    userData,
   
  ) => {
    // formate data to get not-null elements
    let newObj = Object.values(obj);
    let newObj2 = newObj.filter((e) => String(e).trim());

    // conditionald for signup pagination
    if (currentStep === 1) {
      if (newObj2.length < currentStep * 4) {
        alert('fill all mandatory fields');
        return;
      } else {
        handleNextForm(direction);
      }
    }

    if (currentStep === 2) {
      if (newObj2.length < currentStep + 5) {
        alert('fill all fields');
        return;
      }

    
      handleNextForm(direction);
    }
    if (currentStep === 3) {
      if (newObj2.length < currentStep + 6) {
        alert('select your room details');
        return;
      }

      handleSignUp(userData, handleNextForm);
    }

    if (currentStep === 4) {
      navigate('/');
    }
  };

  const handleClick = (direction) => {
    // setUserData({ ...userData });
    // console.log(userData);
    handleInputValidation(
      userData,
      direction,
      currentStep,
      userData,
      responseData
    );
  };

  return (
    <SinginLayout pageTitle="Signup" layoutHeight="h-full md:h-[100vh]">
      <div className="w-full text-light-grey mt-[120px] md:mt-[80px] pl-10 flex flex-col items-center justify-center gap-[10px]  mb-[10px]   ">
        <h1 className="font-extrabold text-2xl lg:text-[30px]">Booking Form</h1>
        <p className="   md:text-[16px] text-[14px] font-bold">
        Fill the Form to Book a Room
        </p>
      </div>
      <div className="">
        <Stepper steps={steps} currentStep={currentStep} />
        {/* Sign up form here */}
        <form className="w-full md:max-w-[558px] flex flex-col justify-center items-center ">
          <div className="">
            <StepperContext.Provider
              value={{
                userData,
                setUserData,
             
              }}
            >
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>
        </form>
        <div className="mt-5">
          <NextStepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
          <BackStepperControl
            handleClick={handlePreviousForm}
            currentStep={currentStep}
            steps={steps}
          />
        </div>
      </div>
    </SinginLayout>
  );
};

export default TenantBookingPage;
