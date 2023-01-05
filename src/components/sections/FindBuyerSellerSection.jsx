import React from 'react';

import BuyersSellersCard from '../cards/BuyersSellersCard';
const FindBuyerSellerSection = () => {
  const cardInfo = [
    {
      cardImg: 'clean.svg',
      cardTitle: 'Housekeeping',
      cardText:
        'Ours is not just cleanliness. It includes keeping living areas neat and orderly, maintaining halls and floors and removing of waste materials and other fire hazards from living areas.',
    },
    {
      cardImg: 'room-security.svg',
      cardTitle: 'Room Security',
      cardText:
        '  High quality door Locks and availability of external CCTV cameras ensuring the saftey and security of Hostel occupants and workers',
    },
  ];
  return (
    <section className="containe mb-20 py-[72px] flex flex-col  items-center justify-center gap-16">
      {cardInfo.map((info, index) => (
        <BuyersSellersCard
          key={index}
          id={index}
          img={info.cardImg}
          title={info.cardTitle}
          detailText={info.cardText}
          btnText="read more"
        />
      ))}
    </section>
  );
};
export default FindBuyerSellerSection;
