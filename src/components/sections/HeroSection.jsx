import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../cards/Carousel';

import './HeroSection.css';
const HeroSection = ({ heading, subHeading, otherText, btnText, heroImg }) => {
  const slides = [
    {
      legend: ' ',
    },
    {
      legend: '',
    },
    {
      legend: '',
    },
    {
      legend: '',
    },
  ];

  return (
    <section
      className={` ${
        heroImg && 'herobg'
      }  h-[100vh] w-full  text-white relative  mt-0 flex items-center justify-center mb-20  md:text-black`}
    >
      {!heroImg && (
        <Carousel
          slides={slides}
          carouselimg="hero-slide"
          mainStyles="h-full hidden md:flex w-full "
          slideStyle="h-full w-full"
          sliderStyle="h-full w-full bg-cover"
          legendStyle="off"
        />
      )}
      {/* <div className="hero-section-1 w-full h-[90vh] text-[18px] xl:text-lg flex flex-col text-center md:items-start items-center  md:text-left justify-evenly md:min-w-[400px] lg:max-w-[800px] px-[5%] text-white"> */}
      <div
        className={` z-20  hero-section-1 absolute text-white text-center ${
          !heroImg && ' bg-[rgba(56,56,56,.5)]'
        } py-2 flex flex-col justify-center md:items-center px-[5%] lg:w-fit  lg:items-center `}
      >
        <h1 className=" font-extrabold text-center text-2xl lg:text-[30px] mb-8 md:mb-6">
          {heading}
        </h1>
        {/* <p className="lg:w-[80%] w-full font-medium  md:text-[20px] text-left xl:text-[30px]  "> */}
        <p className=" w-full md:w-[60%] text-xl mb-8 md:mb-6 text-white ">
          {subHeading}
        </p>
        {/* <p className="lg:w-[80%] -mt-5 w-full text-left"> */}
        <p className="text-[1rem] mb-16 text-white  md:mb-10 font-medium text-lg">
          {otherText}
        </p>
        {btnText && (
          <Link to="/book">
            <button className="py-3 px-10 font-semibold shadow-xl md:shadow-none  w-fit m-auto rounded-[40px] md:rounded-[32px]  text-white text-lg  hover:bg-deep-purple transition-all duration-75 bg-light-purple">
              {btnText}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
