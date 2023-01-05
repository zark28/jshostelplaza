import React from 'react';

const Features = () => {
  return (
    <div className="py-20 sm:my-10">
      <div className="font-Raleway container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-screen-lg">
        <div className="flex flex-col">
          <div className="mt-7 flex flex-row">
            <img className="w-14 h-14" src="/images/24hr.svg" alt="icon" />
            <div className="px-2">
              <h3 className="mb-2 text-md font-bold">24/7 Customer Support</h3>
              <p className="mb-2 text-md">
                We are available 24/7 to attend to you. Our heroic support is
                here.
              </p>
              <a href="/" className="mt-5 text-sm font-bold text-light-purple">
                Chat now
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-7 flex flex-row">
            <img className="w-14 h-14" src="/images/faq.svg" alt="icon" />
            <div className="px-2">
              <h3 className="mb-2 text-md font-bold">FAQs</h3>
              <p className="mb-2 text-md">
                Browse through our Frequently Asked Questions for some insight.
              </p>
              <a href="/" className="mt-5 text-sm font-bold text-light-purple">
                View now
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-7 flex flex-row">
            <img className="w-14 h-14" src="/images/blog.svg" alt="icon" />
            <div className="px-2">
              <h3 className="mb-2 text-md font-bold">Blog</h3>
              <p className="mb-2 text-md">
                Check out latest webinars, events, stories and highlights.
              </p>
              <a href="/" className="mt-5 text-sm font-bold text-light-purple">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
