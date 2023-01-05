import React from 'react';
import MissionCard from '../cards/MissionCard';

const Mission = () => {
  const mission = [
    {
      img: 'security',
      text: 'To provide comfortable accommodation and a serene atmostphere that facilitates accademic engagements .',
    },
    {
      img: 'money',
      text: 'To provide an atmosphere that is free of bias and conflict of interests between tenants and hostel management.',
    },
    {
      img: 'arrow',
      text: 'To build a sustainable  ecosystem where and all in one hostel facility serves the variying needs of tenants .',
    },
    {
      img: 'bubble',
      text: ' To make Js Hostel Plaza become an integral component in the Hostel facility ecosystem upon which students, professionals and individuals rely to make the best accomodation choice',
    },
  ];
  return (
    <div className="container w-full flex items-center justify-between gap-3 py-8">
      <div className="w-full h-full text-black flex flex-col items-center gap-5 justify-between md:flex-row">
        <span className="w-full h-full text-black flex flex-col items-start gap-5">
          <h2 className=" block w-full md:w-fit text-2xl md:text-3xl font-extrabold text-center mb-3 ">
            What we aim to achieve
          </h2>
          <ul className=" w-full md:w-[60] md:mt-5 flex flex-col justify-center gap-2">
            {mission.map((item, index) => (
              <MissionCard
                key={index}
                iconImg={`/images/${item.img}.svg`}
                missionText={item.text}
              />
            ))}
          </ul>
        </span>
        <div className="hidden w-full  h-full md:flex flex-col items-center justify-start">
          <img
            src="/images/rocket-bro.svg"
            alt="our mission"
            className="object-contain md:w-full  lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
