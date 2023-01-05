import React from 'react';
import { MdFoodBank } from 'react-icons/md';
import { GiShoppingCart } from 'react-icons/gi';
import { TbCut } from 'react-icons/tb';
import Carousel from './cards/Carousel';
// import shopData from '../data/shopData';
import ShopDetailCard from './cards/ShopDetailCard';
import { useEffect } from 'react';

const Shop = ({ data }) => {
  let slideData = data.images;

  let icon = data.link;
  let slideImg = data.imgName;

  const handleDetailsToggle = () => {
    // detail toggle
    const ourDetails = document.querySelectorAll('.our-detail');
    // const faqSummary = document.querySelectorAll('.faq-summary');

    // Add the onclick listeners.
    ourDetails.forEach((targetDetail) => {
      targetDetail.addEventListener('click', () => {
        // Close all the faqDetails that are not targetDetail.
        ourDetails.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute('open');
          }
        });
      });
    });
  };
  useEffect(() => {
    handleDetailsToggle();
  });

  return (
    <div className="container mt-4  ">
      <div className=" w-full flex flex-col ">
        <h1 className="text-black text-2xl md:text-3xl font-extrabold py-4 px-6 ml-10 text-left">
          {data.title}
        </h1>
        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
          <div className="  flex items-center justify-center w-full ">
            <Carousel
              slides={slideData}
              carouselimg={slideImg}
              mainStyles="w-full relative"
              slideStyle="w-full h-[40vh]"
              sliderStyle="h-full w-full bg-contain"
              legendStyle="text-light-purple"
              slideTime={1.8}
            />
          </div>
          <div>
            {data.details.map((detail, index) => (
              <div key={index} className=" shadow-md px-6 ml-10">
                <div className="steps-card  py-4">
                  <div className=" flex grid-cols-2 gap-3 items-center mb-2">
                    <span className="text-light-purple text-4xl font-extrabold">
                      {icon === 'resturant' && <MdFoodBank />}
                      {icon === 'salon' && <TbCut />}
                      {icon === 'mart' && <GiShoppingCart />}
                    </span>
                    <h2 className="steps-card-heading text-black font-bold text-lg">
                      {detail.heading}
                    </h2>
                  </div>

                  <ShopDetailCard title="read more" styles="w-full ">
                    <p className="steps-card-description ">
                      {detail.descriptionText}
                    </p>
                  </ShopDetailCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Shop;
