import React from 'react';
import ContactUs from '../components/sections/ContactUs';
import Features from '../components/Features';
import PageLayout from '../layout/PageLayout';
const ContactPage = () => {
  return (
    <PageLayout pageTitle="Contact">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-14 mt-14 lg:mt-28">
        <div className="flex flex-1 flex-col lg:items-start">
          <h2 className="text-2xl font-bold uppercase mb-5">
            Your One-Stop Hostel Facility
          </h2>
          <p className="font-Raleway text-sm lg:text-lg">
            Send your Comments, Booking requests and for other enquiries contact
            us vai email or phone
          </p>
        </div>
        <div className="flex justify-center flex-1 mb-3 md:mb-16 lg:mb-0">
          <img
            className="w-3/4 h-3/4 mx-auto md:w-full md:h-full"
            src="/images/contactus.svg"
            alt="contact pic"
          />
        </div>
      </div>
      <ContactUs />
      <div className="mt-14 mb-8 sm:w-3/4 lg:w-5/12 mx-auto px-2">
        {/* <h3 className="font-Raleway text-center text-black">Map</h3> */}
        <h1 className="mt-5 text-3xl lg:text-4xl font-bold text-center text-black uppercase">
          Locate Us
        </h1>
        <p className="font-Raleway text-center text-lg lg:text-xl text-black mt-4">
          UDS Dungu Campus, Adjacent The Football Pitch, Tamale
        </p>
      </div>
      <div className="w-full h-96 lg:h-[500px]">
        <iframe
          className="w-full h-full"
          title="gmaps"
          src="https://maps.google.com/maps?q=J's%20Royal%20Hostel%20uds%20dungu,%20Tamale&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen={true}
        ></iframe>
      </div>
      <Features />
    </PageLayout>
  );
};

export default ContactPage;
