import React from 'react';
import FindBuyerSellerSection from '../components/sections/FindBuyerSellerSection';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import Testimonials from '../components/sections/Testimonials';
import Features from '../components/Features';
import GettingStartedSection from '../components/sections/GettingStartedSection';
import PageLayout from '../layout/PageLayout';
import Rooms from '../components/sections/Rooms';
import Shops from '../components/sections/Shops';

const HomePage = () => {
  const heroInfo = {
    hero: 'homepage',
    h1: 'COMFORT, SAFETY AND EXCELLENCE OUR PRIORITY',
    p1: "J's Hostel Plaza is an ultramodern fully furnished hostel facility located in Tamale Northern Region, Ghana. Our rooms are comfortable and self-contained.",
    p2: '',
    btn: 'Rent Now!',
  };

  return (
    <PageLayout pageTitle="Home">
      <HeroSection
        heroImg={null}
        heading={heroInfo.h1}
        subHeading={heroInfo.p1}
        otherText={heroInfo.p2}
        btnText={heroInfo.btn}
      />

      <FindBuyerSellerSection />
   
      <Rooms />
      <GettingStartedSection />
      <Shops />
      <StatsSection />
      <Testimonials />
    
      <Features />
    </PageLayout>
  );
};
export default HomePage;
