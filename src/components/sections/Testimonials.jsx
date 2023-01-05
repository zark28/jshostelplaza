import React from 'react';
import { DynamicStar } from 'react-dynamic-star';

import customerPic1 from '../../assets/images/Rectangle-1.png';
import customerPic2 from '../../assets/images/Rectangle.png';
import customerPic3 from '../../assets/images/Rectangle-2.png';

const testimonialDetails = [
  {
    id: 1,
    name: 'Cooper, Phamarcist',
    imagePath: customerPic1,
    rating: 4.2,
    comment:
      "It was only recently that I attend our annual pharmacutical conference held in tamale this time at the Dungu UDS campus. My accormodation was sorted by J's Hostel Plaza and i must say i wound not mind recommending to others",
  },
  {
    id: 2,
    name: 'Tatiana, Student',
    imagePath: customerPic2,
    rating: 5.0,
    comment:
      "I find J's Hostel plaza super convenient. What especially draws me is the fact that do not compromise on security of tenants. that surely backs my confidence in the Hostel.",
  },
  {
    id: 3,
    name: 'Rachid, Enterprenuer',
    imagePath: customerPic3,
    rating: 4.5,
    comment:
      "We are a small company producing Cannabidiol (CBD) nature of our product still meets with some scepticism here. We recently needed to explor other makets in Tamale. J's Hostel plaza realy did us good. Solved all our accomordation needs.Good stuff J's Hostel plaza!",
  },
];

const Testimonials = () => {
  return (
    // Testimonials Section
    <div className="bg-light-purple w-full font-Raleway mb-20 text-black py-10 ">
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <img
          className="w-[50%] sm:w-[40%] mx-auto"
          src="/images/testimonials.svg"
          alt="testimonials"
        />
        <h1 className="mt-14 mb-5 text-4xl font-extrabold text-center">
          Client Testimonials
        </h1>
      </div>
      <div className=" py-10">
        <p className="text-center text-white text-xl">
          We're succeeding to deliver what we promised.
        </p>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg">
          {testimonialDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white md:h-[270px] mt-4 p-4 flex flex-col rounded-lg shadow-md lg:mt-12 my-auto"
            >
              <div className="flex flex-row items-start mr-auto">
                <img
                  className="w-16 h-16 rounded-full"
                  src={item.imagePath}
                  alt="customer 1"
                />
                <div className="mt-1 mx-5">
                  <div className="text-black">{item.name}</div>
                  <div className="text-black">
                    <div className="flex flex-auto">
                      <h3 className="mb-2 text-xl font-bold mr-3">
                        {item.rating.toFixed(1)}
                      </h3>
                      <div className="flex flex-wrap">
                        <DynamicStar
                          width="14"
                          height="14"
                          rating={item.rating}
                          outlined
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-2">
                <p className="text-xs text-black">{item.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
