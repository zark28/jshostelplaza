import React from 'react';

const InputCard = ({
  nameId,
  label,
  labelStyles,
  cardStyles,
  onClick,
  children,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-full text-light-black flex ${cardStyles} items-start justify-center md:gap-[12px] gap-[6px]`}
    >
      <label
        className={`${labelStyles} cursor-pointer md:text-[20px] text-[14px]`}
        htmlFor={nameId}
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputCard;
