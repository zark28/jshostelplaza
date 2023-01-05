import React, { useContext } from 'react';
import { StepperContext } from '../contexts/StepperContext';
export default function OtherDetails() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1 font-Raleway font-extrabold ">
        <div className="text-black text-md w-full text-center">
          <h3 className="font-bold">Room Details</h3>
        </div>
        <div className="text-[#FFFFFF] text-center text-sm mb-2">
          <p className="invisible">
            Let’s get you set up so that you can start trading. Let's get you
            set up.
          </p>
        </div>
        <div className="mr-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full flex flex-col items-start justify-center md:gap-[12px] gap-[6px] mb-[20px]">
            <label className="w-full font-semibold cursor-pointer md:text-[20px] text-[14px]">
              Room Type
            </label>
            <div className="flex border-[1px] w-full border-grey bg-light-grey rounded-[10px] px-[10px]">
              <select
                name="roomType"
                value={userData.roomType}
                onChange={handleChange}
                className="font-normal w-full outline-none bg-light-grey h-[34px] md:h[44px]"
              >
                <option>--select--</option>
                <option value="standard">Standard</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center md:gap-[12px] gap-[6px] mb-[20px]">
            <label className="w-full font-semibold cursor-pointer md:text-[20px] text-[14px]">
              Rent Duration
            </label>
            <div className="flex border-[1px] w-full border-grey bg-light-grey rounded-[10px] px-[10px]">
              <select
                name="rentPeriod"
                value={userData.rentPeriod}
                onChange={handleChange}
                className="font-normal w-full outline-none bg-light-grey h-[34px] md:h[44px]"
              >
                <option>--select--</option>
                <option value={1}>1 academic year</option>
                <option value={2}>2 academic years</option>
                <option value={3}>3 acedemic years</option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center md:gap-[12px] gap-[6px] mb-[20px]">
            <label className="w-full font-semibold cursor-pointer md:text-[20px] text-[14px]">
              Occupancy
            </label>
            <div className="flex border-[1px] w-full border-grey bg-light-grey rounded-[10px] px-[10px]">
              <select
                name="occupancy"
                value={userData.occupancy}
                onChange={handleChange}
                className="font-normal w-full outline-none bg-light-grey h-[34px] md:h[44px]"
              >
             
                <option value={0}>--select--</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
