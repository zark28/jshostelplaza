import React from 'react';

const cardDetails = [
  {
    number: 1,
    heading: 'Booking Form',
    descriptionText:
      'Use our booking form and Our customer services team will get back to you ',
  },
  {
    number: 2,
    heading: 'Email or Phone',
    descriptionText:
      'You can contact us directly by Mail or Phone provided on the contact section',
  },
  {
    number: 3,
    heading: 'Front Desk',
    descriptionText:
      'Walk into our front desk office at UDS Dungu campus,Tamale for rent or enquries',
  },
];

const GettingStartedSection = () => {
  return (
    <div className="container mb-20 py-8 flex flex-col justify-center lg:flex-row">
      <div className="flex flex-col ">
        <h1 className="text-black text-2xl md:text-3xl font-extrabold text-center">
          Book A Room In 3 ways!
        </h1>
        {cardDetails.map((detail, index) => (
          <div key={index} className="mb-5 py-6 px-6">
            <div className="steps-card  py-4">
              <div className=" flex grid-cols-2 gap-3 items-center mb-2">
                <span className="text-light-purple text-4xl font-extrabold">
                  {detail.number}
                </span>
                <h2 className="text-black font-bold text-lg">
                  {detail.heading}
                </h2>
              </div>
              <p>{detail.descriptionText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GettingStartedSection;
