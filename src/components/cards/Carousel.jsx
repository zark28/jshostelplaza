import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import './Carousel.css';
const Carousel = ({
  slides,
  carouselimg,
  mainStyles,
  slideStyle,
  legendStyle,
  sliderStyle,
  slideTime = 2,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  const autoPlaySlides = useRef();

  useEffect(() => {
    autoPlaySlides.current = nextSlide;
  });

  useEffect(() => {
    const playSlideShow = () => {
      autoPlaySlides.current();
    };
    const interval = setInterval(playSlideShow, slideTime * 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className={`w-full items-center justify-center ${mainStyles}`}>
      <span
        className="absolute top-[50%] w-[3rem] bg-white z-40 left-1 cursor-pointer "
        onClick={prevSlide}
      >
        <AiOutlineCaretLeft className="w-full text-[3rem] text-light-black hover:text-light-purple" />
      </span>
      <span
        className="absolute top-[50%] w-[3rem] bg-white z-40 right-1 cursor-pointer"
        onClick={nextSlide}
      >
        <AiOutlineCaretRight className="w-full text-[3rem] text-light-black hover:text-light-purple " />
      </span>
      <div
        className={`w-full relative ${slideStyle} flex flex-col items-center justify-center overflow-hidden`}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider  ${sliderStyle}  ${
              index === currentSlide
                ? 'active-slide'
                : ' flex items-center justify-center'
            }`}
            style={{
              backgroundImage: `url(/images/${carouselimg}${index + 1}.jpg)`,
            }}
          >
            {/* <img
              src={`/images/${carouselimg}${index + 1}.jpg`}
              alt={carouselimg}
            /> */}
            <p className={`legend ${legendStyle}`}>{slide.legend}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
