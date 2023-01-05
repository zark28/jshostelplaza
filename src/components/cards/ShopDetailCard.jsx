import React from 'react';

const ShopDetailCard = ({ children, title, styles }) => {
  return (
    <details className={`our-detail ${styles}`}>
      <summary className="text-light-purple cursor-pointer ">{title}</summary>
      {children}
    </details>
  );
};

export default ShopDetailCard;
