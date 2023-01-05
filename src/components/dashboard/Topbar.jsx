import React from 'react';

const Topbar = ({ userName }) => {
  // set date
  const currentDay = new Date();
  let day = currentDay.getDate();
  let month = currentDay.getMonth() + 1;
  let year = currentDay.getFullYear();
  let separator = '-';
  const date = `${day}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;

  return (
    <div className="w-full absolute top-0 flex items-center justify-between h-[10vh] px-4 ">
      <div
        style={{
          backgroundImage: `url(/images/logonew.svg)`,
        }}
        className=" w-[18vh] md:w-[20vh] z-50 transform scale-[1.1]  h-full bg-center bg-contain bg-no-repeat"
      ></div>
      {/* <h1 className="text-xl font-semibold">Dashboard</h1> */}
      <div className="flex items-center justify-center gap-4 ">
        <span className="date flex">{date}</span>
        <span className="relative flex flex-col  bg-cover bg-center items-center cursor-pointer  ">
          <img
            className="userImage  h-8 w-8 rounded-full"
            src="/images/user-avatar.png"
            alt="user"
          />
          <span className="flex  text-sm">{userName}</span>
        </span>
      </div>
    </div>
  );
};

export default Topbar;
