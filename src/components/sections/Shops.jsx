import React, { useState } from 'react';
import shopData from '../../data/shopData';
import Shop from '../Shop';

const Shops = () => {
  const [currentShop, setCurrentShop] = useState(0);

  const handleShopNum = (num) => {
    setCurrentShop(num);
  };

  const data = ['resturant', 'salon', 'mart'];
  let activeShop = data[currentShop];
  let newData = shopData[activeShop];

  return (
    <div className="w-full mb-20 flex flex-col items-center justify-center ">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center ">
        Plaza Shops
      </h2>
      <nav className="flex w-full items-center justify-center p-4 text-light-black font-extrabold text-base gap-8">
        <button
          className={` ${
            currentShop === 0 && 'text-black shadow-md shadow-light-black'
          } hover:shadow-light-purple shadow-md  p-2 duration-75 transition-all`}
          onClick={() => handleShopNum(0)}
        >
          Resturant
        </button>
        <button
          className={` ${
            currentShop === 1 && 'text-black shadow-md shadow-light-black'
          } hover:shadow-light-purple  shadow-md   p-2 duration-75 transition-all `}
          onClick={() => handleShopNum(1)}
        >
          {' '}
          Salon
        </button>
        <button
          className={` ${
            currentShop === 2 && 'text-black shadow-md shadow-light-black'
          } hover:shadow-light-purple shadow-md p-2 duration-75 transition-all`}
          onClick={() => handleShopNum(2)}
        >
          Mini Mart
        </button>
      </nav>
      <div className="w-full">{<Shop data={newData} />}</div>
    </div>
  );
};

export default Shops;
