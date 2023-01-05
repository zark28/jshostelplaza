import React from 'react';
import BenefitsCard from '../cards/BenefitsCard';

import {
  GiPowerGenerator,
  GiButtonFinger,
  GiWaterTower,
  GiElectricalResistance,
  GiWashingMachine,
  GiCctvCamera,
  GiStreetLight,
} from 'react-icons/gi';
import { SiSpringsecurity } from 'react-icons/si';
import { FaFireExtinguisher } from 'react-icons/fa';
import { ImMeter2 } from 'react-icons/im';
const cardDetails = [
  {
    imagePath: <GiPowerGenerator className="amenity-icon" />,
    heading: 'Standby Generator',
    descriptionText:
      'Maintain your schedules, even when main source of power is lost.',
  },
  {
    imagePath: <GiButtonFinger className="amenity-icon" />,
    heading: 'Biometric Access Control',
    descriptionText:
      'Restricting uninvited guests access to in-house faciliites and rooms.',
  },
  {
    imagePath: <SiSpringsecurity className="amenity-icon" />,
    heading: 'Security ',
    descriptionText:
      'Saftey is not by accident. It is a concious effort hence our high security door locks and security post for the saftey of tenats.',
  },
  {
    imagePath: <FaFireExtinguisher className="amenity-icon" />,
    heading: 'Fire Extinquisher',
    descriptionText:
      'We adhere to strict protocols to elimnate any chance of fire out breaks.',
  },
  {
    imagePath: <GiWaterTower className="amenity-icon" />,
    heading: 'Water Reservoir',
    descriptionText:
      'Over 100,000 gallons of undergroung water storage with additional Water tank storage',
  },
  {
    imagePath: <GiElectricalResistance className="amenity-icon" />,
    heading: 'Dedicated Trasformer',
    descriptionText:
      'Dedicated elctric tranformer at the plaza reducing the risks of electrical short circuits.',
  },
  {
    imagePath: <GiWashingMachine className="amenity-icon" />,
    heading: 'Washing & Drying lines',
    descriptionText:
      'We provide a spacious washing area and drying lines where you can wash and dry clothes respectively.',
  },
  {
    imagePath: <ImMeter2 className="amenity-icon" />,
    heading: ' One Prepaid-meter per Room',
    descriptionText:
      'Evrey room is procided with a dedicated pre-paid electric meter.',
  },

  {
    imagePath: <GiCctvCamera />,
    heading: ' External CCTV Cameras',
    descriptionText:
      ' CCTV cameras are provided around the hostel and hostel hall ways',
  },
  {
    imagePath: <GiStreetLight className="amenity-icon" />,
    heading: 'Street Lights',
    descriptionText:
      'For effective night security, street light light up hostel surrondings.',
  },
];

const BenefitsSection = () => {
  return (
    <div className="w-full flex text-black flex-col justify-center items-center  py-8  ">
      <div className="flex justify-center items-center px-4">
        <div className="benefits-heading hidden lg:flex justify-center items-center bg-grey bg-opacity-10 bg w-[95vw] h-[25vh] rounded-full">
          <img
            className="hidden w-[20%] lg:flex"
            src="/images/amenities.svg"
            alt="amenities"
          />
          <h2 className="text-2xl md:text-3xl font-extrabold text-center bg-transparent">
            Our Amenities
          </h2>
        </div>
        <h2 className="font-bold text-[24px] text-center lg:hidden ">
          Our Amenities
          <br />
          “True hospitality consists of giving the best of yourself to your
          guests.”
        </h2>
      </div>
      <div className="benefits-section gap-5 mt-[5rem]   p-2 md:pt-5 md:grid md:grid-cols-2 content-between ">
        {cardDetails.map((detail, index) => (
          <BenefitsCard
            key={index}
            heading={detail.heading}
            descriptionText={detail.descriptionText}
          >
            {detail.imagePath}
          </BenefitsCard>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
