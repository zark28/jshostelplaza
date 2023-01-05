import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './TenantStatus.css';
const TenantStatus = () => {
  const { userInfo } = useOutletContext();
  console.log(userInfo);
  return (
    <div className="flex flex-col items-center justify-between w-full h-full flex-1 text-light-purple">
      <h1>TenantStatus</h1>
      <div className="w-full flex items-center justify-center mt-[10vh]">
        <div className="w-[300px] md:w-[50%]  h-full flex shadow-sm shadow-black items-center justify-evenly flex-col p-4 gap-8">
          <h2 className="w-full text-black font-semibold text-center text-xl">
            {userInfo.status
              ? 'Congartulation Booking Confirmed'
              : 'Booking Pending'}
          </h2>
          <div className={` w-full h-full flex items-center justify-center`}>
            {userInfo.status && (
              <img
                src="/images/nitify-success.svg"
                className="w-[50%]"
                alt="success-icon"
              />
            )}
            {!userInfo.status && (
              <img
                src="/images/pending.svg"
                className="w-[50%] book-status"
                alt="pending-icon"
              />
            )}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default TenantStatus;
