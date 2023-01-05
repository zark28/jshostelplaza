import React from 'react';

function NextStepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="flex justify-around mb-8">
      <button
        onClick={() => handleClick('next')}
        className="text-white mt-[45px] md:mt-0 hover:bg-deep-purple  px-[50px] py-[10px] w-[296px] rounded-[100px] font-bold text-[24px] bg-light-purple "
      >
        {currentStep === steps.length - 1 ? 'Confirm' : 'Finish'}
      </button>
    </div>
  );
}

export default NextStepperControl;
