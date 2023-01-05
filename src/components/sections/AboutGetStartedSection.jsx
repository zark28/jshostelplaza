import React from 'react';
import { Link } from 'react-router-dom';

const AboutGetStartedSection = () => {
  return (
    <div className=" w-full min-h-[354px] flex items-center justify-between gap-3 py-8 px-4 text-center md:text-left bg-light-purple">
      <div className="w-full h-full text-white flex flex-col items-center gap-5 justify-between ">
        <h2 className="w-fit text-2xl md:text-3xl font-extrabold text-center mb-3  ">
          WHY CHOOSE J'S HOSTEL PLAZA
        </h2>
        <p className="w-full lg:w-[70%] max-w-[1200px] text-left">
          We take into consideration student needs and possible daily routins so
          as to make provision for accomodation and accomodation facilities to
          suite them. With us, you can will find an seren enabling envirument
          for all campus base activities. Get to enjoy so much knowing you are
          safe and secure.
        </p>
        <Link to="/book">
          <button className="py-5 md:py-3  text-lg font-semibold px-10 rounded-[32px] mt-2 bg-white hover:text-deep-purple transition-all duration-75 text-light-purple">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutGetStartedSection;
