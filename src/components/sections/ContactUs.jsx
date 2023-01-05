import React from 'react';

// import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
const ContactUs = () => {
  return (
    <div className="font-Raleway py-5 ">
      <div className="mt-10 mb-3 lg:mt-32">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          {/* <!-- Image --> */}
          <div className="flex flex-1 flex-col items-center mb-10 lg:mb-0">
            <img
              className="w-4/6 h-4/6 transform -scale-x-100"
              src="/images/contact.svg"
              alt="contact"
            />
            <h1 className="text-2xl text-center">We'd love to hear from you</h1>
            <p className="my-4 text-center">
              Let's get talking about your needs.
            </p>
          </div>
          {/* <!-- Contact --> */}
          <div className="flex flex-1 flex-col items-start">
            <label htmlFor="full_name" className="text-xl text-[black]">
              Email Us
            </label>
            <input
              id="full_name"
              type="text"
              name="name"
              readOnly={true}
              value="support@jshostelplaza.org"
              className="border-b-2 border-[black] focus:outline-none lg:w-5/6 p-1 text-gray-900"
            />

            <label htmlFor="comments" className="mt-2 text-xl text-[black]">
              Call Us
            </label>
            <textarea
              id="comments"
              readOnly={true}
              value="0559511800 / 0261115788 / 0243303676"
              className="border-b-2 border-[black] focus:outline-none lg:w-5/6 p-1 text-gray-900"
            />
            {/* <div className="mt-2 lg:w-2/6 ml-auto">
              <button type="button" className="text-xl flex uppercase">
                Send{' '}
                <ArrowNarrowRightIcon
                  className="w-5 h-7 text-light-purple"
                  fill="currentColor"
                />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
