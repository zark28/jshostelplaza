import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const SinginLayout = ({ children, pageTitle, layoutHeight = 'h-[100vh]' }) => {
  document.title = `J's Hostel Plaza - ${pageTitle && pageTitle}`;
  const navigate = useNavigate();
  const location = useLocation();
  const hasPreviousState = location.key !== 'default';

  const handleBack = () => {
    if (hasPreviousState) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };
  return (
    <div
      className={`w-full ${layoutHeight} static  bg-no-repeat bg-left-top flex flex-col items-center justify-start`}
      style={{ backgroundImage: `url(images/form-design.svg)` }}
    >
      <div className="w-full mt-[100px]  md:mt-[50px] flex absolute  right-2  items-center justify-end">
        <button
          onClick={handleBack}
          className="flex font-semibold items-center justify-center gap-[5px] text-light-purple cursor-pointer hover:scale-95 transform"
        >
          <img
            src="/images/ep_back.svg"
            alt="arrow-back"
            className="w-[15px] "
          />
          {hasPreviousState ? 'Back' : 'Home'}
        </button>
      </div>
      <div className="container  w-full  flex flex-col items-center justify-start  ">
        {children}
      </div>
    </div>
  );
};

export default SinginLayout;
