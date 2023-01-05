import React from 'react';

const BenefitsCard = ({ children, descriptionText, heading }) => {
  return (
    <div className="benefits-card mt-4  h-full shadow-xl  w-[85vw] text-black py-4 px-2 flex flex-col sm:items-start md:items-center justify-center md:mb-10 md:w-[43vw] lg:h-[20vh]  md:flex-row ">
      <div className=" text-light-purple flex items-center justify-center  object-contain pr-4 text-[3rem] md:text-[5rem]">
        {children}
      </div>
      <div className="text  w-full p-3 text-left   md:text-left ">
        <h2 className="w-full text-[22px] font-semibold">{heading}</h2>
        <p className="text-[16px] font-medium pt-1">{descriptionText}</p>
      </div>
    </div>
  );
};

export default BenefitsCard;
