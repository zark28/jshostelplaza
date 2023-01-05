import React from 'react';
const MissionCard = ({ iconImg, missionText }) => {
  return (
    <div className="w-full h-full md:w-[472px] flex items-start justify-center gap-3 py-2">
      <span className={`h-full w-[50px] flex  object-contain `}>
        <img src={iconImg} alt="arrow" className="h-full w-full" />
      </span>

      <p className="flex-1 text-black">{missionText}</p>
    </div>
  );
};

export default MissionCard;
