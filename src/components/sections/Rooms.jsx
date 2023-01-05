import React from 'react';
import Carousel from '../cards/Carousel';
import { SiVbulletin } from 'react-icons/si';
import { roomAtributes } from '../../data/roomData';
import { Link } from 'react-router-dom';
const Rooms = () => {
  return (
    <div className="w-full px-8 mb-20 ">
      <h2 className="text-2xl mb-8 md:text-3xl font-extrabold text-center ">
        Rooms
      </h2>
      <div className="w-full  h-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center ">
        <div className="w-full shadow-md shadow-light-black lg:w-[80%] h-fit flex flex-col gap-4 items-center  p-2 ">
          <h3 className="mt-1.5 text-center text-lg md:text-xl font-bold text-black">
            Standard Rooms
          </h3>
          <div className="w-full h-[40vh]">
            <Carousel
              slides={roomAtributes.standard}
              carouselimg="standard"
              mainStyles="w-full relative"
              slideStyle="w-full h-[40vh]"
              sliderStyle="h-full w-full bg-contain"
              legendStyle="text-light-purple"
              slideTime={1.8}
            />
          </div>
          <ul className=" w-full h-full  grid grid-cols-1 md:grid-cols-2 pt-2 gap-4">
            {roomAtributes.standard.map((item, i) => (
              <li
                key={i}
                className="flex justify-start text-[.8rem] items-center gap-2 px-2 font-semibold "
              >
                <SiVbulletin className=" w-4 text-light-purple" />
                {item.text && item.text}
              </li>
            ))}
          </ul>
          <Link className="w-full flex items-center justify-center" to="/book">
            <button className=" w-fit  px-10 font-semibold py-3 rounded-[40px] md:rounded-[32px]  text-white text-lg  hover:bg-deep-purple transition-all duration-75 bg-light-purple">
              Book Now!
            </button>
          </Link>
        </div>
        <div className="w-full shadow-md shadow-light-black md:w-[80%] h-fit flex flex-col gap-4 items-center  p-2 ">
          <h3 className="mt-1.5 text-center text-lg md:text-xl font-bold text-black">
            Executive Rooms
          </h3>
          <div className="w-full h-[40vh]">
            <Carousel
              slides={roomAtributes.luxury}
              carouselimg="luxury"
              mainStyles="w-full relative"
              slideStyle="w-full h-[40vh]"
              sliderStyle="h-full w-full bg-contain"
              legendStyle="text-light-purple"
            />
          </div>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 pt-2 gap-4">
            {roomAtributes.luxury.map((item, i) => (
              <li
                key={i}
                className={` ${
                  !item.text ? 'hidden' : 'flex'
                } justify-start items-center text-[.8rem] gap-2 px-2 font-semibold`}
              >
                <SiVbulletin className=" w-4 text-light-purple" />
                {item.text}
              </li>
            ))}
          </ul>
          <Link className="w-full flex items-center justify-center" to="/book">
            <button className=" w-fit  px-10 font-semibold py-3 rounded-[40px] md:rounded-[32px]  text-white text-lg  hover:bg-deep-purple transition-all duration-75 bg-light-purple">
              Book Now!
            </button>
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default Rooms;
